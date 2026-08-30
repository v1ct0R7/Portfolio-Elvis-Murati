import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1>Your Name</h1>
          <h2>Frontend Developer & Digital Designer</h2>

          <p className="hero-description">
            I create modern websites and digital experiences that feel premium,
            fast, and easy to use. I help brands turn ideas into products people
            remember.
          </p>

          <div className="hero-buttons">
            <a href="/cv.pdf" target="_blank" className="primary-button">
              Download CV
            </a>
            <Link href="/contact" className="secondary-button">
              Let&apos;s talk
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:hello@example.com">Email</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile preview">
          <div className="profile-card">
            <div className="profile-badge">YN</div>
            <div className="profile-info">
              <span>Available for work</span>
              <strong>UI / Frontend Developer</strong>
            </div>
          </div>
          <div className="floating-card floating-card--one">
            <span>Design</span>
            <strong>Web Experience</strong>
          </div>
          <div className="floating-card floating-card--two">
            <span>Build</span>
            <strong>Fast & Functional</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
