import React from 'react';
import '../styles/Experience.css'; // Ensure you have this file for styling

const Experience = () => {
  return (
    <div className="experience-container container mt-4">
      <h2 className="text-center mb-4"><b><u>EXPERIENCE</u></b></h2>

      {/* Data Analytics Internship Card */}
      <div className="card experience-card shadow">
        <div className="card-header">
          <div className="header-left">
            <h5 className="company-name">ProWorks</h5>
          </div>
          <div className="header-center">
            <p className="internship-type">Virtual Internship</p>
          </div>
          <div className="header-right">
            <p className="duration">Jan 2024 - Jun 2024</p>
          </div>
        </div>
        <div className="card-body">
        <ul className="card-text">
          <li>
            <strong>Interactive Dashboards: </strong> 
            Designed and maintained dashboards using Python libraries (Matplotlib, Seaborn), improving data visualization efficiency by 30%.
          </li>
          <li>
            <strong>Data Analysis: </strong> 
            Performed in-depth analysis to uncover actionable insights, leading to improved decision-making processes.
          </li>
          <li>
            <strong>Automation: </strong> 
            Automated data preprocessing workflows using Python scripts, reducing manual data handling time by 15%.
          </li>
          <li>
            <strong>Stakeholder Reporting: </strong> 
            Delivered key findings through detailed reports and visual presentations, enhancing communication with stakeholders.
          </li>
        </ul>

        </div>
      </div>
    </div>
  );
};

export default Experience;
