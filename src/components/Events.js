import React, { useEffect, useRef } from 'react';
import { Calendar, Award, DollarSign } from 'lucide-react';
import './Events.css';

const grants = [
  {
    title: 'Training & Sensitization on COVID-19 Prevention at Points of Entry',
    period: 'May 20 – June 3, 2020',
    value: null,
    desc: 'Knowledge and competencies training for health workers and essential service providers at points of entry across Uganda.',
  },
  {
    title: 'Implementing Outbreak Timeliness Metrics in Uganda',
    period: 'July 2019 – June 2020',
    value: null,
    desc: 'In partnership with UNIPH through Ending Pandemics initiative, improving the speed and quality of outbreak detection and response.',
  },
  {
    title: 'Strengthening Mortality Surveillance in Kalangala and Buvuma Districts',
    period: '2019–2020',
    value: null,
    desc: 'In partnership with AFENET and Makerere School of Public Health, building robust mortality surveillance in island districts.',
  },
  {
    title: 'National Multi-Antigen Vaccination Coverage Survey across all 15 Demographic Regions of Uganda',
    period: '2024',
    value: 'USD 150,000',
    desc: 'Designed the protocol and conducted a national multi-antigen vaccination coverage survey across all fifteen demographic regions of Uganda, funded by the US CDC through IDI.',
  },
  {
    title: 'Evaluation of CDC-Supported Data Triangulation Activities to Enhance Immunization and Vaccine-Preventable Disease Surveillance Programs in Uganda',
    period: '2022–2025',
    value: 'USD 50,000',
    desc: 'Evaluation of CDC-supported data triangulation activities aimed at enhancing immunization programs and vaccine-preventable disease surveillance across Uganda.',
  },
  {
    title: "End-of-Program Evaluation of AFENET's CDC-Funded GEEKS Program in Reducing Immunization Defaulters and Enhancing VPD Surveillance in Uganda",
    period: '2023–2024',
    value: 'USD 100,000',
    desc: "Evaluation of the Growing Expertise in E-health Knowledge and Skills (GEEKS) program's impact on reducing immunization defaulters and enhancing surveillance of vaccine-preventable diseases in Uganda.",
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
            FEwB has successfully secured and delivered on six grants, with a proven track
            record of partnership with national and international health institutions.
          </p>
        </div>

        <div className="events__list">
          {grants.map((grant, i) => (
            <div className="event__card event__animate" key={i}>
              <div className="event__type-badge">
                <Award size={12} style={{ marginRight: 5 }} />
                Awarded
              </div>
              <div className="event__body">
                <div className="event__meta">
                  <span className="event__meta-item">
                    <Calendar size={13} />
                    {grant.period}
                  </span>
                  {grant.value && (
                    <span className="event__meta-item event__meta-value">
                      <DollarSign size={13} />
                      {grant.value}
                    </span>
                  )}
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
