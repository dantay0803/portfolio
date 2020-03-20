import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import config from '../../data/siteConfig.js';

const SEO = ({ title, description, image, pathname, article }) => {
  const seo = {
    lang: config.lang,
    title: title || config.siteTitle,
    description: description || config.siteDescription,
    image: `${config.siteUrl}${image || config.image}`,
    url: `${config.siteUrl}${pathname || config.pathPrefix}`,
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
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {config.twitterUsername && (
          <meta name="twitter:creator" content={config.twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
};
