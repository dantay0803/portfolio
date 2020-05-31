import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ProjectDetails from '../../templates/project-details';

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query wtwImages {
      images: allFile(
        filter: { relativeDirectory: { eq: "projects/whattowatch" } }
      ) {
        nodes {
          id
          publicURL
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <ProjectDetails
      title="What to Watch"
      desc="Information on my portfolio project What to Watch"
      path="/projects/what-to-watch"
    >
      <div>
        <p>
          What to Watch is a website I created in React, using the
          <a
            href="https://developers.themoviedb.org/3/getting-started/introduction"
            target="_blank"
            rel="noopener noreferrer"
          >
            MovieDB API
          </a>
          for the data of the site. The website includes several features such
          as:
        </p>
        <div className="two-column-layout">
          <ul key="featureSetOne">
            <li key="feature-1">
              Netflix styled homepage with featured content
            </li>
            <li key="feature-2">Movie, TV and person searching</li>
            <li key="feature-3">Details on movies, TV shows and people</li>
          </ul>
          <ul key="featureSetTwo">
            <li key="feature-4">View collections of related products</li>
            <li key="feature-5">View trailers using the YouTube Player API</li>
            <li key="feature-6">View comments from MovieDB users</li>
          </ul>
        </div>
        <p>
          You can view the source code for the project in this{' '}
          <a
            href="https://github.com/dantay0803/React_Projects/tree/master/movie-listing-website"
            target="_blank"
            rel="noopener noreferrer"
            title="What to Watch GitHub Repository"
          >
            GitHub Repository
          </a>{' '}
          ,as well as view a{' '}
          <a
            href="https://danielt.co.uk/whattowatch/"
            target="_blank"
            rel="noopener noreferrer"
            title="What to Watch Demo"
          >
            live demo
          </a>{' '}
          by following the link.
        </p>
      </div>
      <div className="appImages">
        {data.images.nodes.slice(0, 4).map((image, i) => (
          <a
            href={image.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            key={`LinkToWhatToWatchSiteImage-Set1-${i}`}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              alt={`Screenshot of What to Watch Site - ${i}`}
              className="appImage"
              imgStyle={{
                objectFit: 'fill',
                objectPosition: '50% 50%',
              }}
            />
          </a>
        ))}
      </div>
      <div>
        <p className="center">Technologies used in the project:</p>
        <div className="two-column-layout">
          <ul key="TechUsedSetOne">
            <li key="Tech Used React">React</li>
            <li key="Tech Used JS">JavaScript</li>
            <li key="Tech Used RR">React Router</li>
            <li key="Tech Used SC">Styled Components</li>
          </ul>
          <ul key="TechUsedSetTwo">
            <li key="Tech Used RB">React Bootstrap</li>
            <li key="Tech Used RI">React Icons</li>
            <li key="Tech Used RS">React Scroll</li>
            <li key="Tech Used YTAPI">YouTube Player API</li>
          </ul>
        </div>
      </div>
      <div className="appImages">
        {data.images.nodes
          .slice(4, data.images.nodes.length)
          .map((image, i) => (
            <a
              href={image.publicURL}
              target="_blank"
              rel="noopener noreferrer"
              key={`LinkToWhatToWatchSiteImage-Set2-${i}`}
            >
              <Img
                fluid={image.childImageSharp.fluid}
                alt={`Screenshot of What to Watch Site - ${i}`}
                className="appImage"
                imgStyle={{
                  objectFit: 'fill',
                  objectPosition: '50% 50%',
                }}
              />
            </a>
          ))}
      </div>
    </ProjectDetails>
  );
};

export default SecondPage;
