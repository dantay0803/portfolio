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
  margin-top: 4em;
  padding-bottom: 3rem;
  color: var(--text-primary);
  background-color: var(--background-primary);

  div,
  header,
  hr {
    width: 80vw;
  }

  header > p {
    display: inline-block;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  h2,
  h3 {
    text-decoration: underline;
    margin-top: 2em;
    font-size: 1rem;
  }

  p {
    margin: 0.75em 0;
  }

  img {
    width: auto;
    max-height: 37.5em;
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
    font-size: 0.75rem;
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
    width: 85vw;
    height: auto;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    div,
    header,
    hr {
      width: 70vw;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1rem;
    }

    .headerSubtitle {
      font-size: 0.9rem;
    }

    #headerImage {
      width: 80vw;
    }
  }

  @media (min-width: 1200px) {
    div,
    header,
    hr {
      width: 50vw;
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    .headerSubtitle {
      font-size: 1rem;
    }

    #headerImage {
      width: 60vw;
    }
  }
`;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
        slug
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
        description={excerpt}
        image={featuredImage.childImageSharp.fluid.src}
        path={`/${slug}`}
        date={date}
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
