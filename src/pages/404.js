import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import "../styles/bootstrap-4.3.1.min.css"
import "../styles/index.css"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  margin-top: 5rem;
  text-align: center;
`
const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not Found" />
      <Navbar backgroundcolor={"var(--highlight)"} />
      <StyledContainer fluid>
        <h1>Sorry About That</h1>
        <h3>404</h3>
        <p>It looks like we couldn't find what you were looking for.</p>
        <p>
          How about we try take a step{" "}
          <Link onClick={() => window.history.back()}>back.</Link>
        </p>
      </StyledContainer>
    </>
  )
}

export default NotFoundPage
