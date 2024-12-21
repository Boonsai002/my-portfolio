import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing the icons from react-icons
import '../styles/Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation to the Home page
  const goToHomePage = () => {
    navigate('/home'); // Navigate to the Home page
  };

  // Function to handle navigation to Education, Skills, etc.
  const goToPage = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="sidebar d-flex flex-column align-items-center">
      {/* Top Division */}
      <div>
        <button className="button-54" onClick={goToHomePage}>Home</button> {/* Home button */}
      </div>
      <div className="top-division text-center mb-3">
        <img 
          src={require('../images/ProfilePic.jpeg')}
          alt="profile-pic" 
          className="profile-pic rounded-circle mb-3"
          style={{ width: '200px', height: '200px', objectFit: 'cover' }} // Adjust the size and fit
        />
        <h2 className="name"><b><u>K.BOON SAI</u></b></h2>
        <p className="contact"><u>Phone:</u> +91 9110314684 | <u>Email:</u> boonsai2002@example.com</p>
        <p className="contact"><u>Address:</u> 2-36, Marrimandha, Papanaidupeta, Tirupati (District), Andhra Pradesh, -517526</p>
        
      </div>

      {/* Horizontal Line */}
      <div className="divider w-75 my-3"></div>

      {/* Middle Division with Sidebar buttons */}
      <div className="middle-division d-flex flex-column align-items-center mb-3">
        <button className="sidebar-button w-150" onClick={() => goToPage('education')}>Education</button>
        <button className="sidebar-button w-150" onClick={() => goToPage('skills')}>Skills</button>
        <button className="sidebar-button w-150" onClick={() => goToPage('experience')}>Experience</button>
        <button className="sidebar-button w-150" onClick={() => goToPage('projects')}>Projects</button>
        <button className="sidebar-button w-150" onClick={() => goToPage('certifications')}>Certifications</button>
      </div>

      {/* Horizontal Line */}
      <div className="divider w-75 my-3"></div>

      {/* Bottom Division with Social Media Icons */}
      <div className="bottom-division social-media-links">
        <a href="https://www.linkedin.com/in/boon-sai-kalathur/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/Boonsai002" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://x.com/BoonSai_02" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://www.instagram.com/boonsai_2002/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
