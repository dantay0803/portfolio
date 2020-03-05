import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/bootstrap-4.3.1.min.css';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Projects from '../components/projects/projects';
import About from '../components/about/about';
import Resume from '../components/resume/resume';
import BlogHighlight from '../components/blog/blogHighlight';
import Contact from '../components/contact';
import ClippedSection from '../components/clippedSection';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: center;
`;

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta
        httpEquiv="Content-security-Policy"
        content="upgrade-insecure-requests"
      />
    </Helmet>
    <SEO title="Home" />
    <Navbar />
    <Header />
    <StyledContainer fluid>
      <ClippedSection top={103} />
      <ClippedSection top={306} />
      <Projects />
      <About />
      <Resume />
      <BlogHighlight />
      <Contact />
    </StyledContainer>
  </Layout>
);

export default IndexPage;
