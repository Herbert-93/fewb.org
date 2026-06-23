import React from 'react';
import { Globe, ArrowUp } from 'lucide-react';
import './Footer.css';

const footerLinks = {
  Organisation: ['About FEwB', 'Our Mission', 'Governance', 'Partners', 'Annual Reports'],
  Network: ['Alumni Directory', 'Mentorship', 'Working Groups', 'Join Us'],
  Resources: ['Field Library', 'Publications', 'Tools & Guides', 'Outbreak Archive'],
  Connect: ['Events', 'Webinars', 'Newsletter', 'Contact Us'],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo.png" alt="FEwB" className="footer__logo" />
            <p className="footer__tagline">
              Connecting field epidemiologists across borders to protect the world's health.
            </p>
            <div className="footer__badge">
              <Globe size={12} />
              <span>Global · Non-Profit · Alumni-Led</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([cat, links]) => (
            <div className="footer__col" key={cat}>
              <h4 className="footer__col-title">{cat}</h4>
              <ul className="footer__list">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Field Epidemiologists without Borders (FEwB). All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__link footer__link--small">Privacy Policy</a>
            <a href="#" className="footer__link footer__link--small">Terms of Use</a>
            <button className="footer__top-btn" onClick={scrollToTop} aria-label="Back to top">
              <ArrowUp size={15} />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
