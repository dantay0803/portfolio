import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Daniel Taylor - Software Developer`,
    titleShort: `Daniel Taylor`,
    titleAlt: `Daniel Taylor - Glasgow Based Software Developer`,
    logo: ``,
    siteUrl: `https://www.danielt.co.uk/`,
    description: `Daniel Taylor is a software developer based in Glasgow, Scotland. He primarily creates digital experiences for mobile and web, with previous experience working with desktop applications and games.`,
    lang: `en`,
    themeColor: `#000000`,
    backgroundColor: `#000000`,
    image: ``,
    locale: `en_GB`,
    keywords: [
      `Daniel Taylor`,
      `software developer`,
      `Glasgow`,
      `Scotland`,
      `mobile development`,
      `web development`,
      `react developer`,
      `react native developer`,
    ],
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
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Daniel Taylor - Software Developer`,
        short_name: `Daniel Taylor`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.danielt.co.uk",
        sitemap: "https://www.danielt.co.uk/sitemap-0.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/node_modules", "/src", "/scripts"],
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/files/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/`,
        excludes: ["/404/", "/404.html", "/offline-plugin-app-shell-fallback/"],
        createLinkInHead: true,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allMdx {
              nodes {
                frontmatter {
                  slug
                  date
                }
              }
            }
          }
        `,
        resolvePages: ({
          allSitePage: { nodes: allSitePages },
          allMdx: { nodes: allMdxNodes },
        }: any) => {
          const blogPostsMap = allMdxNodes.reduce(
            (acc: any, node: any) => ({
              ...acc,
              [node.frontmatter.slug]: { date: node.frontmatter.date },
            }),
            {}
          );

          return allSitePages.map((page: any) => ({
            ...page,
            ...blogPostsMap[page.path],
          }));
        },
        serialize: ({ path, date }: any) => {
          let priority = 0.5;
          let changefreq = "weekly";

          if (path === "/") {
            priority = 1.0;
            changefreq = "weekly";
          } else if (path === "/blog" || path === "/blog/") {
            priority = 0.8;
            changefreq = "weekly";
          } else if (path.startsWith("/blog/")) {
            priority = 0.7;
            changefreq = "monthly";
          }

          const entry: any = {
            url: path,
            changefreq: changefreq,
            priority: priority,
          };

          if (date) {
            entry.lastmod = date;
          }

          return entry;
        },
      },
    },
  ],
};

export default config;
