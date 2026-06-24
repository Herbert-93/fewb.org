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
          <span>Uganda Public Health Fellowship Program Alumni · Est. 2016</span>
        </div>

        <h1 className="hero__title">
          Field Epidemiologists<br />
          <span className="hero__title-accent">without Borders.</span>
        </h1>

        <p className="hero__subtitle">
          A non-profit network of Uganda PHFP alumni and fellows dedicated to advancing
          quality field epidemiology through practice, research, capacity building,
          and health program development — wherever the need arises.
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
            <span className="hero__stat-num">115</span>
            <span className="hero__stat-label">Alumni Members</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">37</span>
            <span className="hero__stat-label">Active Residents</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">3</span>
            <span className="hero__stat-label">Grants Awarded</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">2016</span>
            <span className="hero__stat-label">Year Established</span>
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
