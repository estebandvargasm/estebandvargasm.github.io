import React from "react";
import { ThreeDCardDemo } from "../test.jsx";
import mindSasBic from "../assets/MIND-SAS-BIC.png";
import portfolio from "../assets/portfolio.png";
import envios99 from "../assets/99envios.png";

function Projects() {
  const projects = [
    {
      title: "MIND SAS BIC",
      description: "Corporate site for Mind SAS BIC built in React with responsive layouts, clear service storytelling, and fast-loading media to improve lead capture.",
      image: mindSasBic,
      projectLink: "https://www.metalmindsa.com/",
      codeLink: "https://github.com/LuisDavidFajardoH/Mind",
      tags: ["React", "JavaScript"],
      icon: "web",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio crafted with React and Tailwind CSS, featuring smooth scroll anchors, animated UI, and project cards that highlight tech stacks and links.",
      image: portfolio,
      projectLink: "https://estebandvargasm.github.io/portfolio/",
      codeLink: "https://github.com/estebandvargasm/portfolio",
      tags: ["React", "JavaScript", "Tailwind"],
      icon: "web",
    },
    {
      title: "99 Envios",
      description: "Version 2 redesign of 99 Envios landing page, featuring enhanced user experience with modern React architecture, improved navigation flow, and optimized performance to boost customer engagement.",
      image: envios99,
      projectLink: "https://v2.99envios.com/",
      codeLink: "https://github.com/estebandvargasm/99envios.com",
      tags: ["React", "JavaScript"],
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
}

export default Projects;