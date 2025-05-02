import React, {JSX} from 'react';

export default function Resume() : JSX.Element {
    return (
        <div className='container my-5'>
            <h1 className='text-center mb-4'>Resume</h1>
            <div className='row'>
                <div className='col-12'>
                    <iframe
                        src='/data/docs/Narmeen_Resume.pdf'
                        style={{ width: '100%', height: '800px', border: 'none' }}
                        title='Resume'
                        >
                    </iframe>
                </div>
            </div>
        </div>
    );
}