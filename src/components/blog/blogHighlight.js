import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { StaticQuery, graphql } from 'gatsby';
import BlogCard from './blogCard';

const Styles = styled.div`
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
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
          edges {
            node {
              frontmatter {
                title
                slug
                category
                date(formatString: "MMMM DD, YYYY")
                excerpt
                featuredImage {
                  childImageSharp {
                    fluid(quality: 100) {
                      src
                    }
                  }
                }
                featuredImageAlt
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
  const posts = data.allMdx.edges;

  return (
    <Styles>
      <Container key="blog" id="blog" fluid>
        <h1>Blog</h1>
        <hr className="hrTitle" />
        <div className="blogGrid">
          {posts.map(post => (
            <BlogCard
              key={post.node.frontmatter.slug}
              thumbnail={
                post.node.frontmatter.featuredImage.childImageSharp.fluid.src ||
                `https://via.placeholder.com/185x278?text=Image+not+available`
              }
              alt={post.node.frontmatter.featuredImage.altText}
              postTitle={post.node.frontmatter.title}
              postDate={post.node.frontmatter.date}
              postDescription={post.node.frontmatter.excerpt}
              postPath={`/${post.node.frontmatter.slug}`}
              categories={post.node.frontmatter.category}
            />
          ))}
        </div>
      </Container>
    </Styles>
  );
};
