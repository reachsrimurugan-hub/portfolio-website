import React, { useState, useEffect } from 'react';
import './Contact.css';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button onClick={onClose} aria-label="Close">&times;</button>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [toasts, setToasts] = useState([]);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name' && !value.trim()) error = 'Name is required.';
    if (name === 'email') {
      if (!value.trim()) error = 'Email is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email address.';
    }
    if (name === 'message' && !value.trim()) error = 'Message is required.';
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name] !== undefined) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter(toast => toast.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(err => err);

    if (hasErrors) {
      addToast('Please fix the errors in the form.', 'error');
      return;
    }

    addToast('gotcha! I will get back to you soon.', 'success');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        {/* Message Section on Left */}
        <div className="contact-left">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className={`animated-field ${errors.name ? 'has-error' : ''}`}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="name">Name</label>
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>
            <div className={`animated-field ${errors.email ? 'has-error' : ''}`}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="email">Email</label>
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>
            <div className={`animated-field ${errors.message ? 'has-error' : ''}`}>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              ></textarea>
              <label htmlFor="message">Drop a Line</label>
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>
            <button type="submit" className="submit-btn submit-btn-animated">Send a Email </button>
          </form>
        </div>

        {/* Info & Contact Links on Right */}
        <div className="contact-right">
          <div className="contact-info-container">
            <h3 style={{ marginBottom: '1.5rem' }}>Let's Connect</h3>
            <div className="info-list">
              {/* Email Address */}
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="info-text">reach.srimurugan@gmail.com</span>
              </div>

              {/* Location */}
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="info-text">Coimbatore, Tamil Nadu</span>
              </div>

              {/* Internship Status */}
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <span className="info-text">Available for internships</span>
              </div>
            </div>
          </div>

          <div className="social-links" style={{ marginTop: '0' }}>
            <h3>Connect with me</h3>
            <div className="links-wrapper">
              <a href="https://www.linkedin.com/in/srimurugan-s-00835a37a/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/LinkedIn.png" alt="LinkedIn icon" className="social-link-icon" />
                <span className="social-link-text">LinkedIn</span>
              </a>
              <a href="https://github.com/reachsrimurugan-hub" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/GitHub.png" alt="GitHub icon" className="social-link-icon" />
                <span className="social-link-text">GitHub</span>
              </a>
              <a href="https://mail.google.com/mail/u/0/#compose" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/Email.png" alt="Email icon" className="social-link-icon" />
                <span className="social-link-text">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="toast-container">
        {toasts.map(toast => (
          <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
