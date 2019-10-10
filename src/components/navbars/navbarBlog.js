import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, graphql } from 'gatsby';
import sanitizeHtml from 'sanitize-html';

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

  .nav-link {
    margin-right: 2rem;
  }

  .nav-dropdown {
    margin-right: 5rem;
  }

  .dropdown-item {
    color: var(--highlight);
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 0.85rem;
  }

  .dropdown-item:before,
  .dropdown-item:hover:before {
    text-decoration: none;
    border: none;
    width: 0;
    height: 0;
    bottom: 0;
    left: 0;
  }

  .fill-width.dropdown {
    position: static;
  }
  .fill-width.dropdown > .dropdown-menu {
    left: auto;
    position: absolute;
  }
  .fill-width.dropdown > .dropdown-menu > .dropdown-item {
    white-space: normal;
  }
`;

export const query = graphql`
  {
    wpgraphql {
      posts {
        edges {
          node {
            date
            slug
            featuredImage {
              altText
              sourceUrl
            }
            excerpt
            title
          }
        }
      }
    }
  }
`;

export default function navbar(props) {
  return (
    <Styles>
      <StyledNavbar
        expand='lg'
        fixed='top'
        backgroundcolor={props.backgroundcolor}>
        <Link to={`/`} className='noUnderline'>
          <Navbar.Brand>Daniel Taylor</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <NavDropdown
              title='Latest Posts'
              id='latest-blog-posts'
              className='fill-width'>
              {props.posts.edges.slice(0, 6).map(post => (
                <NavDropdown.Item key={post.node.slug}>
                  <Link to={`/blog/${post.node.slug}/`}>
                    {sanitizeHtml(post.node.title)}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Link className='nav-link' to='/blog/'>
              All Posts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    </Styles>
  );
}
