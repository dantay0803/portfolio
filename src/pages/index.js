import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import "../styles/bootstrap-4.3.1.min.css"
import "../styles/index.css"
import SEO from "../components/seo"
import Header from "../components/header"
import Projects from "../components/projects"
import About from "../components/about"
import Resume from "../components/resume"
import Contact from "../components/contact"

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
`

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Header />
      <StyledContainer fluid>
        <Projects />
        <About />
        <Resume />
        <Contact />
      </StyledContainer>
    </>
  )
}

export default IndexPage
