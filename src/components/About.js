import React, { useEffect, useRef } from 'react';
import { Shield, Users, BookOpen, Zap } from 'lucide-react';
import './About.css';

const pillars = [
  { icon: Shield,   title: 'Epidemic Response & Outbreak Investigation', desc: 'We deploy rapid response teams to investigate disease outbreaks, identify causative agents, determine modes of transmission, and recommend evidence-based control measures.' },
  { icon: Users,    title: 'Capacity Building & Training',               desc: 'A cornerstone of our mission is empowering local health workforces with hands-on training, mentorship, and workshops in core epidemiological competencies.' },
  { icon: BookOpen, title: 'Disease Surveillance & Early Warning',       desc: 'We assist in establishing and strengthening surveillance systems including sentinel, event-based, and IDSR frameworks for early detection of public health threats.' },
  { icon: Zap,      title: 'Global Health Security Support',             desc: 'We contribute to strengthening GHS capacities by assisting in Joint External Evaluations, After Action Reviews, and Joint Action Planning processes.' },
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">

        {/* Two-col intro with image */}
        <div className="about__intro">
          <div className="about__intro-text about__animate">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Born in Uganda.<br />Built for the world.</h2>
            <p className="section-subtitle">
              Field Epidemiologists without Borders (FEwB) is a non-governmental, non-profit
              organisation comprised of alumni and fellows of the Uganda Public Health Fellowship
              Program (PHFP). Established in 2016 and housed under the Uganda National Institute
              of Public Health (UNIPH), FEwB deploys skilled epidemiologists to regions grappling
              with epidemics and public health emergencies.
            </p>
            <div className="about__quote">
              <div className="about__quote-line" />
              <blockquote>"Communities empowered to prevent, detect and respond to public health threats."</blockquote>
              <cite>— FEwB Vision Statement</cite>
            </div>
          </div>

          <div className="about__intro-visual about__animate">
            <div className="about__img-stack">
              <div className="about__img-card about__img-card--back">
                <img src="/field-flood.png" alt="Field investigation" />
              </div>
              <div className="about__img-card about__img-card--front">
                <img src="/field-training.png" alt="Capacity building training" />
              </div>
              <div className="about__img-badge">
                <span className="about__img-badge-num">2016</span>
                <span className="about__img-badge-label">Est.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
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

      </div>
    </section>
  );
}
