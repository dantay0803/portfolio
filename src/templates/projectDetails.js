/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-modal-routing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const StyledContainer = styled(Container)`
  margin: 0;
  padding: 0;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  header {
    margin: 1rem 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 32px;
    width: 80%;
  }

  header > h1 {
    grid-column-start: 1;
    justify-self: start;
  }

  header > a {
    grid-column-start: 2;
    justify-self: end;
    max-height: 32px;
  }

  h1 {
    padding: 0;
    margin: 0;
  }

  hr {
    margin: 0 0 1em 0;
    border-color: var(--highlight);
    border-width: 1rem;
    max-width: 11.1875rem;
    text-align: center;
  }

  div,
  p {
    width: 300px;
  }

  .appImages {
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .appImage {
    max-height: 350px;
    max-width: 350px;
    margin: 1rem;
  }

  @media (min-width: 576px) {
    header {
      margin: 0;
      margin-top: 1rem;
      grid-template-columns: 1fr 40px;
      width: 85%;
    }

    div,
    p {
      width: 475px;
    }
  }

  @media (min-width: 768px) {
    div,
    p {
      width: 650px;
    }

    hr {
      border-width: 1.875rem;
    }
  }

  @media (min-width: 992px) {
    header {
      margin: 0;
      margin-top: 1rem;
      grid-template-columns: 1fr 40px;
      width: 80%;
    }

    div,
    p {
      width: 725px;
    }
  }

  @media (min-width: 1200px) {
    header {
      margin: 0;
      margin-top: 1rem;
      grid-template-columns: 1fr 40px;
      width: 90%;
    }

    div,
    p {
      width: 850px;
    }

    .appImage {
      max-height: 550px;
      max-width: 550px;
      margin: 1rem;
    }
  }
`;

export default ({ title, desc, path, children }) => (
  <Layout>
    <StyledContainer fluid>
      <SEO title={title} description={desc} pathname={path} />
      <header>
        <h1>
          {title}
          <hr />
        </h1>
        <Link to="/#projects" className="noUnderline">
          <FontAwesomeIcon icon={faWindowClose} size="1x" />
        </Link>
      </header>
      {children}
    </StyledContainer>
  </Layout>
);
