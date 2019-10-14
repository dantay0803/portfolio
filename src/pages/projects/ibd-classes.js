import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import '../../styles/bootstrap-4.3.1.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby-plugin-modal-routing';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import GooglePlayBadge from '../../components/appStoreBadges/googlePlay';
import AppleAppStoreBadge from '../../components/appStoreBadges/appleAppStore';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  text-align: center;
`;

const IBDClasses = () => {
  const data = useStaticQuery(graphql`
    query ibdClassesImages {
      images: allFile(filter: { relativeDirectory: { eq: "ibdclasses" } }) {
        nodes {
          id
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title='IBD Classes'
        description={'Information on my portfolio project IBD Classes'}
        pathname={'/projects/ibd-classes'}
      />
      <StyledContainer fluid>
        <Row noGutters>
          <Col xs={{ span: 1, offset: 11 }}>
            <Link to={'/#projects'} className='noUnderline'>
              <FontAwesomeIcon icon={faWindowClose} size='1x' />
            </Link>
          </Col>
        </Row>
        <Row noGutters>
          <Col xs={{ span: 8, offset: 2 }}>
            <h1 className='center'>IBD Classes</h1>
            <hr className='hrTitle' />
          </Col>
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <p>
              The IBD Classes app was developed on behalf of the Catherine
              McEwan Foundation to assist clinicians in diagnosis paediatric
              inflammatory bowel disease. The app will ask between 6 - 23
              questions and based on the answers from the patient will present a
              potential diagnosis based on the patient's symptoms.
            </p>
          </Col>
        </Row>
        <Row noGutters>
          {data.images.nodes.map((image, i) => (
            <Col
              xs={{ span: 10, offset: 1 }}
              md={i === 0 ? { span: 2, offset: 2 } : '2'}
              key={image.childImageSharp.id}>
              <Img fluid={image.childImageSharp.fluid} className='appImages' />
            </Col>
          ))}
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <p>My role on the development team was to:</p>
            <ul>
              <li>Design the user interface and experience of the app</li>
              <li>
                Implement the supplied diagnosis chart in the app to accept user
                input and return a diagnosis based on their input for each of
                the 23 questions
              </li>
              <li>Implement other app features</li>
            </ul>
          </Col>
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 3, offset: 2 }}>
            <GooglePlayBadge
              link={
                'https://play.google.com/store/apps/details?id=uk.co.solus.health.PIBDCalc'
              }
            />
          </Col>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 3, offset: 2 }}>
            <AppleAppStoreBadge
              link={'https://apps.apple.com/gb/app/ibd-classes/id1248829991'}
            />
          </Col>
        </Row>
      </StyledContainer>
    </Layout>
  );
};

export default IBDClasses;
