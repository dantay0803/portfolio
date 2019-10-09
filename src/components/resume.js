import React from "react"
import styled from "styled-components"
import { Row, Col, Tab, ListGroup } from "react-bootstrap"
import danieltaylorResume from "../files/DanielTaylor_Resume.pdf"

const Styles = styled.div`
  .resumeDownload {
    text-align: center;
    margin-bottom: 4rem;
  }

  .borderBottom {
    border-bottom: 1px solid var(--portfolio-blue);
    margin-bottom: 5rem;
  }

  .list-group-item,
  .list-group-item-action {
    border: none;
    margin: 5px 0;
  }

  .list-group-item.list-group-item-action.active {
    background-color: var(--highlight);
  }

  .list-group-item.list-group-item-action.active:hover {
    background-color: var(--hover);
  }
`

export default function resume() {
  return (
    <Styles>
      <Row
        key="resume"
        id="resume"
        className="justify-content-md-center"
        noGutters
      >
        <Col xs={12}>
          <h1 className="sectionHeader">Resume</h1>
          <hr className="hrTitle" />
          <h5 className="resumeDownload">
            <a
              href={danieltaylorResume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </h5>
        </Col>
        <Col xs={12}>
          <Tab.Container id="list-group-tabs" defaultActiveKey="#experience">
            <Row noGutters>
              <Col xs={{ span: 10, offset: 1 }} md={{ span: 2, offset: 2 }}>
                <ListGroup>
                  <ListGroup.Item
                    action
                    href="#experience"
                    onClick={e => e.preventDefault()}
                  >
                    EXPERIENCE
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#education"
                    onClick={e => e.preventDefault()}
                  >
                    EDUCATION
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#skills"
                    onClick={e => e.preventDefault()}
                  >
                    SKILLS
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#awards"
                    onClick={e => e.preventDefault()}
                  >
                    AWARDS
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={{ span: 10, offset: 1 }} md={6}>
                <Tab.Content>
                  <Tab.Pane eventKey="#experience">
                    <div>
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
                        In my role I am responsible for a number of tasks
                        including development, testing and support. Some of my
                        main duties include creating, implementing and improving
                        features in PHALANX, Spartans flagship operations
                        application. As well as creating requested custom
                        features and updating existing features based on our
                        customers needs. I have also had the opportunity to work
                        on an unreleased project primarily using C#, ReactJS and
                        Redux.
                      </p>
                    </div>

                    <div>
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
                        When I started my role at Solus I was placed in charge
                        of a number of existing mobile applications to fix bugs,
                        implement and improve features and games and work on
                        optimising these applications. Later I was placed in a
                        lead role in developing the company's new children's
                        library application to deliver a more feature rich
                        experience to libraries and their patrons.
                      </p>

                      <p>
                        In my time there, I worked on improving the organization
                        and development process between different departments. I
                        was also involved in taking part in regular development
                        meetings with our reseller based in the US, as well as
                        interacting with customers during the pilot phase of the
                        applications launch in the US.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#education">
                    <div>
                      <h3>University of the West of Scotland</h3>
                      <p className="resumeDate">September 2012 - June 2016</p>
                      <p>BSc. Hons Computer Games Development (First Class)</p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#skills">
                    <p>
                      Here's a few technologies I've been working with recently:
                    </p>

                    <Row>
                      <Col xs={6} md={4}>
                        <ul>
                          <li>C#</li>
                          <li>JavaScript</li>
                          <li>React/React Native</li>
                          <li>Redux</li>
                        </ul>
                      </Col>

                      <Col xs={{ span: 6, offset: 0 }} md={{ span: 4, offset: 2 }}>
                        <ul>
                          <li>HTML/CSS</li>
                          <li>Bootstrap</li>
                          <li>jQuery</li>
                          <li>Unity</li>
                        </ul>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#awards">
                    <div>
                      <h3>UWS Court Medal</h3>
                      <p>
                        Achieved in my final year of university by getting the
                        highest academic results in my course across all four
                        university campuses.
                      </p>
                    </div>

                    <div>
                      <h3>Best Computer Games Development Project</h3>
                      <p>
                        Awarded whilst attending the Digital Futures showcase at
                        university and having been voted by students and
                        attendees as having the best project in this category.
                      </p>
                    </div>

                    <div>
                      <h3>Digital Futures Attendee Choice Award</h3>
                      <p>
                        Awarded at the Digital Futures showcase at university
                        for having one of two most voted projects from all of
                        the different courses on show at the event.
                      </p>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Styles>
  )
}
