import React, { useEffect, useRef, useState } from 'react';
import './Impact.css';

const stats = [
  { value: 500, suffix: '+', label: 'Alumni Network', desc: 'Active professionals worldwide' },
  { value: 45, suffix: '+', label: 'Countries', desc: 'Represented across the globe' },
  { value: 120, suffix: '+', label: 'Outbreak Responses', desc: 'Contributed by alumni' },
  { value: 18, suffix: '', label: 'Partner Institutions', desc: 'WHO, CDC, AFRICA CDC & more' },
];

function Counter({ value, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [value, active]);

  return (
    <span className="impact__num">
      {count}{suffix}
    </span>
  );
}

export default function Impact() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !active) {
            setActive(true);
            entry.target.querySelectorAll('.impact__animate').forEach((el, i) => {
              setTimeout(() => el.classList.add('impact__animate--in'), i * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [active]);

  return (
    <section id="impact" className="impact" ref={sectionRef}>
      <div className="impact__band" />
      <div className="container impact__inner">
        <div className="impact__header impact__animate">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Reach</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Impact by the numbers</h2>
        </div>

        <div className="impact__grid">
          {stats.map((stat, i) => (
            <div className="impact__card impact__animate" key={i}>
              <Counter value={stat.value} suffix={stat.suffix} active={active} />
              <div className="impact__card-label">{stat.label}</div>
              <div className="impact__card-desc">{stat.desc}</div>
            </div>
          ))}
        </div>

        <div className="impact__logos impact__animate">
          <p className="impact__logos-label">In partnership with</p>
          <div className="impact__logos-row">
            {['WHO', 'Africa CDC', 'US CDC', 'ECDC', 'MSF', 'GOARN'].map((org) => (
              <span key={org} className="impact__logo-badge">{org}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
