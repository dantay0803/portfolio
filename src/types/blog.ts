import { IGatsbyImageData } from "gatsby-plugin-image";

export type BlogPostFrontmatter = {
  slug: string;
  date: string;
  dateISO?: string;
  title: string;
  categories: string[];
  featuredImage?: {
    childImageSharp?: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  featuredImageAlt?: string;
};

export type BlogPost = {
  id: string;
  frontmatter: BlogPostFrontmatter;
};

export type BlogTemplateData = {
  mdx: {
    frontmatter: BlogPostFrontmatter;
  };
};

export type BlogPageContext = {
  id: string;
  previous: BlogPost | null;
  next: BlogPost | null;
};
