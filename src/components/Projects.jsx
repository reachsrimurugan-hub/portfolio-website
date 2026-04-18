import React, { useRef, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const scrollerRef = useRef(null);

  const projects = [
    {
      title: "Revivo Podcast Website",
      screenshot: "/images/podcast-list.png",
      githubLink: "https://github.com/reachsrimurugan-hub/REVIVO-PODCAST-WEBSITE.git"
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
        // Reset to 0 when it hits the end
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
    <section id="projects" className="section projects-section" style={{ backgroundColor: 'transparent' }}>
      <h2 className="section-title">
        <span style={{ color: 'var(--text-main)' }}>Featured </span><span style={{ color: 'var(--text-muted)' }}>Projects</span>
      </h2>
      <div
        ref={scrollerRef}
        className="projects-carousel"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: '2rem',
          padding: '1rem 0',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card project-card-transparent"
            aria-label={`View ${project.title} on GitHub`}
            style={{
              flex: '0 0 400px',
              minWidth: '380px',
              textAlign: 'center',
              padding: '0',
              background: 'transparent',
              boxShadow: 'none',
              border: 'none',
              textDecoration: 'none'
            }}
          >
            <img 
              src={project.screenshot} 
              alt={`Screenshot of ${project.title}`} 
              className="project-image-transparent" 
              loading="lazy" 
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem',
                border: 'none',
                background: 'transparent'
              }}
            />
            <div className="project-text-transparent" style={{ textAlign: 'left', color: 'var(--text-main)', fontSize: '0.95rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '1.25rem', color: 'var(--text-main)' }}>{project.title}</strong>
              <small style={{ display: 'block', fontWeight: '600', color: 'var(--primary-color)', fontSize: '0.95rem' }}>View Code &rarr;</small>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
