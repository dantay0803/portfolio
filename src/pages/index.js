import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/bootstrap-4.3.1.min.css';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Navbar from '../components/navbars/navbar';
import Header from '../components/header';
import Projects from '../components/projects/projects';
import About from '../components/about/about';
import Resume from '../components/resume';
import Contact from '../components/contact';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
`;
const IndexPage = () => {
  const [navBackgroundColor, setNavBackgroundColor] = useState('transparent');

  const updateNavbar = () => {
    if (window.pageYOffset > 250) {
      setNavBackgroundColor('var(--highlight)');
    } else if (window.pageYOffset < 250) {
      setNavBackgroundColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateNavbar);
    return () => {
      window.removeEventListener('mousemove', updateNavbar);
    };
  }, [updateNavbar]);

  return (
    <Layout>
      <SEO title="Home" />
      <Navbar backgroundcolor={navBackgroundColor} />
      <Header />
      <StyledContainer fluid>
        <Projects />
        <hr className="hrPageBreak" />
        <About />
        <hr className="hrPageBreak" />
        <Resume />
        <hr className="hrPageBreak" />
        <Contact />
      </StyledContainer>
    </Layout>
  );
};

export default IndexPage;
