import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import sanitizeHtml from 'sanitize-html';
import { StaticQuery, graphql } from 'gatsby';
import BlogCard from './blogCard';

const Styles = styled.div`
  z-index: -1;
  --width: 100%;
  --angle: -11deg;
  --magic-number: 0.09719;
  --skew-padding: calc(var(--width) * var(--magic-number));

  position: relative;
  padding: var(--skew-padding) 0;
  margin-top: -1px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: skewy(var(--angle));
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
    background-color: var(--background-secondary);
  }

  .container-fluid {
    max-width: var(--width);
    margin: 0 auto;
    padding: 1em;
    position: relative;
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
        <div className="blogGrid">
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
