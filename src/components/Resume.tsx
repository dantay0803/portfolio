import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Awards from "./Awards"
import Education from "./Education"
import WorkExperience from "./WorkExperience"

const WORK = [
  {
    company: "Add Jam",
    link: "https://addjam.com",
    date: "August 2020 - Present",
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
]

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <div id="resume" className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5 lg:pb-10">
        <div className="mx-auto max-w-2xl flex-shrink-0 md:mx-0 pb-5 pt-5 lg:pt-10">
          <p className="text-accent-dark text-lg underline">
            My professional, educational background and achievements
          </p>
          <h2 className="uppercase text-black text-6xl mb-8 font-semibold">
            Resume
          </h2>
        </div>
        <div className="flex flex-col justify-start items-start mx-auto lg:mx-0">
        {data.allFile.edges.map(
            (file: { node: { publicURL: string | undefined } }, index: any) => {
              return (
                <a
                  key={`pdf-${index}`}
                  href={file.node.publicURL}
                  download
                  className="px-4 py-2 border-accent border-2 rounded-md mb-10 hover:bg-accent hover:text-white transition duration-300 ease-in-out"
                >
                  Download
                </a>
              )
            }
          )}
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
          <Awards />
        </div>
      </div>
    </div>
  )
}

export default Resume
