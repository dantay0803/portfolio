import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.danielt.co.uk/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-anchor-links`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "./src/assets/images/icon.png",
      }
    }, 
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
  ]
};

export default config;
