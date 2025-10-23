export type ProjectData = {
  id: string;
  title: string;
  tools: string[];
  description: string;
  imagePath: string;
  imageAlt: string;
  detailsComponent: string;
};

export const PROJECTS: ProjectData[] = [
  {
    id: "phalanx",
    title: "Phalanx",
    tools: ["JavaScript", "Cordova", "C#", "ASP.NET", "SQL"],
    description:
      "PHALANX is an integrated operations software application that combines RFID/barcode technology, operational mobility with the use of smartphones and tablets and integration with back-office systems on a single software platform.",
    imagePath: "../assets/images/thumbnails/thumbnail_phalanx.jpg",
    imageAlt: "Phalanx project thumbnail",
    detailsComponent: "Phalanx",
  },
  {
    id: "planet-library",
    title: "Planet Library",
    tools: ["C#", "Unity"],
    description:
      "Planet Library transforms your Library into a fun and engaging digital space for children.",
    imagePath: "../assets/images/thumbnails/thumbnail_pl.jpg",
    imageAlt: "Planet Library project thumbnail",
    detailsComponent: "PlanetLibrary",
  },
  {
    id: "what-to-watch",
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
    imagePath: "../assets/images/thumbnails/thumbnail_whatToWatch.jpg",
    imageAlt: "What to Watch project thumbnail",
    detailsComponent: "WhatToWatch",
  },
  {
    id: "clandestine-ops",
    title: "Clandestine Ops",
    tools: ["C#", "Unity"],
    description:
      "A First Person Shooter demo created to aid with research into the effect of violent video game exposure to users.",
    imagePath: "../assets/images/thumbnails/thumbnail_co.jpg",
    imageAlt: "Clandestine Ops project thumbnail",
    detailsComponent: "ClandestineOps",
  },
];
