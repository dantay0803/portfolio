import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import "../../styles/bootstrap-4.3.1.min.css"
import "../../styles/index.css"
import SEO from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby-plugin-modal-routing"
import phalanxAppHome from "../../images/phalanx/phalanx-delivery-app.png"
import phalanxDeliveryApp from "../../images/phalanx/phalanx-delivery-app-screen-4.png"
import phalanxDeliveryAppTwo from "../../images/phalanx/phalanx-delivery-app-screenshot-2.png"
import phalanxDeliveryPortal from "../../images/phalanx/phalanx-delivery-app-screenshot-2.png"
import phalanxMap from "../../images/phalanx/phalanx-optimise-technicians-2.png"
import phalanxQAApp from "../../images/phalanx/phalanx-qa-app-screenshot-2.png"
import phalanxServicePortal from "../../images/phalanx/phalanx-service-app-screenshot-3.png"

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
const Phalanx = () => (
  <>
    <SEO title='Phalanx'
      description={'Information on my portfolio project Phalanx'}
      pathname={'/projects/phalanx'}
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
          <h1 className="center">PHALANX</h1>
          <hr className="hrTitle" />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>
            PHALANX is an integrated operations software application that
            combines RFID/barcode technology, operational mobility with the use
            of smartphones and tablets and integration with back-office systems
            on a single software platform. PHALANX contains a number of process
            to help employees carry out their work in a more streamlined and
            efficient manner and help reduce a businesses use of paper.
          </p>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs="12" md={{ span: 2, offset: 1 }}>
          <img
            src={phalanxAppHome}
            alt="PHALANX Application Home"
            className="img-responsive appImages"
            fluid
          />
        </Col>
        <Col xs="12" md="2">
          <img
            src={phalanxDeliveryApp}
            alt="PHALANX Delivery Page"
            className="img-responsive appImages"
            fluid
          />
        </Col>
        <Col xs="12" md="2">
          <img
            src={phalanxDeliveryAppTwo}
            alt="PHALANX Delivery Page Two"
            className="img-responsive appImages"
            fluid
          />
        </Col>
        <Col xs="12" md="2">
          <img
            src={phalanxDeliveryPortal}
            alt="PHALANX Delivery Portal Page"
            className="img-responsive appImages"
            fluid
          />
        </Col>
        <Col xs="12" md="2">
          <img
            src={phalanxQAApp}
            alt="PHALANX Quality Assurance"
            className="img-responsive appImages"
            fluid
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs="12" md={{ span: 4, offset: 2 }}>
          <img
            src={phalanxMap}
            alt="PHALANX Mapping"
            className="img-responsive appImages"
            fluid
          />
        </Col>
        <Col xs="12" md="4">
          <img
            src={phalanxServicePortal}
            alt="PHALANX Service Portal Page"
            className="img-responsive appImages"
            fluid
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>
            Whilst working on this project I have used various programming
            languages such as C#, JavaScript and SQL. Along side frameworks such
            as REACT, JQuery and ASP.Net.
          </p>
          <p>I have also been responsible for:</p>
          <ul>
            <li>Designing and implementing new features</li>
            <li>Updating and improving previously implemented features</li>
            <li>Bug fixing</li>
            <li>Optimise areas of out mobile client</li>
            <li>Provided code reviews</li>
          </ul>
        </Col>
      </Row>
    </StyledContainer>
  </>
)

export default Phalanx
