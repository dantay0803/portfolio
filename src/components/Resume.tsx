import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionContainer from "./common/SectionContainer";
import SectionHeader from "./common/SectionHeader";
import Button from "./common/Button";
import Skills from "./Skills";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import { WORK_EXPERIENCE } from "../data/workExperience";

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "DanielTaylor_Resume" }) {
        publicURL
      }
    }
  `);

  return (
    <SectionContainer id="resume" bgColor="white">
      <SectionHeader
        subtitle="My professional, educational background and achievements"
        title="Resume"
      />
      <div className="flex flex-col justify-start items-start mx-auto lg:mx-0">
        <a href={data.file.publicURL} download>
          <Button variant="outline" className="mb-10">
            Download
          </Button>
        </a>
        {WORK_EXPERIENCE.map((work) => (
          <WorkExperience
            key={work.id}
            company={work.company}
            link={work.link}
            date={work.date}
            role={work.role}
            description={work.description}
          />
        ))}
        <Education />
        <Skills />
      </div>
    </SectionContainer>
  );
};

export default Resume;
