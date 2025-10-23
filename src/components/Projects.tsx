import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Project from "./Project";
import ClandestineOps from "./projectDetails/ClandestineOps";
import Phalanx from "./projectDetails/Phalanx";
import PlanetLibrary from "./projectDetails/PlanetLibrary";
import WhatToWatch from "./projectDetails/WhatToWatch";

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
    <div id="projects" className="w-full bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5 lg:pb-10">
        <div className="mx-auto max-w-2xl flex-shrink-0 md:mx-0 pb-5 pt-5 lg:pt-10">
          <p className="text-accent-dark text-lg underline">
            Things I've worked on solo and as part of a team
          </p>
          <h2 className="uppercase text-black text-6xl mb-8 font-semibold">
            Projects
          </h2>
        </div>
        <div className="w-full flex flex-col gap-y-10">
          {PROJECTS.map((project, index) => (
            <Project
              key={project.title}
              title={project.title}
              tools={project.tools}
              description={project.description}
              image={project.image}
              reverse={index % 2 !== 0}
              ProjectDetails={project.projectDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
