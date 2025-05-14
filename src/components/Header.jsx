import React from 'react';

export default function Header({ onViewResume }) {
    return (
        <header>
            <h1>Omkaar Achari</h1>
            <p>Frontend Developer &amp; UI Enthusiast</p>
            <nav>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio-website">Projects</a>
                <a href="#contact">Contact</a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        marginLeft: '12px',
                        textDecoration: 'none',
                        color: 'inherit',
                        padding: '0',
                        background: 'none',
                        border: 'none',
                        font: 'inherit',
                        cursor: 'pointer'
                    }}
                    className="nav-btn"
                >
                    Resume
                </a>
            </nav>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/omkaar-achari-646262233/" target="_blank" title="LinkedIn" aria-label="LinkedIn" rel="noopener noreferrer">
                    {/* LinkedIn SVG */}
                    <svg width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v5.64z" />
                    </svg>
                </a>
                <a href="https://github.com/OmkaarA" target="_blank" title="GitHub" aria-label="GitHub" rel="noopener noreferrer">
                    {/* GitHub SVG */}
                    <svg width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                    </svg>
                </a>
                <a href="mailto:omkaarachari1579@gmail.com" title="Email" aria-label="Email">
                    {/* Email SVG */}
                    <svg width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
                    </svg>
                </a>
            </div>
        </header>
    );
}
