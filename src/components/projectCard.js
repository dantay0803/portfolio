import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Styles = styled.div`
  .card {
    width: 53.125rem;
    height: 15rem;
    overflow: hidden;
    text-align: left;
    color: var(--text-secondary);
    padding: 0;
    margin: 0 0 2em 0;
    border: none;
    border-radius: 0;
  }

  .card:hover .card-img-overlay {
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    transition: all 1s;
  }

  .card-img-overlay {
    background-color: var(--text-primary);
    -webkit-clip-path: polygon(0 0, 100% 0%, 0% 100%, 0% 100%);
    clip-path: polygon(0 0, 70% 0%, 48% 100%, 0% 100%);
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transition: all 0.75s;
  }

  .card-img {
    border: none;
    border-radius: 0;
  }

  .card-title > h6 {
    font-weight: bold;
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  .card-title > hr {
    border-color: var(--highlight);
    border-width: 0.625rem;
    max-width: 11.1875rem;
    margin: 0;
    padding: 0;
  }

  .card-text {
    max-width: 24.0625rem;
    min-width: 24.0625rem;
    font-size: 1.25rem;
    margin: 0.9375rem 0 0 0;
    padding: 0;
  }

  .card-tech {
    color: var(--text-muted);
    text-transform: uppercase;
    font-size: 1.125rem;
    font-weight: bold;
  }
`;

const projectCard = props => {
  const {
    thumbnail,
    projectTitle,
    projectTech,
    projectDescription,
    projectPath,
  } = props;
  return (
    <Styles>
      <Link
        to={`/projects/${projectPath}/`}
        state={{
          modal: true,
          noScroll: true,
          replace: false,
        }}
        className="noUnderline"
      >
        <Card>
          <Img fluid={thumbnail} className="card-img" />
          <div className="overlay-shadow">
            <Card.ImgOverlay>
              <Card.Title>
                <h6>{projectTitle}</h6>
                <hr />
              </Card.Title>
              <Card.Text className="card-tech">{projectTech}</Card.Text>
              <Card.Text>{projectDescription}</Card.Text>
            </Card.ImgOverlay>
          </div>
        </Card>
      </Link>
    </Styles>
  );
};

export default projectCard;
