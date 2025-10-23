import { graphql, type HeadFC, type PageProps } from "gatsby";
import * as React from "react";
import Header from "../components/blog/Header";
import Hero from "../components/blog/Hero";
import BlogCard from "../components/BlogCard";
import ScrollToTop from "../components/ScrollToTop";
import SkipToContent from "../components/SkipToContent";
import { BlogPost } from "../types/blog";
import { SEO } from "../components/SEO";

type BlogPageData = {
  allMdx: {
    nodes: BlogPost[];
  };
};

const IndexPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  const posts: BlogPost[] = data.allMdx.nodes;

  return (
    <div className="relative">
      <SkipToContent />
      <Header />
      <ScrollToTop />
      <main id="main-content" className="flex-auto">
        <Hero />
        <div className="w-full bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="mx-auto grid max-w-2xl lg:max-w-none auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-0 justify-between">
              {posts.map((blog) => (
                <BlogCard
                  key={blog.id}
                  slug={blog.frontmatter.slug}
                  title={blog.frontmatter.title}
                  date={blog.frontmatter.date}
                  categories={blog.frontmatter.categories[0]}
                  image={
                    blog.frontmatter.featuredImage?.childImageSharp
                      ?.gatsbyImageData!
                  }
                  imageAlt={
                    blog.frontmatter.featuredImageAlt || "Blog post image"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    title="Blog - Daniel Taylor"
    description="Read about software development, React, React Native, and web development from Daniel Taylor, a Software Engineer based in Glasgow, Scotland."
    pathname="/blog"
  />
);

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          date(formatString: "MMMM D, YYYY")
          title
          categories
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
          featuredImageAlt
        }
        id
      }
    }
  }
`;
