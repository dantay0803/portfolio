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
import planetLibraryMain from "../../images/planetlibrary/PlanetLibrary_Poster.png"

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
`

const PlanetLibraryPage = () => (
  <>
    <SEO title='Planet Library'
      description={'Information on my portfolio project PlanetLibrary'}
      pathname={'/projects/planet-library'}
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
          <h1 className="center">Planet Library</h1>
          <hr className="hrTitle" />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>
            Planet Library has been my main responsibility since working at
            Solus UK Ltd. The application was developed as a child specific
            version of the Solus adult library application which integrates with
            library services. The application allows users to search and reserve
            both physical and electronic books, access a digital version of
            their library card as well as other various features. Planet Library
            also includes a game hunt feature that allows children to explore
            their local libraries and find and collect different characters and
            creatures to unlock various different games.
          </p>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs="12" md={{ span: 8, offset: 2 }} className="center">
          <img
            src={planetLibraryMain}
            alt="Planet Library Poster"
            className="img-responsive"
            fluid
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>My role on the development team was to:</p>
          <ul>
            <li>Design and implement features.</li>
            <li>Design and create new games.</li>
            <li>Update the visuals, code and gameplay of games.</li>
            <li>Update code.</li>
            <li>Bug fixes.</li>
            <li>
              Optimise assets to reduce the application’s size and improve
              performance.
            </li>
          </ul>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs="12" md={{ span: 3, offset: 3 }}>
          <a
            href="https://apps.apple.com/gb/app/darebin-planet-library/id1238643445"
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
            href="https://play.google.com/store/apps/details?id=au.com.solus.DarebinPlanetLibrary&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
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

export default PlanetLibraryPage
