import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Alumni.css';

const members = [
  {
    initials: 'AO',
    name: 'Dr. Amara Osei',
    role: 'Senior Epidemiologist',
    org: 'Ghana Health Service',
    country: 'Ghana',
    quote: 'FEwB connected me with mentors who shaped my career in ways no training programme could. The network is a living classroom that never closes.',
  },
  {
    initials: 'FM',
    name: 'Dr. Fatima Mbaye',
    role: 'Field Epidemiologist',
    org: 'Institut Pasteur de Dakar',
    country: 'Senegal',
    quote: 'During the 2022 outbreak response in our region, I had colleagues from five countries available on WhatsApp within minutes. That is the FEwB network in action.',
  },
  {
    initials: 'JK',
    name: 'Dr. Joseph Kamau',
    role: 'FETP Coordinator',
    org: 'Kenya CDC',
    country: 'Kenya',
    quote: "I went from FETP resident to FETP supervisor with FEwB's support. The organisation gives you a reason to stay connected and a reason to give back.",
  },
  {
    initials: 'SR',
    name: 'Dr. Sunita Rao',
    role: 'Outbreak Analyst',
    org: 'SEARO — WHO',
    country: 'India',
    quote: 'The Field Intelligence Library saved me weeks of work during a dengue surge. Alumni had documented nearly identical situations — their notes were gold.',
  },
  {
    initials: 'BT',
    name: 'Dr. Blessing Traoré',
    role: 'Public Health Advisor',
    org: 'Africa CDC',
    country: "C\u00f4te d\u2019Ivoire",
    quote: "FEwB isn't just alumni networking. It is a commitment to a generation of epidemiologists who refuse to let borders define their impact.",
  },
];

export default function Alumni() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setActive((a) => (a - 1 + members.length) % members.length);
  const next = () => setActive((a) => (a + 1) % members.length);

  const member = members[active];

  return (
    <section id="alumni" className="alumni" ref={sectionRef}>
      <div className="container alumni__inner">
        <div className={`alumni__header ${visible ? 'alumni__header--in' : ''}`}>
          <span className="section-label">Voices from the Field</span>
          <h2 className="section-title">Our Alumni Speak</h2>
        </div>

        <div className={`alumni__carousel ${visible ? 'alumni__carousel--in' : ''}`}>
          <div className="alumni__quote-wrap">
            <Quote size={36} className="alumni__quote-icon" />
            <p className="alumni__quote-text" key={active}>
              {member.quote}
            </p>
          </div>

          <div className="alumni__author">
            <div className="alumni__avatar">
              {member.initials}
            </div>
            <div className="alumni__info">
              <div className="alumni__name">{member.name}</div>
              <div className="alumni__role">{member.role} · {member.org}</div>
              <div className="alumni__country">{member.country}</div>
            </div>
          </div>

          <div className="alumni__controls">
            <button className="alumni__btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <div className="alumni__dots">
              {members.map((_, i) => (
                <button
                  key={i}
                  className={`alumni__dot ${i === active ? 'alumni__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="alumni__btn" onClick={next} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className={`alumni__map-hint ${visible ? 'alumni__map-hint--in' : ''}`}>
          <div className="alumni__regions">
            {['West Africa', 'East Africa', 'Central Africa', 'South Asia', 'Southeast Asia', 'Europe', 'Americas'].map((r) => (
              <span key={r} className="alumni__region">{r}</span>
            ))}
          </div>
          <p className="alumni__region-label">Alumni active in every region</p>
        </div>
      </div>
    </section>
  );
}
