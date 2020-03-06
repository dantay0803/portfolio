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

export default function navbarNotFound() {
  return (
    <Styles>
      <Navbar expand="lg">
        <GatsbyLink to="/" className="nav-link">
          <Navbar.Brand>Daniel Taylor</Navbar.Brand>
        </GatsbyLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <GatsbyLink to="/" className="nav-link">
              Home
            </GatsbyLink>
            <GatsbyLink to="/blog/" className="nav-link">
              Blog
            </GatsbyLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
