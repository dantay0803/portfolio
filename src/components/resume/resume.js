import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import danieltaylorResume from '../../files/DanielTaylor_Resume.pdf';
import Experience from './experience';
import Education from './education';
import Awards from './awards';
import Skills from './skills';

const Styles = styled.div`
  text-align: left;

  .resumeTitle,
  .resumeDetails {
    min-width: 350px;
    margin: 1.75rem 1rem;
  }

  .resumeTitle a {
    color: var(--highlight);
  }

  .resumeTitle h3 {
    font-weight: bold;
    color: var(--text-primary);
    text-transform: capitalize;
    font-style: italic;
  }

  .resumeDetails {
    width: 850px;
    /* border-left: 1px solid var(--text-muted);
    padding-left: 10rem; */
  }

  .resumeDate {
    color: var(--text-muted);
    font-size: 10px;
  }

  svg {
    stroke-width: 1;
    margin-right: 0.75rem;
    color: var(--highlight);
  }
`;

export default function resume() {
  const handleOptionChange = changeEvent => {
    console.log(changeEvent);
  };

  return (
    <Styles>
      <Container key="resume" id="resume" fluid>
        <h1>Resume</h1>
        <hr className="hrTitle" />
        <Experience />
        <Education />
        <Awards />
        <Skills />
      </Container>
    </Styles>
  );
}
