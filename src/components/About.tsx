import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import SectionContainer from "./common/SectionContainer";
import SectionHeader from "./common/SectionHeader";
import ImageWithRing from "./common/ImageWithRing";

const About = () => {
  return (
    <SectionContainer id="about" bgColor="white">
      <SectionHeader
        subtitle="Get to know me and what makes me tick"
        title="About Me"
      />
      <div className="flex flex-col lg:flex-row justify-start md:justify-between items-start gap-x-5 mx-auto lg:mx-0">
        <div className="w-full lg:w-1/2 flex flex-shrink-0 flex-col flex-wrap justify-center gap-y-5">
          <p className="">
            Hello, I'm Daniel Taylor. A software developer based in Glasgow,
            Scotland. I enjoy creating digital experiences for desktop, mobile
            and web. I have experience working with technologies like
            JavaScript, React, C# and Unity.
          </p>
          <p className="">
            After graduating from university with a first-class BSc. Honours in
            Computer Games Development. I spent the start of my career as the
            sole developer on a children's mobile application, where I refreshed
            its design and added enhanced features. Which led to the
            application's launch in Australia and America. Currently you can
            find me working at{" "}
            <a
              className="text-black hover:text-accent decoration-accent underline hover:no-underline font-semibold hover:cursor-pointer"
              href="https://addjam.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add Jam
            </a>{" "}
            creating a verity of web and mobile projects for our clients across
            various industries.
          </p>
          <p className="">Some technologies I've been working with recently:</p>
          <div className="flex flex-row gap-x-8 md:gap-x-16 lg:gap-x-32 pl-4">
            <ul className="list-disc marker:text-accent">
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
            <ul className="list-disc marker:text-accent">
              <li>HTML & CSS</li>
              <li>React Native</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mt-14 flex justify-end gap-2 md:gap-8 sm:-mt-24 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <ImageWithRing>
                <StaticImage
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  src={"../assets/images/about/profileImage.jpg"}
                  alt="Daniel Taylor head shot"
                />
              </ImageWithRing>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <ImageWithRing>
                <StaticImage
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
                  src={
                    "../assets/images/projects/whattowatch/001-WhatToWatch_Home.jpg"
                  }
                  alt="What to Watch project home screen"
                />
              </ImageWithRing>
              <ImageWithRing>
                <StaticImage
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  src={"../assets/images/about/hiking.jpg"}
                  alt="Daniel Taylor standing atop of Ben Lomond"
                />
              </ImageWithRing>
            </div>
            <div className="hidden md:block w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <ImageWithRing>
                <StaticImage
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  src={
                    "../assets/images/about/studentemploymentadvicepresentation.jpg"
                  }
                  alt="Daniel Taylor giving a student employment presentation"
                />
              </ImageWithRing>
              <ImageWithRing>
                <StaticImage
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  src={"../assets/images/about/fallingtogether.jpg"}
                  alt="Screenshot of my Unity game for the Rainbow Jam 2020"
                />
              </ImageWithRing>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
