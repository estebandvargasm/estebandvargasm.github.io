import React from "react";
import { IconCode, IconBriefcase } from "@tabler/icons-react";
import estebanPerfil from "../assets/esteban-perfil.png";
import "./about.css";

const About = () => {
  const highlights = [
    {
      title: "Frontend Master",
      detail: "React, JavaScript, Tailwind CSS",
      icon: IconCode,
    },
    {
      title: "Professional",
      detail: "Clean Code, Performance, UX/UI Focus",
      icon: IconBriefcase,
    },
  ];

  const stats = [
    { label: "Projects", value: "4" },
    { label: "Technologies", value: "4" },
  ];

  return (
    <section className="about" id="about">
      <div className="about-glow" aria-hidden />
      <div className="about-content">
        <div className="about-left">
          <p className="about-kicker">About Me</p>
          <h2 className="about-heading">I build clean and functional digital experiences.</h2>
          <p className="about-text">
            I'm Esteban, a passionate frontend developer with a keen eye for design and a love for creating professional, user-friendly websites and applications.
          </p>
          <p className="about-text">
            My journey in web development began with a fascination for how technology can solve real-world problems. This drive led me to master a variety of tools and frameworks, always with the goal of delivering exceptional digital experiences. Whether it's building responsive layouts, optimizing performance, or implementing complex features, I approach each project with enthusiasm and attention to detail.
          </p>

          <div className="about-highlights">
            {highlights.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="about-highlight-card">
                  <div className="about-highlight-icon">
                    <IconComponent className="h-6 w-6 text-sky-300" />
                  </div>
                  <div>
                    <p className="about-highlight-title">{item.title}</p>
                    <p className="about-highlight-detail">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="about-profile">
          <img src={estebanPerfil} alt="Esteban Vargas" className="about-avatar" />
          <h3 className="about-name">Esteban Vargas</h3>
          <p className="about-role">Frontend Developer</p>
          <div className="about-divider" />
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <p className="about-stat-value">{stat.value}</p>
                <p className="about-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;