import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section-new">
      <h2 className="section-title-new">
        <span style={{ color: 'var(--text-main)' }}>Get In </span><span style={{ color: 'var(--text-muted)' }}>Touch</span>
      </h2>

      <div className="contact-grid-new">

        {/* Left Column: Form */}
        <div className="contact-form-side">
          <form className="contact-form-new" onSubmit={handleSubmit}>
            <div className="form-group-new">
              <input
                type="text"
                name="name"
                placeholder="Fullname"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-new">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-new">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-new">
              <textarea
                name="message"
                rows="1"
                placeholder="Enter messages"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="send-btn-new">Send a Email &rarr;</button>
          </form>
        </div>

        {/* Center Column: Image */}
        <div className="contact-image-side">
          {/* Please place your robot illustration image at this path in the public folder */}
          <img src="/images/contact1.png" alt="Contact Illustration" className="contact-illustration" />
        </div>

        {/* Right Column: Info */}
        <div className="contact-info-side">

          <a href="https://www.linkedin.com/in/srimurugan-s-00835a37a/" target="_blank" rel="noopener noreferrer" className="info-item-new" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <div className="info-icon-new">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="info-text-new" style={{ transition: 'color 0.2s', color: 'var(--text-main)' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-hover)'} onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}>LinkedIn Profile</div>
          </a>

          <div className="info-divider"></div>

          <a href="https://github.com/reachsrimurugan-hub" target="_blank" rel="noopener noreferrer" className="info-item-new" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <div className="info-icon-new">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </div>
            <div className="info-text-new" style={{ transition: 'color 0.2s', color: 'var(--text-main)' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-hover)'} onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}>GitHub Profile</div>
          </a>

          <div className="info-divider"></div>

          <div className="info-item-new">
            <div className="info-icon-new">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <div className="info-text-new">Coimbatore, Tamilnadu</div>
          </div>

          <div className="info-divider"></div>

          <div className="info-item-new">
            <div className="info-icon-new">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="info-text-new">reach.srimurugan@gmail.com</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
