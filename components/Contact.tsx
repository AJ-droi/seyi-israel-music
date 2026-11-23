import Label from "./Label";
import ContactForm from "./ContactForm";
import { contact, site } from "@/content/site";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-intro">
          <Label text={contact.label} />
          <h2 className="h-display reveal">{contact.title}</h2>
          <dl className="contact-details">
            <div>
              <dt>Registered office</dt>
              <dd>{site.address.map((l) => <span key={l}>{l}</span>)}</dd>
            </div>
            {site.phone && (
              <div>
                <dt>Talk to us</dt>
                <dd><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></dd>
              </div>
            )}
            {site.email && (
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              </div>
            )}
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
