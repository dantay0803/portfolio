import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';

const StyledCard = styled(Card)`
  width: 525px;
  height: 500px;
  color: var(--text-primary);
  box-shadow: 0.375rem 0.625rem 0.375rem rgba(0, 0, 0, 1);
  border: none;
  border-radius: 0;
  -webkit-transform: scale(1);
  transform: scale(1);
  transition: transform 0.75s ease-in-out;
  padding: 0;
  margin: 1rem 0;
  overflow: hidden;

  :hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    border: 2px solid var(--text-primary);
    box-shadow: 0.425rem 0.675rem 0.425rem rgba(0, 0, 0, 0.75);
    transition: transform 0.75s ease-in-out;
  }

  :hover :after {
    content: '';
    transform: translateX(-100%);
    width: 200%;
    height: 200%;
    position: absolute;
    z-index: 1;
    animation: slide 2s 1 forwards;

    background: linear-gradient(
      0.3turn,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    );
  }

  @keyframes slide {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(30deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(30deg);
    }
  }

  .card-img-top {
    border: none;
    border-radius: 0;
    max-width: 525px;
    max-height: 275px;
    min-width: 525px;
    min-height: 275px;
  }

  .card-body {
    background-color: var(--background-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .card-title,
  .card-text {
    width: 460px;
  }

  .card-title > h6 {
    font-weight: bold;
    font-size: 1.25rem;
  }

  .card-title > hr {
    border-color: var(--highlight);
    border-width: 0.625rem;
    max-width: 100%;
    margin: 0;
    padding: 0px 20px;
  }

  .card-date {
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  .img-clip {
    background-color: var(--background-primary);
    -webkit-clip-path: polygon(0 75%, 100% 100%, 100% 100%, 0% 100%);
    clip-path: polygon(0 75%, 100% 100%, 100% 100%, 0% 100%);
    width: 110%;
    height: 50%;
    position: absolute;
    top: 1.75rem;
  }
`;

// eslint-disable-next-line react/display-name
export default props => {
  const {
    thumbnail,
    alt,
    postTitle,
    postDate,
    postDescription,
    postPath,
  } = props;

  return (
    <Link to={postPath} className="noUnderline">
      <StyledCard>
        <Card.Img variant="top" src={thumbnail} alt={alt || `Blog Thumbnail`} />
        <div className="img-clip" />
        <Card.Body>
          <Card.Title>
            <h6>{postTitle}</h6>
            <hr />
          </Card.Title>
          <Card.Text className="card-date">{postDate}</Card.Text>
          <Card.Text
            dangerouslySetInnerHTML={{
              __html: postDescription,
            }}
          />
        </Card.Body>
      </StyledCard>
    </Link>
  );
};
