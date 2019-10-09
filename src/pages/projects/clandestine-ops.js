import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import "../../styles/bootstrap-4.3.1.min.css"
import "../../styles/index.css"
import SEO from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby-plugin-modal-routing"

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
`

const ClandestineOps = () => (
  <>
    <SEO title='Clandestine Ops'
      description={'Information on my portfolio project Clandestine Ops'}
      pathname={'/projects/clandestine-ops'}
    />
    <StyledContainer fluid>
      <Row noGutters>
        <Col xs={{ span: 1, offset: 11 }}>
          <Link to={"/#projects"} className="noUnderline">
            <FontAwesomeIcon icon={faWindowClose} size="1x" />
          </Link>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 8, offset: 2 }}>
          <h1>Clandestine Ops</h1>
          <hr className="hrTitle" />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>
            A First Person Shooter that I developed as an example violent video
            game for participants of my research to play in order to ensure they
            were being exposed to a game with violent content.
          </p>
          <iframe
            title="Clandestine Ops Gameplay Video"
            src="https://www.youtube.com/embed/k2P1gZUexSE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="embeddedVideo"
          ></iframe>
          <p>
            This was the second game that I have developed using the Unity game
            engine and my first time creating a First Person Shooter as well as
            a 3D game. As the game was created for my honours project I worked
            alone on it and was responsible for creating all of the code for the
            game. To help me develop the game I made use of some teaching books
            for Unity as well as referencing the Unity API for more details,
            especially since I had such a short development window.
          </p>
          <p>
            While developing the game I wanted to use the same method that AAA
            games such as Battlefield use for the shooting. For this reason all
            of the shooting in the game is done with Raycasting. When the player
            shoots a Raycast is created from the middle off the camera and is
            shot out infinitely. Once that is done a RaycastHit is then shot out
            along the Raycast and sends a “detectHit” message to any object it
            hits. When the “detectHit” message is read by the enemy’s damage is
            applied to them by reducing its health. Once the message is sent to
            the hit objects a particle script is run to play particle effects.
            If the tag of the hit object equals “enemy” a blood splatter effect
            is then played and if the object is tagged with “MetalObject” and
            metal spark particle effect is played on the position of the object
            hit.
          </p>
          <iframe
            title="Clandestine Ops Download Link"
            frameBorder="0"
            src="https://itch.io/embed/66493?linkback=true"
            className="itchLink"
          ></iframe>
          <p>
            The enemies in the game also use Unity’s navigation system in order
            to path find to predetermined locations. To do this a navigation
            mesh was created by the engine by calculating the geometry of the
            map. Empty objects that act as points for each of the enemies were
            then placed in the level and placed into an array for each of the
            enemy’s navigation script in order to know what waypoints to move
            to. The enemy movement code then moves to the first waypoint in the
            array until it has reached it then selects the next waypoint and
            keeps cycling through the array. The enemies are also told to take a
            pause once they have reach each waypoint and will also stop moving
            if the player is within range of them or if the player shoots at
            them. The enemies will also shoot back at the player using the same
            Recasting method that the player uses.
          </p>
        </Col>
      </Row>
    </StyledContainer>
  </>
)

export default ClandestineOps
