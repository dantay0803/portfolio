import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import BlogCard from "./BlogCard";
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
                gatsbyImageData(width: 800)
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
    <div id="blog" className="w-full bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5 lg:pb-10">
        <div className="mx-auto max-w-2xl flex-shrink-0 md:mx-0 pb-5 pt-5 lg:pt-10">
          <p className="text-white-400 text-lg underline">
            Find out what I'm currently working on and thinking about
          </p>
          <h2 className="uppercase text-white text-6xl mb-8 font-semibold">
            Blog
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 justify-between">
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
              imageAlt={blog.frontmatter.featuredImageAlt || "Blog post image"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
