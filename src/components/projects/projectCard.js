import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const StyledCard = styled(Card)`
  width: 53.125rem;
  height: 15rem;
  overflow: hidden;
  color: var(--text-secondary);
  border: none;
  border-radius: 0;

  :hover .card-img-overlay, :hover .rightCard .card-img-overlay {
    transform: translateX(0%);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    transition: all 0.9s ease-in-out;
  }

  .card-img-overlay {
    background-color: var(--text-primary);
    -webkit-clip-path: polygon(0 0, 70% 0%, 48% 100%, 0% 100%);
    clip-path: polygon(0 0, 70% 0%, 48% 100%, 0% 100%);
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transition: all 0.75s ease-in-out;
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
    margin: 0.9375rem 0 0 0};
    padding: 0;
  }

  .card-tech {
    color: var(--text-muted);
    text-transform: uppercase;
    font-size: 1.125rem;
    font-weight: bold;
  }

  .rightCard{
    text-align: right;
  }

  .rightCard .card-title > hr {
    margin-left: 40rem;
  }

  .rightCard .card-text{
    margin: 0.9375rem 0 0 26.5rem;
  }

  .rightCard .card-img-overlay {
    -webkit-clip-path: polygon(53% 0, 100% 0%, 100% 100%, 31% 100%);
    clip-path: polygon(53% 0, 100% 0%, 100% 100%, 31% 100%);
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -o-transform: translateX(100%);
  }
`;

const projectCard = props => {
  const {
    thumbnail,
    projectTitle,
    projectTech,
    projectDescription,
    projectPath,
    additionalClasses,
  } = props;

  return (
    <div>
      <Link
        to={`/projects/${projectPath}/`}
        state={{
          modal: true,
          noScroll: true,
          replace: false,
        }}
        className="noUnderline"
      >
        <StyledCard>
          <Img fluid={thumbnail} className="card-img" />
          <div className={additionalClasses || null}>
            <Card.ImgOverlay>
              <Card.Title>
                <h6>{projectTitle}</h6>
                <hr />
              </Card.Title>
              <Card.Text className="card-tech">{projectTech}</Card.Text>
              <Card.Text>{projectDescription}</Card.Text>
            </Card.ImgOverlay>
          </div>
        </StyledCard>
      </Link>
    </div>
  );
};

export default projectCard;
