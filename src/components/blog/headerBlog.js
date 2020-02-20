import React from 'react';
import styled from 'styled-components';
import { Container, Jumbotron } from 'react-bootstrap';
import headerImage from '../../images/headerImage.webp';
import Navbar from './navbarBlog';

const StyledJumbotron = styled(Jumbotron)`
  background-image: url('${headerImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40vh;
  padding: 0;
  margin: 0;
  text-align: center;

  .container {
    background-color: rgba(20, 20, 20, 0.75);
    min-width: 100%;
    min-height: 83.5%;
    padding: 3rem 0 0 0;
    padding: 3rem 0 0 0;
  }

  h1{
    padding: 0;
    margin: 0;
  }
`;

export default function HeaderBlog(props) {
  const { posts } = props;
  return (
    <StyledJumbotron fluid>
      <Navbar posts={posts} />
      <Container>
        <h1>DANIEL TAYLOR | BLOG</h1>
      </Container>
    </StyledJumbotron>
  );
}
