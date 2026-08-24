import React from "react";
import { topTechnologies } from "../projects/projects-data.js";

const K = "text-fuchsia-400";
const V = "text-sky-300";
const S = "text-emerald-300";
const B = "text-amber-300";
const P = "text-slate-300";
const C = "text-slate-500";

const stackTokens = [
  [V, "stack"],
  [P, ":"],
  " ",
  [P, "["],
  ...topTechnologies.flatMap((t, i) => [
    ...(i > 0 ? [" ", [P, ","]] : []),
    [S, `"${t}"`],
  ]),
  [P, "],"],
];

const lines = [
  { n: "01", tokens: [[K, "const"], " ", [V, "developer"], " ", [P, "="], " ", [P, "{"]] },
  { n: "02", indent: 2, tokens: [[V, "name"], [P, ":"], " ", [S, '"Esteban Vargas"'], [P, ","]] },
  { n: "03", indent: 2, tokens: [[V, "role"], [P, ":"], " ", [S, '"Full Stack Engineer"'], [P, ","]] },
  { n: "04", indent: 2, tokens: stackTokens },
  { n: "05", indent: 2, tokens: [[V, "scalable"], [P, ":"], " ", [B, "true"], [P, ","]] },
  { n: "06", indent: 2, tokens: [[V, "availableForWork"], [P, ":"], " ", [B, "true"], [P, ","]] },
  { n: "07", tokens: [[P, "};"]] },
  { n: "08", tokens: [] },
  { n: "09", tokens: [[V, "developer"], [P, "."], [K, "ship"], [P, "()"], [P, ";"], " ", [C, "// 🚀"],] },
];

export default function TerminalWindow() {
  return (
    <div
      className="animate-float w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/90 shadow-[0_25px_70px_-40px_rgba(56,189,248,0.6)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-slate-400">developer.ts</span>
      </div>

      <div className="px-5 py-5 font-mono text-[13px] leading-6">
        {lines.map((line) => (
          <div key={line.n} className="flex gap-4">
            <span className="select-none text-right text-slate-600">{line.n}</span>
            <span className={line.indent ? "pl-4" : ""}>
              {line.tokens.map((token, i) => {
                if (typeof token === "string") return token;
                const [cls, text] = token;
                return (
                  <span key={i} className={cls}>
                    {text}
                  </span>
                );
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}