import Link from 'next/link';
import React, { JSX } from 'react';

export default function Home() : JSX.Element {
  return (
    <div className="container my-5">
      <div className="jumbotron p-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <h1 className="display-4">Welcome To My Website</h1>
            <p className="lead">
              This website shows some of the projects that I have completed, showcasing my experience.
              Navigate to the About Me page to learn more about me.
            </p>
            <hr className="my-4" />
            <p>
              You can click Projects to take you to a list of my past/current projects. Thank you for visiting!
            </p>
            <Link href="/projects" legacyBehavior>
              <a className="btn btn-outline-light">My Projects</a>
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src="/data/pics/2.gif"
              alt="gif of a duck quacking"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}