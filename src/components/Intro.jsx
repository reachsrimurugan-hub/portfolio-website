import React, { useState, useEffect } from 'react';

const Intro = () => {
  const roles = [
    "Computer Science Student",
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Creative Problem Solver"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    // Calculate a small offset from the center of the screen
    const x = (clientX / window.innerWidth - 0.5) * 30; // max 15px offset
    const y = (clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section
      id="intro"
      className="section intro-section fade-in"
      onMouseMove={handleMouseMove}
    >
      <div className="glow-effect" style={{
        transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`
      }}></div>

      <div className="intro-content" style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}>
        <h1 className="name-title">Hi, I'm <span className="highlight">Sri</span></h1>
        <h2 className="role-title">
          <span key={currentRoleIndex} className="carousel-text fade-in-text">
            {roles[currentRoleIndex]}
          </span>
        </h2>
        <p className="intro-text">
          Passionate about building scalable software and creating great user experiences.
          I love tackling complex problems and learning new technologies.
        </p>
        <div className="skills-container">
          <h3>Skills</h3>
          <div className="skills-tags">
            <span className="skill-tag">UI and UX</span>
            <span className="skill-tag">React JS</span>
            <span className="skill-tag">Git and GitHub</span>
            <span className="skill-tag">Python</span>
          </div>
        </div>

        <div className="intro-cta" style={{ marginTop: '2.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Let’s Collaborate on Your Next Idea</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>Response within 24 hours.</p>
          <a href="#contact" className="btn-link" style={{
            display: 'inline-block',
            padding: '0.8rem 2rem',
            fontSize: '1rem',
            fontWeight: '600'
          }}>
            Get In Touch
          </a>
        </div>
      </div>
      <div className="intro-image-container slide-in" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}>
        {/* Profile Image replacing JD placeholder */}
        <div className="profile-placeholder" style={{
          boxShadow: `${-mousePos.x}px ${-mousePos.y}px 25px -5px rgba(37, 99, 235, 0.3)`,
          overflow: 'hidden',
          background: 'transparent'
        }}>
          <img
            src="/profile.jpeg"
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
