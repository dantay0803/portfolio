import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Card, Media } from "react-bootstrap"
import styled from "styled-components"
import "../styles/bootstrap-4.3.1.min.css"
import "../styles/index.css"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import HeaderBlog from "../components/headerBlog"
import dompurify from "dompurify"

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
`

const StyledMedia = styled(Media)`
  margin-top: 1rem;
  margin-bottom: 3rem;
`

const StyledDetailsCard = styled(Card)`
  border-radius: 0;
  color: black;
  height: 15rem;
  .card-title {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .card-text {
    padding-top: 1rem;
  }
`
const StyledImageCard = styled(Card)`
  width: 25rem;
  height: 15rem;
  border: none;
  box-shadow: none;
  background-color: transparent;
  margin: 0;
  .card-img {
    border-radius: 0;
    height: 15rem;
  }
`

export const query = graphql`
  {
    wpgraphql {
      posts {
        edges {
          node {
            date
            slug
            featuredImage {
              altText
              sourceUrl
            }
            excerpt
            title
          }
        }
      }
    }
  }
`

const BlogHome = props => {
  const [navBackgroundColor, setNavBackgroundColor] = useState("transparent")
  const sanitizer = dompurify.sanitize
  const posts = props.data.wpgraphql.posts

  console.log(posts)

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
      <HeaderBlog />
      <StyledContainer fluid>
        <Row>
          <Col xs="12" md={{ span: 10, offset: 1 }}>
            {posts.edges.map(post => (
              <StyledMedia key={post.node.slug}>
                <StyledImageCard>
                  <Link to={`blog/${post.node.slug}`}>
                    <Card.Img
                      src={
                        post.node.featuredImage.sourceUrl ||
                        `https://via.placeholder.com/185x278?text=Image+not+available`
                      }
                      alt={post.node.featuredImage.altText}
                    />
                  </Link>
                </StyledImageCard>
                <Media.Body>
                  <StyledDetailsCard>
                    <Card.Body>
                      <Card.Title>{post.node.title}</Card.Title>
                      <small className="muted">
                        {new Date(post.node.date)
                          .toUTCString()
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}
                      </small>
                      <Card.Text
                        dangerouslySetInnerHTML={{
                          __html: sanitizer(
                            post.node.excerpt.length > 200
                              ? post.node.excerpt
                                  .substring(0, 207)
                                  .concat("...")
                              : post.node.excerpt
                          ),
                        }}
                      />
                    </Card.Body>
                    <Card.Footer>
                      <Link to={`/blog/${post.node.slug}/`}>
                        <small className="text-muted">Full Post</small>
                      </Link>
                    </Card.Footer>
                  </StyledDetailsCard>
                </Media.Body>
              </StyledMedia>
            ))}
          </Col>
        </Row>
      </StyledContainer>
    </>
  )
}

export default BlogHome
