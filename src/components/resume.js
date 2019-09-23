import React from "react"
import styled from "styled-components"
import { Row, Col, Table } from "react-bootstrap"
import Underline from "./underline"
import danieltaylorResume from "../files/DanielTaylor_Resume.pdf"

const Styles = styled.div`
  padding: 0;
  padding-bottom: 5rem;
  margin: 0;
  background-color: #ffff;

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
          <Row className="borderBottom" noGutters>
            <Col xs={12} md={{ span: 4, offset: 2 }}>
              <h3>EXPERIENCE</h3>
            </Col>
            <Col xs={12} md={6}>
              <p>
                Spartan Solutions Ltd (October 2018 - Present) Software Engineer
              </p>
              <p>Solus UK Ltd (August 2016 - October 2018) Unity Developer</p>
            </Col>
          </Row>
          <Row className="borderBottom" noGutters>
            <Col xs={12} md={{ span: 4, offset: 2 }}>
              <h3>EDUCATION</h3>
            </Col>
            <Col xs={12} md={6}>
              <p>
                University of the West of Scotland (September 2012 - June 2016)
                BSc. Hons Computer Games Development (First Class)
              </p>
            </Col>
          </Row>
          <Row className="borderBottom" noGutters>
            <Col xs={12} md={{ span: 4, offset: 2 }}>
              <h3>SKILLS</h3>
            </Col>
            <Col xs={12} md={6}>
              <Table responsive="sm" borderless>
                <tbody>
                  <tr>
                    <td>C#</td>
                    <td>JavaScript</td>
                    <td>React</td>
                  </tr>
                  <tr>
                    <td>Redux</td>
                    <td>HTML5/CSS</td>
                    <td>Bootstrap</td>
                  </tr>
                  <tr>
                    <td>jQuery</td>
                    <td>Underscore.js</td>
                    <td>Unity</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={{ span: 4, offset: 2 }}>
              <h3>AWARDS</h3>
            </Col>
            <Col xs={12} md={6}>
              <p>
                <strong>UWS Court Medal 2015 - 2016</strong> Achieved by getting
                the highest academic results in my course across all four
                university campuses.
              </p>
              <p>
                <strong>Best Computer Games Development Project 2016</strong>{" "}
                Awarded whilst attending the Digital Futures showcase at
                university and having been voted by students and attendees as
                having the best project in this category.
              </p>
              <p>
                <strong>Digital Futures Attendee Choice Award</strong> Awarded
                at the Digital Futures showcase at university for having one of
                two most voted projects from all of the different courses on
                show at the event.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Styles>
  )
}
