import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Styles = styled.div`
  .about-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    margin: 4.375rem 2.5rem;
    grid-gap: 5em;
    padding: 0;
  }

  .about-content-container p {
    max-width: 560px;
  }

  .about-content-container .about-description {
    align-self: start;
    justify-self: end;
  }

  .recentTechList {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 560px;
  }

  .recentTechList ul {
    list-style-type: none;
    padding: 0;
    flex: 1;
  }

  .recentTechList li::before {
    color: var(--highlight);
    content: '►';
    margin-right: 5px;
    font-weight: bold;
    padding: 3px 8px 3px 0;
  }

  .recentTechList li {
    padding: 8px 0;
  }

  .polaroid {
    width: 25.1875rem;
    height: 26.61875rem;
    background-color: var(--text-primary);
    padding: 0;
    margin: 0;
    transform: scale(1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .polaroid img {
    width: 22.6875rem;
    height: 22.0625rem;
    margin: 1em 0;
  }

  .polaroid p {
    max-width: 22.6875rem;
    max-height: 3.3125rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
  }

  .profileImage {
    -webkit-transform: rotate(-20deg);
    transform: rotate(-20deg);
    transition: all 0.75s ease-in-out;
  }

  .profileImage:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    transition: all 0.75s ease-in-out;
  }

  .presentationImage {
    -webkit-transform: rotate(-97deg);
    transform: rotate(-97deg);
    transition: all 0.75s ease-in-out;
    animation: myanimationback 2s ease-in-out 0s 1 normal forwards;
  }

  .presentationImage:hover {
    transition: all 0.75s ease-in-out;
    animation: myanimation 2s ease-in-out 0s 1 normal forwards;
  }

  @keyframes myanimation {
    0% {
      transform: translateY(0) rotate(-97deg);
    }
    50% {
      transform: translateY(-50%) rotate(-97deg);
      z-index: 1;
      position: relative;
    }
    100% {
      transform: translateX(0) rotate(-90deg) scale(1.5);
      z-index: 1;
      position: relative;
    }
  }

  @keyframes myanimationback {
    from {
      transform: translateX(0) rotate(-90deg) scale(1.5);
      z-index: 1;
      position: relative;
    }
    50% {
      transform: translateY(-50%) rotate(-97deg);
      z-index: 1;
      position: relative;
    }
    100% {
      transform: translateY(0) rotate(-97deg);
    }
  }

  .presentationImage img {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;

// eslint-disable-next-line react/display-name
export default () => {
  const data = useStaticQuery(graphql`
    query Image {
      profileImage: file(relativePath: { eq: "profileImage.webp" }) {
        id
        childImageSharp {
          fixed(width: 363, height: 353, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      studentPresentationImage: file(
        relativePath: { eq: "studentemploymentadvicepresentation.jpg" }
      ) {
        id
        childImageSharp {
          fixed(width: 363, height: 353, quality: 100) {
            ...GatsbyImageSharpFixed
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
        <div className="about-content-container">
          <div className="about-description">
            <p>
              Hello, I’m Daniel Taylor a software engineer based in Scotland. I
              enjoy creating things for desktop, mobile and the web using
              technologies like C#, JavaScript and React. I graduated from the
              University of the West of Scotland a few years ago with a BSc.
              Honours in Computer Games Development.
            </p>

            <p>
              Shortly after graduating from university, I started my
              professional career working as a Unity developer for two years.
              Before switching things up and working as a full-stack developer
              over the third year of my career.
            </p>

            <p>Some technologies I've been working with recently:</p>
            <div className="recentTechList">
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>C#</li>
              </ul>
              <ul>
                <li>HTML & CSS</li>
                <li>Gatsby</li>
                <li>ASP.Net</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="polaroid presentationImage">
              <Img
                fixed={data.studentPresentationImage.childImageSharp.fixed}
                alt="Daniel Taylor giving an employment presentation at UWS"
              />
              <p>STUDENT PRESENTATION TIME!</p>
            </div>
            <div className="polaroid profileImage">
              <Img
                fixed={data.profileImage.childImageSharp.fixed}
                alt="Image of Daniel Taylor"
              />
              <p>Daniel Taylor</p>
            </div>
          </div>
        </div>
      </Container>
    </Styles>
  );
};
