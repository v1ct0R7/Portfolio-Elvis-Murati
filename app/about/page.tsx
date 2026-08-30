export default function AboutPage() {
  return (
    <section className="page-shell">
      <div className="container page-intro">
        <span className="eyebrow">About</span>
        <h1>
          Building thoughtful digital experiences with clarity and purpose.
        </h1>
      </div>

      <div className="container about-story">
        <div>
          <p>
            I am a developer with a strong interest in front-end architecture,
            creative design, and user-centered product development. I enjoy
            turning complex ideas into simple, elegant, and effective
            experiences.
          </p>
          <p>
            My approach combines design sensitivity with technical execution.
            Every project I create is designed to be visually polished, easy to
            navigate, and reliable across devices and browsers.
          </p>
        </div>

        <div className="story-card">
          <h3>What I value</h3>
          <ul>
            <li>Clear communication</li>
            <li>Clean and maintainable code</li>
            <li>Thoughtful user experience</li>
            <li>Long-term product thinking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
