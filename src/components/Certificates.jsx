import React, { useEffect, useRef } from 'react';

const Certificates = () => {
  const scrollerRef = useRef(null);

  const certificates = [
    {
      title: "Developing Frontend Apps with React",
      issuer: "Coursera",
      description: "Learn to build responsive and interactive user interfaces using React.",
      image: "/images/react.png"
    },
    {
      title: "System Administration and IT Infrastructure Services",
      issuer: "Google",
      description: "Utilize systems administartion knowledge to plan and improve processes of IT environments.",
      image: "/images/system.png"
    },
    {
      title: "Foundations of Devops and Git",
      issuer: "packt",
      description: "The fundamental principles of DevOps and Git.",
      image: "/images/devops.png"
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      description: "fundamental-level understanding of the AWS Cloud.",
      image: "/images/aws.png"
    },
    {
      title: "Introduction To Operating Systems",
      issuer: "NPTEL",
      description: "fundamental-level understanding of the Operating Systems.",
      image: "/images/nptel.png"

    }
  ];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

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
  }, []);

  return (
    <section id="certificates" className="section certificates-section">
      <h2 className="section-title">Certificates & Badges</h2>
      <div
        ref={scrollerRef}
        className="certificate-carousel"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: '1rem',
          padding: '1rem 0',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="card certificate-card"
            style={{
              flex: '0 0 400px',
              minWidth: '380px',
              textAlign: 'center',
              padding: '0.5rem',
              background: 'transparent',
              boxShadow: 'none',
              border: 'none'
            }}
          >
            <img
              src={cert.image}
              alt={`${cert.title} Certificate`}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'contain',
                borderRadius: '0',
                marginBottom: '0.75rem',
                border: 'none',
                background: 'transparent'
              }}
            />
            <div style={{ textAlign: 'left', color: 'var(--text-color, #fff)', fontSize: '0.9rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{cert.title}</strong>
              <small style={{ display: 'block', opacity: 0.8 }}>{cert.issuer}</small>
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.9 }}>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
