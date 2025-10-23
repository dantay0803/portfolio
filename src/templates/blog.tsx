import { MDXProvider } from "@mdx-js/react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import SkipToContent from "../components/SkipToContent";
import Footer from "../components/blog/Footer";
import Header from "../components/blog/Header";
import { BlogTemplateData, BlogPageContext } from "../types/blog";

type MDXComponentProps = {
  children?: React.ReactNode;
  [key: string]: any;
};

const headingTwo = (props: MDXComponentProps) => (
  <h2
    className="mb-1 text-base md:text-lg lg:text-xl underline font-medium md:font-semibold"
    {...props}
  />
);

const headingThree = (props: MDXComponentProps) => (
  <h3
    className="mb-1 text-sm md:text-base lg:text-lg underline font-medium md:font-semibold"
    {...props}
  />
);

const paragraph = (props: MDXComponentProps) => (
  <p className="text-sm md:text-base mb-6 md:mb-8" {...props} />
);

const unorderedList = (props: MDXComponentProps) => (
  <ul className="list-disc list-inside ml-2 md:ml-4 mb-6 md:mb-8" {...props} />
);

const orderedList = (props: MDXComponentProps) => (
  <ol
    className="list-decimal list-inside ml-2 md:ml-4 mb-6 md:mb-8"
    {...props}
  />
);

const listItem = (props: MDXComponentProps) => (
  <li className="text-sm md:text-base mb-1 md:mb-2" {...props} />
);

const link = (props: MDXComponentProps) => (
  <a
    className="text-sm md:text-base mb-6 md:mb-8 text-black underline decoration-accent hover:cursor-pointer hover:no-underline hover:text-accent"
    {...props}
  />
);

const components = {
  h2: headingTwo,
  h3: headingThree,
  p: paragraph,
  ul: unorderedList,
  ol: orderedList,
  li: listItem,
  a: link,
};

type BlogTemplateProps = PageProps<BlogTemplateData, BlogPageContext> & {
  children: React.ReactNode;
};

export default function PageTemplate({
  data,
  children,
  pageContext,
}: BlogTemplateProps) {
  const { title, date, categories, featuredImage, featuredImageAlt } =
    data.mdx.frontmatter;
  let featuredImg = getImage(
    featuredImage?.childImageSharp?.gatsbyImageData || null
  );
  const { previous, next } = pageContext;

  return (
    <div className="w-full h-full relative">
      <SkipToContent />
      <ScrollToTop />
      <Header />
      <article id="main-content" className="flex-auto mx-auto pb-5 lg:pb-10">
        <div className="bg-primary w-full pt-20 pb-4 mb-4">
          {featuredImg && (
            <GatsbyImage
              image={featuredImg}
              alt={featuredImageAlt || "Blog post featured image"}
              className="w-full h-48 md:h-64 lg:h-96 object-contain"
            />
          )}
          <div className="px-4 sm:px-6 lg:px-8 mt-2 md:mt-4">
            <h1 className="text-white text-xl md:text-4xl font-bold md:font-extrabold mb-1 mb:mb-2">
              {title}
            </h1>
            <div className="flex flex-row gap-x-2 md:gap-x-4 items-start text-white-400 text-xs md:text-sm lg:text-base italic">
              <p>{date}</p>
              <p className="text-accent">|</p>
              <p>{categories.join(", ")}</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
          <MDXProvider components={components}>{children}</MDXProvider>
        </div>
      </article>
      <Footer previous={previous} next={next} />
    </div>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        date(formatString: "MMMM D, YYYY")
        title
        categories
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1920)
          }
        }
        featuredImageAlt
      }
    }
  }
`;
