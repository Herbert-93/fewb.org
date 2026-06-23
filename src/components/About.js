import React, { useEffect, useRef } from 'react';
import { Shield, Users, BookOpen, Zap } from 'lucide-react';
import './About.css';

const pillars = [
  {
    icon: Shield,
    title: 'Public Health Leadership',
    desc: 'Equipping alumni with tools and networks to lead disease surveillance, outbreak investigation, and emergency response at national and international levels.',
  },
  {
    icon: Users,
    title: 'Global Community',
    desc: 'Connecting field epidemiologists across continents — fostering mentorship, collaboration, and peer support across career stages.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Exchange',
    desc: 'Sharing lessons from the field through case studies, publications, webinars, and joint research across health systems.',
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    desc: 'Mobilising alumni expertise during public health emergencies, supporting local and global outbreak responses with evidence-based action.',
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.about__animate').forEach((el, i) => {
              setTimeout(() => el.classList.add('about__animate--in'), i * 120);
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
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about__header about__animate">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">Born in the field.<br />Built for the world.</h2>
          <p className="section-subtitle">
            Field Epidemiologists without Borders (FEwB) is an alumni organisation
            uniting graduates of Field Epidemiology Training Programmes (FETPs) from
            across Africa, Asia, and beyond. We exist to sustain and multiply the
            impact of trained field epidemiologists after they leave formal programmes.
          </p>
        </div>

        <div className="about__pillars">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div className="about__pillar about__animate" key={i}>
                <div className="about__pillar-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="about__pillar-title">{pillar.title}</h3>
                <p className="about__pillar-desc">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="about__quote about__animate">
          <div className="about__quote-line" />
          <blockquote>
            "Public health is not just a science — it is a calling. FEwB exists
            so that call is never answered alone."
          </blockquote>
          <cite>— FEwB Founding Charter</cite>
        </div>
      </div>
    </section>
  );
}
