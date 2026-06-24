import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Award } from 'lucide-react';
import './Events.css';

const grants = [
  {
    title: 'Training & Sensitization on COVID-19 Prevention at Points of Entry',
    period: 'May 20 – June 3, 2020',
    status: 'Awarded',
    desc: 'Knowledge and competencies training for health workers and essential service providers at points of entry across Uganda.',
  },
  {
    title: 'Implementing Outbreak Timeliness Metrics in Uganda',
    period: 'July 2019 – June 2020',
    status: 'Awarded',
    desc: 'In partnership with UNIPH through Ending Pandemics initiative, improving the speed and quality of outbreak detection and response.',
  },
  {
    title: 'Strengthening Mortality Surveillance in Kalangala and Buvuma Districts',
    period: '2019–2020',
    status: 'Awarded',
    desc: 'In partnership with AFENET and Makerere School of Public Health, building robust mortality surveillance in island districts.',
  },
];

const capacities = [
  'Field epidemiology and outbreak investigations',
  'Event-based and indicator-based surveillance',
  'Public health emergency operations',
  'Capacity strengthening and mentorship',
  'Research, learning and quality improvement',
  'Technical documentation',
];

export default function Events() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.event__animate').forEach((el, i) => {
              setTimeout(() => el.classList.add('event__animate--in'), i * 140);
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
    <section id="events" className="events" ref={sectionRef}>
      <div className="container">

        <div className="events__header event__animate">
          <span className="section-label">Grant Portfolio</span>
          <h2 className="section-title">Grants & Institutional Capacities</h2>
          <p className="section-subtitle">
            FEwB has successfully secured and delivered on three grants, with a proven track
            record of partnership with national and international health institutions.
          </p>
        </div>

        <div className="events__list">
          {grants.map((grant, i) => (
            <div className="event__card event__animate" key={i}>
              <div className="event__type-badge">
                <Award size={12} style={{ marginRight: 5 }} />
                {grant.status}
              </div>
              <div className="event__body">
                <div className="event__meta">
                  <span className="event__meta-item">
                    <Calendar size={13} />
                    {grant.period}
                  </span>
                </div>
                <h3 className="event__title">{grant.title}</h3>
                <p className="event__speaker">{grant.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="events__capacities event__animate">
          <h3 className="events__cap-title">Institutional Capacities</h3>
          <div className="events__cap-grid">
            {capacities.map((cap, i) => (
              <div className="events__cap-item" key={i}>
                <span className="events__cap-dot" />
                {cap}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
