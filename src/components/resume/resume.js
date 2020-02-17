import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { MdFileDownload } from 'react-icons/md';
import danieltaylorResume from '../../files/DanielTaylor_Resume.pdf';
import Experience from './experience';
import Education from './education';
import Awards from './awards';
import Skills from './skills';

const Styles = styled.div`
  text-align: left;

  .resumeContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

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
    border-left: 1px solid var(--text-muted);
    padding-left: 10rem;
  }

  .resumeDate {
    color: var(--text-muted);
    font-size: 10px;
  }

  svg {
    stroke-width: 1;
    margin-right: 0.5rem;
    color: var(--highlight);
  }

  .resumeDownload {
    border: 2px solid var(--text-primary);
    background: transparent;
    width: 55px;
    height: 55px;
    overflow: hidden;
    cursor: pointer;
    transition: width 0.5s ease-in-out;
  }

  .resumeDownload svg,
  .resumeDownload p {
    color: var(--text-primary);
    font-weight: bold;
    float: left;
    margin: 10px;
  }

  .resumeDownload:hover {
    border-color: var(--highlight);
    width: 225px;
    transition: width 0.5s ease-in-out;
  }

  .resumeDownload:hover svg {
    color: var(--highlight);
  }
`;

export default function resume() {
  return (
    <Styles>
      <Container key="resume" id="resume" fluid>
        <h1>Resume</h1>
        <hr className="hrTitle" />
        <div className="resumeContent">
          <a
            href={danieltaylorResume}
            target="_blank"
            rel="noopener noreferrer"
            className="resumeDownload"
          >
            <MdFileDownload size={32} />
            <p>DOWNLOAD</p>
          </a>
          <Experience />
          <Education />
          <Awards />
          <Skills />
        </div>
      </Container>
    </Styles>
  );
}
