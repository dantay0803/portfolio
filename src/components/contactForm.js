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

  .hidden {
    display: none;
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

  const handleSubmit = e => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeURI({ 'form-name': 'contact', ...formState }),
    })
      .then(() => {
        console.log('form sent');
        document.querySelector(`form[name='contact']`).reset();
        setFormState({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <Styles>
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
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
        <button type="submit">Send</button>
      </form>
    </Styles>
  );
};

export default ContactForm;
