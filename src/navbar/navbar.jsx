import React, { useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("home");

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "projects"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full" />
      ),
      href: "#home",
      onClick: () => scrollToId("home"),
      isActive: activeSection === "home",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full" />
      ),
      href: "#about",
      onClick: () => scrollToId("about"),
      isActive: activeSection === "about",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full" />
      ),
      href: "#projects",
      onClick: () => scrollToId("projects"),
      isActive: activeSection === "projects",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full" />
      ),
      href: "https://www.linkedin.com/in/esteban-david-vargas-medina/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full" />
      ),
      href: "https://github.com/estebandvargasm",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full" />
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
