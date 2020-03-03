import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, graphql } from 'gatsby';
import sanitizeHtml from 'sanitize-html';

const Styles = styled.div`
  z-index: 1;
  position: relative;
  text-align: left;

  .navbar {
    background-color: none;
  }

  /* .navbar .show,
  .navbar .show:before {
    background-color: var(--background-primary);
  } */

  .dropdown-menu {
    padding: 0;
    background-color: var(--background-secondary);
    border-color: var(--background-secondary);
    font-size: 0.8rem;
    max-width: 22rem;
  }

  .dropdown-item {
    color: var(--text-primary);
    margin: 0.25rem 0.5rem;
    padding: 5px 0px;
    max-width: 22rem;
  }

  .dropdown-item:hover {
    color: var(--highlight);
    text-decoration: underline;
    background-color: var(--background-secondary);
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
      <Navbar expand="lg" sticky="top">
        <Link to="/" className="noUnderline">
          <Navbar.Brand>Daniel Taylor</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavDropdown
              title="Latest Posts"
              id="latest-blog-posts"
              className="fill-width"
              role="tablist"
            >
              {props.posts.edges.slice(0, 6).map(post => (
                <Link
                  key={post.node.slug}
                  to={`/blog/${post.node.slug}/`}
                  className="dropdown-item"
                >
                  {sanitizeHtml(post.node.title)}
                </Link>
              ))}
            </NavDropdown>
            <Link className="nav-link" to="/blog/">
              All Posts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
