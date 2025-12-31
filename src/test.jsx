import React from "react";
import { IconBrandGithub, IconDeviceMobile, IconExternalLink, IconWorld } from "@tabler/icons-react";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";

// Componente principal 3D Card Demo
export function ThreeDCardDemo({
  title,
  description,
  image,
  projectLink,
  codeLink,
  tags = [],
  icon = "web",
}) {
  const BadgeIcon = icon === "mobile" ? IconDeviceMobile : IconWorld;

  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card rounded-2xl border border-white/10 bg-white/5 p-0 shadow-[0_25px_80px_-45px_rgba(59,130,246,0.6)] overflow-hidden">
        <div className="flex flex-col h-full">
          <CardItem translateZ={80} className="relative">
            <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
              <img
                src={image}
                height={800}
                width={1200}
                className="h-full w-full object-cover transition-transform duration-700 md:group-hover/card:scale-110"
                alt={title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/30 to-transparent" />
              <div className="absolute top-4 right-4 rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                <BadgeIcon className="h-5 w-5 text-sky-300" />
              </div>
            </div>
          </CardItem>

          <div className="flex flex-col gap-4 px-6 py-6">
            <CardItem translateZ={50} className="text-xl font-bold text-white text-left">
              {title}
            </CardItem>
            <CardItem translateZ={40} as="p" className="text-sm leading-relaxed text-slate-300 text-justify">
              {description}
            </CardItem>

            {tags.length > 0 && (
              <CardItem translateZ={30} className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-tight text-sky-200"
                  >
                    {tag}
                  </span>
                ))}
              </CardItem>
            )}
          </div>

          <div className="mt-auto border-t border-white/10 px-6 py-4">
            <div className="grid grid-cols-2 gap-3">
              <CardItem
                translateZ={20}
                as="button"
                onClick={() => window.open(projectLink, "_blank", "noreferrer")}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <IconExternalLink className="h-4 w-4" /> Demo
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                onClick={() => window.open(codeLink, "_blank", "noreferrer")}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:text-sky-300"
              >
                <IconBrandGithub className="h-4 w-4" /> Code
              </CardItem>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
