import React, { useState, useEffect, useRef } from 'react';

const timelineData = [
  {
    id: 1,
    title: "B.s.c Computer Science with Cognitive Systems",
    subtitle: "Sri Krishna Arts and Science College",
    date: "2024 - 2027",
    details: "Currently pursuing degree in Cognitive Systems.",
    // Replace with actual image path
    image: "/images/logo.png",
    certDescription: "Degree Certificate in B.s.c Computer Science"
  },
  {
    id: 2,
    title: "Full Stack Web Development Intern",
    subtitle: "CODTECH IT SOLUTIONS",
    date: "December 2024 - January 2025",
    details: "Completed Full Stack Web Development Intern at CODTECH.",
    // Replace with actual image path
    image: "/images/fullstack.png",
    certDescription: "Internship Certificate from CODTECH IT SOLUTIONS"
  },
  {
    id: 3,
    title: "Frontend Developer Intern",
    subtitle: "Rezilyence",
    date: "April 2026 - May 2026",
    details: "Got an offer letter for the frontend developer intern position at Rezilyence.",
    // Replace with actual image path
    image: "/images/rezilyens.png",
    certDescription: "Offer Letter / Intern Certificate from Rezilyence"
  }
];

const TimelineContent = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="timeline-content"
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ cursor: 'pointer', margin: 0, width: '100%' }}
    >
      <div className="timeline-header">
        <h3>{item.title}</h3>
        <span className="timeline-date">{item.date}</span>
      </div>
      <h4 className="timeline-subtitle">{item.subtitle}</h4>
      <div className={`timeline-details ${isExpanded ? 'expanded' : ''}`}>
        <p>{item.details}</p>
        {isExpanded && item.image && (
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <img
              src={item.image}
              alt={`${item.title} Certificate`}
              style={{
                width: '100%',
                maxWidth: '200px',
                height: 'auto',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                marginBottom: '0.75rem',
                objectFit: 'contain'
              }}
            />
            {item.certDescription && (
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.9 }}>{item.certDescription}</p>
            )}
          </div>
        )}
      </div>
      <div className="expand-indicator">
        {isExpanded ? 'Read Less ▲' : 'Read More ▼'}
      </div>
    </div>
  );
};

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    // eslint-disable-next-line react-hooks/immutability
    updateActiveIndex(e.clientY);
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (isDragging) {
        updateActiveIndex(e.clientY);
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  const updateActiveIndex = (clientY) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    let y = clientY - rect.top;
    let MathPercentage = y / rect.height;
    MathPercentage = Math.max(0, Math.min(1, MathPercentage));

    // Calculate index based on percentage
    const maxIndex = Math.max(0, timelineData.length - 1);
    const index = Math.round(MathPercentage * maxIndex);
    setActiveIndex(index);
  };

  return (
    <section id="timeline" className="section timeline-section">
      <h2 className="section-title">Education & Experience</h2>
      <div style={{ display: 'flex', gap: '30px', maxWidth: '800px', margin: '0 auto', minHeight: '200px' }}>

        {/* Left Side Dragger Track */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
          <div
            ref={trackRef}
            onPointerDown={handlePointerDown}
            style={{
              width: '8px',
              background: 'var(--border-color)',
              flex: 1,
              position: 'relative',
              cursor: 'pointer',
              borderRadius: '4px',
              minHeight: '150px'
            }}
          >
            {/* The Draggable Knob */}
            <div
              style={{
                position: 'absolute',
                top: `${timelineData.length > 1 ? (activeIndex / (timelineData.length - 1)) * 100 : 0}%`,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '24px',
                height: '24px',
                backgroundColor: 'var(--primary-color)',
                borderRadius: '50%',
                boxShadow: isDragging ? '0 0 0 6px rgba(37, 99, 235, 0.3)' : '0 0 0 4px rgba(37, 99, 235, 0.2)',
                cursor: isDragging ? 'grabbing' : 'grab',
                transition: isDragging ? 'none' : 'top 0.3s ease, box-shadow 0.2s',
                zIndex: 10
              }}
            />
          </div>
        </div>

        {/* Right Side Content Container */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div key={activeIndex} className="fade-in" style={{ width: '100%' }}>
            <TimelineContent item={timelineData[activeIndex]} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
