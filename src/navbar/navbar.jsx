import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconMail,
  IconTerminal2,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/esteban-david-vargas-medina/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/estebandvargasm",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:estebandvargasm@outlook.com?subject=Creemos%20algo%20increíble!",
    },
  ];
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex items-center justify-center pointer-events-none">
      <FloatingDock
        className="pointer-events-auto"
        items={links}
      />
    </div>
  );
}
