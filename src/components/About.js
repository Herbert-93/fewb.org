import React, { useEffect, useRef } from 'react';
import { Shield, Users, BookOpen, Zap } from 'lucide-react';
import './About.css';

const pillars = [
  {
    icon: Shield,
    title: 'Epidemic Response & Outbreak Investigation',
    desc: 'We deploy rapid response teams to investigate disease outbreaks, identify causative agents, determine modes of transmission, and recommend evidence-based control measures including contact tracing and risk communication.',
  },
  {
    icon: Users,
    title: 'Capacity Building & Training',
    desc: 'A cornerstone of our mission is empowering local health workforces. We provide hands-on training, mentorship, and workshops in core epidemiological competencies, outbreak investigation, surveillance, and data analysis.',
  },
  {
    icon: BookOpen,
    title: 'Disease Surveillance & Early Warning',
    desc: 'We assist in establishing and strengthening disease surveillance systems including sentinel, event-based, and integrated disease surveillance and response (IDSR) frameworks for early detection of public health threats.',
  },
  {
    icon: Zap,
    title: 'Global Health Security Support',
    desc: 'We contribute to strengthening GHS capacities by assisting in Joint External Evaluations (JEEs), After Action Reviews (AARs), and Joint Action Planning (JAP) processes, helping countries meet IHR core capacities.',
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
          <h2 className="section-title">Born in Uganda.<br />Built for the world.</h2>
          <p className="section-subtitle">
            Field Epidemiologists without Borders (FEwB) is a non-governmental, non-profit
            organisation comprised of alumni and fellows of the Uganda Public Health Fellowship
            Program (PHFP). Established in 2016 and housed under the Uganda National Institute
            of Public Health (UNIPH), FEwB serves as a rapid response mechanism deploying
            skilled epidemiologists to regions grappling with epidemics and public health emergencies.
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
            "Communities empowered to prevent, detect and respond to public health threats."
          </blockquote>
          <cite>— FEwB Vision Statement</cite>
        </div>
      </div>
    </section>
  );
}
