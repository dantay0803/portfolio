import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { GiSeahorse } from 'react-icons/gi';
import config from '../../data/siteConfig.js';

const SEO = ({ title, description, image, path, date }) => {
  const seo = {
    lang: config.lang,
    locale: config.locale,
    title: title || config.title,
    description: description || config.description,
    image: `${config.url}${image || config.image}`,
    url: `${config.url}${path || config.pathPrefix}`,
  };

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: seo.lang,
        }}
        title={seo.title}
        titleTemplate={config.titleTemplate}
      >
        <link rel="canonical" href={seo.url} />
        <meta name="generator" content="Daniel Taylor with Gatsby!" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:description" content={seo.description} />
        {date ? (
          <meta
            property="article:published_time"
            content={new Date(date).toISOString()}
          />
        ) : null}
        {seo.image ? <meta property="og:image" content={seo.image} /> : null}
        {seo.image ? <meta property="og:image:width" content="1200" /> : null}
        {seo.image ? <meta property="og:image:height" content="630" /> : null}
        <meta property="og:locale" content={seo.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={config.twitterUsername} />
        <meta name="twitter:creator" content={config.twitterUsername} />
        <meta name="twitter:url" content={seo.url} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {seo.image ? <meta name="twitter:image" content={seo.image} /> : null}
      </Helmet>
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  path: null,
  date: null,
};
