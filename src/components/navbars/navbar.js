import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';

const Styles = styled.div`
  .navbar {
    background-color: var(--background-primary);
  }

  #navbar-nav {
    padding-right: 8.125rem;
  }

  .navbar-brand,
  .navbar-light .navbar-nav .nav-link {
    color: var(--text-primary);
    font-size: 1.75rem;
    line-height: 2.125rem;
    text-decoration: none;
    font-weight: bold;
    margin: 0;
    padding-right: 2.5rem;
  }

  .navbar-brand {
    font-weight: normal;
    padding-left: 3.125rem;
  }

  .navbar-brand:hover,
  .navbar-light .navbar-nav .nav-link:hover {
    cursor: pointer;
  }
`;

export default function navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand onClick={() => scrollToTop()}>Daniel Taylor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Link
              className="nav-link"
              to="projects"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className="nav-link"
              to="about"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              className="nav-link"
              to="resume"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Resume
            </Link>
            <Link
              className="nav-link"
              to="contact"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
            <GatsbyLink to="/blog/" className="nav-link">
              Blog
            </GatsbyLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
