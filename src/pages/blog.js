import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BlogHeader from '../components/blog/blogHeader';
import BlogCard from '../components/blog/blogCard';

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

const BlogHome = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO
        title="Blog"
        description="The personal bog of Daniel Taylor software engineer that covers various software development, career and personal topics"
        pathname="/blog/"
      />
      <BlogHeader />
      <Container fluid>
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
    </Layout>
  );
};
export default BlogHome;
