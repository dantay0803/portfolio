import React from "react"
import styled from "styled-components"
import { Card, Button } from "react-bootstrap"
import { Link, navigate } from "gatsby"

const Styles = styled.div`
  text-align: left;

  .card {
    margin: 1rem;
    -moz-box-shadow: 5px 10px 10px black;
    -webkit-box-shadow: 5px 10px 10px black;
    box-shadow: 5px 10px 10px black;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .card:hover {
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }

  .card-text {
    font-size: 0.8rem;
  }

  .btn,
  .btn-primary {
    background-color: var(--highlight);
    border-color: var(--highlight);
    font-size: 0.8rem;
    text-decoration: none;
  }
`

export default function projectCard(props) {
  const { thumbnail, projectTitle, projectDescription, projectPath } = props

  const viewProject = path => {
    navigate(`/projects/${path}`)
  }

  return (
    <Styles>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>
            <h6>
              <Link to={`/projects/${projectPath}`}>{projectTitle}</Link>
            </h6>
          </Card.Title>
          <Card.Text>
            Built with: <strong>{projectDescription}</strong>
          </Card.Text>
          <Button onClick={() => viewProject(projectPath)}>More Details</Button>
        </Card.Body>
      </Card>
    </Styles>
  )
}
