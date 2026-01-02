import React from "react";
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
      projectLink: "https://estebandvargasm.github.io/portfolio/",
      codeLink: "https://github.com/estebandvargasm/portfolio",
      tags: ["React", "JavaScript", "Tailwind"],
      icon: "web",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20 text-slate-100 sm:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-extrabold text-slate-50 sm:text-4xl">Projects</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-300">
          A selection of works that demonstrate my technical skills and attention to detail.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ThreeDCardDemo key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;