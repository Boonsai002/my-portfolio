import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import HomePage from './components/HomePage';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* First Division: Sidebar */}
        <Sidebar />
        
        {/* Second Division: Content Area */}
        <div className="content-container">
          <Routes>
            {/* Default route redirects to "/home" */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            {/* Define routes and render the routed components inside ContentArea */}
            <Route path="/home" element={<ContentArea content={<HomePage />} />} />
            <Route path="/education" element={<ContentArea content={<Education />} />} />
            <Route path="/skills" element={<ContentArea content={<Skills />} />} />
            <Route path="/experience" element={<ContentArea content={<Experience />} />} />
            <Route path="/projects" element={<ContentArea content={<Projects />} />} />
            <Route path="/certifications" element={<ContentArea content={<Certifications />} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
