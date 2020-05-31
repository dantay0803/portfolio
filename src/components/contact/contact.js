import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import ContactForm from './contactForm';
import SocialLinks from './socialLinks';

const Styles = styled.div`
  z-index: 1;
  margin-top: 4rem;

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
        <SocialLinks />
      </div>
    </Container>
  </Styles>
);

export default Contact;
