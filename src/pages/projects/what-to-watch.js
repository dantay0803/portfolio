import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import '../../styles/bootstrap-4.3.1.min.css';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby-plugin-modal-routing';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  padding-bottom: 2rem;
`;

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query wtwImages {
      images: allFile(filter: { relativeDirectory: { eq: "whattowatch" } }) {
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
        title='What to Watch'
        description={'Information on my portfolio project What to Watch'}
        pathname={'/projects/what-to-watch'}
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
            <h1 className='center'>What to Watch</h1>
            <hr className='hrTitle' />
          </Col>
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <p className='center'>
              What to Watch is a website I created in React, using the{' '}
              <a
                href='https://developers.themoviedb.org/3/getting-started/introduction'
                target='_blank'
                rel='noopener noreferrer'>
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
                View collections of related items, such as movie collections
                with their overview, average rating and the number of items in
                the collection
              </li>
              <li>View trailers using the YouTube Player API</li>
              <li>View comments from users on the MovieDB website</li>
            </ul>
            <Carousel>
              {data.images.nodes.map((image, i) => (
                <Carousel.Item key={image.childImageSharp.id}>
                  <Img
                    fluid={image.childImageSharp.fluid}
                    className='d-block w-100'
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <p className='center'>Technologies used in project:</p>
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
    </Layout>
  );
};

export default SecondPage;
