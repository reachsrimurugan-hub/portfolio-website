import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Intro />
        <Timeline />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Designed by Srimurugan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
