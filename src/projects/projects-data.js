import milla99 from "../assets/milla99.png";
import lucida from "../assets/lucida.png";
import mindSasBic from "../assets/MIND-SAS-BIC.png";
import portfolio from "../assets/portfolio.png";
import envios99 from "../assets/ultima-milla.png";
import vinos from "../assets/vinos.png";

export const projects = [
  {
    title: "Milla 99 — Mobility & Price Negotiation App",
    description:
      "Disruptive ride-sharing app where passengers and drivers negotiate trip prices in real-time. As Tech Lead Front, I implemented real-time geolocation with Google Maps, negotiation logic via sockets, and highly optimized global state management (Zustand) for high concurrency.",
    image: milla99,
    projectLink: "https://play.google.com/store/apps/details?id=com.envios99.milla99",
    codeLink: null,
    codePublic: false,
    tags: ["React Native", "Zustand", "Socket.io", "Google Maps", "Firebase"],
    icon: "mobile",
    schemaType: "SoftwareSourceCode",
    company: "Milla 99 / 99 Envios",
  },
  {
    title: "Lucida — Smart Financial AI Companion",
    description:
      "An AI-powered personal finance ecosystem featuring a React Native mobile app and a Deno 2.0 backend. Implemented Google Play/Cloud services for subscriptions and Social Auth, using a shared 'Entity' architectural pattern for high data integrity and scalability.",
    image: lucida,
    projectLink: "https://play.google.com/store/apps/details?id=com.lucida.lucida",
    codeLink: null,
    codePublic: false,
    tags: ["React Native", "Deno 2", "TypeScript", "PostgreSQL", "Firebase", "Play Console", "Cloud Console"],
    icon: "mobile",
    schemaType: "SoftwareSourceCode",
    company: "Esteban Vargas",
  },
  {
    title: "MIND SAS BIC — Engineering & Industrial Infrastructure",
    description:
      "Corporate website for MIND SAS BIC featuring multiple sections such as landing page, company overview, services, design, quality policy, projects, and contact. Frontend developed collaboratively using React.",
    image: mindSasBic,
    projectLink: "https://www.metalmindsa.com/",
    codeLink: "https://github.com/LuisDavidFajardoH/Mind",
    codePublic: true,
    tags: ["React", "JavaScript"],
    icon: "web",
    schemaType: "SoftwareSourceCode",
    company: "MIND SAS BIC",
  },
  {
    title: "Portfolio — High-Fidelity Full Stack Showcase",
    description:
      "Personal portfolio built with React and Tailwind CSS, featuring animated UI components, modern interactions, and SEO-friendly structure to showcase projects and skills.",
    image: portfolio,
    projectLink: "https://estebandvargasm.github.io/",
    codeLink: "https://github.com/estebandvargasm/portfolio",
    codePublic: true,
    tags: ["React", "JavaScript", "Tailwind"],
    icon: "web",
    schemaType: "SoftwareSourceCode",
  },
  {
    title: "99 Envíos — Last Mile Logistics & Delivery Platform",
    description:
      "Last-mile logistics platform for 99 Envios: real-time shipment tracking, route optimization, and delivery agent management. Built with a React frontend and Laravel backend, integrating maps, tracking, notifications and an admin console. Source code is private due to company policy.",
    image: envios99,
    projectLink: "https://99envios.app/login-top",
    codeLink: null,
    codePublic: false,
    tags: ["React", "Laravel", "PHP", "MySQL", "Material UI", "Zustand", "Google Maps", "Leaflet"],
    icon: "web",
    schemaType: "SoftwareSourceCode",
    company: "99 Envios",
  },
  {
    title: "La Vinoteca by Diego — Wine Catalog & Admin Platform",
    description:
      "Curated wine shop in Bogotá with a public catalog of red, white, rosé and sparkling wines, plus a private admin panel for managing inventory, costs, margins and stock. Full stack with server-side rendering, Drizzle ORM on PostgreSQL, NextAuth authentication with rate limiting, and image uploads to Vercel Blob.",
    image: vinos,
    projectLink: "https://www.lavinotecabydiego.com",
    codeLink: null,
    codePublic: false,
    tags: ["Next.js", "React", "Tailwind", "PostgreSQL", "Drizzle ORM", "NextAuth", "Zod", "Vercel"],
    icon: "web",
    schemaType: "SoftwareSourceCode",
    company: "La Vinoteca by Diego",
  },
];

export const technologies = [...new Set(projects.flatMap((project) => project.tags))];