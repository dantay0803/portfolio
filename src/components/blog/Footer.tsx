import React from "react"
import Socials from "../Socials"
import FooterLink from "./FooterLink"

const Footer = ({ previous, next }: any) => {
  return (
    <div className="w-full bg-secondary flex flex-col gap-y-6 sm:gap-y-12 px-4 sm:px-6 py-10 sm:py-20">
      <div className="flex flex-col sm:flex-row justify-around items-center gap-y-4">
        {previous && (
          <FooterLink slug={previous?.frontmatter?.slug} title={previous?.frontmatter?.title} />
        )}
        {next && (
          <FooterLink slug={next?.frontmatter?.slug} title={next?.frontmatter?.title} isNext />
        )}
      </div>
      <div className="flex flex-row gap-x-10 sm:gap-x-20 justify-center items-center">
      <Socials large altColor />
      </div>
    </div>
  )
}

export default Footer
