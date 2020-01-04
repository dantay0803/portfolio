import React from 'react';
import styled from 'styled-components';
import { Row, Col, CardDeck } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectCard from './projectCard';

const Styles = styled.div`
  padding: 0;
  margin: 0;
  margin-top: 3rem;
  text-align: center;
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
      tecImage: file(relativePath: { eq: "thumbnails/thumbnail_tec.webp" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      wcmImage: file(relativePath: { eq: "thumbnails/thumbnail_wcm.webp" }) {
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
      <Row
        key="projects"
        id="projects"
        className="justify-content-md-center"
        noGutters
      >
        <Row className="justify-content-md-center" noGutters>
          <Col xs={{ span: 10, offset: 1 }}>
            <h1>Projects</h1>
            <hr className="hrTitle" />
            <p>A collection of some projects I have worked on</p>
          </Col>
        </Row>
      </Row>
      <Row noGutters className="justify-content-md-center">
        <CardDeck>
          <ProjectCard
            thumbnail={data.phalanxImage.childImageSharp.fluid}
            projectTitle="PHALANX"
            projectDescription="C#, JavaScript, ASP.Net"
            projectPath="phalanx"
          />
          <ProjectCard
            thumbnail={data.planetLibraryImage.childImageSharp.fluid}
            projectTitle="Planet Library"
            projectDescription="UNITY & C#"
            projectPath="planet-library"
          />
          <ProjectCard
            thumbnail={data.ibdImage.childImageSharp.fluid}
            projectTitle="IBD Classes"
            projectDescription="UNITY & C#"
            projectPath="ibd-classes"
          />
          <ProjectCard
            thumbnail={data.wtwImage.childImageSharp.fluid}
            projectTitle="What to Watch"
            projectDescription="JavaScript & React"
            projectPath="what-to-watch"
          />
        </CardDeck>
      </Row>
      <Row noGutters className="justify-content-md-center">
        <CardDeck>
          <ProjectCard
            thumbnail={data.comicManagerImage.childImageSharp.fluid}
            projectTitle="Comic Manager"
            projectDescription="JavaScript & Cordova"
            projectPath="comic-manager"
          />
          <ProjectCard
            thumbnail={data.coImage.childImageSharp.fluid}
            projectTitle="Clandestine Ops"
            projectDescription="UNITY & C#"
            projectPath="clandestine-ops"
          />
          <ProjectCard
            thumbnail={data.tecImage.childImageSharp.fluid}
            projectTitle="The Edge of Civilization"
            projectDescription="Unreal Engine 4"
            projectPath="the-edge-of-civilization"
          />
          <ProjectCard
            thumbnail={data.wcmImage.childImageSharp.fluid}
            projectTitle="World Cup Manager"
            projectDescription="Java"
            projectPath="world-cup-manager"
          />
        </CardDeck>
      </Row>
    </Styles>
  );
};
