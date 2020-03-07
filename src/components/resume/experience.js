import React from 'react';
import { GiSpartanHelmet, GiRingedPlanet } from 'react-icons/gi';

export default function experience() {
  return (
    <div>
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
          <p className="resumeDate">October 2018 - Present</p>
          <p className="underline">Software Engineer</p>
        </div>
        <div className="resumeDetails">
          <p>
            In my role, I am responsible for many tasks including development,
            testing and support. Some of my main duties include creating,
            implementing and improving features in PHALANX Spartans flagship
            operations application. As well as creating requested custom
            features and updating existing features based on our customer's
            needs. I have also had the opportunity to work on an unreleased
            project primarily using C#, ReactJS and Redux.
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
            In my time there, I worked on improving the organization and
            development process between different departments. I was also
            involved in taking part in regular development meetings with our
            reseller based in the US, as well as interacting with customers
            during the pilot phase of the application's launch in the US.
          </p>
        </div>
      </div>
    </div>
  );
}
