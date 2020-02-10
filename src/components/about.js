import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Styles = styled.div`
  .polaroid-border {
    max-width: 25.1875rem;
    max-height: 26.61875rem;
    background-color: var(--text-primary);
    display: grid;
    grid-template-rows: 10fr 1fr;
    grid-template-columns: 1fr;
  }

  .polaroid-border img {
    max-width: 100%;
    max-height: 100%;
    padding: 0.9375rem;
    justify-self: center;
    align-self: center;
  }

  .polaroid-border p {
    max-width: 22.6875rem;
    max-height: 22.0625rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
    justify-self: center;
    align-self: center;
    padding: 0;
    margin: 0;
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
      <Container key="about" id="about" fluid>
        <h1>About</h1>
        <hr className="hrTitle" />
        <p>
          Hello, I’m Daniel Taylor a software engineer based in Scotland. I
          enjoy creating things for desktop, mobile and the web using
          technologies like C#, JavaScript and React. I graduated from the
          University of the West of Scotland a few years ago with a BSc. Honours
          in Computer Games Development.
        </p>

        <p>
          Shortly after graduating from university, I started my professional
          career working as a Unity developer for two years. Before switching
          things up and working as a full-stack developer over the third year of
          my career.
        </p>
        <div className="polaroid-border">
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="Image of Daniel Taylor"
          />
          <p>Daniel Taylor</p>
        </div>
      </Container>
    </Styles>
  );
};
