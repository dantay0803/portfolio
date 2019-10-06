import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import "../styles/bootstrap-4.3.1.min.css"
import "../styles/index.css"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Header from "../components/header"

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
`
const BlogHome = () => {
  const [navBackgroundColor, setNavBackgroundColor] = useState("transparent")

  const updateNavbar = () => {
    if (window.pageYOffset > 250) {
      setNavBackgroundColor("var(--highlight)")
    } else if (window.pageYOffset < 250) {
      setNavBackgroundColor("transparent")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", updateNavbar)
    return () => {
      window.removeEventListener("mousemove", updateNavbar)
    }
  }, [])

  return (
    <>
      <SEO title="Home" />
      <Navbar backgroundcolor={navBackgroundColor} />
      <Header />
      <StyledContainer fluid></StyledContainer>
    </>
  )
}

export default BlogHome
