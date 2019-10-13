import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Styles = styled.div`
  padding: 0;
  margin: 0;

  .img-thumbnail {
    -moz-box-shadow: 5px 10px 10px black;
    -webkit-box-shadow: 5px 10px 10px black;
    box-shadow: 5px 10px 10px black;
  }

  img {
    padding: 4px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query Image {
      image: file(relativePath: { eq: "profileImage.webp" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Styles>
      <Row
        key='about'
        id='about'
        className='justify-content-md-center'
        noGutters>
        <Col xs={12}>
          <h1 className='sectionHeader'>About Me</h1>
          <hr className='hrTitle' />
        </Col>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 3, offset: 1 }}>
          <p>
            Hello, I’m Daniel Taylor a software engineer based in Scotland. I
            enjoy creating things for desktop, mobile and the web using
            technologies like C#, JavaScript and React. I Graduated from the
            University of the West of Scotland a few years ago with a BSc.
            Honours in Computer Games Development.
          </p>

          <p>
            Shortly after graduating from university, I started my professional
            career working as a Unity developer for two years. Before switching
            things up and working as a fullstack developer over the third year
            of my career.
          </p>
        </Col>
        <Col xs={{ span: 10, offset: 1 }} md={2}>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt='My profile picture'
            className='img-thumbnail'
          />
        </Col>
      </Row>
    </Styles>
  );
};
