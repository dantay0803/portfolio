import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
  article?: boolean;
  publishedDate?: string;
  modifiedDate?: string;
};

export const SEO = ({
  title,
  description,
  pathname,
  image,
  children,
  article = false,
  publishedDate,
  modifiedDate,
}: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image: defaultImage,
    twitterUsername,
    author,
    lang,
    locale,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: pathname ? `${siteUrl}${pathname}` : siteUrl,
    image: `${siteUrl}${image || defaultImage}`,
    author,
    lang,
    locale,
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Taylor",
    jobTitle: "Software Engineer",
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/danielt0803/",
      "https://github.com/dantay0803",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Glasgow",
      addressRegion: "Scotland",
      addressCountry: "GB",
    },
    description:
      "Software Engineer based in Glasgow, Scotland, specializing in mobile and web development with React and React Native.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultTitle,
    url: siteUrl,
    description: defaultDescription,
    author: {
      "@type": "Person",
      name: author,
    },
    inLanguage: lang,
  };

  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description: description || defaultDescription,
        image: seo.image,
        datePublished: publishedDate,
        dateModified: modifiedDate || publishedDate,
        author: {
          "@type": "Person",
          name: author,
        },
        publisher: {
          "@type": "Person",
          name: author,
        },
        url: seo.url,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": seo.url,
        },
      }
    : null;

  return (
    <>
      <html lang={seo.lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {article && publishedDate && (
        <>
          <meta property="article:published_time" content={publishedDate} />
          {modifiedDate && (
            <meta property="article:modified_time" content={modifiedDate} />
          )}
          <meta property="article:author" content={author} />
        </>
      )}
      <link rel="canonical" href={seo.url} />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {children}
    </>
  );
};
