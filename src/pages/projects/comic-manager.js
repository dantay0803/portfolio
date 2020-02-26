import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ProjectDetails from '../../templates/projectDetails';

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
        This is a mobile application that I have been creating in my spare time
        to help me keep track of which storage box my various comic books are
        located in. The application is created using Apache Cordova, jQuery and
        several Apache Cordova plugins.
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
        The application allows the user to scan the barcode of their selected
        comic, performs several searches against the Google Books API and lists
        the results for the user to select their match. Once a comic has been
        selected they are taken to a form where they can update the title,
        publisher, description of the comic and set the box number where they
        can find the comic.
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
        All of the comics saved by the user are added to a list view and saved
        in a database. The list view items allow the user to select them to show
        a pop up with all of the information saved for the comic. As well as a
        button to remove the list item and the comic from the database. I also
        added the feature to export and import the list of comics as a JSON file
        so the user can remove the app or change their device without the need
        to rescan all of their comics.
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
