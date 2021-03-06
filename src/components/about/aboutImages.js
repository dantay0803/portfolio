import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const PolaroidBackground = styled.div`
  width: 12.625rem;
  height: 13.3125rem;
  background-color: var(--text-primary);
  transform: scale(1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0.625rem 0.625rem 0.375rem rgba(0, 0, 0, 1);

  img {
    width: 11.3437rem;
    max-height: 11.0312rem;
    margin: 1em 0;
    pointer-events: none;
  }

  p {
    max-width: 11.3437rem;
    max-height: 1.5rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
    font-size: 0.75rem;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    width: 14.9rem;
    height: 15.96rem;

    img {
      width: 13rem;
      max-height: 12.55rem;
    }

    p {
      max-width: 13rem;
      max-height: 2.41rem;
    }
  }

  @media (min-width: 992px) {
    width: 20.1875rem;
    height: 21.61875rem;

    img {
      width: 18rem;
      max-height: 17.55rem;
    }

    p {
      max-width: 18rem;
      max-height: 2rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 1200px) {
    width: 25.1875rem;
    height: 26.61875rem;

    img {
      width: 22.6875rem;
      max-height: 22.0625rem;
    }

    p {
      max-width: 22.6875rem;
      max-height: 3.3125rem;
      font-size: 1.25rem;
    }
  }
`;

const Styles = styled.div`
  height: 15rem;
  margin-bottom: 3rem;

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

  .profileImage > .gatsby-image-wrapper {
    pointer-events: none;
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

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    height: 30rem;
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
            imgStyle={{
              objectFit: 'scale-down',
              objectPosition: '50% 50%',
            }}
          />
          <p>STUDENT PRESENTATION TIME!</p>
        </PolaroidBackground>
      </div>
      <PolaroidBackground className="profileImage">
        <Img
          fixed={data.profileImage.childImageSharp.fixed}
          alt="Image of Daniel Taylor"
          imgStyle={{
            objectFit: 'scale-down',
            objectPosition: '50% 50%',
          }}
        />
        <p>Daniel Taylor</p>
      </PolaroidBackground>
    </Styles>
  );
};
