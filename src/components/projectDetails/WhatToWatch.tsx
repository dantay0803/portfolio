import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Modal from "../Modal"

const WhatToWatch = ({ isOpen, setIsOpen }: Modal) => {
  return (
    <Modal title="What to Watch" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full flex flex-row justify-start items-center gap-x-2 text-sm mb-4">
        <a
          href="https://github.com/dantay0803/React_Projects/tree/master/movie-listing-website"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline hover:text-primary"
        >
          Source Code
        </a>
      </div>
      <div className="flex flex-col gap-y-4">
        <p>
          What to Watch is a website I created in React, using the{" "}
          <a
            href="https://developers.themoviedb.org/3/getting-started/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold hover:underline hover:text-primary"
          >
            MovieDB API
          </a>{" "}
          for the data of the site.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/whattowatch/001-WhatToWatch_Home.jpg"
            }
            alt="What to Watch homepage screenshot"
          />
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/whattowatch/002-WhatToWatch_About.jpg"
            }
            alt="What to Watch about Luther TV show page screenshot"
          />
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/whattowatch/003-WhatToWatch_ActorInfo.jpg"
            }
            alt="What to Watch actor information page about Idris Elba screenshot"
          />
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/whattowatch/004-WhatToWatch_ActorCredits.jpg"
            }
            alt="What to Watch actor credits screenshot"
          />
        </div>
        <p>The website includes several features such as:</p>
        <ul className="list-disc marker:text-accent ml-8">
          <li>Netflix styled homepage with featured content.</li>
          <li>Movie, TV and person searching.</li>
          <li>Details on movies, TV shows and people.</li>
          <li>View collections of related products.</li>
          <li>View trailers using the YouTube Player API.</li>
          <li>View comments from MovieDB users.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/whattowatch/005-WhatToWatch_Trailers.jpg"
            }
            alt="What to Watch selected TV show trailer screenshot"
          />
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/whattowatch/006-WhatToWatch_TrailerPlaying.jpg"
            }
            alt="What to Watch TV show trailer inline player screenshot"
          />
        </div>
        <p>Technologies used in the project:</p>
        <ul className="list-disc marker:text-accent ml-8">
          <li>React</li>
          <li>JavaScript</li>
          <li>React Router</li>
          <li>Styled Components</li>
          <li>React Bootstrap</li>
          <li>React Icons</li>
          <li>React Scroll</li>
          <li>YouTube Player API</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/whattowatch/007-WhatToWatch_Search.jpg"
            }
            alt="What to Watch search feature screenshot"
          />
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/whattowatch/008-WhatToWatch_Collections.jpg"
            }
            alt="What to Watch search collections screenshot"
          />
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/whattowatch/009-WhatToWatch_Discover.jpg"
            }
            alt="What to Watch discover TV shows screenshot"
          />
          <StaticImage
            className="w-full h-auto"
            src={
              "../../assets/images/projects/whattowatch/010-WhatToWatch_Keywords.jpg"
            }
            alt="What to Watch keyword search results screenshot"
          />
        </div>
      </div>
    </Modal>
  )
}

export default WhatToWatch
