import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/bootstrap-4.3.1.min.css';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Navbar from '../components/navbars/navbarNotFound';
import Taken from '../images/undraw_Taken_if77.svg';
import TiledBackground from '../images/tiledBackground.png';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  text-align: center;
  width: 100%;
  height: 100%;

  object,
  h1,
  h3,
  p {
    pointer-events: none;
    background-color: rgba(20, 20, 20, 0.75);
  }

  a {
    pointer-events: all;
  }

  object {
    margin: 2rem;
    height: 55vh;
    width: auto;
  }

  .cover {
    width: 100%;
    height: 100%;
    clip-path: circle(25% at var(--x) var(--y));
    background-image: url(${TiledBackground});
    background-repeat: repeat;
    background-size: 500px;
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
    document
      .querySelector('.cover')
      .style.setProperty('--x', `${(x / window.innerWidth) * 100}%`);
    document
      .querySelector('.cover')
      .style.setProperty('--y', `${(y / window.innerHeight) * 100}%`);
  };

  return (
    <Layout>
      <SEO title="404: Not Found" />
      <Navbar />
      <StyledContainer
        fluid
        onMouseMove={e => handleMouseMove(e)}
        onMouseEnter={e => handleMouseMove(e)}
      >
        <div className="cover">
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
        </div>
      </StyledContainer>
    </Layout>
  );
};

export default NotFoundPage;
