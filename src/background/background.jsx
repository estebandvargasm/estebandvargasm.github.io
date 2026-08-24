import React from "react";
import { BackgroundRippleEffect } from "../components/ui/background-ripple-effect";
import TerminalWindow from "./terminal-window";
import CVPdf from "./Esteban Vargas.pdf";

export function BackgroundRippleEffectDemo() {
  return (
    <header
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-12"
    >
      <div className="absolute inset-0 opacity-55">
        <BackgroundRippleEffect />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1220]/40 via-[#020617]/45 to-[#020617]/60" />

      <div className="pointer-events-none relative grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-sky-100 shadow-[0_10px_50px_-20px_rgba(59,130,246,0.8)]">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Full Stack Engineer
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-100 sm:text-5xl lg:text-6xl xl:text-7xl">
            Esteban Vargas
          </h1>

          <p className="max-w-2xl text-lg text-slate-200/90 sm:text-xl">
            Building digital experiences that blend <span className="text-gradient-sky font-semibold"> scalable architectures </span> with <span className="text-gradient-sky font-semibold"> stunning aesthetics. </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:estebandvargasm@outlook.com?subject=Creemos%20algo%20incre%C3%ADble!"
              className="pointer-events-auto rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Contact Me
            </a>
            <a
              href={CVPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-slate-100 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-10 pt-4 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Based in Bogota, COL
            </div>
          </div>
        </div>
        
        <div className="relative z-10 hidden justify-center lg:flex">
          <TerminalWindow />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(ellipse_at_80%_0%,rgba(99,102,241,0.1),transparent_28%)]" />
    </header>
  );
}
