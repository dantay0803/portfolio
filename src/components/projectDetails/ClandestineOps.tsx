import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Modal from "../Modal"

type ClandestineOpsProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ClandestineOps = ({ isOpen, setIsOpen }: ClandestineOpsProps) => {
  return (
    <Modal title="Clandestine Ops" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full flex flex-row justify-start items-center gap-x-2 text-sm mb-4">
        <a
          href="https://dantay0803.itch.io/clandestine-ops"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline hover:text-primary"
        >
          View Project
        </a>
        <p className="text-primary">|</p>
        <a
          href="https://github.com/dantay0803/Honours_Project"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline hover:text-primary"
        >
          Source Code
        </a>
      </div>
      <div className="flex flex-col gap-y-4">
        <p>
          Clandestine Ops is a First-Person Shooter developed to be an example
          of a violent video game. Participants of my research were then asked
          to play it to examine the effects of violent video games.
        </p>
        <p>This was the second game I had developed using the Unity game engine. With it being my first time creating a First-Person Shooter and a 3D style game. As I created the game for my honours class, I was the sole developer on the project.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/k2P1gZUexSE?si=Y50sAvvVuals_3Le"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="self-center"
        ></iframe>
        <p>I wanted to use similar shooting mechanics used in AAA games, such as Battlefield. For this reason, all the shooting in the game uses Raycasting. When the player shoots they create a Raycast which is shot outward from the centre of the camera. A RaycastHit is then generated along the Raycast. Which sends a “detectHit” message to any colliding objects. When the “detectHit” message gets read by the object. It checks the tag on the object and if it were to equal “enemy”. Multiple scripts are then triggered on the enemy object. One to apply the damage to the enemy, scaling up or down based on area hit. With the second triggering a blood splatter particle effect.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/clandestineops/04_Clandestine_Ops_Target.jpg"
            }
            alt="Clandestine Ops target killed objective screenshot"
          />
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/clandestineops/01_Clandestine_Ops_Enemy.jpg"
            }
            alt="Clandestine Ops enemy AI screenshot"
          />
        </div>
        <p>Enemies also make use of Unity’s navigation system to move between various locations. To do this, the engine created a navigation mesh, by calculating the geometry of the map. Then empty game objects were placed around the map and added into an array for each of the enemy’s. This allowed their navigation script to know what waypoints to move to. By cycling between each point once the enemy object had reached it. To add a patrolling like pattern to the enemy movement, I added a pause once they reach the target location. Enemies will also shoot at the player using the same Raycasting method that the player uses. This behaviour is triggered when the player is in the enemy's view range or engages the enemy in combat.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/clandestineops/02_Clandestine_Ops_Reload.jpg"
            }
            alt="Clandestine Ops player reload animation screenshot"
          />
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/clandestineops/03_Clandestine_Ops_Hit.jpg"
            }
            alt="Clandestine Ops player taken damage screenshot"
          />
        </div>
      </div>
    </Modal>
  )
}

export default ClandestineOps
