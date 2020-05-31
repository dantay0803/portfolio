import React from 'react';
import styled from 'styled-components';
import '../styles/bootstrap-4.3.1.min.css';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Footer from '../components/blog/post/footer';
import Navbar from '../components/blog/blogNavbar';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 3rem;
  color: var(--text-primary);
  background-color: var(--background-primary);

  div,
  header,
  hr {
    width: 50%;
  }

  header > p {
    display: inline-block;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  h2,
  h3 {
    text-decoration: underline;
    margin-top: 2em;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  p {
    margin: 0.75em 0;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  hr {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(155, 157, 144, 1) 45%,
      rgba(155, 157, 144, 1) 55%,
      rgba(255, 255, 255, 0) 100%
    );
    margin: 1em;
    text-align: center;
    height: 5px;
  }

  figcaption {
    color: var(--text-muted);
    font-size: 0.75rem;
  }

  a {
    color: var(--highlight);
  }

  .gatsby-resp-iframe-wrapper {
    width: 100%;
    height: auto;
  }

  .headerSubtitle {
    color: var(--text-muted);
    font-size: 1rem;
    margin: 0 0 0.5em 0;
    padding: 0;
    margin: 0;
  }

  .headerSubtitleSeparator {
    margin: 0 1em;
    color: var(--highlight);
    font-weight: 900;
  }

  #headerImage {
    width: 70%;
    height: auto;
    object-fit: cover;
    margin-bottom: 1rem;
  }
`;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
        id
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
`;

const blogPost = ({ data, pageContext }) => {
  const post = data.mdx;
  const {
    category,
    date,
    excerpt,
    id,
    title,
    slug,
    featuredImage,
    featuredImageAlt,
  } = post.frontmatter;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO
        title={title}
        description={`A blog post covering ${title}`}
        pathname={`/blog/${slug}`}
      />
      <Navbar />
      <Article>
        <img
          src={featuredImage.childImageSharp.fluid.src}
          alt={featuredImageAlt}
          id="headerImage"
        />
        <header>
          <h1>{title}</h1>
          <p className="headerSubtitle">{date}</p>
          <p className="headerSubtitleSeparator">/</p>
          <p className="headerSubtitle">{category.join(', ')}</p>
        </header>
        <hr />
        <div>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Article>
      <Footer previous={previous} next={next} />
    </Layout>
  );
};

export default blogPost;
