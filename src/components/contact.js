import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FiMail, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import ContactForm from './contactForm';

const Styles = styled.div`
  z-index: 1;
  margin-top: 4rem;
  --width: 100%;
  --angle: -11deg;
  --magic-number: 0.09719;
  --skew-padding: calc(var(--width) * var(--magic-number));
  position: relative;
  padding: var(--skew-padding) 0;
  margin-top: -1px;

  svg {
    stroke-width: 1;
    transition: all 0.75s ease-in-out;
  }

  .contact-info {
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    justify-content: center;
    grid-gap: 3em;
    padding: 3em;
    text-align: center;
  }

  .contact-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 2em;
    justify-items: center;
    align-items: center;
  }

  .contact-link {
    background-color: var(--background-secondary);
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(0, 0, 0);
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

  @media (min-width: 1200px) {
    margin-top: 8rem;
  }
`;

const Contact = () => (
  <Styles>
    <Container key="contact" id="contact" fluid>
      <h1>Contact</h1>
      <hr className="hrTitle" />
      <div className="contact-info">
        <p>
          Feel free to connect with me. I'm always open to discussing new
          projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <ContactForm />
        <div className="contact-links">
          <a
            href="mailto:daniel@danielt.co.uk"
            rel="noopener noreferrer"
            className="contact-link"
            key="contact-email"
            title="Link to send me an email"
          >
            <FiMail size={65} alt="Email Image" />
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
            href="https://twitter.com/dantay0803"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            key="contact-twitter"
            title="Link to my personal Twitter"
          >
            <FiTwitter size={65} alt="Twitter Logo" />
          </a>
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
        </div>
      </div>
    </Container>
  </Styles>
);

export default Contact;
