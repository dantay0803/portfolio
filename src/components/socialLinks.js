import React from 'react';
import styled from 'styled-components';
import { FiTwitter, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const Styles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 2em;
  justify-items: center;
  align-items: center;

  .contact-link {
    background-color: var(--background-secondary);
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    box-shadow: 0 0.625rem 0.375rem rgba(0, 0, 0, 1);
    transition: all 0.75s ease-in-out;
    margin: 0;
    padding: 0;
  }

  .contact-link:hover {
    background-color: var(--highlight);
    transition: all 0.75s ease-in-out;
  }

  .contact-link:hover svg {
    color: var(--text-primary);
    transition: all 0.75s ease-in-out;
  }
`;

const socialLinks = () => (
  <Styles>
    <a
      href="https://github.com/dantay0803"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
      key="contact-github"
      title="Link to my personal GitHub"
    >
      <FiGithub size={65} alt="GitHub Logo" />
    </a>
    <a
      href="https://www.linkedin.com/in/danielt0803/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
      key="contact-linkedin"
      title="Link to my LinkedIn profile"
    >
      <FiLinkedin size={65} alt="LinkedIn Logo" />
    </a>
    <a
      href="https://twitter.com/DanielTaylorDev"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
      key="contact-twitter"
      title="Link to my personal Twitter"
    >
      <FiTwitter size={65} alt="Twitter Logo" />
    </a>
  </Styles>
);

export default socialLinks;
