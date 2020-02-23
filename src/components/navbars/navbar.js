import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';

const Styles = styled.div`
  .navbar {
    background-color: var(--background-primary);
  }

  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 52px;
    height: 27px;
    background: grey;
    float: right;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 45px;
  }
`;

export default function navbar() {
  const handleThemeChange = event => {
    console.log(event.target.checked);
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };

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
            <label htmlFor="switch">
              <input
                type="checkbox"
                id="switch"
                key="switch"
                name="theme"
                onChange={e => handleThemeChange(e)}
              />
              Toggle
            </label>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
