import React from 'react';
import { Globe, ArrowUp } from 'lucide-react';
import './Footer.css';

const footerLinks = {
  Organisation: ['About FEwB', 'Our Mission', 'Strategic Plan', 'Partners', 'Constitution'],
  Network: ['Alumni Directory', 'Membership', 'Executive Committee', 'Join Us'],
  Activities: ['Outbreak Response', 'Surveillance', 'Capacity Building', 'GHS Support', 'Research'],
  Connect: ['Contact Us', 'UNIPH Website', 'AFENET', 'Uganda Ministry of Health'],
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
              Advancing quality field epidemiology through practice, research, capacity building,
              and health program development.
            </p>
            <div className="footer__badge">
              <Globe size={12} />
              <span>Non-Profit · Alumni-Led · Est. 2016 · Kampala, Uganda</span>
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
            &copy; {new Date().getFullYear()} Field Epidemiologists without Borders (FEwB).
            Housed under the Uganda National Institute of Public Health (UNIPH). All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__link footer__link--small">Privacy Policy</a>
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
