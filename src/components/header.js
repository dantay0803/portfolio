import React from "react"
import styled from "styled-components"
import { Container, Jumbotron } from "react-bootstrap"
import Underline from "./underline"
import header from "../images/header.jpg"

const StyledJumbotron = styled(Jumbotron)`
    background-image: url('${header}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    padding: 0;
    margin: 0;
    text-align: center;
    color: #FFFFFF;
    text-shadow: black 10px 10px 10px;

    .container{
      background-color: rgba(0, 47, 167, 0.8);
      min-width: 100%;
      min-height: 100%;
    }

    h1{
      padding-top: 30vh;
      font-size: 7rem;
      margin: 0;
      color: var(--header-title);
    }

    p{
      font-size: 2rem;
    }    
`

export default function Header() {
  return (
    <StyledJumbotron fluid>
      <Container>
        <h1>DANIEL TAYLOR</h1>
        <Underline />
        <p>Portfolio</p>
      </Container>
    </StyledJumbotron>
  )
}
