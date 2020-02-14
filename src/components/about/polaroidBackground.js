import React from 'react';
import styled from 'styled-components';

const PolaroidBackground = styled.div`
  width: 25.1875rem;
  height: 26.61875rem;
  background-color: var(--text-primary);
  padding: 0;
  margin: 0;
  transform: scale(1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 22.6875rem;
    height: 22.0625rem;
    margin: 1em 0;
  }

  p {
    max-width: 22.6875rem;
    max-height: 3.3125rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
  }
`;

export default () => <PolaroidBackground />;
