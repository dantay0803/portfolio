import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/bootstrap-4.3.1.min.css';
import '../styles/index.css';
import SEO from '../components/seo';
import Navbar from '../components/navbars/navbarBlog';
import { graphql } from 'gatsby';
import dompurify from 'dompurify';

const StyledContainer = styled(Container)`
  margin-top: 4rem;

  .hrPageBreak {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  figure {
    text-align: center;
  }

  figcaption,
  .mutedText {
    color: var(--muted);
  }

  figcaption {
    font-size: 0.85rem;
    opacity: 0.5;
  }

  figcaption: hover {
    opacity: 1;
  }

  img{
    max-width: 100%;
  }
  
`;

const JumbotronFeaturedImage = styled(Jumbotron)`
  background-image: url(${props => props.featuredimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 20rem;
`;

export const query = graphql`
  query($slug: String!) {
    wpgraphql {
      postBy(slug: $slug) {
        title
        date
        content(format: RENDERED)
        featuredImage {
          altText
          sourceUrl
        }
      }
      posts {
        edges {
          node {
            date
            slug
            featuredImage {
              altText
              sourceUrl
            }
            excerpt
            title
          }
        }
      }
    }
  }
`;

const blogPost = props => {
  const {
    content,
    date,
    featuredImage,
    title
  } = props.data.wpgraphql.postBy;
  const sanitizer = dompurify.sanitize;
  const postDate = new Date(date);
  const posts = props.data.wpgraphql.posts;

  return (
    <>
      <SEO title={sanitizer(title)}
        description={`A blog post covering ${sanitizer(title)}`}
        pathname={`/blog/${props.pageContext.slug}`}
      />
      <Navbar backgroundcolor={'var(--highlight)'} posts={posts} />
      <StyledContainer fluid>
        <Row>
          <Col xs='12' md={{ span: 8, offset: 2 }}>
            <JumbotronFeaturedImage fluid featuredimage={featuredImage.sourceUrl}>
            </JumbotronFeaturedImage>
          </Col>
        </Row>
        <Row noGutters>
          <Col
            xs='12'
            md={{ span: 6, offset: 3 }}
          >
            <h1>{sanitizer(title)}</h1>
            <h6 className='mutedText'>
              {postDate
                .toUTCString()
                .split(' ')
                .slice(0, 4)
                .join(' ')}
            </h6>
            <hr className='hrPageBreak' />
          </Col>
        </Row>
        <Row noGutters>
          <Col
            xs={12}
            md={{ span: 6, offset: 3 }}
            dangerouslySetInnerHTML={{ __html: sanitizer(content) }}></Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default blogPost;
