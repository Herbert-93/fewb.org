import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import './Events.css';

const events = [
  {
    type: 'Webinar',
    date: 'Jul 18, 2026',
    time: '14:00 UTC',
    title: 'Genomic Epidemiology in the Field: Practical Applications',
    location: 'Online — Zoom',
    speaker: 'Dr. Chukwuemeka Eze, Nigeria CDC',
    spots: 'Registration open',
  },
  {
    type: 'Annual Symposium',
    date: 'Sep 4–6, 2026',
    time: 'All day',
    title: 'FEwB Symposium 2026: Borders, Bridges & Outbreaks',
    location: 'Nairobi, Kenya',
    speaker: 'Keynote TBA — 40+ speakers',
    spots: 'Early bird open',
  },
  {
    type: 'Workshop',
    date: 'Aug 5, 2026',
    time: '10:00 UTC',
    title: 'Advanced Epi Data Analysis with R — Alumni Workshop',
    location: 'Online — MS Teams',
    speaker: 'FEwB Data Science Working Group',
    spots: 'Limited to 60 seats',
  },
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
          <span className="section-label">Stay Connected</span>
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Join alumni across the globe for learning, exchange, and the FEwB annual gathering.
          </p>
        </div>

        <div className="events__list">
          {events.map((ev, i) => (
            <div className="event__card event__animate" key={i}>
              <div className="event__type-badge">{ev.type}</div>
              <div className="event__body">
                <div className="event__meta">
                  <span className="event__meta-item">
                    <Calendar size={13} />
                    {ev.date}
                  </span>
                  <span className="event__meta-item">
                    <Clock size={13} />
                    {ev.time}
                  </span>
                  <span className="event__meta-item">
                    <MapPin size={13} />
                    {ev.location}
                  </span>
                </div>
                <h3 className="event__title">{ev.title}</h3>
                <p className="event__speaker">{ev.speaker}</p>
                <div className="event__footer">
                  <span className="event__spots">{ev.spots}</span>
                  <button className="event__register">
                    Register <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="events__all event__animate">
          <button className="btn-secondary">
            View All Events <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
