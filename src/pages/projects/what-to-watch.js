import React from "react"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import styled from "styled-components"
import "../../styles/bootstrap-4.3.1.min.css"
import "../../styles/index.css"
import SEO from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby-plugin-modal-routing"
import wtwhome from "../../images/whattowatch/wtwhome.png"
import wtwsearch from "../../images/whattowatch/wtwsearch.png"
import wtwdetailsone from "../../images/whattowatch/wtwdetailsone.png"
import wtwdetailstwo from "../../images/whattowatch/wtwdetailstwo.png"
import wtwdetailstrailers from "../../images/whattowatch/wtwdetailstrailers.png"
import wtwpersonone from "../../images/whattowatch/wtwpersonone.png"
import wtwpersontwo from "../../images/whattowatch/wtwpersontwo.png"
import wtwcollection from "../../images/whattowatch/wtwcollection.png"
import wtwdiscover from "../../images/whattowatch/wtwdiscover.png"
import wtwkeywordgenresearch from "../../images/whattowatch/wtwkeywordgenresearch.png"

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  padding-bottom: 2rem;
`

const SecondPage = () => (
  <>
    <SEO title='What to Watch'
      description={'Information on my portfolio project What to Watch'}
      pathname={'/projects/what-to-watch'}
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
          <h1 className="center">What to Watch</h1>
          <hr className="hrTitle" />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p className="center">
            What to Watch is a website I created in React, using the{" "}
            <a
              href="https://developers.themoviedb.org/3/getting-started/introduction"
              target="_blank"
              rel="noopener noreferrer"
            >
              MovieDB API
            </a>
            for the sites data. The website includes a number of features such
            as:
          </p>
          <ul>
            <li>Netflix styled homepage with featured content</li>
            <li>Movie, TV and person searching</li>
            <li>Details on movies, TV shows and people</li>
            <li>
              View collections of related items, such as movie collections with
              their overview, average rating and the number of items in the
              collection
            </li>
            <li>View trailers using the YouTube Player API</li>
            <li>View comments from users on the MovieDB website</li>
          </ul>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={wtwhome}
                alt="What to Watch Home"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={wtwsearch}
                alt="What to Watch Search"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={wtwdetailsone}
                alt="What to Watch Details One"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={wtwdetailstwo}
                alt="What to Watch Details Two"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={wtwdetailstrailers}
                alt="What to Watch Trailers"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={wtwpersonone}
                alt="What to Watch Person Details One"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={wtwpersontwo}
                alt="What to Watch Person Details Two"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={wtwcollection}
                alt="What to Watch Collections"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={wtwdiscover}
                alt="What to Watch Discover"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={wtwkeywordgenresearch}
                alt="What to Watch Keywords and Genres"
              />
            </Carousel.Item>
          </Carousel>
          <p className="center">Technologies used in project:</p>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>React Router</li>
            <li>Styled Components</li>
            <li>React Bootstrap</li>
            <li>React Icons</li>
            <li>YouTube Player API</li>
          </ul>
        </Col>
      </Row>
    </StyledContainer>
  </>
)

export default SecondPage
