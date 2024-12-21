import React from 'react';
import '../styles/HomePage.css'; // Ensure you have this file for styling

const HomePage = () => {
  return (
    <div className="home-page-container container mt-4">
      {/* Welcome Text at the top */}
      <div className="text-center mb-4">
        <h1 className="welcome-text"><b><u>WELCOME!</u></b></h1>
      </div>

      {/* About Me Section */}
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card skill-card shadow">
            <div className="card-body">
              <h5 className="card-title heading-top-left"><u>About Me</u></h5>
              <ul className="card-text">
                <li>Recent graduate with a Bachelor's degree in Artificial Intelligence and Data Science.</li>
                <li>Passionate about AI, Machine Learning, and Deep Learning.</li>
                <li>Enjoy problem-solving through programming, particularly in Python.</li>
                <li>Love working on innovative projects to apply knowledge and grow professionally.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Areas of Interest Section */}
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card skill-card shadow">
            <div className="card-body">
              <h5 className="card-title heading-top-left"><u>Areas of Interest</u></h5>
              <ul className="card-text">
                <li>Software Development (with a focus on Python and Java).</li>
                <li>Full-stack Development (with a foundation in front-end and back-end technologies).</li>
                <li>Exploring AWS and DevOps to build scalable and efficient systems.</li>
                <li>Interested in continuous learning and improving my skills in these areas.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Publications Section */}
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card skill-card shadow">
            <div className="card-body">
              <h5 className="card-title heading-top-left"><u>Publications</u></h5>
              <p className="card-text">
                Titled "A Novel Approach to Intelligent Crop Recommendations," published in the 
                <strong> International Journal of Scientific Research in Science and Technology (IJSRST), Volume 11, Issue 11, March-April 2024</strong>.
              </p>
              <p className="card-text">
                This research explores innovative methodologies for providing intelligent crop recommendations, 
                aiming to enhance agricultural productivity and sustainability. The study delves into various 
                techniques and algorithms that help farmers make data-driven decisions for better crop management.
              </p>
              <p className="card-text">
                <strong>Reference:</strong> IJSRST/Certificate/Volume 11/Issue 11/12315
              </p>
              <p className="card-text">
                <a href="https://lnkd.in/gMURX8Xd" target="_blank" rel="noopener noreferrer">
                  View Paper
                </a>
                <br />
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7214457551315197952/" target="_blank" rel="noopener noreferrer">
                  Publication Certificate
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card skill-card shadow">
            <div className="card-body">
              <h5 className="card-title heading-top-left"><u>Achievements</u></h5>
              <ul className="card-text">
                <li>Active problem-solving on LeetCode: <a href="https://leetcode.com/u/boonsai2002/" target="_blank" rel="noopener noreferrer">My LeetCode Profile</a></li>
                <li>Consistently enhancing proficiency in Python and Data Structures & Algorithms.</li>
                <li>Certifications in Python, Java, and Azure Basics.</li>
                <li>Committed to continuous improvement and skill development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
