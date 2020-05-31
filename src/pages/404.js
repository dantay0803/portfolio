import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Navbar from '../components/navbars/navbarNotFound';
import Taken from '../assets/images/undraw_Taken_if77.svg';
import TiledBackground from '../assets/images/tiledBackground.png';

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${TiledBackground}) repeat;
  height: 90vh;
  text-align: center;

  h1,
  h3,
  p {
    background-color: rgba(20, 20, 20, 0.85);
    padding: 0;
    margin: 0;
    width: 300px;
  }

  a {
    font-weight: bolder;
    text-transform: uppercase;
    background-color: rgba(20, 20, 20, 1);
  }

  object {
    height: 65vh;
    width: auto;
  }

  @media (min-width: 576px) {
    object,
    h1,
    h3,
    p {
      width: 500px;
    }
  }

  @media (min-width: 768px) {
    object,
    h1,
    h3,
    p {
      width: 700px;
    }
  }

  @media (min-width: 992px) {
    object,
    h1,
    h3,
    p {
      width: 950px;
    }
  }
`;
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <Navbar />
    <Styles>
      <h1>Uh-oh</h1>
      <h3>404</h3>
      <p>It looks like the page you were looking for is gone.</p>
      <p>
        How about we try take a step{' '}
        <Link onClick={() => window.history.back()}>back.</Link>
      </p>
      <object type="image/svg+xml" data={Taken}>
        Your browser does not support SVG
      </object>
    </Styles>
  </Layout>
);

export default NotFoundPage;
