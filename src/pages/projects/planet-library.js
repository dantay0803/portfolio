import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ProjectDetails from '../../templates/project-details';

const PlanetLibraryPage = () => {
  const data = useStaticQuery(graphql`
    query planetlibraryImages {
      images: allFile(
        filter: { relativeDirectory: { eq: "projects/planetlibrary" } }
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
      title="Planet Library"
      desc="Information on my portfolio project PlanetLibrary"
      path="/projects/planet-library"
    >
      <p>
        Planet Library was my main responsibility while working at Solus UK Ltd.
        It was being developed as a child-focused version of Solus' flagship
        library application. Features of the application include searching and
        reserving physical and electronic content. Other library features
        include a digital library card, view return dates and view upcoming
        events.
      </p>
      <p>
        To help drive regular foot traffic to the libraries. The application
        features an augmented reality character hunt. Which allows users to
        catch over 100 characters that gains them tokens to unlock games.
      </p>
      <div className="appImages">
        {data.images.nodes.slice(0, 4).map((image, i) => (
          <a
            href={image.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            key={`LinkToPlanetLibraryImage-Set1-${i}`}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              alt={`Screenshot of Planet Library - ${i}`}
              className="appImage"
              imgStyle={{
                objectFit: 'scale-down',
                objectPosition: '50% 50%',
              }}
            />
          </a>
        ))}
      </div>
      <div>
        <p>My role included:</p>
        <ul>
          <li key="resp-1">To design and code new features.</li>
          <li key="resp-2">The design and creation of new games.</li>
          <li key="resp-3">Manage the applications pilot phase in America.</li>
          <li key="resp-4">
            Updating the visuals, code and gameplay of existing games.
          </li>
          <li key="resp-5">
            Optimise assets to reduce the application’s size and improve
            performance.
          </li>
        </ul>
      </div>
      <div className="appImages">
        {data.images.nodes
          .slice(4, data.images.nodes.length)
          .map((image, i) => (
            <a
              href={image.publicURL}
              target="_blank"
              rel="noopener noreferrer"
              key={`LinkToPlanetLibraryImage-Set2-${i}`}
            >
              <Img
                fluid={image.childImageSharp.fluid}
                alt={`Screenshot of Planet Library - ${i}`}
                className="appImage"
                imgStyle={{
                  objectFit: 'scale-down',
                  objectPosition: '50% 50%',
                }}
              />
            </a>
          ))}
      </div>
    </ProjectDetails>
  );
};

export default PlanetLibraryPage;
