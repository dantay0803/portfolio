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
        Planet Library has been my main responsibility since working at Solus UK
        Ltd. The application was developed as a child-specific version of the
        Solus adult library application which integrates with library services.
        The application allows users to search and reserve both physical and
        electronic books, access a digital version of their library card as well
        as other various features. Planet Library also includes a game hunt
        feature that allows children to explore their local libraries and find
        and collect different characters and creatures to unlock various games.
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
        <p>My role on the development team was to:</p>
        <ul>
          <li key="resp-1">Design and implement features.</li>
          <li key="resp-2">Design and create new games.</li>
          <li key="resp-3">Update the visuals, code and gameplay of games.</li>
          <li key="resp-4">Update code.</li>
          <li key="resp-5">Bug fixes.</li>
          <li key="resp-6">
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
