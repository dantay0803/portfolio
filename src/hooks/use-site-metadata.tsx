import { graphql, useStaticQuery } from "gatsby";

type SiteMetadata = {
  title: string;
  titleShort: string;
  titleAlt: string;
  author: string;
  siteUrl: string;
  description: string;
  lang: string;
  themeColor: string;
  backgroundColor: string;
  image: string;
  locale: string;
  twitterUsername: string;
  keywords: string[];
};

export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleShort
          titleAlt
          author
          siteUrl
          description
          lang
          themeColor
          backgroundColor
          image
          locale
          twitterUsername
          keywords
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
