import React, { useEffect, useRef } from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero--visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__bg">
        <div className="hero__arc hero__arc--1" />
        <div className="hero__arc hero__arc--2" />
        <div className="hero__dots">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className="hero__dot" style={{
              '--delay': `${Math.random() * 4}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--size': `${2 + Math.random() * 4}px`,
            }} />
          ))}
        </div>
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <Globe size={13} />
          <span>Alumni Network · Est. 2016</span>
        </div>

        <h1 className="hero__title">
          Epidemiologists<br />
          <span className="hero__title-accent">without Borders.</span>
        </h1>

        <p className="hero__subtitle">
          A global alumni community of field epidemiologists committed to
          strengthening public health systems, sharing knowledge, and responding
          to outbreaks wherever they strike.
        </p>

        <div className="hero__actions">
          <button
            className="btn-primary"
            onClick={() => scrollToSection('#contact')}
          >
            Join the Network <ArrowRight size={16} />
          </button>
          <button
            className="btn-outline-white"
            onClick={() => scrollToSection('#about')}
          >
            Our Mission
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">500+</span>
            <span className="hero__stat-label">Alumni Worldwide</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">45+</span>
            <span className="hero__stat-label">Countries Represented</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">120+</span>
            <span className="hero__stat-label">Outbreak Responses</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
