"use client";

import React from "react";
import "../styles/contact.css";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message Sent!");
    e.currentTarget.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p><strong>Phone:</strong> +123156520735</p>
        <p><strong>Email:</strong> <a href="mailto:jawaidali0735@gmail.com">jawaidali0735@gmail.com</a></p>
        <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
      </div>
    </section>
  );
};

export default Contact;
