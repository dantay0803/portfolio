const config = {
  title: `Daniel Taylor - Portfolio`,
  titleShort: `danielt.co.uk`,
  titleAlt: `Daniel Taylor - Software Developer Portfolio`,
  logo: `/logos/icon-512x512.png`,
  url: `https://danielt.co.uk/`,
  pathPrefix: `/`,
  description: `The personal portfolio website for Daniel Taylor web and mobile software developer based in Scotland, United Kingdom. Featuring projects using technologies such as JavaScript, React, Apache Cordova, Unity and C#.`,
  lang: `en`,
  themeColor: `#FF0000`,
  backgroundColor: `#141414`,
  image: `/assets/images/headerImage.jpg`,
  titleTemplate: `%s - Daniel Taylor`,
  twitterUsername: `@DanielTaylorDev`,
  locale: `en_GB`,
};

// Validate
// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === `/`) {
  config.pathPrefix = ``;
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.url.substr(-1) === `/`) config.url = config.url.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== `/`)
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
