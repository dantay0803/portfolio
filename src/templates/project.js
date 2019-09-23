import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import "../styles/bootstrap-4.3.1.min.css"
import "../styles/index.css"
import SEO from "../components/seo"

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
`
const ProjectTemplate = () => {
  return (
    <>
      <SEO title="" />
      <StyledContainer fluid>
        <p>Project template</p>
      </StyledContainer>
    </>
  )
}

export default ProjectTemplate
