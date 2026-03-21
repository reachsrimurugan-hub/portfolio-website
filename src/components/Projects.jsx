import React, { useRef, useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Revivo Podcast Website",
      screenshot: "/Podcast List.png",
      screenshots: [
        "/Podcast List.png",
        "public/Podcast Details.png"
      ],
      description: "A premium web platform designed to present and promote podcast content through a clean and engaging interface. Features include episode listing, audio player integration, and responsive design.",
      techStack: ["React", "CSS3", "HTML5", "Vite", "SwiperJs"],
      githubLink: "https://github.com/reachsrimurugan-hub/REVIVO-PODCAST-WEBSITE.git",
      liveDemo: "https://github.com/reachsrimurugan-hub/REVIVO-PODCAST-WEBSITE.git" // Placeholder
    },
    {
      title: "Task Management App",
      screenshot: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop"
      ],
      description: "A full-stack task management application with drag-and-drop features, priority settings, and real-time collaboration. Helps teams stay organized and productive.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubLink: "#",
      liveDemo: "#"
    },
    {
      title: "E-Commerce Dashboard",
      screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
      ],
      description: "Comprehensive analytics dashboard for e-commerce platforms. Visualize sales trends, customer behavior, and inventory management with interactive charts and reports.",
      techStack: ["React", "Chart.js", "Firebase", "Styled Components"],
      githubLink: "#",
      liveDemo: "#"
    }
  ];

  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainer.current && !activeProject) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainer.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [activeProject]);

  const openModal = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div style={{ position: 'relative' }}>
        <button className="scroll-btn left" onClick={scrollLeft}>&#8249;</button>

        <div ref={scrollContainer} className="projects-scroll-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-flip-card"
              onClick={() => openModal(project)}
            >
              <div className="project-flip-card-inner">
                {/* Front Side */}
                <div className="project-flip-card-front">
                  <div className="project-image-wrapper">
                    <img src={project.screenshot} alt={project.title} />
                    <div className="project-overlay">
                      <h3>{project.title}</h3>
                      <p>Hover to see stack</p>
                      <span className="click-to-see">Click for details</span>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="project-flip-card-back">
                  <h3>Tech Stack</h3>
                  <div className="tech-stack">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{project.description.substring(0, 80)}...</p>
                  <button className="view-details-btn">View Full Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>&#8250;</button>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>

            <div className="modal-header">
              <h2>{activeProject.title}</h2>
              <div className="modal-tech-stack">
                {activeProject.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-screenshots">
                {activeProject.screenshots.map((src, i) => (
                  <img key={i} src={src} alt={`${activeProject.title} screen ${i + 1}`} />
                ))}
              </div>

              <div className="modal-content-details">
                <h3>About the Project</h3>
                <p className="modal-description">{activeProject.description}</p>

                <div className="modal-actions">
                  <a href={activeProject.liveDemo} target="_blank" rel="noopener noreferrer" className="modal-btn primary">
                    Live Demo
                  </a>
                  <a href={activeProject.githubLink} target="_blank" rel="noopener noreferrer" className="modal-btn secondary">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
