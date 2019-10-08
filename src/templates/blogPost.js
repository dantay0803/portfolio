import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import "../styles/bootstrap-4.3.1.min.css"
import "../styles/index.css"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import { graphql } from "gatsby"
import dompurify from "dompurify"

const StyledContainer = styled(Container)`
  margin-top: 4rem;

  .hrPageBreak {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  figure {
    text-align: center;
  }

  figcaption,
  .mutedText {
    color: var(--muted);
  }

  figcaption {
    font-size: 0.85rem;
    opacity: 0.5;
  }

  figcaption: hover {
    opacity: 1;
  }
`

export const query = graphql`
  query($slug: String!) {
    wpgraphql {
      postBy(slug: $slug) {
        uri
        title
        date
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
  console.log(props.data.wpgraphql.postBy)
  const {
    content,
    date,
    featuredImage,
    title,
    uri,
  } = props.data.wpgraphql.postBy
  const sanitizer = dompurify.sanitize
  const postDate = new Date(date)

  return (
    <>
      <SEO title="Home" />
      <Navbar backgroundcolor={"var(--highlight)"} />
      <StyledContainer fluid>
        <Row>
          <Col xs="12" md={{ span: 6, offset: 3 }}>
            <h1>{sanitizer(title)}</h1>
            <h6 className="mutedText">
              {postDate
                .toUTCString()
                .split(" ")
                .slice(0, 4)
                .join(" ")}
            </h6>
            <hr className="hrPageBreak" />
          </Col>
        </Row>
        <Row noGutters>
          <Col
            xs="12"
            md={{ span: 6, offset: 3 }}
            dangerouslySetInnerHTML={{ __html: sanitizer(content) }}
          ></Col>
        </Row>
      </StyledContainer>
    </>
  )
}

export default blogPost
