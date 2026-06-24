import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Alumni.css';

const leadership = [
  { initials: 'NG', name: 'Dr. Nsereko Godfrey', role: 'President', color: '#C0141C' },
  { initials: 'AN', name: 'Dr. Alex Ndyabakira', role: 'Vice President', color: '#2C5F8A' },
  { initials: 'IK', name: 'Dr. Irene Kyamwine', role: 'General Secretary', color: '#C0141C' },
  { initials: 'BN', name: 'Dr. Benigna Namara', role: 'Vice General Secretary', color: '#2C5F8A' },
  { initials: 'YW', name: 'Dr. Yvette Wibabara', role: 'Treasurer', color: '#C0141C' },
  { initials: 'PE', name: 'Patricia Eyu', role: 'Vice Treasurer', color: '#2C5F8A' },
  { initials: 'AK', name: 'Dr. Allan Komakech', role: 'Publicity Secretary', color: '#C0141C' },
  { initials: 'SK', name: 'Dr. Steven Kabwama', role: 'Ex-officio', color: '#2C5F8A' },
];

const benefits = [
  'Professional networking with 115+ trained field epidemiologists',
  'Career development and mentorship opportunities',
  'Field engagement and service deployment',
  'Grants, research, publication and knowledge sharing',
  'Advocacy and policy influence at national and global level',
  'Recognition and professional credibility',
];

export default function Alumni() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="alumni" className="alumni" ref={sectionRef}>
      <div className="container alumni__inner">

        <div className={`alumni__header ${visible ? 'alumni__header--in' : ''}`}>
          <span className="section-label">Leadership & Community</span>
          <h2 className="section-title">Executive Committee 2025–2027</h2>
          <p className="section-subtitle">
            FEwB is led by an elected executive committee drawn from among its alumni members,
            all graduates of the Uganda Public Health Fellowship Program.
          </p>
        </div>

        <div className={`alumni__leadership ${visible ? 'alumni__header--in' : ''}`}>
          {leadership.map((person, i) => (
            <div className="alumni__leader" key={i}>
              <div className="alumni__avatar" style={{ background: `linear-gradient(135deg, ${person.color}, #1A2744)` }}>
                {person.initials}
              </div>
              <div className="alumni__leader-info">
                <div className="alumni__name">{person.name}</div>
                <div className="alumni__role-tag">{person.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={`alumni__benefits ${visible ? 'alumni__header--in' : ''}`}>
          <div className="alumni__benefits-header">
            <span className="section-label">Membership Benefits</span>
            <h3 className="alumni__benefits-title">Why Join FEwB?</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Membership is subscription-based — one-time registration UgX 100,000 + annual subscription UgX 100,000.
            </p>
          </div>
          <ul className="alumni__benefits-list">
            {benefits.map((b, i) => (
              <li key={i} className="alumni__benefit-item">
                <span className="alumni__benefit-dot" />
                {b}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
