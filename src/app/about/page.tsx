import Link from 'next/link';
import React, { JSX } from 'react';

export default function About() : JSX.Element {
  return (
    <div>
      <div className="container mt-3">
        <h1 className="text-center" style={{ fontWeight: 'bold'}}>
          Welcome to My Portfolio
        </h1>
      </div>
      <div className="container">
        <div className="col-lg-6 px-0">
          <p className="lead my-3" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'antiquewhite'}}>
            I am an aspiring IT Graduate Seeking Hands-On Experience in the Field
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
            <h2
              className="featurette-heading fw-normal lh-1"
              style={{ fontStyle: 'italic'}}
            >
              A little bit about me
            </h2>
            <p className="lead">
              I am originally from Pakistan but I immigrated to Canada in 2013 with my family.
            </p>
            <p className="lead">
              I graduated in 2020 with a Bachelors in Psychology with Honours from York University.
              I am currently pursuing an Advanced Diploma in Computer Programming and Analysis from Durham College and
              have completed all six semesters. This program has allowed me to hone my
              skills in different programming languages. My academic achievements, including being
              on the Honour Roll for the first five semesters, reflect a strong determination to master
              programming concepts and deliver high-quality work.
            </p>
            <p className="lead">
              Apart from my technical skills, my experience working as a customer service associate
              and a supervisor has allowed me to work well in teams. These positions have helped me
              understand my strengths and weaknesses when it comes to collaborative work, honed my
              problem-solving skills, and sharpened my attention to detail—all essential qualities in
              software development.
            </p>
            <p className="lead">
              I am confident that the combination of technical skills, teamwork abilities, and
              dedication to continuous learning make me a strong candidate for most Junior Developer
              positions. I look forward to working in a collaborative environment where I can apply
              my skills and continue growing as a programmer. Check out my past and current projects!
            </p>
            <p className="lead">
              Please contact me here.
            </p>
            <Link href="/contact" className="btn btn-outline-light">
                Contact Me
            </Link>
          </div>
          <div className="col-md-5">
            <img
              src="/data/pics/61D3861E-CDA1-487E-9EE9-476C81F496F1_1_105_c.jpeg"
              alt="Featurette Image"
              className="featurette-image img-fluid mx-auto mb-5"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}