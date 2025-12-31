import React from "react";
import "./projects.css";
import { ThreeDCardDemo } from "../test.jsx";
import mindSasBic from "../assets/MIND-SAS-BIC.png";
import portfolio from "../assets/portfolio.png";

const Projects = () => {
  const projects = [
    {
      title: "MIND SAS BIC",
      description: "This is the website of the company Mind SAS BIC, built with react.",
      image: mindSasBic,
      projectLink: "https://www.metalmindsa.com/",
      codeLink: "https://github.com/LuisDavidFajardoH/Mind",
      tags: ["React", "JavaScript"],
      icon: "web",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills, built with React.",
      image: portfolio,
      projectLink: "#",
      codeLink: "#",
      tags: ["React", "JavaScript", "Tailwind"],
      icon: "web",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          A selection of works that demonstrate my technical skills and attention to detail.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ThreeDCardDemo key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;