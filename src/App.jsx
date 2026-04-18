import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Certificates from './components/Certificates';
import LabProcess from './components/LabProcess';
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
        <LabProcess />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span style={{ color: "white" }}>Designed by Srimurugan.</span>{" "}
          <span style={{ color: "#115E39" }}>All rights reserved.</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
