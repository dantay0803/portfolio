import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const PolaroidBackground = styled.div`
  width: 25.1875rem;
  height: 26.61875rem;
  background-color: var(--text-primary);
  transform: scale(1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0.625rem 0.625rem 0.375rem rgba(0, 0, 0, 1);

  img {
    width: 22.6875rem;
    max-height: 22.0625rem;
    margin: 1em 0;
  }

  p {
    max-width: 22.6875rem;
    max-height: 3.3125rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
  }
`;

const Styles = styled.div`
  height: 30rem;

  .profileImage {
    transition: all 0.75s ease-in-out;
    -webkit-transform: rotate(-10deg) translateY(-100%);
    transform: rotate(-10deg) translateY(-100%);
  }

  .profileImage:hover {
    -webkit-transform: scale(1.5) translateY(-75%);
    transform: scale(1.5) translateY(-75%);
    transition: all 0.75s ease-in-out;
  }

  .presentationImage {
    animation: presentationImageAnimationBack 2s ease-in-out 0s 1 normal
      forwards;
  }

  .presentationImageTrigger:hover .presentationImage {
    animation: presentationImageAnimation 2s ease-in-out 0s 1 normal forwards;
  }

  @keyframes presentationImageAnimation {
    0% {
      -webkit-transform: translateX(0) rotate(-75deg);
      transform: translateX(0) rotate(-75deg);
    }
    50% {
      -webkit-transform: translateX(105%) rotate(-75deg) scale(1);
      transform: translateX(110%) rotate(-75deg) scale(1);
    }
    100% {
      -webkit-transform: translateX(0) rotate(-90deg) scale(1.5);
      transform: translateX(0) rotate(-90deg) scale(1.5);
      z-index: 1;
      position: relative;
    }
  }

  @keyframes presentationImageAnimationBack {
    from {
      -webkit-transform: translateX(0) rotate(-90deg) scale(1.5);
      transform: translateX(0) rotate(-90deg) scale(1.5);
      z-index: 1;
      position: relative;
    }
    50% {
      -webkit-transform: translateX(105%) rotate(-75deg);
      transform: translateX(105%) rotate(-75deg);
    }
    100% {
      -webkit-transform: translateX(0) rotate(-75deg);
      transform: translateX(0) rotate(-75deg);
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
      profileImage: file(relativePath: { eq: "about/profileImage.jpg" }) {
        id
        childImageSharp {
          fixed(width: 363, height: 353, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      studentPresentationImage: file(
        relativePath: { eq: "about/studentemploymentadvicepresentation.jpg" }
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
      <div className="presentationImageTrigger">
        <PolaroidBackground className="presentationImage">
          <Img
            fixed={data.studentPresentationImage.childImageSharp.fixed}
            alt="Daniel Taylor giving an employment presentation at UWS"
          />
          <p>STUDENT PRESENTATION TIME!</p>
        </PolaroidBackground>
      </div>
      <PolaroidBackground className="profileImage">
        <Img
          fixed={data.profileImage.childImageSharp.fixed}
          alt="Image of Daniel Taylor"
        />
        <p>Daniel Taylor</p>
      </PolaroidBackground>
    </Styles>
  );
};
