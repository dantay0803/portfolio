import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ProjectDetails from '../../templates/projectDetails';

const Phalanx = () => {
  const data = useStaticQuery(graphql`
    query phalanxImages {
      images: allFile(
        filter: { relativeDirectory: { eq: "projects/phalanx" } }
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
      title="Phalanx"
      desc="Information on my portfolio project Phalanx"
      path="/projects/phalanx"
    >
      <p>
        PHALANX is an integrated operations software application that combines
        RFID/barcode technology, operational mobility with the use of
        smartphones and tablets and integration with back-office systems on a
        single software platform. PHALANX contains many processes to help
        employees carry out their work in a more streamlined and efficient
        manner and help reduce businesses use of paper.
      </p>
      <div className="appImages">
        {data.images.nodes.slice(0, 4).map((image, i) => (
          <a
            href={image.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            key={`LinkToPHALANXImage-Set1-${i}`}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              alt={`Screenshot of PHALANX - ${i}`}
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
        <p>
          Whilst working on this project I have used various programming
          languages such as C#, JavaScript and SQL. Along with side frameworks
          such as REACT, JQuery and ASP.Net.
        </p>
        <p>I have also been responsible for:</p>
        <ul>
          <li key="Resp-1">Designing and implementing new features</li>
          <li key="Resp-2">
            Updating and improving previously implemented features
          </li>
          <li key="Resp-3">Bug fixing</li>
          <li key="Resp-4">Optimise areas of our mobile client</li>
          <li key="Resp-5">Provided code reviews</li>
        </ul>
      </div>
      <div className="appImages">
        {data.images.nodes.slice(4, data.images.length).map((image, i) => (
          <a
            href={image.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            key={`LinkToPHALANXImage-Set2-${i}`}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              alt={`Screenshot of PHALANX - ${i}`}
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

export default Phalanx;
