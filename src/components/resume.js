import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import danieltaylorResume from '../files/DanielTaylor_Resume.pdf';

const Styles = styled.div`
  .resume-details {
    width: 500px;
    height: 750px;
  }

  li::before {
    color: var(--highlight);
    content: '►';
    margin-right: 5px;
    font-weight: bold;
    padding: 3px 8px 3px 0;
  }

  /* Radio element, when checked */
  input[type='radio']:checked {
    content: '►';
    /* box-shadow: 0 0 0 3px orange; */
  }
`;

export default function resume() {
  return (
    <Styles>
      <Container key="resume" id="resume" fluid>
        <h1>Resume</h1>
        <hr className="hrTitle" />
        <div className="resume-selector">
          <div>
            <label htmlFor="experience">
              <input
                type="radio"
                key="experience"
                id="experience"
                name="resume-selection"
                defaultChecked
              />
              Experience
            </label>
          </div>

          <div>
            <label htmlFor="education">
              <input
                type="radio"
                key="education"
                id="education"
                name="resume-selection"
              />
              Education
            </label>
          </div>

          <div>
            <label htmlFor="skills">
              <input
                type="radio"
                key="skills"
                id="skills"
                name="resume-selection"
              />
              Skills
            </label>
          </div>

          <div>
            <label htmlFor="awards">
              <input
                type="radio"
                key="awards"
                id="awards"
                name="resume-selection"
              />
              Awards
            </label>
          </div>
        </div>

        <div className="resume-details">
          <div className="experience">
            <div id="spartan">
              <h3>
                <a
                  href="https://www.spartansolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spartan Solutions Ltd
                </a>
              </h3>
              <p className="resumeDate">October 2018 - Present</p>
              <p className="underline">Software Engineer</p>
              <p>
                In my role, I am responsible for many tasks including
                development, testing and support. Some of my main duties include
                creating, implementing and improving features in PHALANX,
                Spartans flagship operations application. As well as creating
                requested custom features and updating existing features based
                on our customer's needs. I have also had the opportunity to work
                on an unreleased project primarily using C#, ReactJS and Redux.
              </p>
            </div>
            <div id="solus">
              <h3>
                <a
                  href="http://www.solus.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solus UK Ltd
                </a>
              </h3>
              <p className="resumeDate">August 2016 - October 2018</p>
              <p className="underline">Unity Developer</p>
              <p>
                When I started my role at Solus I was placed in charge of
                several existing mobile applications to fix bugs, implement and
                improve features and games and work on optimising these
                applications. Later I was placed in a lead role in developing
                the company's new children's library application to deliver a
                more feature-rich experience to libraries and their patrons.
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

          <div className="education">
            <div id="university">
              <h3>University of the West of Scotland</h3>
              <p className="resumeDate">September 2012 - June 2016</p>
              <p>BSc. Hons Computer Games Development (First Class)</p>
            </div>
          </div>

          <div className="skills">
            <ul>
              <li>C#</li>
              <li>JavaScript</li>
              <li>React/React Native</li>
              <li>Redux</li>
            </ul>
            <ul>
              <li>HTML/CSS</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>Unity</li>
            </ul>
          </div>

          <div className="awards">
            <div id="uwsCourtMedal">
              <h3>UWS Court Medal</h3>
              <p>
                Achieved in my final year of university by getting the highest
                academic results in my course across all four university
                campuses.
              </p>
            </div>
            <div id="BCGDP">
              <h3>Best Computer Games Development Project</h3>
              <p>
                Awarded whilst attending the Digital Futures showcase at
                university and having been voted by students and attendees as
                having the best project in this category.
              </p>
            </div>
            <div id="DFACA">
              <h3>Digital Futures Attendee Choice Award</h3>
              <p>
                Awarded at the Digital Futures showcase at university for having
                one of two most voted projects from all of the different courses
                on show at the event.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Styles>
  );
}
