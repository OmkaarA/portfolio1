import React from 'react';

export default function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <form className="contact-form" action="mailto:your.email@example.com" method="POST" encType="text/plain">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}
