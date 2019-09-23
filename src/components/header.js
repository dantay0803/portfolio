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

    h1{
      padding-top: 30vh;
      font-size: 7rem;
      margin: 0;
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
