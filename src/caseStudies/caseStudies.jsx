import React from "react";
import { IconBulb } from "@tabler/icons-react";
import Reveal from "../components/ui/reveal";
import { projects } from "../projects/projects-data.js";

function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="px-6 py-20 text-slate-100 sm:px-8"
      aria-labelledby="case-studies-title"
    >
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <h2
            id="case-studies-title"
            className="text-3xl font-extrabold text-slate-50 sm:text-4xl"
          >
            Case Studies
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-300">
            Technical notes on how each project was built and the problems it solves.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-sm shadow-slate-900/40 backdrop-blur-md">
                <h3 className="text-lg font-bold text-slate-50">{project.title}</h3>

                <ul className="mt-4 flex flex-col gap-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                      <IconBulb className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;