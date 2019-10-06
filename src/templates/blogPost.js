import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import "../styles/bootstrap-4.3.1.min.css"
import "../styles/index.css"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import { graphql } from "gatsby"

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  margin-top: 5rem;
`

export const query = graphql`
  query($slug: String!) {
    wpgraphql {
      postBy(slug: $slug) {
        uri
        title
        content(format: RENDERED)
        featuredImage {
          altText
          sourceUrl
        }
      }
    }
  }
`

const blogPost = props => {
  console.log(props)

  const { content, featuredImage, title, uri } = props.data.wpgraphql.postBy

  // const { slug, title, featuredImage, content } = props

  return (
    <>
      <SEO title="Home" />
      <Navbar backgroundcolor={"var(--highlight)"} />
      <StyledContainer fluid>
        <h1>{title}</h1>
        <div>{content}</div>
      </StyledContainer>
    </>
  )
}

export default blogPost
