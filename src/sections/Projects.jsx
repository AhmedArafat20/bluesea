import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./Projects.css";

const Projects = () => {
  const { lang, texts } = useContext(LanguageContext);

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* Completed Projects */}
        <div className="projects-header">
          <h2>{texts[lang].projectsTitle}</h2>
          <p>{texts[lang].completedProjectsTitle}</p>
        </div>

        <div className="projects-grid">
          {texts[lang].completedProjects.map((project, idx) => (
            <div className="project-card" key={idx}>
              {project}
            </div>
          ))}
        </div>

        {/* Running Projects */}
        <div className="projects-header mt-5">
          <p>{texts[lang].runningProjectsTitle}</p>
        </div>

        <div className="projects-grid">
          {texts[lang].runningProjects.map((project, idx) => (
            <div className="project-card running" key={idx}>
              {project}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
