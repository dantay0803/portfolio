import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import "../styles/bootstrap-4.3.1.min.css"
import "../styles/index.css"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
`

export const pageQuery = graphql`
  {
    wordPress {
      projectBy(slug: "planet-library") {
        title
        content(format: RAW)
      }
    }
  }
`

const ProjectPage = ({ location, data }) => {
  const slug = location.state.slug
  const title = data.wordPress.projectBy.content

  return (
    <>
      <p>{slug}</p>
      <p>{title}</p>
      <SEO title="" />
      <StyledContainer fluid></StyledContainer>
    </>
  )
}

export default ProjectPage

// cHJvamVjdDoyODc=
