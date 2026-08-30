export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow">About me</span>
          <h2>
            I design and build digital products that feel simple, fast, and
            memorable.
          </h2>
          <p>
            I am a frontend developer focused on creating clean interfaces,
            thoughtful user experiences, and websites that help businesses stand
            out. I enjoy turning ideas into polished products that are
            intuitive, responsive, and aligned with the brand behind them.
          </p>
          <p>
            My work blends design thinking, development skills, and a strong
            attention to details — from layout and motion to performance and
            accessibility.
          </p>
        </div>

        <div className="about-panel">
          <div className="about-stat">
            <strong>5+</strong>
            <span>Years of experience</span>
          </div>
          <div className="about-stat">
            <strong>18</strong>
            <span>Projects delivered</span>
          </div>
          <div className="about-stat">
            <strong>100%</strong>
            <span>Client-focused work</span>
          </div>
        </div>
      </div>
    </section>
  );
}
