# Portfolio — Esteban Vargas

Personal portfolio of **Esteban Vargas**, Full Stack Engineer specializing in architecting scalable systems and crafting premium interfaces.

Live site: https://estebandvargasm.github.io

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | React 19 (Vite) |
| UI | Tailwind CSS, Motion (animaciones), @tabler/icons-react |
| Estilos | PostCSS + Autoprefixer |
| Deploy | GitHub Actions → GitHub Pages (`gh-pages`) |

## Features

- **Secciones**: About, Projects, Navbar (floating dock) y Footer con animaciones 3D.
- **Datos centralizados**: los proyectos viven en `src/projects/projects-data.js`; las estadísticas de About (Projects / Technologies) se calculan automáticamente desde ahí.
- **SEO**: JSON-LD (Schema.org) por proyecto, sitemap y meta tags.
- **Componentes 3D**: cards, dock flotante y fondo con efecto ripple.

## Estructura

```
src/
├── App.jsx                    # Layout principal
├── about/about.jsx            # Sección About (stats + stack dinámicos)
├── projects/
│   ├── projects.jsx           # Grid de proyectos + JSON-LD
│   └── projects-data.js       # Datos de proyectos y tecnologías (fuente única)
├── navbar/ · footer/          # Navegación y footer
├── components/ui/             # FloatingDock, 3D card, ripple background
└── assets/                    # Imágenes
```

## Local

```bash
npm install
npm run dev      # Dev server
npm run build    # Build producción (dist/)
npm run preview  # Previsualizar build
npm run lint     # ESLint
```

## Deploy

El workflow `.github/workflows/deploy.yml` construye y publica automáticamente en GitHub Pages cuando se empuja a `main`.

## Agregar un proyecto

1. Añade la entrada en `src/projects/projects-data.js` (usa `codeLink` + `codePublic: true` solo si el repo es público; en caso contrario aparecerá el badge *Private code*).
2. Coloca la imagen en `src/assets/` y refiérela en `image`.
3. Los contadores de About se actualizan solos.
