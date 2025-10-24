import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import BlogCard from "./BlogCard";
import SectionContainer from "./common/SectionContainer";
import SectionHeader from "./common/SectionHeader";
import { BlogPost } from "../types/blog";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
        nodes {
          frontmatter {
            slug
            date(formatString: "MMMM D, YYYY")
            title
            categories
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 90
                  layout: FULL_WIDTH
                )
              }
            }
            featuredImageAlt
          }
          id
        }
      }
    }
  `);

  const posts: BlogPost[] = data.allMdx.nodes;

  return (
    <SectionContainer id="blog" bgColor="primary">
      <SectionHeader
        subtitle="Find out what I'm currently working on and thinking about"
        title="Blog"
        textColor="white"
      />
      <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 justify-between">
        {posts.map((blog) => (
          <BlogCard
            key={blog.id}
            slug={blog.frontmatter.slug}
            title={blog.frontmatter.title}
            date={blog.frontmatter.date}
            categories={blog.frontmatter.categories[0]}
            image={
              blog.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData!
            }
            imageAlt={blog.frontmatter.featuredImageAlt || "Blog post image"}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Blog;
