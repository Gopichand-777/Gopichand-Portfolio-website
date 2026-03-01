import React, { useEffect } from 'react'; // {useState } should import for setting portfolio data
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  // const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    // fetch('http://localhost:5000/api/portfolio')
    //   .then(res => res.json())
    //   .then(data => setPortfolioData(data))
    //   .catch(err => console.log('API Error:', err));
  }, []);

  const projects = [
  {
  id: 1,
  title: "Personal Portfolio Website",
  date: "Feb 2026",
  description: "A fully responsive personal portfolio website built using React. Showcases projects, skills, and contact functionality with a clean UI and modern design. Optimized for performance and deployed for public access.",
  technologies: ["JavaScript", "React", "CSS", "HTML"],
  features: [
    "Responsive design for mobile, tablet, and desktop",
    "Smooth scrolling and interactive UI animations",
    "Contact form integration with email functionality",
    "Deployed using GitHub Pages"
  ],
  link: "#",
  github: "https://github.com/Gopichand-777"
  },

   {
      id: 2,
      title: "Student Progress Tracker",
      date: "October 2025",
      description: "A comprehensive web application designed to help students track their academic progress, manage tasks, and avoid procrastination. Features include interactive dashboards, progress analytics, and productivity tools.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      features: [
        "Real-time progress tracking",
        "Interactive analytics dashboard",
        "Task management system",
        "Productivity insights"
      ],
      link: "#",
      github: "https://github.com/Gopichand-777"
    },
    {
      id: 3,
      title: "TaskBuddy - AI Powered Time Management",
      date: "August 2025",
      description: "An intelligent time management system powered by Google's Gemini 1.5 Flash. TaskBuddy helps students plan study sessions, set smart reminders, and prioritize tasks using AI-driven insights.",
      technologies: ["Python", "Google Gemini API", "Flask"],
      features: [
        "AI-powered task prioritization",
        "Smart study session planning",
        "Intelligent reminders",
        "Personalized productivity tips"
      ],
      link: "#",
      github: "https://github.com/Gopichand-777"
    },
    {
      id: 4,
      title: "Searchable Data Protection for Scholarly Big Data",
      date: "March 2025",
      description: "A secure web-based platform for managing scholarly big data with advanced encryption. Implements searchable encryption allowing keyword-based queries over encrypted data while maintaining security.",
      technologies: ["Java", "JSP", "MySQL", "Encryption Algorithms"],
      features: [
        "Searchable encryption",
        "Keyword-based queries",
        "Secure data storage",
        "Access control system"
      ],
      link: "#",
      github: "https://github.com/Gopichand-777"
    },
 
  ];

  const certifications = [
    {
      title: "Naukri Campus Young Turks 2025",
      issuer: "Naukri Campus",
      date: "Sep 2025",
      description: "Merit Certificate for clearing Round 1 and Round 2"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      date: "Sep 2025",
      description: "Foundational skills in generative AI concepts and applications"
    },
    {
      title: "AI and GenAI Mastery",
      issuer: "MySpark Academy (STEM.org Accredited)",
      date: "Jul 2025",
      description: "Comprehensive program on AI, LLMs, and AI-powered assistants"
    },
    {
      title: "Python Programming",
      issuer: "NDSC",
      date: "Mar 2025",
      description: "Online skilling course completion"
    }
  ];

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">Projects & Achievements</span>
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building innovative solutions with modern technologies
          </motion.p>
        </div>
      </section>

      <section className="projects-section section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-header">
                  <span className="project-number">0{project.id}</span>
                  <span className="project-date">{project.date}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="certifications-section section">
        <div className="container">
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="cert-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="cert-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 15l-3 3-3-3"></path>
                    <path d="M12 2v13"></path>
                    <path d="M21 15l-3 3-3-3"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
                <span className="cert-date">{cert.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="achievements-section section">
        <div className="container">
          <h2 className="section-title">Extra Curricular</h2>
          <div className="achievements-grid">
            <motion.div
              className="achievement-card glass-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="achievement-badge">🏆</div>
              <h3>Best Coordinator - Avishkar2k25</h3>
              <p>March 2025</p>
              <p className="achievement-desc">
                Led the Avishkar program, mentored junior students, and managed design responsibilities
              </p>
            </motion.div>

            <motion.div
              className="achievement-card glass-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="achievement-badge">⭐</div>
              <h3>Best Class Representative</h3>
              <p>2021 - 2025</p>
              <p className="achievement-desc">
                Served as class representative, developing leadership and management skills
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
