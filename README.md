# Seyi Israel Music Ltd website (Next.js)

## Run it locally
You need Node.js 20 or newer (https://nodejs.org).

```bash
npm install      # first time only
npm run dev      # open http://localhost:3000
```

`npm run build` makes a production build. Deploy by importing this folder into Vercel or Netlify.

## Page
A single landing page at `/`, built from the company profile in `copy.md`:
Hero, Who We Are, What We Do (5 areas), Vision, Our Mission, Our Values, Governance, Work With Us (contact form), Footer.
The layout and style follow the Echoa Webflow template (Inter Tight, black/white, one accent colour,
oversized display type, live city clock in the nav, "Work With Us" marquee card).

Only the public company-profile content is used. The registration pages in the PDF (IN01, Articles,
Memorandum, PSC, the director's date of birth/nationality, share details) are deliberately left off the site.

## Where things live
```
app/
  layout.tsx        Site shell: metadata, font (Inter Tight), nav, footer
  page.tsx          Home page: lists the sections in order
  globals.css       All styling. Brand colours/fonts are the tokens at the top (:root)
  icon.svg          Favicon (placeholder mark)
  api/contact/      Contact form endpoint (emails the message via Resend)
components/         Hero, About, Services, Vision, Mission, Values, Governance, Contact
                    Shared: Nav, Clock, Footer, Logo, Label, Photo, ContactForm, RevealObserver
lib/                contact.ts (form validation), images.ts (photo auto-swap)
content/site.ts     ALL the copy and links. Edit text here, not in the components
copy.md             The client's copy as supplied
```

## Still to do before launch (search the code for `TODO`)
- **Logo:** not supplied. `components/Logo.tsx` and `app/icon.svg` are a placeholder waveform mark + wordmark.
- **Brand colour:** gold accent (`--accent` #E8A93A) chosen to suit a worship/gospel brand. Confirm with the client.
- **Email & phone:** empty in `content/site.ts` (`site.email`, `site.phone`); they appear automatically once filled.
- **Social/streaming links:** `site.socials` in `content/site.ts`. The footer shows a placeholder until at least one is set.
- **Contact form:** set the Resend variables below.
- **Open Graph image:** add `public/og.png` (1200×630) in `app/layout.tsx`.
- Not in the copy, so not on the page: releases/streaming player, upcoming events, testimonials. Add them when the client supplies them.

## Contact form — turn on email delivery
The form posts to `/api/contact`, which sends through Resend (https://resend.com), the same setup as the
other client sites. Copy `.env.example` to `.env.local` for local testing and set the same variables on Vercel/Netlify:
- `RESEND_API_KEY` (required)
- `CONTACT_TO`: inbox for messages (required until `contact.form.to` is set in `content/site.ts`)
- `CONTACT_FROM`: sender on a domain verified in Resend

Until these are set, submitting shows a friendly error. Spam protection: hidden honeypot field and max 5 messages per visitor per 10 minutes.

## Photos
Drop each photo into `public/images/` with the file name below and rebuild. It replaces its placeholder automatically.

| File name | Where it shows | Size |
| --- | --- | --- |
| `hero.jpg` | Hero background (Seyi Israel leading worship) | 1920×1080 |
| `seyi-israel.jpg` | Who We Are · founder portrait | 800×1000 |
| `service-production.jpg` | What We Do 01 · Music Production & Distribution | 800×800 |
| `service-live.jpg` | What We Do 02 · Project Management & Live Events | 800×800 |
| `service-talent.jpg` | What We Do 03 · Talent Discovery & Development | 800×800 |
| `service-workshops.jpg` | What We Do 04 · Workshops & Skills Training | 800×800 |
| `service-media.jpg` | What We Do 05 · Media & Creative Engagement | 800×800 |
| `vision.jpg` | Vision band (worship night / audience) | 1920×1000 |

## Dependencies
Next.js is pinned to 16.4.6 (16.4.2, used on earlier client sites, has known advisories that `npm audit` flags).
