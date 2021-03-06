import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BlogHeader from '../components/blog/blogHeader';
import BlogCard from '../components/blog/blogCard';
import Navbar from '../components/blog/blogNavbar';
import Thumbnail from '../assets/images/thumbnails/thumbnail_blog.png.jpg';

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

  @media (min-width: 576px) {
    .blogHeaderTitle {
      font-size: 2.5rem;
      padding: 10rem 0 0 1rem;
      width: 30rem;
    }
  }

  @media (min-width: 768px) {
    .blogHeaderTitle {
      font-size: 3rem;
      line-height: 4.75rem;
      padding: 10rem 0 0 1rem;
      width: 35rem;
    }
  }

  @media (min-width: 992px) {
    .blogHeaderTitle {
      font-size: 3.875rem;
      padding: 10rem 0 0 1rem;
      width: 50rem;
    }
  }

  @media (min-width: 1200px) {
    .blogHeaderTitle {
      font-size: 3.875rem;
      line-height: 4.75rem;
      padding-top: 17.1875rem;
      width: 53.75rem;
    }
  }
`;

const BlogHome = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO
        title="Blog"
        description="The personal blog for Daniel Taylor, a software developer based in Scotland, United Kingdom. This blog covers both technical and non-technical issues faced during the software development process, as well as personal and career issues and topics faced during his time as a software developer."
        path="/blog/"
        imageSRC={Thumbnail}
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
