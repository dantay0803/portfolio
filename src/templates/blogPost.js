import React from 'react';
import styled from 'styled-components';
import '../styles/bootstrap-4.3.1.min.css';
import { graphql } from 'gatsby';
import sanitizeHtml from 'sanitize-html';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Navbar from '../components/blog/navbarBlog';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 2rem;

  header,
  div,
  p,
  img,
  iframe {
    width: 300px;
  }

  header {
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  h2 {
    font-size: 1.25rem;
    text-decoration: underline;
  }

  img {
    height: auto;
    object-fit: cover;
  }

  .headerImage {
    width: 90vw;
    height: 15vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .headerImage img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .date {
    color: var(--text-muted);
    font-size: 1rem;
  }

  @media (min-width: 576px) {
    header,
    div,
    p,
    img,
    iframe {
      width: 450px;
    }
  }

  @media (min-width: 768px) {
    header,
    div,
    p,
    img,
    iframe {
      width: 650px;
    }

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .headerImage {
      height: 30vh;
    }
  }

  @media (min-width: 992px) {
    header,
    div,
    p,
    img,
    iframe {
      width: 750px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .headerImage {
      height: 40vh;
    }
  }

  @media (min-width: 1200px) {
    header,
    div,
    p,
    img,
    iframe {
      width: 900px;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    .headerImage {
      height: 50vh;
    }
  }
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
  const { content, date, featuredImage, title } = props.data.wpgraphql.postBy;
  const postDate = new Date(date);
  const { posts } = props.data.wpgraphql;

  console.log(props.data.wpgraphql.postBy);

  return (
    <Layout>
      <SEO
        title={sanitizeHtml(title)}
        description={`A blog post covering ${sanitizeHtml(title)}`}
        pathname={`/blog/${props.pageContext.slug}`}
      />
      <Navbar posts={posts} />
      <Article textColor="--text-secondary">
        <div className="headerImage">
          <img src={featuredImage.sourceUrl} alt="" />
        </div>
        <header>
          <h1>{sanitizeHtml(title)}</h1>
          <p className="date">
            {postDate
              .toUTCString()
              .split(' ')
              .slice(0, 4)
              .join(' ')}
          </p>
        </header>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(content, {
              allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                'figure',
                'img',
                'figcaption',
                'p',
                'em',
                'strong',
                'iframe',
                'a',
                'h2',
              ]),
              allowedClasses: {
                p: ['fancy', 'simple'],
                figure: ['wp-block-image'],
              },
              allowedAttributes: {
                iframe: ['src', 'width', 'height'],
                img: ['src', 'width', 'height', 'wp-image-231'],
                a: ['href', 'target', 'rel'],
              },
              transformTags: {
                a(tagName, attribs) {
                  return {
                    tagName: 'a',
                    attribs: {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      ...attribs,
                    },
                  };
                },
              },
              allowedIframeHostnames: ['www.youtube.com'],
            }),
          }}
        />
      </Article>
    </Layout>
  );
};

export default blogPost;
