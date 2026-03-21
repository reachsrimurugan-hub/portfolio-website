import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update Scroll Progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll * 100);

      // Active Section Highlight (Scrollspy)
      const sections = ['intro', 'timeline', 'certificates', 'projects', 'contact'];
      let current = 'intro';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset to trigger active state nicely
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <nav className="navbar">
        <div className="nav-brand" onClick={() => scrollTo('intro')}>SRI.</div>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li className={activeSection === 'intro' ? 'active' : ''} onClick={() => scrollTo('intro')}>Home</li>
            <li className={activeSection === 'timeline' ? 'active' : ''} onClick={() => scrollTo('timeline')}>Journey</li>
            <li className={activeSection === 'certificates' ? 'active' : ''} onClick={() => scrollTo('certificates')}>Certificates</li>
            <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollTo('projects')}>Projects</li>
            <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollTo('contact')}>Contact</li>
          </ul>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1001 }}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
