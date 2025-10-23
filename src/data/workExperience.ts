export type WorkExperienceData = {
  id: string;
  company: string;
  link: string;
  date: string;
  role: string;
  description: string[];
};

export const WORK_EXPERIENCE: WorkExperienceData[] = [
  {
    id: "add-jam",
    company: "Add Jam",
    link: "https://addjam.com",
    date: "2020 - Present",
    role: "Software Engineer",
    description: [
      `My responsibilities whilst working at Add Jam see me creating cross-platform mobile applications for iOS and Android using React Native. During my time here, I have worked on mobile applications owned by the company, and on projects for third-party clients. By working on these projects, I have worked with in-house and client APIs, video playback, integration with Firebase and AWS, and integrating Google and Apple maps.`,
      `Alongside working on mobile applications, I have contributed to our internal tooling to help with speeding up and streamlining our development process. I have also been part of client meetings and taken part in code reviews to help other development companies improve their projects and development processes.`,
    ],
  },
  {
    id: "spartan-solutions",
    company: "Spartan Solutions LTD",
    link: "https://www.spartansolutions.com/",
    date: "October 2018 - July 2020",
    role: "Software Engineer",
    description: [
      `In my role, I was responsible for several duties with my main tasks including designing, implementing, and updating features for Spartan's flagship operations application, PHALANX. During my time at the company, I also interacted with various clients, working in a support role and updating custom-requested features to better meet their business requirements.`,
      `My knowledge of working with the React framework on personal projects allowed me to work on their new predictive maintenance software, PROPHES. My role in this project saw me work alongside the software architect and lead developer, implementing new features and helping set up data for potential client showcases.`,
    ],
  },
  {
    id: "solus-uk",
    company: "Solus UK LTD",
    link: "https://www.solus.co.uk/",
    date: "August 2016 - October 2018",
    role: "Lead Unity Developer",
    description: [
      `When I started my role at Solus, I was placed in charge of several existing mobile applications to fix bugs, implement and improve features and games, and work on optimising these applications. Later, I was placed in a lead role in developing the company's new children's library application to deliver a more feature-rich experience to libraries and their patrons.`,
      `In my time there, I worked on improving the organisation and development process between different departments. I was also involved in regular development meetings with our reseller based in the US and interacting with customers during the pilot phase of the application's launch in the US.`,
    ],
  },
];
