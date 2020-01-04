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

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  text-align: center;

  .appImages {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid black;
  }
`;

const ComicManager = () => {
  const data = useStaticQuery(graphql`
    query comicManagerImages {
      images: allFile(filter: { relativeDirectory: { eq: "comicmanager" } }) {
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

  console.log(data);

  return (
    <Layout>
      <SEO
        title="Comic Manager"
        description="Information on my portfolio project Comic Manager"
        pathname="/projects/comic-manager"
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
            <h1 className="center">Comic Manager</h1>
            <hr className="hrTitle" />
          </Col>
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <p>
              This is a mobile application that I have been creating in my spare
              time to help me keep track of which storage box my various comic
              books are located in. The application is created using Apache
              Cordova, jQuery and several Apache Cordova plugins.
            </p>
            <p className="center">
              <a
                href="https://github.com/dantay0803/ComicManager"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repository
              </a>
            </p>
          </Col>
        </Row>
        <Row noGutters>
          {data.images.nodes.slice(0, 3).map((image, i) => (
            <Col
              xs={{ span: 10, offset: 1 }}
              md={i === 0 ? { span: 2, offset: 2 } : '2'}
              key={image.childImageSharp.id}
            >
              <Img fluid={image.childImageSharp.fluid} className="appImages" />
            </Col>
          ))}
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <p>
              The application allows the user to scan the barcode of their
              selected comic, performs several searches against the Google Books
              API and lists the results for the user to select their match. Once
              a comic has been selected they are taken to a form where they can
              update the title, publisher, description of the comic and set the
              box number where they can find the comic.
            </p>
          </Col>
        </Row>
        <Row noGutters>
          {data.images.nodes.slice(3, 6).map((image, i) => (
            <Col
              xs={{ span: 10, offset: 1 }}
              md={i === 0 ? { span: 2, offset: 2 } : '2'}
              key={image.childImageSharp.id}
            >
              <Img fluid={image.childImageSharp.fluid} className="appImages" />
            </Col>
          ))}
        </Row>
        <Row noGutters>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <p>
              All of the comics saved by the user are added to a list view and
              saved in a database. The list view items allow the user to select
              them to show a pop up with all of the information saved for the
              comic. As well as a button to remove the list item and the comic
              from the database. I also added the feature to export and import
              the list of comics as a JSON file so the user can remove the app
              or change their device without the need to rescan all of their
              comics.
            </p>
          </Col>
        </Row>
      </StyledContainer>
    </Layout>
  );
};

export default ComicManager;
