import React from "react";
import Socials from "./Socials";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 pt-10">
          <p className="text-white-400 text-lg underline">Software Developer</p>
          <div className="flex flex-row justify-start items-end gap-x-4 mb-8">
            <h1 className="uppercase text-white text-4xl sm:text-6xl font-bold w-min md:w-max">
              Daniel Taylor
            </h1>
            <Socials />
          </div>
          <AnchorLink
            className="bg-accent hover:bg-secondary text-white hover:text-black px-4 py-2 rounded-sm shadow-lg"
            to="#projects"
          >
            View Projects
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
