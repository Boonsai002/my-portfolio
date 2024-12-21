import React from 'react';
import '../styles/Projects.css';

// Import images
import FakeNewsImage from '../images/FakeNews.png';
import MovieReviewImage from '../images/MovieReview.png';
import ToDoListImage from '../images/ToDoList.png';
import CropRecommendationImage from '../images/CropRecommendation.png';
import LibraryManagementImage from '../images/LibraryManagement.png';
import EmailSystemImage from '../images/EmailSystem.png';
import MilkBoilImage from '../images/MilkBoil.png';

const projects = [
  {
    title: "Crop Recommendation System",
    description:
      "A system to help farmers make data-driven decisions on crop selection using Random Forest. The project utilizes environmental and soil parameters for accurate recommendations and provides insights to improve productivity.",
    technologies: "Machine Learning, Random Forest",
    languages: "Python",
    image: CropRecommendationImage,
    link: "https://ijsrst.com/IJSRST24111180",
  },
  {
    title: "Milk Boiling Detection System",
    description:
      "Automates the detection of milk’s boiling stages using CNN and OpenCV. Features real-time video processing and intelligent alert systems to notify users at critical points.",
    technologies: " Convolutional neural network (Machine Learning), OpenCV",
    languages: "Python",
    image: MilkBoilImage,
  },
  {
    title: "Sentiment Analysis using IMDb Movie Reviews Dataset",
    description:
      "Performs sentiment analysis on IMDb movie reviews using the Naive Bayes classifier. Processes input reviews to predict positive or negative sentiments.",
    technologies: "Naive Bayes Classifier",
    languages: "Python",
    image: MovieReviewImage,
  },
  {
    title: "Email System",
    description:
      "A functional email system built with Java. It allows sending, receiving, and managing emails with user authentication and search functionalities.",
    technologies: "Java",
    languages: "Java",
    image: EmailSystemImage,
  },
  {
    title: "To-Do List",
    description:
      "A GUI-based task management application using Python's Tkinter. Provides a simple interface for adding, updating, and deleting tasks.",
    technologies: "Tkinter",
    languages: "Python",
    image: ToDoListImage,
  },
  {
    title: "Fake News Detection",
    description:
      "A system to identify and classify fake news articles using machine learning techniques. It uses labeled datasets for training to differentiate fake and real news.",
    technologies: "Machine Learning",
    languages: "Python",
    image: FakeNewsImage,
  },
  {
    title: "Library Management System",
    description:
      "Streamlines library operations with catalog management, check-in/out processes, and user activity tracking. Built with C++.",
    technologies: "C++",
    languages: "C++",
    image: LibraryManagementImage,
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Projects Heading */}
      <h2 className="projects-title"><b><u>PROJECTS</u></b></h2>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`${project.title} Thumbnail`}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">
                <strong>Technologies Used:</strong> {project.technologies}
              </p>
              <p className="project-languages">
                <strong>Languages Used:</strong> {project.languages}
              </p>
              {project.link && (
                <p className="project-link">
                  <strong>Publication Link: </strong>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.link}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
