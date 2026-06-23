import React, { useEffect, useRef, useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.contact__animate').forEach((el, i) => {
              setTimeout(() => el.classList.add('contact__animate--in'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container contact__grid">
        <div className="contact__left">
          <div className="contact__animate">
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.55)' }}>Get Involved</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Join the network.<br />Make your mark.
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '420px' }}>
              Whether you are an FETP graduate, a current resident, or a public health partner —
              there is a place for you in FEwB. Reach out and we will connect you with the right people.
            </p>
          </div>

          <div className="contact__info contact__animate">
            <a href="mailto:info@fewb.org" className="contact__email">
              <Mail size={16} />
              info@fewb.org
            </a>
            <div className="contact__social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact__social-link">X / Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact__social-link">LinkedIn</a>
              <a href="https://researchgate.net" target="_blank" rel="noopener noreferrer" className="contact__social-link">ResearchGate</a>
            </div>
          </div>
        </div>

        <div className="contact__right contact__animate">
          {submitted ? (
            <div className="contact__success">
              <CheckCircle size={44} className="contact__success-icon" />
              <h3>Message received!</h3>
              <p>Thank you for reaching out. A member of the FEwB team will be in touch within 2–3 business days.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Dr. Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@institution.org"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="role">Your Role</label>
                <select
                  id="role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your background</option>
                  <option value="fetp-grad">FETP Graduate</option>
                  <option value="fetp-resident">FETP Resident</option>
                  <option value="public-health">Public Health Professional</option>
                  <option value="researcher">Researcher / Academic</option>
                  <option value="partner">Institutional Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about yourself and how you'd like to connect with FEwB..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary contact__submit">
                Send Message <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
