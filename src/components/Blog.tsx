import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import BlogCard from './BlogCard';

const Blog = ({data}: any) => {
  const posts = data.allMdx.nodes;
  console.log(posts);

    return (<div className='w-full bg-primary'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5 lg:pb-10'>
        <div className='mx-auto max-w-2xl flex-shrink-0 md:mx-0 pb-5 pt-5 lg:pt-10'>
          <p className='text-white-500 text-lg underline'>Find out what I'm currently working on and thinking about</p>
          <h2 className='uppercase text-white text-6xl mb-8 font-semibold'>Blog</h2>
        </div>
        <div className='mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 justify-between'>
          {posts.map((blog: any) => (
              <BlogCard key={blog.id} 
                title={blog.frontmatter.title} 
                date={blog.frontmatter.date} 
                category={blog.frontmatter.category[0]} 
                image={blog.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData} 
                imageAlt={blog.frontmatter.featuredImage.altText} 
              />
            )
          )}
        </div>
      </div>
    </div>)
}

export default (props: any) => (
  <StaticQuery
    query={graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC }}, limit: 3) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            category
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
  `}
  render={data => <Blog data={data} {...props} />} />
)