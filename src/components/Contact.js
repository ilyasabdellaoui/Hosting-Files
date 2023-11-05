import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-form-container">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-form">
      <form
        id="php-email-form"
        action="https://formsubmit.co/e964557501ba28a35bf7ce70423c53c7"
        method="post"
        className="php-email-form"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control"
            id="subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="10"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="text-center">
          <button className="submit-msg" type="submit">Send Message</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Contact;
