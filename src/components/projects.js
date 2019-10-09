import React from "react"
import styled from "styled-components"
import { Row, Col, CardDeck } from "react-bootstrap"
import ProjectCard from "./projectCard"
import thumbnail_phalanx from "../images/thumbnails/thumbnail_phalanx.png"
import thumbnail_pl from "../images/thumbnails/thumbnail_pl.png"
import thumbnail_ibd from "../images/thumbnails/thumbnail_ibd.png"
import thumbnail_whatToWatch from "../images/thumbnails/thumbnail_wtw.png"
import thumbnail_comicManager from "../images/thumbnails/thumbnail_comicManager.jpg"
import thumbnail_co from "../images/thumbnails/thumbnail_co.png"
import thumbnail_tec from "../images/thumbnails/thumbnail_tec.png"
import thumbnail_wcm from "../images/thumbnails/thumbnail_wcm.png"

const Styles = styled.div`
  padding: 0;
  margin: 0;
  margin-top: 3rem;
  text-align: center;
`
export default function projects() {
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
            thumbnail={thumbnail_phalanx}
            projectTitle={"PHALANX"}
            projectDescription={"C#, JavaScript, ASP.Net"}
            projectPath={"phalanx"}
          />
          <ProjectCard
            thumbnail={thumbnail_pl}
            projectTitle={"Planet Library"}
            projectDescription={"UNITY & C#"}
            projectPath={"planet-library"}
          />
          <ProjectCard
            thumbnail={thumbnail_ibd}
            projectTitle={"IBD Classes"}
            projectDescription={"UNITY & C#"}
            projectPath={"ibd-classes"}
          />
          <ProjectCard
            thumbnail={thumbnail_whatToWatch}
            projectTitle={"What to Watch"}
            projectDescription={"JavaScript & React"}
            projectPath={"what-to-watch"}
          />
        </CardDeck>
      </Row>
      <Row noGutters className="justify-content-md-center">
        <CardDeck>
          <ProjectCard
            thumbnail={thumbnail_comicManager}
            projectTitle={"Comic Manager"}
            projectDescription={"JavaScript & Cordova"}
            projectPath={"comic-manager"}
          />
          <ProjectCard
            thumbnail={thumbnail_co}
            projectTitle={"Clandestine Ops"}
            projectDescription={"UNITY & C#"}
            projectPath={"clandestine-ops"}
          />
          <ProjectCard
            thumbnail={thumbnail_tec}
            projectTitle={"The Edge of Civilization"}
            projectDescription={"Unreal Engine 4"}
            projectPath={"the-edge-of-civilization"}
          />
          <ProjectCard
            thumbnail={thumbnail_wcm}
            projectTitle={"World Cup Manager"}
            projectDescription={"Java"}
            projectPath={"world-cup-manager"}
          />
        </CardDeck>
      </Row>
    </Styles>
  )
}
