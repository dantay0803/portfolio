import { Link } from "gatsby"
import React from "react"

type FooterLinkProps = {
  slug: string
  title: string
  isNext?: boolean
}

const FooterLink = ({ slug, title, isNext }: FooterLinkProps) => {
  const label = isNext ? "Next" : "Previous"
  const layout = isNext ? "justify-start sm:justify-end" : "justify-start"
  return (
    <div className={`w-full flex flex-row ${layout} items-start gap-x-2`}>
      <p className="font-medium">{label}:</p> <Link className="text-accent font-semibold hover:underline hover:text-primary" to={slug}>{title}</Link>
    </div>
  )
}

export default FooterLink
