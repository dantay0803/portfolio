import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';

const Styles = styled.div`
  .navbar {
    background-color: var(--background-primary);
  }
`;

export default function navbar() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand>Daniel Taylor</Navbar.Brand>
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
              duration={600}
            >
              About
            </Link>
            <Link
              className="nav-link"
              to="resume"
              spy
              smooth
              offset={-70}
              duration={700}
            >
              Resume
            </Link>
            <Link
              className="nav-link"
              to="contact"
              spy
              smooth
              offset={-70}
              duration={800}
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
