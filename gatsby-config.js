const config = require('./data/siteConfig');

module.exports = {
  pathPrefix: config.pathPrefix === '' ? '/' : config.pathPrefix,
  siteMetadata: {
    siteUrl: `${config.siteUrl}${config.pathPrefix}`,
    lang: config.lang,
    titleTemplate: '%s - Daniel Taylor',
    image: '/images/headerImage.jpg',
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
        name: `Daniel Taylor - Portfolio`,
        short_name: `Daniel Taylor`,
        start_url: `/`,
        background_color: `#141414`,
        theme_color: `#FF0000`,
        display: `minimal-ui`,
        icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/logos/logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
  ],
};
