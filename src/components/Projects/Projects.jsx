import React from "react";

import styles from "./Projects.module.css";

import projects from "../../utils/projectinfo.json";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export default function Projects () {
  return (
    <section className={styles.containp} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
