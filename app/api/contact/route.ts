import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contact, site } from "@/content/site";
import { interestLabel, validateContact, type ContactInput } from "@/lib/contact";

// Receives the contact form and emails it with Resend (https://resend.com):
//   1. The message to the company (CONTACT_TO). Replying goes straight to the visitor.
//   2. A short confirmation to the visitor (best effort; failure is only logged).
// Environment variables — see .env.example and README:
//   RESEND_API_KEY  required
//   CONTACT_FROM    sender on a domain verified in Resend
//   CONTACT_TO      inbox for messages (falls back to contact.form.to in content/site.ts)

export const runtime = "nodejs";

// At most 5 submissions per visitor (IP) every 10 minutes. In memory: resets on restart.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const fail = (status: number, error: string, message: string, extra: object = {}) =>
  NextResponse.json({ ok: false, error, message, ...extra }, { status });

function enquiryEmail(d: ContactInput, interest: string) {
  const rows: [string, string][] = [
    ["Name", d.name],
    ["Email", d.email],
    ["Phone", d.phone],
    ["About", interest],
  ].filter((r): r is [string, string] => Boolean(r[1]));
  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", d.message].join("\n");
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px;font-size:20px">New message from the ${escapeHtml(site.shortName)} website</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px">
        ${rows.map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#555">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`).join("")}
      </table>
      <div style="padding:16px 18px;background:#f5f5f5;border-radius:8px;white-space:pre-wrap">${escapeHtml(d.message)}</div>
      <p style="margin-top:20px;color:#555;font-size:13px">Reply to this email to answer ${escapeHtml(d.name)} directly.</p>
    </div>`;
  return { text, html };
}

function confirmationEmail(d: ContactInput) {
  const first = d.name.split(/\s+/)[0];
  const text = `Hi ${first},\n\nThank you for contacting ${site.name}. We've received your message and will get back to you soon.\n\nHere's a copy of what you sent:\n\n${d.message}\n\n${site.name}`;
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111;max-width:560px">
      <p>Hi ${escapeHtml(first)},</p>
      <p>Thank you for contacting ${escapeHtml(site.name)}. We've received your message and will get back to you soon.</p>
      <p style="color:#555">Here's a copy of what you sent:</p>
      <div style="padding:16px 18px;background:#f5f5f5;border-radius:8px;white-space:pre-wrap">${escapeHtml(d.message)}</div>
      <p style="margin-top:20px"><strong>${escapeHtml(site.name)}</strong></p>
    </div>`;
  return { text, html };
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return fail(429, "rate_limited", "You've sent several messages in a short time. Please wait a few minutes and try again.");

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return fail(400, "bad_request", "Something went wrong with that request. Please try again.");
  }

  const result = validateContact(body);
  if (!result.ok) return fail(422, "invalid_fields", "Please check the highlighted fields.", { errors: result.errors });
  const d = result.data;
  if (d.company_website) return NextResponse.json({ ok: true }); // spam trap

  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.CONTACT_TO || contact.form.to).split(",").map((s) => s.trim()).filter(Boolean);
  if (!apiKey || !to.length) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO is not set — the message was not sent.");
    return fail(503, "not_configured", contact.form.error);
  }
  const from = process.env.CONTACT_FROM || `${site.shortName} <onboarding@resend.dev>`;
  const interest = interestLabel(d.interest);
  const resend = new Resend(apiKey);

  const enquiry = enquiryEmail(d, interest);
  const { data, error } = await resend.emails.send({
    from,
    to,
    replyTo: d.email,
    subject: `Website message${interest ? ` · ${interest}` : ""} — ${d.name}`,
    text: enquiry.text,
    html: enquiry.html,
  });
  if (error) {
    console.error("[contact] Resend error:", error);
    return fail(502, "send_failed", contact.form.error);
  }

  const confirm = confirmationEmail(d);
  const ack = await resend.emails.send({
    from,
    to: [d.email],
    replyTo: to,
    subject: `We've received your message — ${site.shortName}`,
    text: confirm.text,
    html: confirm.html,
  });
  if (ack.error) console.warn("[contact] Confirmation email failed:", ack.error);

  return NextResponse.json({ ok: true, id: data?.id });
}
