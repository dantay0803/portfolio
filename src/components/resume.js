import React from "react"
import styled from "styled-components"
import { Row, Col, Tab, ListGroup } from "react-bootstrap"
import Underline from "./underline"
import danieltaylorResume from "../files/DanielTaylor_Resume.pdf"

const Styles = styled.div`
  padding-bottom: 5rem;

  .resumeDownload {
    text-align: center;
    margin-bottom: 4rem;
  }

  .borderBottom {
    border-bottom: 1px solid var(--portfolio-blue);
    margin-bottom: 5rem;
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
          <h1>Resume</h1>
          <Underline />
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
        <Col xs={8}>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item
                    action
                    href="#link1"
                    onClick={e => e.preventDefault()}
                  >
                    EXPERIENCE
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#link2"
                    onClick={e => e.preventDefault()}
                  >
                    EDUCATION
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    SKILLS
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link4">
                    AWARDS
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <p>
                      Spartan Solutions Ltd (October 2018 - Present) Software
                      Engineer
                    </p>
                    <p>
                      Solus UK Ltd (August 2016 - October 2018) Unity Developer
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <p>
                      University of the West of Scotland (September 2012 - June
                      2016) BSc. Hons Computer Games Development (First Class)
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <ul>
                      <li>C#</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Redux</li>
                      <li>HTML/CSS</li>
                      <li>Bootstrap</li>
                      <li>jQuery</li>
                      <li>Underscore.js</li>
                      <li>Unity</li>
                    </ul>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    <p>
                      <strong>UWS Court Medal 2015 - 2016</strong> Achieved by
                      getting the highest academic results in my course across
                      all four university campuses.
                    </p>
                    <p>
                      <strong>
                        Best Computer Games Development Project 2016
                      </strong>{" "}
                      Awarded whilst attending the Digital Futures showcase at
                      university and having been voted by students and attendees
                      as having the best project in this category.
                    </p>
                    <p>
                      <strong>Digital Futures Attendee Choice Award</strong>{" "}
                      Awarded at the Digital Futures showcase at university for
                      having one of two most voted projects from all of the
                      different courses on show at the event.
                    </p>
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
