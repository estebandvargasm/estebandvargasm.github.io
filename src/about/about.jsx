import React from "react";
import { IconCode, IconBriefcase } from "@tabler/icons-react";
import estebanPerfil from "../assets/esteban-perfil.png";

const About = () => {

  const stats = [
    { label: "Projects", value: "5+" },
    { label: "Technologies", value: "15+" },
  ];

  const stack = [
    {
      category: "Frontend & Mobile",
      items: ["React Native", "React.js", "TypeScript", "JavaScript", "Tailwind", "Zustand", "Socket.io", "SEO"],
    },
    {
      category: "Backend & Database",
      items: ["Deno 2", "Node.js", "Hono", "PostgreSQL", "JWT"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Firebase", "Google Maps API", "Play Console", "Cloud Console", "Docker", "Git"],
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 pt-48 pb-24 text-slate-100 sm:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.15),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(99,102,241,0.14),transparent_26%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-5">
          <p className="inline-block w-fit border-b-4 border-sky-500 pb-2 text-2xl font-extrabold text-slate-50">
            About Me
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-slate-50 sm:text-4xl">
            I architect scalable systems and craft premium interfaces.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            I'm Esteban, a passionate Full Stack Engineer specializing in building robust applications that bridge the gap between high-performance backends and world-class user interfaces.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            My journey has evolved from mastering frontend aesthetics to architecting scalable backend systems using Deno, Node.js, and PostgreSQL. Whether I'm building mobile experiences with React Native or optimizing server-side logic, I approach each project with a focus on clean code, performance, and real-world scalability.
          </p>
          
          <div className="mt-4 flex flex-col gap-6">
            {stack.map((group) => (
              <div key={group.category} className="flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-widest text-sky-400">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-sky-100 shadow-sm shadow-slate-900/40 backdrop-blur-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-transparent p-8 text-center shadow-[0_25px_70px_-40px_rgba(56,189,248,0.6)] backdrop-blur-xl">
          <img
            src={estebanPerfil}
            alt="Esteban Vargas"
            className="mx-auto mb-4 h-48 w-48 rounded-full border-4 border-sky-400/60 object-cover shadow-[0_15px_50px_-30px_rgba(56,189,248,0.7)]"
          />
          <h3 className="text-xl font-extrabold text-slate-50">Esteban Vargas</h3>
          <p className="font-semibold text-sky-200">Full Stack Engineer</p>

          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-2 gap-3 text-left">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <p className="text-2xl font-extrabold text-slate-50">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/*<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-slate-900/40">
            <p className="text-xs uppercase tracking-[0.08em] text-slate-400">Stack</p>
            
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default About;