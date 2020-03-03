import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';

const StyledCard = styled(Card)`
  width: 325px;
  height: 300px;
  color: var(--text-primary);
  background-color: var(--background-primary);
  box-shadow: 0.375rem 0.625rem 0.375rem rgba(0, 0, 0, 1);
  border: none;
  border-radius: 0;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  transition: transform 0.75s ease-in-out;
  padding: 0;
  margin: 1rem 0;
  overflow: hidden;

  :hover {
    -webkit-transform: scale3d(1.05, 1.05, 1);
    transform: scale3d(1.05, 1.05, 1);
    border: 2px solid var(--text-primary);
    box-shadow: 0.425rem 0.675rem 0.425rem rgba(0, 0, 0, 0.75);
    transition: transform 0.75s ease-in-out;
  }

  :hover :after {
    content: '';
    transform: translate3d(-100%, -100%, 0);
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
      transform: translate3d(-100%, -100%, 0) rotate(30deg);
    }
    100% {
      transform: translate3d(100%, 100%, 0) rotate(30deg);
    }
  }

  .card-img {
    border-radius: 0;
    width: 100%;
    height: 50%;
    background-color: var(--text-primary);
    object-fit: cover;
  }

  .card-img-overlay {
    background-color: var(--background-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    -webkit-clip-path: polygon(0 25%, 100% 45%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 25%, 100% 45%, 100% 100%, 0% 100%);
    padding: 0;
    margin: 0;
  }

  .postInfo {
    height: 50%;
    width: 100%;
    padding: 10px;
  }

  .postInfo p {
    visibility: hidden;
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

  .postInfo .card-date {
    color: var(--text-muted);
    font-size: 0.9rem;
    visibility: visible;
  }

  @media (min-width: 576px) {
    width: 375px;
    height: 350px;

    .postInfo {
      height: 57.5%;
      padding: 20px;
    }

    .postInfo p {
      visibility: visible;
    }
  }

  @media (min-width: 768px) {
    width: 425px;
    height: 400px;
  }

  @media (min-width: 992px) {
    width: 475px;
    height: 450px;
  }

  @media (min-width: 1200px) {
    width: 525px;
    height: 500px;
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
        <Card.Img src={thumbnail} alt={alt || `Blog Thumbnail`} />
        <Card.ImgOverlay>
          <div className="postInfo">
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
          </div>
        </Card.ImgOverlay>
      </StyledCard>
    </Link>
  );
};
