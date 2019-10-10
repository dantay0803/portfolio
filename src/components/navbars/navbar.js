import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';

const StyledNavbar = styled(Navbar)`
  background-color: ${props => props.backgroundcolor || 'transparent'};
  -webkit-transition: background 1s;
  -moz-transition: background 1s;
  -ms-transition: background 1s;
  -o-transition: background 1s;
  transition: background 1s;

  @media (max-width: 641px) {
    background-color: var(--highlight);
  }
`;

const Styles = styled.div`
  .navbar-brand,
  .navbar-light .navbar-nav .nav-link {
    color: white;
    text-decoration: none;
  }

  .navbar-brand: hover,
  .navbar-light .navbar-nav .nav-link: hover {
    color: white;
    cursor: pointer;
  }
`;

export default function navbar(props) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Styles>
      <StyledNavbar
        expand='lg'
        fixed='top'
        backgroundcolor={props.backgroundcolor}>
        <Navbar.Brand onClick={() => scrollToTop()}>Daniel Taylor</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Link
              className='nav-link'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Projects
            </Link>
            <Link
              className='nav-link'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              About
            </Link>
            <Link
              className='nav-link'
              to='resume'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Resume
            </Link>
            <Link
              className='nav-link'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Contact
            </Link>
            <GatsbyLink to={`/blog/`} className='nav-link'>
              Blog
            </GatsbyLink>
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    </Styles>
  );
}
