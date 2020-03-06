import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as GatsbyLink } from 'gatsby';

const StyledNavbar = styled(Navbar)`
  background-color: var(--background-primary);
  height: 66px;
  width: 100%
  margin: 0;
  padding: 8px 16px;

  .nav-link{
    padding: 0;
  }
`;

export default function navbarNotFound() {
  return (
    <StyledNavbar expand="lg">
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
    </StyledNavbar>
  );
}
