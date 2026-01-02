import React from "react";
import { BackgroundRippleEffect } from "../components/ui/background-ripple-effect";
import CVPdf from "./Esteban Vargas.pdf";

export function BackgroundRippleEffectDemo() {
  return (
    <header
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-12"
    >
      <div className="absolute inset-0 opacity-35">
        <BackgroundRippleEffect />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1220]/80 via-[#020617]/94 to-[#020617]" />

      <div className="relative grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-sky-100 shadow-[0_10px_50px_-20px_rgba(59,130,246,0.8)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Frontend Developer
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-100 sm:text-5xl lg:text-6xl xl:text-7xl">
            Esteban Vargas
          </h1>

          <p className="max-w-2xl text-lg text-slate-200/90 sm:text-xl">
            Building digital experiences that blend <span className="text-sky-300 font-semibold"> clean code </span> with <span className="text-sky-300 font-semibold"> stunning aesthetics. </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:estebandvargasm@outlook.com?subject=Creemos%20algo%20incre%C3%ADble!"
              className="rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Contact Me
            </a>
            <a
              href={CVPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-6 py-3 text-base font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:bg-white/5"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-10 pt-4 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for new projects
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Based in Bogota, COL
            </div>
          </div>
        </div>
        
        <div className="relative z-0 hidden lg:block"></div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(ellipse_at_80%_0%,rgba(99,102,241,0.1),transparent_28%)]" />
    </header>
  );
}
