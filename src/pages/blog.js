import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/bootstrap-4.3.1.min.css';
import sanitizeHtml from 'sanitize-html';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import HeaderBlog from '../components/blog/headerBlog';
import BlogCard from '../components/blog/blogCard';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 2rem 0;

  .blogGrid {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
  }

  a {
    text-decoration: none;
  }
`;

export const query = graphql`
  {
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
`;

const BlogHome = props => {
  const { posts } = props.data.wpgraphql;

  return (
    <Layout>
      <SEO
        title="Blog"
        description="The personal bog of Daniel Taylor software engineer that covers various software development, career and personal topics"
        pathname="/blog/"
      />
      <HeaderBlog posts={posts} />
      <StyledContainer fluid>
        <div className="blogGrid">
          {posts.edges.map(post => (
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
      </StyledContainer>
    </Layout>
  );
};

export default BlogHome;
