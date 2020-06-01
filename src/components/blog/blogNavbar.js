import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { StaticQuery, graphql, Link } from 'gatsby';
import { FiMenu, FiBook } from 'react-icons/fi';

const StyledNavbar = styled(Navbar)`
  background-color: var(--background-primary);

  .dropdown-menu {
    background-color: var(--background-secondary);
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

  .navbar-toggler {
    background: transparent;
    color: var(--text-primary);
  }

  .fill-width.dropdown.nav-item,
  .fill-width.show.dropdown.nav-item,
  .dropdown-toggle.nav-link {
    font-size: 1rem;
    justify-self: center;
    align-self: start;
  }

  .dropdown-toggle.nav-link :hover {
    justify-content: start;
    align-content: start;
  }

  .fill-width.dropdown.nav-item:hover,
  .dropdown-toggle.nav-link:hover {
    color: var(--highlight);
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
    .nav-link > span,
    .dropdown-toggle.nav-link {
      font-size: 1.25rem;
    }
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
    <StyledNavbar expand="lg" fixed="top">
      <Link to="/" className="noUnderline">
        <Navbar.Brand>Daniel Taylor</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span>
          <FiMenu size={32} alt="LinkedIn Logo" />
        </span>
      </Navbar.Toggle>
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
            <FiBook size={24} alt="LinkedIn Logo" /> <span>All Posts</span>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};
