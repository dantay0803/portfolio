import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const StyledLink = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export default props => {
  const { link } = props;
  const data = useStaticQuery(graphql`
    query googlePlayImage {
      image: file(relativePath: { eq: "google-play-badge.webp" }) {
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
    <StyledLink>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='noUnderline'>
        <Img fluid={data.image.childImageSharp.fluid} alt='Google Play Badge' />
      </a>
    </StyledLink>
  );
};
