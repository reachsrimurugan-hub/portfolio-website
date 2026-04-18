import React, { useState } from 'react';
import './LabProcess.css';

const processes = [
  {
    id: 1,
    name: 'init()',
    icon: (
      <svg className="lab-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75h4.5m-3 0v4.204a2.25 2.25 0 01-.659 1.591l-3.328 3.328A2.25 2.25 0 006.75 16.5v2.25a2.25 2.25 0 002.25 2.25h6a2.25 2.25 0 002.25-2.25V16.5a2.25 2.25 0 00-.659-1.591l-3.328-3.328a2.25 2.25 0 01-.659-1.591V3.75h.375" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'synthesize()',
    icon: (
      <svg className="lab-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2M8.5 2h7M14.5 16h-5" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'refine()',
    icon: (
      <svg className="lab-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'deploy()',
    icon: (
      <svg className="lab-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    )
  },
  {
    id: 5,
    name: 'repeat()',
    icon: (
      <svg className="lab-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const LabProcess = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="lab-process-section">
      <div className="lab-process-container">
        {processes.map((item, index) => (
          <div 
            key={item.id}
            className={`lab-item ${hoveredIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="lab-item-content">
              {item.icon}
              <span className="lab-item-text">{item.name}</span>
            </div>
            <div className="lab-item-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LabProcess;
