import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const StyledCard = styled(Card)`
  width: 20rem;
  height: 5rem;
  overflow: hidden;
  color: var(--text-secondary);
  border: none;
  border-radius: 0;

  :hover .card-img-overlay,
  :hover .rightCard .card-img-overlay {
    transform: translateX(0%);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    transition: all 0.9s ease-in-out;
  }

  .card-img-overlay {
    background-color: var(--text-primary);
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transition: all 0.75s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .rightCard .card-img-overlay {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -o-transform: translateX(100%);
    transition: all 0.75s ease-in-out;
    align-items: flex-end;
    text-align: right;
  }

  .card-img {
    border: none;
    border-radius: 0;
  }

  .card-title > h6 {
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }

  .card-title > hr {
    border-color: var(--highlight);
    border-width: 0.5rem;
    max-width: 11.1875rem;
    margin: 0;
    padding: 0;
  }

  .card-text {
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
    visibility: hidden;
    width: 100%;
  }

  .card-tech {
    text-transform: uppercase;
    font-weight: bold;
    visibility: visible;
  }

  @media (min-width: 576px) {
    width: 28.282rem;
    height: 7.5rem;
  }

  @media (min-width: 768px) {
    width: 36.563rem;
    height: 10rem;

    .card-title > h6 {
      font-size: 1.25rem;
    }

    .card-text {
      font-size: 1rem;
      visibility: visible;
    }

    .card-tech {
      font-size: 1.125rem;
    }
  }

  @media (min-width: 992px) {
    width: 44.844rem;
    height: 12.5rem;

    .card-img-overlay {
      -webkit-clip-path: polygon(0 0, 75% 0%, 53% 100%, 0% 100%);
      clip-path: polygon(0 0, 75% 0%, 53% 100%, 0% 100%);
    }

    .card-text {
      width: 60%;
    }

    .rightCard .card-img-overlay {
      -webkit-clip-path: polygon(58% 0, 100% 0%, 100% 100%, 31% 100%);
      clip-path: polygon(48% 0, 100% 0%, 100% 100%, 26% 100%);
      transform: translateX(100%);
    }
  }

  @media (min-width: 1200px) {
    width: 53.125rem;
    height: 15rem;
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
