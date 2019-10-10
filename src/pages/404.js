import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/bootstrap-4.3.1.min.css';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Navbar from '../components/navbars/navbar';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  margin-top: 5rem;
  text-align: center;
`;
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title='404: Not Found' />
      <Navbar backgroundcolor={'var(--highlight)'} />
      <StyledContainer fluid>
        <h1>Sorry About That</h1>
        <h3>404</h3>
        <p>It looks like we couldn't find what you were looking for.</p>
        <p>
          How about we try take a step{' '}
          <Link onClick={() => window.history.back()}>back.</Link>
        </p>
      </StyledContainer>
    </Layout>
  );
};

export default NotFoundPage;
