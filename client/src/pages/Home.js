import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Scene3D from '../components/Scene3D';
import './Home.css';

const Home = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/portfolio')
      .then(res => res.json())
      .then(data => setPortfolioData(data))
      .catch(err => console.log('API Error:', err));
  }, []);

  const skills = {
    frontend: ['React', 'HTML', 'CSS', 'JavaScript'],
    backend: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
    languages: ['Java', 'Python', 'C'],
    tools: ['Git', 'Linux', 'VS Code']
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <Scene3D />
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="hero-greeting">Hi there, I'm</p>
            <h1 className="hero-name">
              <span className="gradient-text">Gopichand Jalli</span>
            </h1>
            <h2 className="hero-title">
              Full Stack Developer <span className="ampersand">&</span> AI Enthusiast
            </h2>
            <p className="hero-description">
              Building innovative web applications with MERN stack and exploring the frontiers of AI. 
              Passionate about creating seamless user experiences and solving complex problems.
            </p>
            <div className="hero-cta">
              <motion.a 
                href="#about"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.a>
              <motion.a 
                href="/contact"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <div className="about-grid">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                I'm a Computer Science student at <strong>Vijaya Engineering College</strong> with a 
                passion for building dynamic web applications and exploring AI technologies.
              </p>
              <p>
                With expertise in the <strong>MERN stack</strong>, I create full-stack applications that 
                combine elegant design with robust functionality. My journey includes developing student 
                progress trackers, AI-powered time management systems, and secure data protection platforms.
              </p>
              <p>
                I've completed certifications in <strong>Generative AI</strong> from Microsoft and LinkedIn, 
                and an advanced AI program accredited by STEM.org. Currently, I'm focused on mastering 
                modern web technologies and contributing to innovative projects.
              </p>
            </motion.div>

            <motion.div 
              className="about-stats"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-card glass-card">
                <h3>7.24</h3>
                <p>CGPA</p>
              </div>
              <div className="stat-card glass-card">
                <h3>3+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-card glass-card">
                <h3>94.4%</h3>
                <p>Intermediate</p>
              </div>
              <div className="stat-card glass-card">
                <h3>4+</h3>
                <p>Certificates</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                className="skill-category glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <div className="skill-tags">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>

          <div className="timeline">
            <motion.div 
              className="timeline-item glass-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2021 - 2025</span>
                <h3>B.Tech in Computer Science</h3>
                <p className="institution">Vijaya Engineering College, Khammam</p>
                <p className="grade">CGPA: 7.24</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item glass-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2019 - 2021</span>
                <h3>Intermediate</h3>
                <p className="institution">Velocity Junior College</p>
                <p className="grade">Percentage: 94.4%</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item glass-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2018 - 2019</span>
                <h3>Matriculation</h3>
                <p className="institution">Z P High School</p>
                <p className="grade">Percentage: 93%</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
