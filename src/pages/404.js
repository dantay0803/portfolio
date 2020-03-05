import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/bootstrap-4.3.1.min.css';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Navbar from '../components/navbar';
import Taken from '../images/undraw_Taken_if77.svg';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  clip-path: circle(25% at var(--x) var(--y));

  object,
  h1,
  h3,
  p {
    pointer-events: none;
  }

  a {
    pointer-events: all;
  }

  object {
    margin: 2rem;
    height: 55vh;
    width: auto;
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`;
const NotFoundPage = () => {
  const handleMouseMove = e => {
    const x = e.clientX;
    const y = e.clientY;
    e.target.style.setProperty('--x', `${(x / window.innerWidth) * 100}%`);
    e.target.style.setProperty('--y', `${(y / window.innerHeight) * 100}%`);
  };

  return (
    <Layout>
      <SEO title="404: Not Found" />
      <Navbar />
      <StyledContainer fluid onMouseMove={e => handleMouseMove(e)}>
        <h1>Uh-oh</h1>
        <object type="image/svg+xml" data={Taken}>
          Your browser does not support SVG
        </object>
        <h3>404</h3>
        <p>It looks like the page you were looking for is gone.</p>
        <p>
          How about we try take a step{' '}
          <Link onClick={() => window.history.back()}>back.</Link>
        </p>
      </StyledContainer>
    </Layout>
  );
};

export default NotFoundPage;
