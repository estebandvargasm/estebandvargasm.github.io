import React from "react";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-transparent px-6 pb-12 pt-10 text-slate-300 sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-6">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-3 text-slate-50">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 text-base font-extrabold text-slate-900 shadow-[0_12px_24px_-16px_rgba(79,70,229,0.8)]">
              EV
            </span>
            <span className="text-base font-semibold">Esteban Vargas</span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-end">
            <a
              href="mailto:estebandvargasm@outlook.com?subject=Creemos%20algo%20incre%C3%ADble!"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <IconMail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <IconBrandGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <IconBrandLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="w-full text-center text-sm text-slate-400">
          © {new Date().getFullYear()} • Designed and developed with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
