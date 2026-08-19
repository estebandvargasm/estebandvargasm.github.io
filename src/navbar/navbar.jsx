import React, { useEffect, useState } from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconMail,
  IconTerminal2,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBulb,
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
    const sectionIds = ["home", "about", "projects", "case-studies"];
    const onScroll = () => {
      const offset = window.innerHeight * 0.3;
      let current = "home";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      title: "Case Studies",
      icon: (
        <IconBulb className="h-full w-full" />
      ),
      href: "#case-studies",
      onClick: () => scrollToId("case-studies"),
      isActive: activeSection === "case-studies",
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
      href: "mailto:estebandvargasm@outlook.com?subject=Creemos%20algo%20incre%C3%ADble%21",
      onClick: () => {
        const mail = "mailto:estebandvargasm@outlook.com?subject=Creemos%20algo%20incre%C3%ADble%21";
        const webmail = "https://outlook.live.com/mail/0/deeplink/compose?to=estebandvargasm@outlook.com&subject=Creemos%20algo%20incre%C3%ADble%21";
        const fallbackTab = window.open("", "_blank");
        window.location.href = mail;
        setTimeout(() => {
          if (document.hidden) {
            fallbackTab.close();
          } else {
            fallbackTab.location.href = webmail;
          }
        }, 1000);
      },
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
