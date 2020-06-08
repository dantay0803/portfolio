import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as GatsbyLink } from 'gatsby';
import { FiMenu, FiHome, FiBook } from 'react-icons/fi';

const StyledNavbar = styled(Navbar)`
  background-color: var(--background-primary);

  .navbar-toggler {
    background: transparent;
    color: var(--text-primary);
  }

  .justify-content-end.navbar-collapse.collapse.show {
    background-color: var(--background-primary);
  }

  .nav-link {
    display: flex;
    justify-content: start;
    align-items: center;
    justify-self: center;
    align-self: start;
  }

  .nav-link:hover {
    cursor: pointer;
  }

  .nav-link:hover > span {
    color: var(--highlight);
  }

  .nav-link > span {
    margin-left: 0.5em;
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    .nav-link > span {
      font-size: 1.25rem;
    }
  }
`;

const navbarNotFound = () => (
  <StyledNavbar expand="lg">
    <GatsbyLink to="/">
      <Navbar.Brand>Daniel Taylor</Navbar.Brand>
    </GatsbyLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav">
      <span>
        <FiMenu size={32} alt="LinkedIn Logo" />
      </span>
    </Navbar.Toggle>
    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
      <Nav>
        <GatsbyLink to="/" className="nav-link">
          <FiHome size={24} alt="LinkedIn Logo" /> <span>Home</span>
        </GatsbyLink>
        <GatsbyLink to="/blog/" className="nav-link">
          <FiBook size={24} alt="LinkedIn Logo" /> <span>Blog</span>
        </GatsbyLink>
      </Nav>
    </Navbar.Collapse>
  </StyledNavbar>
);

export default navbarNotFound;
