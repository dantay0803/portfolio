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
import GooglePlayBadge from '../../components/appStoreBadges/googlePlay';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;

  .appImages {
    margin: 1rem;
  }
`;

const WorldCupManager = () => {
  const data = useStaticQuery(graphql`
    query worldCupManagerImages {
      images: allFile(
        filter: { relativeDirectory: { eq: "worldcupmanager" } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <Layout>
      <SEO
        title="World Cup Manager"
        description="Information on my portfolio project World Cup Manager"
        pathname="/projects/world-cup-manager"
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
            <h1>World Cup Manager</h1>
            <hr className="hrTitle" />
          </Col>
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <p>
              World Cup manager was created as part of a three man team for our
              computer project class, our brief was to create a piece of
              software from a list as part of a random team of people that do
              not know each other. My team decided to make a mobile application
              that allowed people to save game outcomes about the world cup and
              have it update tables and outcomes.
            </p>
          </Col>
        </Row>
        <Row noGutters>
          {data.images.nodes.slice(0, 2).map((image, i) => (
            <Col
              xs={{ span: 12, offset: 0 }}
              md={i === 0 ? { span: 4, offset: 2 } : '4'}
              key={image.childImageSharp.id}
            >
              <Img fluid={image.childImageSharp.fluid} className="appImages" />
            </Col>
          ))}
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <p>
              The application displays the matches to be played in the
              tournament and then takes in user input of score from each game.
              Once the scores have been entered the application will update the
              group stages by filling in the points, goals, goal difference and
              other information to the group tables. After the group stage the
              application displays the knockout stages and once again it takes a
              score input and will graphically display which teams move on
              further into the tournament. It can also be used to simulate made
              up outcomes in a world cup situation and can also be used for
              future tournaments as well. During the tournament the application
              had over ten thousand downloads with our highest daily download
              total hitting 250.
            </p>
          </Col>
        </Row>
        <Row noGutters>
          {data.images.nodes.slice(2, 4).map((image, i) => (
            <Col
              xs={{ span: 12, offset: 0 }}
              md={i === 0 ? { span: 4, offset: 2 } : '4'}
              key={image.childImageSharp.id}
            >
              <Img
                fluid={image.childImageSharp.fluid}
                className="appImages"
                alt={i}
              />
            </Col>
          ))}
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <p>
              My role is the team was to get resources, compile minutes of
              meetings and help with half of the documentation; my main task was
              to create 75 of the 100 flags that could be used in a world cup
              tournament as no good quality version of these flags were
              available for download. I had a lot of fun designing and creating
              the application as well as learning a lot making it, it was a
              challenge at first to make such an application in a short period
              with people I have never spoken to before but I feel the outcome
              of the final product was fantastic.
            </p>
          </Col>
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 4 }}>
            <GooglePlayBadge link="https://play.google.com/store/apps/details?id=framework.core&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" />
          </Col>
        </Row>
      </StyledContainer>
    </Layout>
  );
};

export default WorldCupManager;
