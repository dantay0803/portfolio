import React from 'react';
import { Container } from 'react-bootstrap';
import sanitizeHtml from 'sanitize-html';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import HeaderBlog from '../components/blog/headerBlog';
import BlogCard from '../components/blog/blogCard';

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
      <Container fluid>
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
      </Container>
    </Layout>
  );
};

export default BlogHome;
