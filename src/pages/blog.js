import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BlogHeader from '../components/blog/blogHeader';
import BlogCard from '../components/blog/blogCard';
import Navbar from '../components/blog/blogNavbar';

const Styles = styled.div`
  margin: 0;
  padding: 0;

  .blogHeaderTitle {
    font-size: 1.85rem;
    font-weight: bold;
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
    line-height: 3rem;
    margin: 0;
    padding: 2rem 0 0 1rem;
    width: 22rem;
  }

  .blogHeaderTitle {
    padding: 0;
    text-align: center;
  }

  .blogGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(325px, 525px));
    justify-content: center;
    justify-items: center;
    grid-gap: 2em;
    padding: 1rem;
  }
`;

const BlogHome = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO
        title="Blog"
        description="The personal bog of Daniel Taylor software engineer that covers various software development, career and personal topics"
        pathname="/blog/"
      />
      <Styles>
        <Navbar />
        <BlogHeader />
        <Container fluid>
          <div className="blogGrid">
            {posts.map(post => (
              <BlogCard
                key={post.node.frontmatter.slug}
                thumbnail={
                  post.node.frontmatter.featuredImage.childImageSharp.fluid
                    .src ||
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
    </Layout>
  );
};

export default BlogHome;

export const query = graphql`
  query BlogPageQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            category
            date(formatString: "MMMM DD, YY")
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
`;
