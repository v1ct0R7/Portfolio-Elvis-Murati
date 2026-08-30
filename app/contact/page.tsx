import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="page-shell">
      <div className="container page-intro">
        <span className="eyebrow">Contact</span>
        <h1>Let&apos;s build something meaningful together.</h1>
      </div>

      <div className="container contact-layout">
        <div className="contact-details">
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </div>
          <div className="contact-card">
            <h3>Location</h3>
            <p>Remote / Worldwide</p>
          </div>
          <div className="contact-card">
            <h3>Social</h3>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
