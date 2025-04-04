import React, {JSX} from 'react';

export default function Footer() {
    return(
      <footer className="py-3 my-4 border-top">
      <div className="container d-flex flex-column align-items-center">
        <div className="d-flex align-items-center mb-3">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="text-light">© 2025 Narmeen Khalid</span>
        </div>
        <ul className="nav gap-3">
          <li className="nav-item btn btn-outline-secondary">
            <a className="nav-link text-light" href="/">
              Home
            </a>
          </li>
          <li className="nav-item btn btn-outline-secondary">
            <a className="nav-link text-light" href="/projects">
              Projects
            </a>
          </li>
          <li className="nav-item btn btn-outline-secondary">
            <a
              className="nav-link text-light"
              href="https://www.linkedin.com/in/narmeen-khalid-045a36111"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
    );
}