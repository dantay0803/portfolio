const config = {
  siteTitle: 'Daniel Taylor - Portfolio',
  siteTitleShort: 'Danielt.co.uk',
  siteTitleAlt: 'Daniel Taylor - Software Developer Portfolio',
  siteLogo: '/logos/icon-512x512.png',
  siteUrl: 'https://danielt.co.uk/',
  pathPrefix: '/',
  siteDescription:
    'Personal portfolio website for Daniel Taylor software engineer.',
  lang: `en`,
  themeColor: '#FF0000',
  backgroundColor: '#141414',
  image: '/images/headerImage.jpg',
  titleTemplate: '%s - Daniel Taylor',
};

// Validate
// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
