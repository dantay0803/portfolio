import React from 'react';
import {
  GiSevenPointedStar,
  GiSpartanHelmet,
  GiRingedPlanet,
} from 'react-icons/gi';

export default function experience() {
  return (
    <div>
      <div id="addjam" className="two-column-layout">
        <div className="resumeTitle">
          <a
            href="https://addjam.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              <GiSevenPointedStar size={32} /> Add Jam
            </h3>
          </a>
          <p className="resumeDate">August 2020 - Present</p>
          <p className="underline">Software Engineer</p>
        </div>
        <div className="resumeDetails"></div>
      </div>

      <div id="spartan" className="two-column-layout">
        <div className="resumeTitle">
          <a
            href="https://www.spartansolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              <GiSpartanHelmet size={32} /> Spartan Solutions Ltd
            </h3>
          </a>
          <p className="resumeDate">October 2018 - July 2020</p>
          <p className="underline">Software Engineer</p>
        </div>
        <div className="resumeDetails">
          <p>
            In my role, I was responsible for several duties with my main tasks
            including designing, implementing and updating features for Spartans
            flagship operations application, PHALANX. During my time at the
            company, I also interacted with various clients working in a support
            role and updating custom requested features to better meet their
            business requirements.
          </p>
          <p>
            My knowledge of working with the React framework on personal
            projects allowed me to work on their new predictive maintenance
            software, PROPHES. My role in this project saw me work alongside the
            software architect and lead developer, implementing new features and
            helping set up data for potential client showcases.
          </p>
        </div>
      </div>

      <div id="solus" className="two-column-layout">
        <div className="resumeTitle">
          <a
            href="http://www.solus.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              <GiRingedPlanet size={32} />
              Solus UK Ltd
            </h3>
          </a>
          <p className="resumeDate">August 2016 - October 2018</p>
          <p className="underline">Unity Developer</p>
        </div>
        <div className="resumeDetails">
          <p>
            When I started my role at Solus I was placed in charge of several
            existing mobile applications to fix bugs, implement and improve
            features and games and work on optimising these applications. Later
            I was placed in a lead role in developing the company's new
            children's library application to deliver a more feature-rich
            experience to libraries and their patrons.
          </p>
          <p>
            In my time there, I worked on improving the organisation and
            development process between different departments. I was also
            involved in taking part in regular development meetings with our
            reseller based in the US and interacting with customers during the
            pilot phase of the application's launch in the US.
          </p>
        </div>
      </div>
    </div>
  );
}
