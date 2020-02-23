module.exports = {
  siteMetadata: {
    lang: `en`,
    title: 'Daniel Taylor - Portfolio',
    titleTemplate: '%s - Daniel Taylor',
    description:
      'Personal portfolio website for Daniel Taylor software engineer.',
    url: 'https://www.danielt.co.uk',
    image: '/images/header.jpg', // needs updated
    twitterUsername: '@dantay0803',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WordPress',
        fieldName: 'wpgraphql',
        url: 'https://danielt.co.uk/wp/graphql',
        refetchInterval: 60,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-512x512.webp`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        path: 'zopfli',
        extensions: ['css', 'html', 'js'],
      },
    },
  ],
};
