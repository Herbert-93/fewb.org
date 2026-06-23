import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Programs', href: '#programs' },
  { label: 'Alumni', href: '#alumni' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="/" className="navbar__logo">
          <img src="/logo.png" alt="FEwB Logo" className="navbar__logo-img" />
        </a>

        <nav className="navbar__links">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="navbar__link"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar__cta">
          <button
            className="btn-primary"
            onClick={() => handleNavClick('#contact')}
          >
            Join the Network
          </button>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="navbar__mobile-link"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
          <button
            className="btn-primary"
            style={{ margin: '12px 0', width: '100%', justifyContent: 'center' }}
            onClick={() => handleNavClick('#contact')}
          >
            Join the Network
          </button>
        </div>
      )}
    </header>
  );
}
