export default function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-row">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
      </div>

      <label>
        Subject
        <input type="text" name="subject" placeholder="Project inquiry" />
      </label>

      <label>
        Message
        <textarea
          name="message"
          rows={6}
          placeholder="Tell me about your project..."
        />
      </label>

      <button type="submit" className="primary-button">
        Send message
      </button>
    </form>
  );
}
