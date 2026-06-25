import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';

const photos = [
  {
    src: '/field-poe.png',
    caption: 'COVID-19 sensitization at Points of Entry',
    tag: 'Outbreak Response',
    wide: true,
  },
  {
    src: '/field-training.png',
    caption: 'Community health worker capacity building training',
    tag: 'Capacity Building',
    wide: false,
  },
  {
    src: '/field-flood.png',
    caption: 'Field investigation in flood-affected community',
    tag: 'Field Investigation',
    wide: false,
  },
  {
    src: '/field-investigation.png',
    caption: 'Environmental health assessment during outbreak',
    tag: 'Field Investigation',
    wide: false,
  },
  {
    src: '/field-award.png',
    caption: 'FEwB Outstanding Quality Improvement Award 2026',
    tag: 'Recognition',
    wide: true,
  },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') {
        const next = (lightboxIndex + 1) % photos.length;
        setLightboxIndex(next);
        setLightbox(photos[next]);
      }
      if (e.key === 'ArrowLeft') {
        const prev = (lightboxIndex - 1 + photos.length) % photos.length;
        setLightboxIndex(prev);
        setLightbox(photos[prev]);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, lightboxIndex]);

  const openLightbox = (photo, index) => {
    setLightbox(photo);
    setLightboxIndex(index);
  };

  return (
    <section id="gallery" className="gallery" ref={sectionRef}>
      <div className="container">
        <div className={`gallery__header ${visible ? 'gallery__header--in' : ''}`}>
          <span className="section-label">FEwB in the Field</span>
          <h2 className="section-title">Work from the Ground</h2>
          <p className="section-subtitle">
            Our members operate where it counts — from points of entry to flood-affected
            communities, from health facility trainings to national outbreak investigations.
          </p>
        </div>

        <div className="gallery__grid">
          {photos.map((photo, i) => (
            <div
              className={`gallery__item ${photo.wide ? 'gallery__item--wide' : ''} ${visible ? 'gallery__item--in' : ''}`}
              key={i}
              style={{ '--delay': `${i * 0.1}s` }}
              onClick={() => openLightbox(photo, i)}
            >
              <div className="gallery__img-wrap">
                <img src={photo.src} alt={photo.caption} className="gallery__img" />
                <div className="gallery__overlay">
                  <span className="gallery__tag">{photo.tag}</span>
                  <p className="gallery__caption">{photo.caption}</p>
                </div>
                <div className="gallery__zoom-hint">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
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

            <button
              className="gallery__lightbox-nav gallery__lightbox-nav--prev"
              onClick={() => {
                const prev = (lightboxIndex - 1 + photos.length) % photos.length;
                setLightboxIndex(prev); setLightbox(photos[prev]);
              }}
            >‹</button>

            <img src={lightbox.src} alt={lightbox.caption} className="gallery__lightbox-img" />

            <button
              className="gallery__lightbox-nav gallery__lightbox-nav--next"
              onClick={() => {
                const next = (lightboxIndex + 1) % photos.length;
                setLightboxIndex(next); setLightbox(photos[next]);
              }}
            >›</button>

            <div className="gallery__lightbox-caption">
              <span className="gallery__tag">{lightbox.tag}</span>
              <p>{lightbox.caption}</p>
              <span className="gallery__lightbox-counter">{lightboxIndex + 1} / {photos.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
