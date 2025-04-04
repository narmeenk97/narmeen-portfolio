import Link from 'next/link';

export default function Header() {
    return (
      <header className="d-flex flex-wrap align-items-center py-3 mb-4 border-bottom px-3">
      <div>
        <img
          src="/data/pics/icon.png"
          alt="Profile Icon"
          className="rounded-circle me-2"
          style={{ width: '40px', height: '40px' }}
        />
        <span className="fs-4">Narmeen Khalid</span>
      </div>
      <ul className="nav nav-pills ms-auto">
        <li className="nav-item">
          <a href="/" className="nav-link text-light">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link text-light">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href="/projects" className="nav-link text-light">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="/resume" className="nav-link text-light">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link text-light">
            Contact Me
          </a>
        </li>
        <li className="nav-item btn btn-outline-secondary">
          <a
            href="https://www.linkedin.com/in/narmeen-khalid-045a36111"
            className="nav-link text-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </header>
  );
}