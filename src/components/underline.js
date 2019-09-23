import React from "react"
import styled from "styled-components"

const StyledHR = styled.hr`
  border-color: var(--portfolio-blue);
  border-width: 3px;
  max-width: 50px;
  text-align: center;
`

export default function Underline() {
  return <StyledHR />
}
