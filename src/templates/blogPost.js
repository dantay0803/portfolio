import React from 'react';
import { Jumbotron } from 'react-bootstrap';
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

  header {
    max-width: 800px;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  p {
    max-width: 800px;
  }

  .date {
    color: var(--text-muted);
    font-size: 1rem;
  }
`;

const JumbotronFeaturedImage = styled(Jumbotron)`
  background-image: url(${props => props.featuredimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40vh;
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

  return (
    <Layout>
      <SEO
        title={sanitizeHtml(title)}
        description={`A blog post covering ${sanitizeHtml(title)}`}
        pathname={`/blog/${props.pageContext.slug}`}
      />
      <Navbar posts={posts} />
      <JumbotronFeaturedImage fluid featuredimage={featuredImage.sourceUrl} />
      <Article>
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
              ]),
              allowedClasses: {
                p: ['fancy', 'simple'],
                figure: ['wp-block-image'],
              },
              allowedAttributes: {
                iframe: ['src', 'width', 'height'],
                img: ['src', 'width', 'height', 'wp-image-231'],
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
