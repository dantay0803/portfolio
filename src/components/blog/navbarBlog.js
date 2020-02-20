import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, graphql } from 'gatsby';
import sanitizeHtml from 'sanitize-html';

const Styles = styled.div`
  .navbar {
    background-color: none;
  }

  .dropdown-menu {
    padding: 0;
    background-color: var(--background-primary);
    border-color: var(--background-primary);
    font-size: 0.85rem;
  }

  .dropdown-item {
    color: var(--text-primary);
    margin: 0.25rem 0.5rem;
  }

  .dropdown-item:hover {
    color: var(--highlight);
    text-decoration: underline;
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
