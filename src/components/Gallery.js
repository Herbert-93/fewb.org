import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';

const photos = [
  {
    src: '/field-poe.png',
    caption: 'COVID-19 screening and sensitization at Points of Entry, Uganda',
    tag: 'Outbreak Response',
  },
  {
    src: '/field-flood.png',
    caption: 'Field investigation following flooding in an affected community',
    tag: 'Field Investigation',
  },
  {
    src: '/field-investigation.png',
    caption: 'Environmental health assessment during outbreak investigation',
    tag: 'Field Investigation',
  },
  {
    src: '/field-training.png',
    caption: 'Community health worker capacity building training session',
    tag: 'Capacity Building',
  },
  {
    src: '/field-award.jpg',
    caption: 'FEwB Outstanding Quality Improvement Award 2026 — Emmanuel Mfitundinda',
    tag: 'Recognition',
  },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <section id="gallery" className="gallery" ref={sectionRef}>
      <div className="container">
        <div className={`gallery__header ${visible ? 'gallery__header--in' : ''}`}>
          <span className="section-label">FEwB in the Field</span>
          <h2 className="section-title">Work from the Ground</h2>
          <p className="section-subtitle">
            Our members operate where it counts — from points of entry to flood-affected communities,
            from health facility trainings to national outbreak investigations.
          </p>
        </div>

        <div className={`gallery__grid ${visible ? 'gallery__grid--in' : ''}`}>
          {photos.map((photo, i) => (
            <div
              className="gallery__item"
              key={i}
              onClick={() => setLightbox(photo)}
              style={{ '--delay': `${i * 0.08}s` }}
            >
              <div className="gallery__img-wrap">
                <img src={photo.src} alt={photo.caption} className="gallery__img" />
                <div className="gallery__overlay">
                  <span className="gallery__tag">{photo.tag}</span>
                  <p className="gallery__caption">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="gallery__lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery__lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="gallery__lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.src} alt={lightbox.caption} className="gallery__lightbox-img" />
            <div className="gallery__lightbox-caption">
              <span className="gallery__tag">{lightbox.tag}</span>
              <p>{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
