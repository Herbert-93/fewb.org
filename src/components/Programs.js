import React, { useEffect, useRef } from 'react';
import { BookOpen, Network, Mic, GraduationCap, ArrowRight } from 'lucide-react';
import './Programs.css';

const programs = [
  {
    icon: Network,
    tag: 'Core Activity',
    title: 'Epidemic Response & Outbreak Investigation',
    desc: 'We deploy rapid response teams to investigate disease outbreaks, identify causative agents, determine modes of transmission, characterize affected populations, and recommend evidence-based control measures including active case finding and contact tracing.',
    highlights: ['Rapid deployment teams', 'Active case finding', 'Contact tracing', 'Risk communication'],
    color: 'crimson',
  },
  {
    icon: BookOpen,
    tag: 'Surveillance',
    title: 'Disease Surveillance & Early Warning',
    desc: 'We assist in establishing, strengthening, and optimizing disease surveillance systems — including sentinel surveillance, event-based surveillance, and Integrated Disease Surveillance and Response (IDSR) frameworks — for early detection of public health threats.',
    highlights: ['Sentinel surveillance', 'Event-based surveillance', 'IDSR frameworks', 'Data quality improvement'],
    color: 'blue',
  },
  {
    icon: GraduationCap,
    tag: 'Capacity Building',
    title: 'Training & Mentorship',
    desc: 'A cornerstone of our mission is empowering local health workforces. We provide hands-on training, mentorship, and workshops in core epidemiological competencies, outbreak investigation, surveillance, data analysis, and health communication.',
    highlights: ['On-the-job training', 'Mentorship programs', 'Workshop facilitation', 'Skills transfer'],
    color: 'crimson',
  },
  {
    icon: Mic,
    tag: 'Global Health Security',
    title: 'GHS & Emergency Preparedness',
    desc: 'We support countries in developing emergency preparedness and response plans, conducting simulations, and building capacity for effective response coordination. We assist with Joint External Evaluations (JEEs), After Action Reviews (AARs), and Joint Action Planning (JAP).',
    highlights: ['JEE support', 'After Action Reviews', 'IHR core capacities', 'Simulation exercises'],
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
          <h2 className="section-title">Programs & Activities</h2>
          <p className="section-subtitle">
            FEwB provides critical epidemiologic support and technical assistance across
            a spectrum of public health needs, particularly in underserved and crisis-affected areas.
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
