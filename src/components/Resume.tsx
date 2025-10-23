import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionContainer from "./common/SectionContainer";
import SectionHeader from "./common/SectionHeader";
import Button from "./common/Button";
import Skills from "./Skills";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const WORK = [
  {
    company: "Add Jam",
    link: "https://addjam.com",
    date: "2020 - Present",
    role: "Software Engineer",
    description: [
      `My responsibilities whilst working at Add Jam see's me creating cross-platform mobile applications for iOS and Android using React Native. During my time here, I have worked on mobile applications owned by the company, and on projects for third party clients. By working on these projects, I have worked with in-house and client APIs, video playback, integration with Firebase and AWS and integrating Google and Apple maps.`,
      `Alongside working on mobile applications, I have contributed to our internal tooling to help with speeding up and streamlining our development process. I have also been part of client meetings. Taken part in code reviews to help other development companies improve their projects and development processes.`,
    ],
  },
  {
    company: "Spartan Solutions LTD",
    link: "https://www.spartansolutions.com/",
    date: "October 2018 - July 2020",
    role: "Software Engineer",
    description: [
      `In my role, I was responsible for several duties with my main tasks including designing, implementing and updating features for Spartans flagship operations application, PHALANX. During my time at the company, I also interacted with various clients working in a support role and updating custom requested features to better meet their business requirements.`,
      `My knowledge of working with the React framework on personal projects allowed me to work on their new predictive maintenance software, PROPHES. My role in this project saw me work alongside the software architect and lead developer, implementing new features and helping set up data for potential client showcases.`,
    ],
  },
  {
    company: "Solus UK LTD",
    link: "https://www.solus.co.uk/",
    date: "August 2016 - October 2018",
    role: "Lead Unity Developer",
    description: [
      `When I started my role at Solus I was placed in charge of several existing mobile applications to fix bugs, implement and improve features and games and work on optimising these applications. Later I was placed in a lead role in developing the company's new children's library application to deliver a more feature-rich experience to libraries and their patrons.`,
      `In my time there, I worked on improving the organisation and development process between different departments. I was also involved in taking part in regular development meetings with our reseller based in the US and interacting with customers during the pilot phase of the application's launch in the US.`,
    ],
  },
];

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
        {WORK.map((work) => (
          <WorkExperience
            key={`${work.company}-experience`}
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
