import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Modal from "../Modal"

const Phalanx = ({ isOpen, setIsOpen }: Modal) => {
  return (
    <Modal title="Phalanx" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full flex flex-row justify-start items-center gap-x-2 text-sm mb-4">
        <a
          href="https://www.spartansolutions.com/phalanx/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline hover:text-primary"
        >
          View Project
        </a>
      </div>
      <div className="flex flex-col gap-y-4">
        <p>
          PHALANX is an integrated operations software application that combines
          RFID/barcode technology, operational mobility with the use of
          smartphones and tablets and integration with back-office systems on a
          single software platform. PHALANX contains many processes to help
          employees carry out their work in a more streamlined and efficient
          manner and help reduce businesses use of paper.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <StaticImage
            className="w-3/4 h-auto"
            src={
              "../../assets/images/projects/phalanx/1-PHALANX_Inspection.jpg"
            }
            alt="Phalanx inspection task screenshot"
          />
          <StaticImage
            className="w-3/4 h-auto"
            src={
              "../../assets/images/projects/phalanx/2-PHALANX_ServiceWorks.jpg"
            }
            alt="Phalanx find service work screenshot"
          />
          <StaticImage
            className="w-3/4 h-auto"
            src={
              "../../assets/images/projects/phalanx/3-PHALANX_ServiceTasks.jpg"
            }
            alt="Phalanx service task details screenshot"
          />
          <StaticImage
            className="w-4/4 h-auto"
            src={
              "../../assets/images/projects/phalanx/4-PHALANX_PortalDeliveryStatus.jpg"
            }
            alt="Phalanx portal delivery progress screenshot"
          />
        </div>
        <p>
          Whilst working on PHALANX, I worked with several programming languages
          and frameworks. Including C#, JavaScript, React, jQuery and ASP.Net.
        </p>
        <p>I have also been responsible for:</p>
        <ul className="list-disc marker:text-accent ml-8">
          <li>Designing and implementing new features.</li>
          <li>Updating and improving features.</li>
          <li>Optimizing areas of our mobile and web clients.</li>
          <li>Provide user support and fix bugs.</li>
          <li>Provide code reviews.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <StaticImage
            className="w-4/4 h-auto"
            src={
              "../../assets/images/projects/phalanx/6-PHALANX_DeliveryRoute.jpg"
            }
            alt="Phalanx portal delivery route screenshot"
          />
          <StaticImage
            className="w-4/4 h-auto"
            src={
              "../../assets/images/projects/phalanx/7-PHALANX_PortalWorkSort.jpg"
            }
            alt="Phalanx portal sort work screenshot"
          />
        </div>
      </div>
    </Modal>
  )
}

export default Phalanx
