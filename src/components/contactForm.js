import React, { useState } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  form {
    text-align: left;
    width: 100%;
  }

  label,
  input,
  textarea,
  button {
    display: block;
  }

  input,
  textarea,
  button {
    width: 100%;
    padding: 0.5em;
    font-size: 1.3rem;
    outline: none;
    border-color: var(--text-muted);
  }

  input:focus,
  textarea:focus {
    border-color: var(--highlight);
    color: var(--text-secondary);
  }

  button {
    margin: 0;
    background: var(--highlight);
    border: none;
    color: var(--text-primary);
    cursor: pointer;
  }
`;

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Styles>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <p className="hidden">
          <label htmlFor="bot-field">
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <label htmlFor="name">
          Your name
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleFormChange}
            required
          />
        </label>
        <label htmlFor="email">
          Your email
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleFormChange}
            required
          />
        </label>
        <label htmlFor="message">
          Your message
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formState.message}
            onChange={handleFormChange}
            required
          />
        </label>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">Send</button>
      </form>
    </Styles>
  );
};

export default ContactForm;
