import React from 'react';
import styled from 'styled-components';
import { Container, Card } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import BlogShowcaseCard from './blogShowcaseCard';

const Styles = styled.div`
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    margin: 0;
    padding: 0;
    justify-items: center;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
`;

// eslint-disable-next-line react/display-name
export default () => {
  const data = useStaticQuery(graphql`
    query BlogThumbnails {
      planetLibraryImage: file(
        relativePath: { eq: "thumbnails/thumbnail_pl.webp" }
      ) {
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
      <Container key="blog" id="blog" fluid>
        <h1>Blog</h1>
        <hr className="hrTitle" />
        <div className="card-grid">
          <BlogShowcaseCard
            thumbnail={data.planetLibraryImage.childImageSharp.fluid}
            postTitle="Student Employment Advice Presentation – 2019"
            postDate="Sat, 14 Sep 2019"
            postDescription="A few months ago I was invited back to the university I used to attend, the University of the West of Scotland. To deliver my t..."
            postPath="blog/Student Employment Advice Presentation – 2019"
          />
          <BlogShowcaseCard
            thumbnail={data.planetLibraryImage.childImageSharp.fluid}
            postTitle="Student Employment Advice Presentation – 2019"
            postDate="Sat, 14 Sep 2019"
            postDescription="A few months ago I was invited back to the university I used to attend, the University of the West of Scotland. To deliver my t..."
            postPath="blog/Student Employment Advice Presentation – 2019"
          />
          <BlogShowcaseCard
            thumbnail={data.planetLibraryImage.childImageSharp.fluid}
            postTitle="Student Employment Advice Presentation – 2019"
            postDate="Sat, 14 Sep 2019"
            postDescription="A few months ago I was invited back to the university I used to attend, the University of the West of Scotland. To deliver my t..."
            postPath="blog/Student Employment Advice Presentation – 2019"
          />
        </div>
      </Container>
    </Styles>
  );
};
