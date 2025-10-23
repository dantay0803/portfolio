import { StaticImage } from "gatsby-plugin-image";
import React, { lazy, Suspense } from "react";
import Project from "./Project";
import SectionContainer from "./common/SectionContainer";
import SectionHeader from "./common/SectionHeader";
import { PROJECTS } from "../data/projects";

const ClandestineOps = lazy(() => import("./projectDetails/ClandestineOps"));
const Phalanx = lazy(() => import("./projectDetails/Phalanx"));
const PlanetLibrary = lazy(() => import("./projectDetails/PlanetLibrary"));
const WhatToWatch = lazy(() => import("./projectDetails/WhatToWatch"));

const componentMap: Record<string, React.ComponentType<Modal>> = {
  Phalanx,
  PlanetLibrary,
  WhatToWatch,
  ClandestineOps,
};

const Projects = () => {
  const projectsWithComponents = PROJECTS.map((project) => ({
    ...project,
    image: (
      <StaticImage
        className="w-full h-64 object-cover"
        src={project.imagePath}
        alt={project.imageAlt}
      />
    ),
    projectDetails: componentMap[project.detailsComponent],
  }));

  return (
    <SectionContainer id="projects" bgColor="secondary">
      <SectionHeader
        subtitle="Things I've worked on solo and as part of a team"
        title="Projects"
      />
      <div className="w-full flex flex-col gap-y-10">
        {projectsWithComponents.map((project, index) => (
          <Suspense key={project.title} fallback={<div />}>
            <Project
              title={project.title}
              tools={project.tools}
              description={project.description}
              image={project.image}
              reverse={index % 2 !== 0}
              ProjectDetails={project.projectDetails}
            />
          </Suspense>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
