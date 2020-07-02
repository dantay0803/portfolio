import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ProjectDetails from '../../templates/project-details';

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
        Clandestine Ops is a First-Person Shooter developed to be an example of
        a violent video game. Participants of my research were then asked to
        play it to examine the effects of violent video games.
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
        This was the second game I had developed using the Unity game engine.
        With it being my first time creating a First-Person Shooter and a 3D
        style game. As I created the game for my honours class, I was the sole
        developer on the project.
      </p>
      <iframe
        title="Clandestine Ops itch.io link"
        src="https://itch.io/embed/66493?border_width=5&amp;bg_color=EEF0F2&amp;fg_color=141414&amp;link_color=FF0000&amp;border_color=9B9D9F"
        width="560"
        height="175"
        frameBorder="0"
      >
        <a href="https://dantay0803.itch.io/clandestine-ops">Clandestine Ops</a>
      </iframe>
      <p>
        I wanted to use similar shooting mechanics used in AAA games, such as
        Battlefield. For this reason, all the shooting in the game uses
        Raycasting. When the player shoots they create a Raycast which is shot
        outward from the centre of the camera. A RaycastHit is then generated
        along the Raycast. Which sends a “detectHit” message to any colliding
        objects. When the “detectHit” message gets read by the object. It checks
        the tag on the object and if it were to equal “enemy”. Multiple scripts
        are then triggered on the enemy object. One to apply the damage to the
        enemy, scaling up or down based on area hit. With the second triggering
        a blood splatter particle effect.
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
        Enemies also make use of Unity’s navigation system to move between
        various locations. To do this, the engine created a navigation mesh, by
        calculating the geometry of the map. Then empty game objects were placed
        around the map and added into an array for each of the enemy’s. This
        allowed their navigation script to know what waypoints to move to. By
        cycling between each point once the enemy object had reached it. To add
        a patrolling like pattern to the enemy movement, I added a pause once
        they reach the target location. Enemies will also shoot at the player
        using the same Raycasting method that the player uses. This behaviour is
        triggered when the player is in the enemy's view range or engages the
        enemy in combat.
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
