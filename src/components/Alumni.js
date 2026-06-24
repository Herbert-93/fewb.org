import React, { useEffect, useRef, useState } from 'react';
import './Alumni.css';

const leadership = [
  {
    name: 'Dr. Nsereko Godfrey',
    role: 'President',
    photo: '/leader-nsereko.png',
    accent: '#C0141C',
  },
  {
    name: 'Dr. Alex Ndyabakira',
    role: 'Vice President',
    photo: '/leader-ndyabakira.png',
    accent: '#2C5F8A',
  },
  {
    name: 'Dr. Irene Kyamwine',
    role: 'General Secretary',
    photo: '/leader-kyamwine.png',
    accent: '#C0141C',
  },
  {
    name: 'Dr. Benigna Namara',
    role: 'Vice General Secretary',
    photo: '/leader-namara.png',
    accent: '#2C5F8A',
  },
  {
    name: 'Dr. Yvette Wibabara',
    role: 'Treasurer',
    photo: '/leader-wibabara.png',
    accent: '#C0141C',
  },
  {
    name: 'Patricia Eyu',
    role: 'Vice Treasurer',
    photo: '/leader-eyu.png',
    accent: '#2C5F8A',
  },
  {
    name: 'Dr. Allan Komakech',
    role: 'Publicity Secretary',
    photo: '/leader-komakech.jpg',
    accent: '#C0141C',
  },
  {
    name: 'Dr. Steven Kabwama',
    role: 'Ex-officio',
    photo: '/leader-kabwama.png',
    accent: '#2C5F8A',
  },
];

const benefits = [
  'Professional networking with 115+ trained field epidemiologists',
  'Career development and mentorship opportunities',
  'Opportunities for field engagement and service deployment',
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
            FEwB is led by an elected executive committee drawn entirely from Uganda
            Public Health Fellowship Program alumni — practitioners who have worked in the field.
          </p>
        </div>

        <div className={`alumni__leadership ${visible ? 'alumni__leadership--in' : ''}`}>
          {leadership.map((person, i) => (
            <div className="alumni__leader" key={i} style={{ '--accent': person.accent }}>
              <div className="alumni__photo-wrap">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="alumni__photo"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div className="alumni__photo-fallback" style={{ background: `linear-gradient(135deg, ${person.accent}, #1A2744)` }}>
                  {person.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </div>
              </div>
              <div className="alumni__leader-info">
                <div className="alumni__name">{person.name}</div>
                <div className="alumni__role-tag">{person.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={`alumni__benefits ${visible ? 'alumni__benefits--in' : ''}`}>
          <div className="alumni__benefits-left">
            <span className="section-label">Membership Benefits</span>
            <h3 className="alumni__benefits-title">Why Join FEwB?</h3>
            <p className="alumni__benefits-sub">
              Subscription-based membership open to Uganda PHFP alumni, residents, and affiliated public health professionals.
            </p>
            <div className="alumni__fees">
              <div className="alumni__fee-row">
                <span>One-time registration</span>
                <span>UgX 100,000</span>
              </div>
              <div className="alumni__fee-row">
                <span>Annual subscription</span>
                <span>UgX 100,000</span>
              </div>
            </div>
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
