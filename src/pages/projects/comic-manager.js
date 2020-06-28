import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ProjectDetails from '../../templates/project-details';

const ComicManager = () => {
  const data = useStaticQuery(graphql`
    query comicManagerImages {
      images: allFile(
        filter: { relativeDirectory: { eq: "projects/comicmanager" } }
      ) {
        nodes {
          id
          publicURL
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  return (
    <ProjectDetails
      title="Comic Manager"
      desc="Information on my portfolio project Comic Manager"
      path="/projects/comic-manager"
    >
      <p>
        Comic Manager is a mobile application. I created using Apache Cordova,
        jQuery and several Apache Cordova plugins. I created the application in
        my spare time, to keep track of which storage boxes contain my various
        comics.
      </p>
      <p className="center">
        <a
          href="https://github.com/dantay0803/ComicManager"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </p>
      <div className="appImages">
        {data.images.nodes.slice(0, 2).map((image, i) => (
          <a
            href={image.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            key={`LinkToComicManagerImage-Set1-${i}`}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              alt={`Screenshot of Comic Manager - ${i}`}
              className="appImage"
              imgStyle={{
                objectFit: 'scale-down',
                objectPosition: '50% 50%',
              }}
            />
          </a>
        ))}
      </div>
      <p>
        Users scan the barcode of their selected comic. With the Google Books
        API using the barcode to find matching comics. Once a user has selected
        a comic. They can update the title, publisher, description and set where
        they can find the comic.
      </p>
      <div className="appImages">
        {data.images.nodes.slice(2, 4).map((image, i) => (
          <a
            href={image.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            key={`LinkToComicManagerImage-Set2-${i}`}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              alt={`Screenshot of Comic Manager - ${i}`}
              className="appImage"
              imgStyle={{
                objectFit: 'scale-down',
                objectPosition: '50% 50%',
              }}
            />
          </a>
        ))}
      </div>
      <p>
        All the comics saved by the user get added to a list view and are saved
        in a local database. The list of items allows the user to select an
        item, to show a pop up with all the comics information. And a button to
        remove the comic from their database. I also added an export and import
        feature. To import and export the user's database as a JSON file. So the
        user can remove the app or change their device without the need to
        re-scan all their comics.
      </p>
      <div className="appImages">
        {data.images.nodes.slice(4, 6).map((image, i) => (
          <a
            href={image.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            key={`LinkToComicManagerImage-Set3-${i}`}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              alt={`Screenshot of Comic Manager - ${i}`}
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

export default ComicManager;
