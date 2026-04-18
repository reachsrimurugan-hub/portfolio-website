import React, { useRef, useEffect, useState } from 'react';
import './Timeline.css';

const timelineData = [
  {
    id: 1,
    type: "education",
    title: "B.s.c Computer Science with Cognitive Systems",
    subtitle: "Sri Krishna Arts and Science College",
    date: "2024 - 2027",
    details: "Currently pursuing degree in Cognitive Systems. Throughout the coursework, I am gaining an in-depth understanding of artificial intelligence, machine learning, and cognitive psychology.",
    image: "",
    certDescription: "Degree Certificate in B.s.c Computer Science"
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Web Development Intern",
    subtitle: "CODTECH IT SOLUTIONS",
    date: "December 2024 - January 2025",
    details: "Completed Full Stack Web Development Intern at CODTECH. Worked on building responsive and interactive web applications utilizing React and Node.js.",
    image: "/images/fullstack.png",
    certDescription: "Internship Certificate from CODTECH IT SOLUTIONS"
  },
  {
    id: 3,
    type: "work",
    title: "Frontend Developer Intern",
    subtitle: "Rezilyence",
    date: "April 2026 - May 2026",
    details: "Got an offer letter for the frontend developer intern position at Rezilyence. Focused on creating user-centric frontend designs and optimizing website performance.",
    image: "/images/rezilyens.png",
    certDescription: "Offer Letter / Intern Certificate from Rezilyence"
  }
];

const TimelineCard = ({ item, onToggle }) => {
  return (
    <div
      className="timeline-card"
      onClick={onToggle}
      style={{ cursor: 'pointer' }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <h3 className="timeline-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
          {item.type === 'education' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary-color)', flexShrink: 0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary-color)', flexShrink: 0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.896 1.982-2.044 2.322A48.365 48.365 0 0112 21.656a48.365 48.365 0 01-6.206-.934 2.25 2.25 0 01-2.044-2.322v-4.25m3.75-2.25v2.25c0 1.094.896 1.983 2.044 2.322a48.366 48.366 0 004.456.666 48.366 48.366 0 004.456-.666 2.25 2.25 0 002.044-2.322v-2.25m-14.25 0h14.25M6 11.9v-2.25c0-1.094.896-1.983 2.044-2.322a48.366 48.366 0 014.456-.666 48.366 48.366 0 014.456.666 2.25 2.25 0 012.044 2.322v2.25" />
            </svg>
          )}
          {item.title}
        </h3>
        <div style={{ color: 'var(--primary-color)', opacity: 0.8, marginTop: '0.2rem' }} className="timeline-arrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '1.2rem', height: '1.2rem' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </div>
      <p className="timeline-card-subtitle">{item.subtitle}</p>
      <span className="timeline-card-date">{item.date}</span>

      {/* Show only summary or just the click indicator in the card */}
      <div className="expand-indicator" style={{ marginTop: 'auto', color: 'var(--text-main)', fontSize: '0.9rem', textAlign: 'center', paddingTop: '1.5rem', fontWeight: '500' }}>
        Click to view details & certificate
      </div>
    </div>
  );
};

const Timeline = () => {
  const scrollerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleScroll = () => {
    if (scrollerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress || 0);
    }
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.addEventListener('scroll', handleScroll);
    return () => scroller.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || expandedItem !== null) return; // Pause auto-scroll if modal is active

    let rafId;
    let speed = 0.25; // px per frame
    let isMobile = window.innerWidth <= 768;

    const handleResize = () => {
      isMobile = window.innerWidth <= 768;
    };
    window.addEventListener('resize', handleResize);

    let frame = () => {
      if (!scroller) return;

      if (!isMobile) {
        scroller.scrollLeft += speed;
        if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
          scroller.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
    };
  }, [expandedItem]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (expandedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandedItem]);

  return (
    <section id="timeline" className="section timeline-section">
      <h2 className="section-title" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
        <span>
          <span style={{ color: 'var(--text-main)' }}>Education</span> & <span style={{ color: 'var(--text-muted)' }}>Experience</span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.8rem', height: '1.8rem', color: 'var(--primary-color)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      </h2>
      <div className="timeline-wrapper">
        <div
          className="timeline-horizontal-scroll"
          ref={scrollerRef}
        >
          {timelineData.map((item) => (
            <TimelineCard
              key={item.id}
              item={item}
              onToggle={() => setExpandedItem(item)}
            />
          ))}
        </div>

        <div className="timeline-progress-bar-container">
          <div
            className="timeline-progress-bar"
            style={{ width: `${Math.max(0, Math.min(100, scrollProgress * 100))}%` }}
          ></div>
        </div>
      </div>

      {/* Global Modal / Separate Section Hover */}
      {expandedItem && (
        <div className="timeline-global-modal-overlay" onClick={() => setExpandedItem(null)}>
          <div className="timeline-global-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-global-modal" onClick={() => setExpandedItem(null)}>&times;</button>
            <div className="modal-header">
              <h3 className="modal-title">{expandedItem.title}</h3>
              <p className="modal-subtitle">{expandedItem.subtitle} <span className="modal-date">({expandedItem.date})</span></p>
            </div>

            <div className="modal-body-content">
              <div className="modal-text">
                <p style={{ color: 'var(--text-main)' }}>{expandedItem.details}</p>
              </div>

              {expandedItem.image && (
                <div className="modal-image-container">
                  <img
                    src={expandedItem.image}
                    alt={`${expandedItem.title} Certificate`}
                    className="modal-cert-image"
                  />
                  {expandedItem.certDescription && (
                    <p className="modal-cert-caption" style={{ color: 'var(--text-main)' }}>{expandedItem.certDescription}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;
