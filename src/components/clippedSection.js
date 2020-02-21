import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: var(--background-secondary);
  min-width: 100%;
  height: 1700px;
  clip-path: polygon(0 0, 100% 40%, 100% 70%, 0 100%);
  position: absolute;
  top: ${props => props.top}rem;
  left: 0;
`;

export default function clippedSection(props) {
  const { top } = props;
  return (
    <Div top={top} />
  );
}
