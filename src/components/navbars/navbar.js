import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';
import {
  FiMenu,
  FiFolder,
  FiUser,
  FiPhone,
  FiFileText,
  FiBook,
} from 'react-icons/fi';

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

const navbar = () => (
  <StyledNavbar expand="lg" fixed="top">
    <Navbar.Brand>Daniel Taylor</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">
      <span>
        <FiMenu size={32} alt="LinkedIn Logo" />
      </span>
    </Navbar.Toggle>

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
          <FiFolder size={24} alt="LinkedIn Logo" /> <span>Projects</span>
        </Link>
        <Link
          className="nav-link"
          to="about"
          spy
          smooth
          offset={-70}
          duration={600}
        >
          <FiUser size={24} alt="LinkedIn Logo" /> <span>About</span>
        </Link>
        <Link
          className="nav-link"
          to="resume"
          spy
          smooth
          offset={-70}
          duration={700}
        >
          <FiFileText size={24} alt="LinkedIn Logo" /> <span>Resume</span>
        </Link>
        <Link
          className="nav-link"
          to="contact"
          spy
          smooth
          offset={-70}
          duration={800}
        >
          <FiPhone size={24} alt="LinkedIn Logo" /> <span>Contact</span>
        </Link>
        <GatsbyLink to="/blog/" className="nav-link">
          <FiBook size={24} alt="LinkedIn Logo" /> <span>Blog</span>
        </GatsbyLink>
      </Nav>
    </Navbar.Collapse>
  </StyledNavbar>
);

export default navbar;
