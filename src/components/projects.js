import React from 'react';
import styled from 'styled-components';
import { Container, CardDeck } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectCard from './projectCard';

const Styles = styled.div`
  .project-card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 0 2.5rem 0 2.5rem;
    padding: 0;
  }

  .project-left-grid {
    justify-self: start;
  }

  .project-left-grid .card {
    box-shadow: 0.625rem 0.625rem 0.375rem rgba(0, 0, 0, 1);
  }

  .project-right-grid {
    justify-self: end;
  }

  .project-right-grid .card {
    box-shadow: -0.625rem 0.625rem 0.375rem rgba(0, 0, 0, 1);
  }
`;

// eslint-disable-next-line react/display-name
export default () => {
  const data = useStaticQuery(graphql`
    query projectThumbnailImage {
      phalanxImage: file(
        relativePath: { eq: "thumbnails/thumbnail_phalanx.webp" }
      ) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      planetLibraryImage: file(
        relativePath: { eq: "thumbnails/thumbnail_pl.webp" }
      ) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ibdImage: file(relativePath: { eq: "thumbnails/thumbnail_ibd.webp" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      wtwImage: file(relativePath: { eq: "thumbnails/thumbnail_wtw.webp" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      comicManagerImage: file(
        relativePath: { eq: "thumbnails/thumbnail_comicmanager.webp" }
      ) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      coImage: file(relativePath: { eq: "thumbnails/thumbnail_co.webp" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Styles>
      <Container key="projects" id="projects" fluid>
        <h1>Projects</h1>
        <hr className="hrTitle" />
        <div className="project-card-grid">
          <div className="project-left-grid">
            <ProjectCard
              thumbnail={data.phalanxImage.childImageSharp.fluid}
              projectTitle="PHALANX"
              projectTech="C#, JavaScript, ASP.Net"
              projectDescription="Integrated web and mobile apps to automate field service, depot service and equipment logistics."
              projectPath="phalanx"
            />
          </div>
          <div className="project-right-grid">
            <ProjectCard
              className="project-right-grid"
              thumbnail={data.planetLibraryImage.childImageSharp.fluid}
              projectTitle="Planet Library"
              projectTech="UNITY & C#"
              projectDescription="Planet Library transforms your Library into a fun and engaging digital space for children."
              projectPath="planet-library"
            />
          </div>
          <div className="project-left-grid">
            <ProjectCard
              thumbnail={data.ibdImage.childImageSharp.fluid}
              projectTitle="IBD Classes"
              projectTech="UNITY & C#"
              projectDescription="Developed on behalf of the Catherine McEwan Foundation to assist in the diagnosis of bowel disease."
              projectPath="ibd-classes"
            />
          </div>
          <div className="project-right-grid">
            <ProjectCard
              thumbnail={data.wtwImage.childImageSharp.fluid}
              projectTitle="What to Watch"
              projectTech="JavaScript & React"
              projectDescription="A TV show and movie searching website created with React and powered by the MovieDB API."
              projectPath="what-to-watch"
            />
          </div>
          <div className="project-left-grid">
            <ProjectCard
              thumbnail={data.comicManagerImage.childImageSharp.fluid}
              projectTitle="Comic Manager"
              projectTech="JavaScript & Cordova"
              projectDescription="Mobile application I created using Apache Cordova to track my comics in storage."
              projectPath="comic-manager"
            />
          </div>
          <div className="project-right-grid">
            <ProjectCard
              thumbnail={data.coImage.childImageSharp.fluid}
              projectTitle="Clandestine Ops"
              projectTech="UNITY & C#"
              projectDescription="A First Person Shooter developed to aid in the research of the effects of violent video games."
              projectPath="clandestine-ops"
            />
          </div>
        </div>
      </Container>
    </Styles>
  );
};
