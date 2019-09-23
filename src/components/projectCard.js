import React from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"

const Styles = styled.div`
  .card {
    padding: 0;
    margin: 0;
    color: white;
    border: none;
  }

  .card-img-overlay {
    background-color: var(--portfolio-blue);
    opacity: 0;
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .card-img-overlay:hover {
    opacity: 0.95;
  }

  .card-title {
    margin-top: 5rem;
  }
`

export default function projectCard(props) {
  const { thumbnail, projectTitle, projectDescription } = props

  return (
    <Styles>
      <Card className="bg-dark text-white">
        <Card.Img src={thumbnail} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{projectTitle}</Card.Title>
          <Card.Text>{projectDescription}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Styles>
  )
}
