import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { StaticQuery, graphql, Link } from 'gatsby';

const StyledNavbar = styled(Navbar)`
  z-index: 1;
  position: relative;
  text-align: left;
  background-color: none;

  .dropdown-menu {
    padding: 0;
    background-color: var(--background-secondary);
    border-color: var(--background-secondary);
    font-size: 1rem;
    width: 20rem;
    overflow: hidden;
    padding: 0 0.5em;
  }

  .dropdown-item {
    color: var(--text-primary);
    margin: 0.75rem 0;
    width: 20rem;
    overflow: hidden;
    padding: 0;
  }

  .dropdown-item:hover {
    color: var(--highlight);
    text-decoration: underline;
    background-color: var(--background-secondary);
  }
`;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
          edges {
            node {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <BlogNavbar data={data} {...props} />}
  />
);

const BlogNavbar = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <StyledNavbar expand="lg" sticky="top">
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
            {posts.map(post => (
              <Link
                key={post.node.frontmatter.slug}
                to={`/${post.node.frontmatter.slug}`}
                className="dropdown-item"
              >
                {post.node.frontmatter.title.length > 30
                  ? `${post.node.frontmatter.title.substring(0, 30)}...`
                  : post.node.frontmatter.title}
              </Link>
            ))}
          </NavDropdown>
          <Link className="nav-link" to="/blog/">
            All Posts
          </Link>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};
