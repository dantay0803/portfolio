import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Modal from "../Modal"

const PlanetLibrary = ({ isOpen, setIsOpen }: Modal) => {
  return (
    <Modal title="Planet Library" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full flex flex-row justify-start items-center gap-x-2 text-sm mb-4">
        <a
          href="https://wp.sol.us/planet-library/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline hover:text-primary"
        >
          View Project
        </a>
      </div>
      <div className="flex flex-col gap-y-4">
        <p>
          Planet Library was my main responsibility while working at Solus UK
          Ltd. It was being developed as a child-focused version of Solus'
          flagship library application. Features of the application include
          searching and reserving physical and electronic content. Other library
          features include a digital library card, view return dates and view
          upcoming events.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <StaticImage
            className="w-3/4 h-auto"
            src={
              "../../assets/images/projects/planetlibrary/01_PlanetLibrary_Poster.png"
            }
            alt="Planet Library advertisement poster"
          />
          <StaticImage
            className="w-3/4 h-auto"
            src={
              "../../assets/images/projects/planetlibrary/02_PlanetLibrary_Intro.png"
            }
            alt="Planet Library introduction animation screenshot"
          />
        </div>
        <p>
          To help drive regular foot traffic to the libraries. The application
          features an augmented reality character hunt. Which allows users to
          catch over 100 characters that gains them tokens to unlock games.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <StaticImage
            className="w-3/4 h-auto"
            src={
              "../../assets/images/projects/planetlibrary/03_PlanetLibrary_Menu.png"
            }
            alt="Planet Library main menu screenshot"
          />
          <StaticImage
            className="w-3/4 h-auto"
            src={
              "../../assets/images/projects/planetlibrary/04_PlanetLibrary_CatSearch.png"
            }
            alt="Planet Library book search screenshot"
          />
        </div>
        <p>My role included:</p>
        <ul className="list-disc marker:text-accent ml-8">
          <li>Designing and implementing new features.</li>
          <li>The design and creation of new games.</li>
          <li>Manage the applications pilot phase in America.</li>
          <li>Updating the visuals, code and gameplay of existing games.</li>
          <li>
            Optimize assets to reduce the application’s size and improve
            performance.
          </li>
          <li>See the release of the application in the Australian market.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <StaticImage
            className="w-3/4 h-auto"
            src={
              "../../assets/images/projects/planetlibrary/05_PlanetLibrary_GameList.png"
            }
            alt="Planet Library game list screenshot"
          />
          <StaticImage
            className="w-3/4 h-auto"
            src={
              "../../assets/images/projects/planetlibrary/06_PlanetLibrary_Game.png"
            }
            alt="Planet Library gameplay screenshot"
          />
          <StaticImage
            className="w-3/4 h-auto"
            src={
              "../../assets/images/projects/planetlibrary/07_PlanetLibrary_CharacterList.png"
            }
            alt="Planet Library character collection list screenshot"
          />
          <StaticImage
            className="w-3/4 h-auto"
            src={
              "../../assets/images/projects/planetlibrary/08_PlanetLibrary_Review.png"
            }
            alt="Planet Library book review screenshot"
          />
        </div>
      </div>
    </Modal>
  )
}

export default PlanetLibrary
