import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ProjectDetails from '../../templates/projectDetails';

const ClandestineOps = () => {
  const data = useStaticQuery(graphql`
    query clandestineOpsImages {
      images: allFile(
        filter: { relativeDirectory: { eq: "projects/clandestineops" } }
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
      title="Clandestine Ops"
      desc="Information on my portfolio project Clandestine Ops"
      path="/projects/clandestine-ops"
    >
      <p>
        A First Person Shooter that I developed as an example violent video game
        for participants of my research to play to ensure they were being
        exposed to a game with violent content.
      </p>
      <iframe
        title="Clandestine Ops YouTube Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/k2P1gZUexSE"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <p>
        This was the second game that I have developed using the Unity game
        engine and my first time creating a First Person Shooter as well as a 3D
        game. As the game was created for my honours project I worked alone on
        it and was responsible for creating all of the code for the game. To
        help me develop the game I made use of some teaching books for Unity as
        well as referencing the Unity API for more details, especially since I
        had such a short development window.
      </p>
      <iframe
        title="Clandestine Ops itch.io link"
        src="https://itch.io/embed/66493?border_width=5&amp;bg_color=EEF0F2&amp;fg_color=141414&amp;link_color=FF0000&amp;border_color=9B9D9F"
        width="560"
        height="175"
        frameBorder="0"
      >
        <a href="https://dantay0803.itch.io/clandestine-ops">
          Clandestine Ops by DanTay0803
        </a>
      </iframe>
      <p>
        While developing the game I wanted to use the same method that AAA games
        such as Battlefield use for the shooting. For this reason all of the
        shooting in the game is done with Raycasting. When the player shoots a
        Raycast is created from the middle off the camera and is shot out
        infinitely. Once that is done a RaycastHit is then shot out along the
        Raycast and sends a “detectHit” message to any object it hits. When the
        “detectHit” message is read by the enemy’s damage is applied to them by
        reducing its health. Once the message is sent to the hit objects a
        particle script is run to play particle effects. If the tag of the hit
        object equals “enemy” a blood splatter effect is then played and if the
        object is tagged with “MetalObject” and metal spark particle effect is
        played on the position of the object hit.
      </p>
      <div className="appImages">
        {data.images.nodes.slice(0, 2).map((image, i) => (
          <a
            href={image.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            key={`LinkToClandestineOpsImage-Set1-${i}`}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              alt={`Screenshot of ClandestineOps - ${i}`}
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
        The enemies in the game also use Unity’s navigation system to path find
        to predetermined locations. To do this a navigation mesh was created by
        the engine by calculating the geometry of the map. Empty objects that
        act as points for each of the enemies were then placed in the level and
        placed into an array for each of the enemy’s navigation script to know
        what waypoints to move to. The enemy movement code then moves to the
        first waypoint in the array until it has reached it then selects the
        next waypoint and keeps cycling through the array. The enemies are also
        told to pause once they have reach each waypoint and will also stop
        moving if the player is within range of them or if the player shoots at
        them. The enemies will also shoot back at the player using the same
        Recasting method that the player uses.
      </p>
      <div className="appImages">
        {data.images.nodes.slice(2, data.images.length).map((image, i) => (
          <a
            href={image.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            key={`LinkToClandestineOpsImage-Set2-${i}`}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              alt={`Screenshot of ClandestineOps - ${i}`}
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

export default ClandestineOps;
