import React, { JSX } from 'react';

export default function Contact() : JSX.Element {
    return (
        <div className="container-fluid mt-3">
        <h1 className="text-center" style={{ fontWeight: 'bold'}}>Get in touch with me</h1>
        <div className="my-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeh0PeZt_HeJU_Lb4JZqUrBshCaw1mvg1gVeJqSxbkuceeFNQ/viewform?embedded=true"
            style={{ border: 0, width: '100%', height: '720px' }}
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    );
}