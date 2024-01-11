import { MDXProvider } from "@mdx-js/react"
import { Link, graphql } from "gatsby"
import React from "react"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data, children }: any) {
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`