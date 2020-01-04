import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import '../../styles/bootstrap-4.3.1.min.css';
import { Link } from 'gatsby-plugin-modal-routing';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import phalanxMap from '../../images/phalanx/3-phalanx-optimise-technicians-2.webp';
import phalanxServicePortal from '../../images/phalanx/4-phalanx-service-app-screenshot-3.webp';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  text-align: center;

  .appImages {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .tabletImage {
    width: 75%;
  }
`;
const Phalanx = () => {
  const data = useStaticQuery(graphql`
    query phalanxImages {
      images: allFile(filter: { relativeDirectory: { eq: "phalanx" } }) {
        nodes {
          id
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title="Phalanx"
        description="Information on my portfolio project Phalanx"
        pathname="/projects/phalanx"
      />
      <StyledContainer fluid>
        <Row noGutters>
          <Col xs={{ span: 1, offset: 11 }}>
            <Link to="/#projects" className="noUnderline">
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
              combines RFID/barcode technology, operational mobility with the
              use of smartphones and tablets and integration with back-office
              systems on a single software platform. PHALANX contains many
              processes to help employees carry out their work in a more
              streamlined and efficient manner and help reduce businesses use of
              paper.
            </p>
          </Col>
        </Row>
        <Row noGutters>
          {data.images.nodes.slice(0, 2).map((image, i) => (
            <Col
              xs="12"
              md={i === 0 ? { span: 2, offset: 3 } : { span: 2, offset: 2 }}
              key={image.childImageSharp.id}
            >
              <Img fluid={image.childImageSharp.fluid} className="appImages" />
            </Col>
          ))}
        </Row>
        <Row noGutters>
          <Col xs="12" md={{ span: 4, offset: 2 }}>
            <img
              src={phalanxMap}
              alt="PHALANX Mapping"
              className="img-responsive appImages tabletImage"
              fluid
            />
          </Col>
          <Col xs="12" md="4">
            <img
              src={phalanxServicePortal}
              alt="PHALANX Service Portal Page"
              className="img-responsive appImages tabletImage"
              fluid
            />
          </Col>
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <p>
              Whilst working on this project I have used various programming
              languages such as C#, JavaScript and SQL. Along with side
              frameworks such as REACT, JQuery and ASP.Net.
            </p>
            <p>I have also been responsible for:</p>
            <ul>
              <li>Designing and implementing new features</li>
              <li>Updating and improving previously implemented features</li>
              <li>Bug fixing</li>
              <li>Optimise areas of our mobile client</li>
              <li>Provided code reviews</li>
            </ul>
          </Col>
        </Row>
      </StyledContainer>
    </Layout>
  );
};

export default Phalanx;
