import React from 'react';
import styled from 'styled-components';
import '../../../styles/bootstrap-4.3.1.min.css';
import { Link } from 'gatsby';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import SocialLinks from '../../socialLinks';

const PostFooter = styled.footer`
  clip-path: polygon(0 0, 100% 29%, 100% 100%, 0% 100%);
  background-color: var(--background-secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 15em 0;

  div {
    width: 50%;
    text-align: left;
    margin-top: 1em;
  }

  #readMore {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 0 0 3em 0;
  }

  .postLink {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
  }

  .postLinkDirectionText {
    color: var(--text-muted);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0;
  }

  @media (min-width: 992px) {
    padding: 5em 0;

    #readMore {
      font-size: 1.5rem;
      flex-direction: row;
      justify-content: start;
    }

    .postLink:nth-last-child(1) {
      justify-self: end;
    }

    .postLinkDirectionText {
      color: var(--text-muted);
      font-size: 1rem;
      margin: 0 0 0.5em 0;
      padding: 0.5rem 1rem;
      margin: 0;
    }
  }
`;

const footer = ({ previous, next }) => {
  const previousPostLink =
    previous !== null ? (
      <div className="postLink">
        <p className="postLinkDirectionText">Previous</p>
        <Link to={previous.frontmatter.slug} className="nav-link">
          <FiArrowLeft alt="Blog previous post arrow icon" />{' '}
          {previous.frontmatter.title}
        </Link>
      </div>
    ) : null;

  const nextPostLink =
    next !== null ? (
      <div className="postLink">
        <p className="postLinkDirectionText">Next</p>
        <Link to={next.frontmatter.slug} className="nav-link">
          {next.frontmatter.title}{' '}
          <FiArrowRight alt="Blog next post arrow icon" />
        </Link>
      </div>
    ) : null;

  return (
    <PostFooter>
      <div>
        <p>Read More...</p>
      </div>
      <div id="readMore">
        {previousPostLink}
        {nextPostLink}
      </div>
      <div>
        <p>Stay Connected...</p>
      </div>
      <SocialLinks />
    </PostFooter>
  );
};

export default footer;
