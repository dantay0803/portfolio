import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import "../../styles/bootstrap-4.3.1.min.css"
import "../../styles/index.css"
import SEO from "../../components/seo"
import appleAppStore from "../../images/apple-app-store-badge.png"
import googlePlay from "../../images/google-play-badge.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby-plugin-modal-routing"
import ibdClassesMainMenu from "../../images/ibdclasses/MainMenu.png"
import ibdClassesQuestions from "../../images/ibdclasses/Questions.png"
import ibdClassesResult from "../../images/ibdclasses/Result.png"

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  text-align: center;

  .appImages {
    width: 75%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

const IBDClasses = () => (
  <>
    <SEO title='IBD Classes'
      description={'Information on my portfolio project IBD Classes'}
      pathname={'/projects/ibd-classes'}
    />
    <StyledContainer fluid>
      <Row noGutters>
        <Col xs={{ span: 1, offset: 11 }}>
          <Link to={"/#projects"} className="noUnderline">
            <FontAwesomeIcon icon={faWindowClose} size="1x" />
          </Link>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 8, offset: 2 }}>
          <h1 className="center">IBD Classes</h1>
          <hr className="hrTitle" />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>
            The IBD Classes app was developed on behalf of the Catherine McEwan
            Foundation to assist clinicians in diagnosis paediatric inflammatory
            bowel disease. The app will ask between 6 - 23 questions and based
            on the answers from the patient will present a potential diagnosis
            based on the patient's symptoms.
          </p>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs="12" md={{ span: 2, offset: 3 }}>
          <img
            src={ibdClassesMainMenu}
            alt="IBD Classes Main Menu"
            className="img-responsive appImages"
            fluid
          />
        </Col>
        <Col xs="12" md="2">
          <img
            src={ibdClassesQuestions}
            alt="IBD Classes Questions"
            className="img-responsive appImages"
            fluid
          />
        </Col>
        <Col xs="12" md="2">
          <img
            src={ibdClassesResult}
            alt="IBD Classes Results"
            className="img-responsive appImages"
            fluid
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>My role on the development team was to:</p>
          <ul>
            <li>Design the user interface and experience of the app</li>
            <li>
              Implement the supplied diagnosis chart in the app to accept user
              input and return a diagnosis based on their input for each of the
              23 questions
            </li>
            <li>Implement other app features</li>
          </ul>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs="12" md={{ span: 3, offset: 3 }}>
          <a
            href="https://apps.apple.com/gb/app/ibd-classes/id1248829991"
            target="_blank"
            rel="noopener noreferrer"
            className="noUnderline"
          >
            <img
              src={appleAppStore}
              alt="Apple App Store Badge"
              className="appStoreBadge"
              fluid
            />
          </a>
        </Col>
        <Col xs="12" md="3">
          <a
            href="https://play.google.com/store/apps/details?id=uk.co.solus.health.PIBDCalc"
            target="_blank"
            rel="noopener noreferrer"
            className="noUnderline"
          >
            <img
              src={googlePlay}
              alt="Google Play Badge"
              className="appStoreBadge"
              fluid
            />
          </a>
        </Col>
      </Row>
    </StyledContainer>
  </>
)

export default IBDClasses
