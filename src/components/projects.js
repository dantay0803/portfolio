import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-bootstrap"
import ProjectCard from "./projectCard"
import thumbnail_phalanx from "../images/thumbnails/thumbnail_phalanx.png"
import thumbnail_pl from "../images/thumbnails/thumbnail_pl.png"
import thumbnail_ibd from "../images/thumbnails/thumbnail_ibd.png"
import thumbnail_comicManager from "../images/thumbnails/thumbnail_comicManager.jpg"
import thumbnail_co from "../images/thumbnails/thumbnail_co.png"
import thumbnail_tec from "../images/thumbnails/thumbnail_tec.png"
import thumbnail_tdn from "../images/thumbnails/thumbnail_tdn.png"
import thumbnail_wcm from "../images/thumbnails/thumbnail_wcm.png"

import { Link } from "gatsby"

const Styles = styled.div`
  padding: 0;
  margin: 0;
`
export default function projects() {
  return (
    <Styles>
      <Row key="Projects" id="Projects" noGutters>
        <Col xs={12} md={3}>
          <Link to="/project/phalanx" state={{ slug: "phalanx" }}>
            <ProjectCard
              thumbnail={thumbnail_phalanx}
              projectTitle={"PHALANX"}
              projectDescription={"C#, JavaScript, ASP.Net"}
            />
          </Link>
        </Col>
        <Col xs={12} md={3}>
          <Link to="/project/planetlibrary" state={{ slug: "planet-library" }}>
            <ProjectCard
              thumbnail={thumbnail_pl}
              projectTitle={"Planet Library"}
              projectDescription={"UNITY & C#"}
            />
          </Link>
        </Col>
        <Col xs={12} md={3}>
          <Link to="/project/ibdclasses">
            <ProjectCard
              thumbnail={thumbnail_ibd}
              projectTitle={"IBD Classes"}
              projectDescription={"UNITY & C#"}
            />
          </Link>
        </Col>
        <Col xs={12} md={3}>
          <Link to="/project/comicmanager">
            <ProjectCard
              thumbnail={thumbnail_comicManager}
              projectTitle={"Comic Manager"}
              projectDescription={"JavaScript & Apache Cordova"}
            />
          </Link>
        </Col>
      </Row>
      <Row key="Projects" id="Projects" noGutters>
        <Col xs={12} md={3}>
          <Link to="/project/clandestineops">
            <ProjectCard
              thumbnail={thumbnail_co}
              projectTitle={"Clandestine Ops"}
              projectDescription={"UNITY & C#"}
            />
          </Link>
        </Col>
        <Col xs={12} md={3}>
          <Link to="/project/theedgeofcivilization">
            <ProjectCard
              thumbnail={thumbnail_tec}
              projectTitle={"The Edge of Civilization"}
              projectDescription={"Unreal Engine 4"}
            />
          </Link>
        </Col>
        <Col xs={12} md={3}>
          <Link to="/project/thedeadofnight">
            <ProjectCard
              thumbnail={thumbnail_tdn}
              projectTitle={"The Dead of Night"}
              projectDescription={"JavaScript & Phaser.io"}
            />
          </Link>
        </Col>
        <Col xs={12} md={3}>
          <Link to="/project/worldcupmanager">
            <ProjectCard
              thumbnail={thumbnail_wcm}
              projectTitle={"World Cup Manager"}
              projectDescription={"Java"}
            />
          </Link>
        </Col>
      </Row>
    </Styles>
  )
}
