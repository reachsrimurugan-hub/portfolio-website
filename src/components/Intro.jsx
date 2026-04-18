import React, { useState, useEffect, useRef } from 'react';

const Intro = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let mouse = { x: width / 2, y: height / 2 };
    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse);



    class Entity {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3; // Slower speed
        this.vy = (Math.random() - 0.5) * 0.3;
        this.color = '#22c55e'; // Subtle neon green
        this.type = Math.random() > 0.5 ? 'circle' : 'hexagon';
        this.size = Math.random() * 15 + 8; // Smaller sizes
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          this.x -= (dx / dist) * 0.10;
          this.y -= (dy / dist) * 0.10;
        }

        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;

        this.rotation += this.rotSpeed;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.25; // Minimal opacity
        
        ctx.beginPath();
        if (this.type === 'circle') {
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        } else if (this.type === 'hexagon') {
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            if (i === 0) ctx.moveTo(Math.cos(angle) * this.size, Math.sin(angle) * this.size);
            else ctx.lineTo(Math.cos(angle) * this.size, Math.sin(angle) * this.size);
          }
          ctx.closePath();
        }
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Fewer entities for a cleaner, minimal interface
    const entities = Array.from({ length: 12 }, () => new Entity());

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      entities.forEach(ent => {
        ent.update();
        ent.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const roles = [
    "Full Stack Developer",
    "UI/UX Enthusiast"
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
      style={{ position: 'relative' }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div className="glow-effect" style={{
        transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
        zIndex: 1
      }}></div>

      <div className="intro-content" style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`, zIndex: 2, position: 'relative' }}>
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
      <div className="intro-image-container slide-in" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, zIndex: 2, position: 'relative' }}>
        {/* Profile Image replacing JD placeholder */}
        <div className="profile-placeholder" style={{
          boxShadow: `${-mousePos.x}px ${-mousePos.y}px 25px -5px rgba(34, 197, 94, 0.45)`,
          overflow: 'hidden',
          background: 'transparent'
        }}>
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
