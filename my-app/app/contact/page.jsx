"use client";
import "./contact.css";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `New Contact Message:\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    const encodedMsg = encodeURIComponent(msg);
    const phone = "+923467785512"; // Replace with your own WhatsApp number
    window.open(`https://wa.me/${phone}?text=${encodedMsg}`, "_blank");
  };

  return (
    <div className="contact-container">
      <h1 className="main-heading">📞 Get in Touch</h1>

      {/* Location Map */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13605.07993252792!2d74.3577276!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483d47ed5ff%3A0xabc7846b48b5c9e!2sLahore!5e0!3m2!1sen!2s!4v1612412914995!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <p className="address-info">📍 Lahore, Punjab, Pakistan</p>
      </section>

      {/* Form */}
      <section className="form-section">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send to WhatsApp</button>
        </form>
      </section>

      {/* Quick Contact */}
      <section className="quick-contact">
        <h2>Quick Contact</h2>
        <div className="contact-links">
          <a href="tel:+923001234567">📞 Call Now</a>
          <a href="mailto:hello@example.com">📧 Email Us</a>
          <a href="https://wa.me/923467785512" target="_blank">
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="why-contact">
        <h2>Why Contact Us?</h2>
        <p>
          Whether you have a question, want to collaborate, or just want to say
          hello — we’d love to hear from you. We respond within 24 hours!
        </p>
      </section>
    </div>
  );
}
