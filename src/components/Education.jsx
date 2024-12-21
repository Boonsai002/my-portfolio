import React from 'react';
import AITSImage from '../images/AITS.png';
import ViswasaiImage from '../images/Viswasai.jpg';
import SchoolImage from '../images/school.png';
import '../styles/Education.css';

const Education = () => {
  const educationDetails = [
    {
      degree: "B.Tech",
      major: "Artificial Intelligence and Data Science",
      institution: "Annamacharya Institute of Technology & Sciences",
      year: "2024",
      gpa: "8.7",
      image: AITSImage,
    },
    {
      degree: "Intermediate",
      major: "MPC",
      institution: "Viswasai Jr. College",
      year: "2020",
      gpa: "9.2",
      image: ViswasaiImage,
    },
    {
      degree: "Matriculation",
      major: "SSC",
      institution: "Indian Public School",
      year: "2018",
      gpa: "9.8",
      image: SchoolImage,
    },
  ];

  return (
    <div className="education-container container mt-4">
      {/* Education Title */}
      <div className="text-center mb-4">
        <h1 className="education-title"><b><u>EDUCATION</u></b></h1>
      </div>

      {/* Education Cards Section */}
      <div className="row mb-4">
        {educationDetails.map((edu, index) => (
          <div key={index} className="col-md-12">
            <div className="card shadow">
              <div className="card-body">
                {/* Left Side: Heading and Education Info */}
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="card-title"><u>{edu.degree}</u></h2>
                    <p><strong>Department:</strong> {edu.major}</p>
                    <p><strong>Institution:</strong> {edu.institution}</p>
                    <p><strong>Year of Completion:</strong> {edu.year}</p>
                    <p><strong>GPA:</strong> {edu.gpa}</p>
                  </div>

                  {/* Right Side: Image */}
                  <div className="col-md-6 d-flex justify-content-end">
                    <img src={edu.image} alt={`${edu.institution} Logo`} className="education-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
