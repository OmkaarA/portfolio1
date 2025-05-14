import React from 'react';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;
        window.location.href = `mailto:omkaarachari1579@gmail.com?body=${encodeURIComponent(message)}`;
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input className="contact-input" type="text" name="name" placeholder="Your Name" required />
                <input className="contact-input" type="email" name="email" placeholder="Your Email" required />
                <textarea className="contact-textarea" name="message" rows="4" placeholder="Your Message" required></textarea>
                <button className="contact-button" type="submit">Send Message</button>
            </form>
        </section>
    );
}
