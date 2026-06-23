import React, { useEffect, useRef } from 'react';
import { BookOpen, Network, Mic, GraduationCap, ArrowRight } from 'lucide-react';
import './Programs.css';

const programs = [
  {
    icon: Network,
    tag: 'Core Program',
    title: 'Alumni Mentorship Network',
    desc: 'Structured mentorship pairing seasoned field epidemiologists with early-career alumni. Monthly sessions, tailored guidance, and long-term professional relationships.',
    highlights: ['Quarterly cohorts', '1-on-1 pairing', 'Cross-country connections'],
    color: 'crimson',
  },
  {
    icon: BookOpen,
    tag: 'Knowledge Hub',
    title: 'Field Intelligence Library',
    desc: 'A curated repository of outbreak reports, field guides, SOPs, and original research authored by FEwB alumni — freely accessible to all members.',
    highlights: ['300+ documents', 'Peer-reviewed content', 'Open access'],
    color: 'blue',
  },
  {
    icon: Mic,
    tag: 'Events',
    title: 'Webinar & Conference Series',
    desc: 'Monthly online seminars featuring expert alumni. Annual in-person symposium bringing the global network together for learning and advocacy.',
    highlights: ['Monthly webinars', 'Annual symposium', 'CME credits'],
    color: 'crimson',
  },
  {
    icon: GraduationCap,
    tag: 'Capacity Building',
    title: 'FETP Strengthening Initiative',
    desc: 'Alumni contribute back to training programmes as supervisors, facilitators, and advisors — ensuring the next generation of field epidemiologists is world-class.',
    highlights: ['Curriculum support', 'Supervisory roles', 'Scholarship fund'],
    color: 'blue',
  },
];

export default function Programs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.prog__animate').forEach((el, i) => {
              setTimeout(() => el.classList.add('prog__animate--in'), i * 130);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="programs" className="programs" ref={sectionRef}>
      <div className="container">
        <div className="programs__header prog__animate">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Programs & Initiatives</h2>
          <p className="section-subtitle">
            FEwB programmes are built around three principles: connect alumni,
            sustain excellence, and amplify public health impact.
          </p>
        </div>

        <div className="programs__grid">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <div className={`prog__card prog__animate prog__card--${prog.color}`} key={i}>
                <div className="prog__card-top">
                  <span className="prog__tag">{prog.tag}</span>
                  <div className="prog__icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>
                <h3 className="prog__title">{prog.title}</h3>
                <p className="prog__desc">{prog.desc}</p>
                <ul className="prog__highlights">
                  {prog.highlights.map((h, j) => (
                    <li key={j} className="prog__highlight">
                      <span className="prog__dot" />
                      {h}
                    </li>
                  ))}
                </ul>
                <button className="prog__link">
                  Learn more <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
