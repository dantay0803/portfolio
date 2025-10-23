import React from "react";
import Socials from "../Socials";

const Hero = () => {
  return (
    <div className="h-1/3 overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:pt-10">
          <p className="text-white-400 text-lg underline">Daniel Taylor</p>
          <div className="flex flex-row justify-start items-end gap-x-4 mb-8">
            <h1 className="uppercase text-white text-4xl md:text-6xl font-bold">
              Blog
            </h1>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
