import Link from "next/link";

import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link href="/" className="logo">
          YN
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <Link href="/contact" className="nav-cta">
            Hire me
          </Link>
        </div>
      </nav>
    </header>
  );
}
