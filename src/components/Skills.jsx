import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills-container container mt-4">
      <h2 className="skills-heading text-center mb-4"><b><u>SKILLS</u></b></h2>

      {/* Skill Cards */}
      <div className="row">
        {/* 1st Card: Programming Languages */}
        <div className="col-md-12 mb-4">
          <div className="card skill-card shadow">
            <div className="card-body">
              <h5 className="card-title"><u>Programming Languages</u></h5>
              <ul className="skill-list">
                <li><strong>Python:</strong> I specialize in solving problems using Data Structures & Algorithms in Python. I also worked in using Python for Machine Learning, Data Science, and web development projects.</li>
                <li><strong>Java:</strong> I have worked on various projects in Java, with a strong focus on Object-Oriented Programming (OOP). I gained hands-on experience building applications and improving my understanding of data structures and algorithms.</li>
                <li><strong>C:</strong> This is the first programming language I learned, where I developed my foundational understanding. I solved basic problems such as prime numbers, Fibonacci series, and number reversal etc...</li>
                <li><strong>JavaScript:</strong> I have basic knowledge of JavaScript, focusing on its fundamentals and its use in front-end web development.</li>
                <li><strong>C++:</strong> I have a basic understanding of C++, which I explored primarily through learning OOP concepts and solving algorithm-based problems.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2nd Card: Frameworks and Technologies */}
        <div className="col-md-12 mb-4">
          <div className="card skill-card shadow">
            <div className="card-body">
              <h5 className="card-title"><u>Frameworks and Technologies</u></h5>
              <ul className="skill-list">
                <li><strong>Django:</strong> Used in building full-stack web applications and projects with a strong focus on Python-based backend development.</li>
                <li><strong>React:</strong> Experienced in using React for building interactive user interfaces, focusing on front-end development and state management with hooks.</li>
                <li><strong>Python Frameworks:</strong>
                  <ul>
                    <li><strong>NumPy:</strong> Used in various Machine Learning programs for efficient numerical computations.</li>
                    <li><strong>Matplotlib:</strong> Utilized for creating visualizations in ML projects to display data insights.</li>
                    <li><strong>Scikit-learn:</strong> Applied in Machine Learning programs for classification, regression, and clustering tasks.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3rd Card: Technologies */}
        <div className="col-md-12 mb-4">
          <div className="card skill-card shadow">
            <div className="card-body">
              <h5 className="card-title"><u>Technologies</u></h5>
              <ul className="skill-list">
                <li><strong>Machine Learning:</strong> Learned various algorithms in supervised, unsupervised, and reinforcement learning, and applied them in practical scenarios.</li>
                <li><strong>AI:</strong> Gained knowledge in different AI models and algorithms, including decision trees, neural networks, and evolutionary algorithms.</li>
                <li><strong>Data Visualization:</strong> Proficient in using Matplotlib for visualizing complex data in Python, helping to extract insights effectively.</li>
                <li><strong>NLP:</strong> I have a basic understanding of Natural Language Processing concepts and techniques such as tokenization and text classification.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4th Card: Others */}
        <div className="col-md-12 mb-4">
          <div className="card skill-card shadow">
            <div className="card-body">
              <h5 className="card-title"><u>Others</u></h5>
              <ul className="skill-list">
                <li><strong>Database:</strong> Experience with <b>MySQL</b> for managing and querying relational databases in various projects.</li>
                <li><strong>Version Control:</strong> Proficient in using <b>Git</b> for version control, collaborating on projects with teams using GitHub.</li>
                <li><strong>Web Development:</strong> Basic knowledge of <b>HTML, CSS, and Bootstrap</b> for front-end web development.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5th Card: Tools and Editors */}
        <div className="col-md-12 mb-4">
          <div className="card skill-card shadow">
            <div className="card-body">
              <h5 className="card-title"><u>Tools and Editors</u></h5>
              <ul className="skill-list">
                <li><strong>VS Code:</strong> Primary code editor used for most development tasks due to its extensibility and support for multiple languages and frameworks.</li>
                <li><strong>Jupyter Notebook:</strong> Widely used for writing Python code, especially in data science and machine learning projects.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
