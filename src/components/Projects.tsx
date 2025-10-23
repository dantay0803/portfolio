import { StaticImage } from "gatsby-plugin-image";
import React, { lazy, Suspense } from "react";
import Project from "./Project";
import SectionContainer from "./common/SectionContainer";
import SectionHeader from "./common/SectionHeader";

const ClandestineOps = lazy(() => import("./projectDetails/ClandestineOps"));
const Phalanx = lazy(() => import("./projectDetails/Phalanx"));
const PlanetLibrary = lazy(() => import("./projectDetails/PlanetLibrary"));
const WhatToWatch = lazy(() => import("./projectDetails/WhatToWatch"));

const Projects = () => {
  const PROJECTS = [
    {
      title: "Phalanx",
      tools: ["JavaScript", "Cordova", "C#", "ASP.NET", "SQL"],
      description:
        "PHALANX is an integrated operations software application that combines RFID/barcode technology, operational mobility with the use of smartphones and tablets and integration with back-office systems on a single software platform.",
      image: (
        <StaticImage
          className="w-full h-64 object-cover"
          src={"../assets/images/thumbnails/thumbnail_phalanx.jpg"}
          alt="Phalanx project thumbnail"
        />
      ),
      projectDetails: Phalanx,
    },
    {
      title: "Planet Library",
      tools: ["C#", "Unity"],
      description:
        "Planet Library transforms your Library into a fun and engaging digital space for children.",
      image: (
        <StaticImage
          className="w-full h-64 object-cover"
          src={"../assets/images/thumbnails/thumbnail_pl.jpg"}
          alt="Planet Library project thumbnail"
        />
      ),
      projectDetails: PlanetLibrary,
    },
    {
      title: "What to Watch",
      tools: [
        "React",
        "React Router",
        "Javascript",
        "Bootstrap",
        "Styled Components",
      ],
      description:
        "A TV show and movie searching website created with React and powered by the MovieDB API.",
      image: (
        <StaticImage
          className="w-full h-64 object-cover"
          src={"../assets/images/thumbnails/thumbnail_whatToWatch.jpg"}
          alt="Planet Library project thumbnail"
        />
      ),
      projectDetails: WhatToWatch,
    },
    {
      title: "Clandestine Ops",
      tools: ["C#", "Unity"],
      description:
        "A First Person Shooter demo created to aid with research into the effect of violent video game exposure to users.",
      image: (
        <StaticImage
          className="w-full h-64 object-cover"
          src={"../assets/images/thumbnails/thumbnail_co.jpg"}
          alt="Planet Library project thumbnail"
        />
      ),
      projectDetails: ClandestineOps,
    },
  ];

  return (
    <SectionContainer id="projects" bgColor="secondary">
      <SectionHeader
        subtitle="Things I've worked on solo and as part of a team"
        title="Projects"
      />
      <div className="w-full flex flex-col gap-y-10">
        {PROJECTS.map((project, index) => (
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
