import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ProjectDetails from '../../templates/project-details';

const IBDClasses = () => {
  const data = useStaticQuery(graphql`
    query ibdClassesImages {
      images: allFile(
        filter: { relativeDirectory: { eq: "projects/ibdclasses" } }
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
      title="IBD Classes"
      desc="Information on my portfolio project IBD Classes"
      path="/projects/ibd-classes"
    >
      <p>
        Developed on behalf of the Catherine McEwan Foundation. The IBD Classes
        application assists clinicians with diagnosing paediatric inflammatory
        bowel disease. To achieve this, clinicians will ask patients between 6 -
        23 questions. With the results, supplying a potential diagnosis based on
        the patient's symptoms.
      </p>
      <p>
        The application can be downloaded on the{' '}
        <a
          href="https://play.google.com/store/apps/details?id=uk.co.solus.health.PIBDCalc&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play
        </a>{' '}
        and{' '}
        <a
          href="https://apps.apple.com/gb/app/ibd-classes/id1248829991?mt=8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple App
        </a>{' '}
        stores now.
      </p>
      <div className="appImages">
        {data.images.nodes.slice(0, 2).map((image, i) => (
          <a
            href={image.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            key={`LinkToIBDClassesImage-set1-${i}`}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              alt={`Screenshot of IBD Classes - ${i}`}
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
          <li key="resp-1">
            Designing the user interface and experience of the application.
          </li>
          <li key="resp-2">
            Implementing the supplied medical diagnosis algorithm.
          </li>
          <li key="resp-3">Implementing all other application features.</li>
        </ul>
      </div>
      <div className="appImages">
        {data.images.nodes.slice(2, data.images.length).map((image, i) => (
          <a
            href={image.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            key={`LinkToIBDClassesImage-Set2-${i}`}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              alt={`Screenshot of IBD Classes - ${i}`}
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

export default IBDClasses;
