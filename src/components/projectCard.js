import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

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
    width: 15rem;
    height: 20rem;
  }

  .card:hover {
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }

  .card-text {
    font-size: 0.8rem;
  }

  .card-footer {
    background: none;
    border: none;
  }

  .btn,
  .btn-primary {
    background-color: var(--highlight);
    border-color: var(--highlight);
    font-size: 0.8rem;
    text-decoration: none;
  }
`;

const projectCard = props => {
  const { thumbnail, projectTitle, projectDescription, projectPath } = props;
  return (
    <Styles>
      <Card>
        <Img fluid={thumbnail} className="card-img-top" />
        <Card.Body>
          <Card.Title>
            <h6>
              <Link
                to={`/projects/${projectPath}/`}
                state={{
                  modal: true,
                  noScroll: true,
                  replace: false,
                }}
                className="noUnderline"
              >
                {projectTitle}
              </Link>
            </h6>
          </Card.Title>
          <Card.Text>
            Built with: <strong>{projectDescription}</strong>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link
            to={`/projects/${projectPath}/`}
            state={{
              modal: true,
            }}
            className="noUnderline"
          >
            <Button>More Details</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Styles>
  );
};

export default projectCard;
