import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import sanitizeHtml from 'sanitize-html';
import { StaticQuery, graphql } from 'gatsby';
import BlogCard from './blogCard';

const Styles = styled.div`
  z-index: 1;
  margin-bottom: 3rem;

  .card-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 0;
    padding: 0;
    justify-items: center;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    z-index: 1;
    margin-bottom: 27.5rem;

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
  }
`;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        wpgraphql {
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
    `}
    render={data => <BlogHighlight data={data} {...props} />}
  />
);

const BlogHighlight = ({ data }) => {
  const { posts } = data.wpgraphql;

  return (
    <Styles>
      <Container key="blog" id="blog" fluid>
        <h1>Blog</h1>
        <hr className="hrTitle" />
        <div className="card-grid">
          {posts.edges.slice(0, 3).map(post => (
            <BlogCard
              key={post.node.slug}
              thumbnail={
                post.node.featuredImage.sourceUrl ||
                `https://via.placeholder.com/185x278?text=Image+not+available`
              }
              alt={post.node.featuredImage.altText}
              postTitle={sanitizeHtml(post.node.title)}
              postDate={new Date(post.node.date)
                .toUTCString()
                .split(' ')
                .slice(0, 4)
                .join(' ')}
              postDescription={sanitizeHtml(
                post.node.excerpt.length > 115
                  ? post.node.excerpt.substring(0, 115).concat('...')
                  : post.node.excerpt
              )}
              postPath={`/blog/${post.node.slug}/`}
            />
          ))}
        </div>
      </Container>
    </Styles>
  );
};
