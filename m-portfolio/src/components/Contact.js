import React from 'react';

const Contact = () => (
  <div className="contact">
    <div className="contact-content">
      <h2>Contact</h2>
      <p>For serious inquiries, fill out this form and I’ll get back to you!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
);

export default Contact;
