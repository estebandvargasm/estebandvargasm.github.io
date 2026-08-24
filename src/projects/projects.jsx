import React, { useState } from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import { ThreeDCardDemo } from "./three-d-card.jsx";
import Reveal from "../components/ui/reveal";
import { projects } from "./projects-data.js";

const filters = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
];

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
  const [filter, setFilter] = useState("all");
  const visibleProjects =
    filter === "all" ? projects : projects.filter((p) => p.icon === filter);

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
          <Reveal>
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
          </Reveal>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                  filter === f.value
                    ? "border-sky-400/60 bg-sky-500/20 text-sky-200"
                    : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {visibleProjects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.06}>
                <ThreeDCardDemo {...project} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="https://github.com/estebandvargasm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <IconBrandGithub className="h-5 w-5" />
              See more on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
