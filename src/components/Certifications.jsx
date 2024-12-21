import React from 'react';
import '../styles/Certifications.css'; // Ensure you have this file for styling

const Certifications = () => {
  return (
    <div className="certifications-container container mt-4">
      <h2 className="text-center"><b><u>CERTIFICATIONS</u></b></h2>

      {/* Certification Cards */}
      <div className="row">
        {/* Joy of Computing Using Python */}
        <div className="col-md-12 mb-4">
          <div className="card certification-card shadow">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span className="certification-title"><b><u>Joy of Computing Using Python</u></b></span>
              <span className="certification-issuer">NPTEL</span>
            </div>
            <div className="card-body">
              <p>
                Learned the fundamentals of Python programming, data structures, algorithms, and problem-solving techniques to build real-world applications.
              </p>
              <a href="https://www.linkedin.com/posts/boon-sai-kalathur_certified-joy-of-computing-using-python-activity-7136709566049775616-8v1r?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/* Public Speaking */}
        <div className="col-md-12 mb-4">
          <div className="card certification-card shadow">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span className="certification-title"><b><u>Public Speaking</u></b></span>
              <span className="certification-issuer">NPTEL</span>
            </div>
            <div className="card-body">
              <p>
                Mastered effective communication, presentation skills, and confidence-building techniques for professional and academic speaking engagements.
              </p>
              <a href="https://www.linkedin.com/posts/boon-sai-kalathur_cmpleted-public-speaking-from-nptel-activity-7136708894147432449-WpjT?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/* Introduction to Programming using Java */}
        <div className="col-md-12 mb-4">
          <div className="card certification-card shadow">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span className="certification-title"><b><u>Introduction to Programming using Java</u></b></span>
              <span className="certification-issuer">Microsoft</span>
            </div>
            <div className="card-body">
              <p>
                Gained a strong foundation in Java programming, covering object-oriented programming, data types, control structures, and software design principles.
              </p>
              <a href="https://www.linkedin.com/posts/boon-sai-kalathur_was-aware-of-oops-and-other-concepts-in-java-activity-7086522783878316032-UXpW?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/* Azure AI Fundamentals */}
        <div className="col-md-12 mb-4">
          <div className="card certification-card shadow">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span className="certification-title"><b><u>Azure AI Fundamentals</u></b></span>
              <span className="certification-issuer">Microsoft</span>
            </div>
            <div className="card-body">
              <p>
                Explored AI concepts, including machine learning, natural language processing, and computer vision, with hands-on Azure tools and services.
              </p>
              <a href="https://www.linkedin.com/posts/boon-sai-kalathur_artificialintelligence-python-microsoft-activity-7077555815582224384-J5lt?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
