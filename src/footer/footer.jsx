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
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm font-extrabold text-slate-100">
              EV
            </span>
            <span className="text-base font-semibold">Esteban Vargas</span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-end">
            <a
              href="mailto:estebandvargasm@outlook.com?subject=Creemos%20algo%20incre%C3%ADble!"
              aria-label="Email"
              title="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <IconMail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/estebandvargasm"
              target="_blank"
              aria-label="GitHub"
              title="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <IconBrandGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/esteban-david-vargas-medina/"
              target="_blank"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <IconBrandLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/*<p className="w-full text-center text-sm text-slate-400">
          © {new Date().getFullYear()} • Designed and developed with passion.
        </p>*/}
      </div>
    </footer>
  );
};

export default Footer;
