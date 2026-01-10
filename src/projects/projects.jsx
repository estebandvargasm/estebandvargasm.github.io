import React from "react";
import { ThreeDCardDemo } from "../test.jsx";
import mindSasBic from "../assets/MIND-SAS-BIC.png";
import portfolio from "../assets/portfolio.png";
import envios99 from "../assets/99envios.png";

function generateProjectSchema(project) {
  const baseSchema = {
    "@context": "https://schema.org",
    "name": project.title,
    "description": project.description,
    "url": project.projectLink,
    "author": {
      "@id": "https://estebandvargasm.github.io/#person",
    },
  };

  // Proyectos con código público
  if (project.schemaType === "SoftwareSourceCode") {
    return {
      ...baseSchema,
      "@type": "SoftwareSourceCode",
      programmingLanguage: project.tags,
      ...(project.codePublic && project.codeLink && {
        codeRepository: project.codeLink,
      }),
    };
  }

  // Proyectos corporativos / landing
  if (project.schemaType === "WebSite") {
    return {
      ...baseSchema,
      "@type": "WebSite",
      publisher: {
        "@type": "Organization",
        name: project.company,
        url: project.projectLink,
      },
    };
  }

  return baseSchema;
}

function Projects() {
  const projects = [
    {
      title: "MIND SAS BIC",
      description:
        "Corporate website for MIND SAS BIC featuring multiple sections such as landing page, company overview, services, design, quality policy, projects, and contact. Frontend developed collaboratively using React.",
      image: mindSasBic,
      projectLink: "https://www.metalmindsa.com/",
      codeLink: "https://github.com/LuisDavidFajardoH/Mind",
      codePublic: true,
      tags: ["React", "JavaScript"],
      icon: "web",
      schemaType: "SoftwareSourceCode",
      company: "MIND SAS BIC",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and Tailwind CSS, featuring animated UI components, modern interactions, and SEO-friendly structure to showcase projects and skills.",
      image: portfolio,
      projectLink: "https://estebandvargasm.github.io/portfolio/",
      codeLink: "https://github.com/estebandvargasm/portfolio",
      codePublic: true,
      tags: ["React", "JavaScript", "Tailwind"],
      icon: "web",
      schemaType: "SoftwareSourceCode",
    },
    {
      title: "99 Envios",
      description:
        "Corporate landing page for 99 Envios with multiple informational sections. Frontend architecture, SEO implementation, and integration with internal APIs provided by the company’s backend team. Source code is private due to company policy.",
      image: envios99,
      projectLink: "https://99envios.com/",
      codeLink: null,
      codePublic: false,
      tags: ["React", "JavaScript", "SEO"],
      icon: "web",
      schemaType: "WebSite",
      company: "99 Envios",
    },
  ];

  return (
    <>
      {/* Schema.org JSON-LD */}
      {projects.map((project) => (
        <script
          key={`${project.title}-schema`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateProjectSchema(project)),
          }}
        />
      ))}

      {/* UI */}
      <section
        id="projects"
        className="px-6 py-20 text-slate-100 sm:px-8"
        aria-labelledby="projects-title"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2
            id="projects-title"
            className="text-3xl font-extrabold text-slate-50 sm:text-4xl"
          >
            Projects
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-300">
            A selection of personal and professional projects that demonstrate my
            experience working with modern frontend technologies, collaboration,
            SEO, and real-world product constraints.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ThreeDCardDemo key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
