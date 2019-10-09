import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Card, CardColumns } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/bootstrap-4.3.1.min.css';
import '../styles/index.css';
import SEO from '../components/seo';
import Navbar from '../components/navbars/navbarBlog';
import HeaderBlog from '../components/headerBlog';
import dompurify from 'dompurify';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  margin-top: 1rem;
`;

const StyledCard = styled(Card)`
  .card-img-top {
    max-height: 250px;
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

const BlogHome = props => {
  const [navBackgroundColor, setNavBackgroundColor] = useState('transparent');
  const sanitizer = dompurify.sanitize;
  const posts = props.data.wpgraphql.posts;

  const updateNavbar = () => {
    if (window.pageYOffset > 250) {
      setNavBackgroundColor('var(--highlight)');
    } else if (window.pageYOffset < 250) {
      setNavBackgroundColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateNavbar);
    return () => {
      window.removeEventListener('mousemove', updateNavbar);
    };
  }, []);

  return (
    <>
      <SEO title='Blog'
        description={'The personal bog of Daniel Taylor software engineer that covers various software development, career and personal topics'}
        pathname={'/blog/'}
      />
      <Navbar backgroundcolor={navBackgroundColor} posts={posts} />
      <HeaderBlog />
      <StyledContainer fluid>
        <Row noGutters>
          <Col xs='12' md={{ span: 10, offset: 1 }}>
            <CardColumns>
              {posts.edges.map(post => (
                <StyledCard key={post.node.slug}>
                  <Card.Img
                    variant='top'
                    src={
                      post.node.featuredImage.sourceUrl ||
                      `https://via.placeholder.com/185x278?text=Image+not+available`
                    }
                    alt={post.node.featuredImage.altText}
                  />
                  <Card.Body>
                    <Link to={`/blog/${post.node.slug}/`}>
                      <Card.Title>{sanitizer(post.node.title)}</Card.Title>
                    </Link>
                    <Card.Text
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(
                          post.node.excerpt.length > 130
                            ? post.node.excerpt.substring(0, 130).concat('...')
                            : post.node.excerpt
                        )
                      }}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <small className='muted'>
                      {new Date(post.node.date)
                        .toUTCString()
                        .split(' ')
                        .slice(0, 4)
                        .join(' ')}
                    </small>
                  </Card.Footer>
                </StyledCard>
              ))}
            </CardColumns>
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default BlogHome;
