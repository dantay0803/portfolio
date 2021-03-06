import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { MdFileDownload } from 'react-icons/md';
import danieltaylorResume from '../../assets/files/DanielTaylor_Resume.pdf';
import Experience from './experience';
import Education from './education';
import Awards from './awards';
import Skills from './skills';

const Styles = styled.div`
  text-align: left;
  z-index: 1;
  margin-bottom: 3rem;

  .resumeContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .resumeTitle,
  .resumeDetails {
    width: 300px;
  }

  .resumeTitle {
    margin: 2.5rem 0 0 0;
  }

  .resumeTitle a {
    color: var(--highlight);
  }

  .resumeTitle h3 {
    font-weight: bold;
    color: var(--text-primary);
    text-transform: capitalize;
    font-style: italic;
    font-size: 1.5rem;
  }

  .skillList {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .resumeDate {
    color: var(--text-muted);
    font-size: 10px;
  }

  svg {
    stroke-width: 1;
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
    margin: 2rem 0 0 0;
    padding: 0;
  }

  .resumeDownload svg,
  .resumeDownload p {
    color: var(--text-primary);
    font-weight: bold;
    float: left;
    margin: 10px;
  }

  .resumeDownload p {
    margin-top: 12px;
  }

  .resumeDownload:hover {
    border-color: var(--highlight);
    width: 225px;
    transition: width 0.5s ease-in-out;
  }

  .resumeDownload:hover svg {
    color: var(--highlight);
  }

  @media (min-width: 768px) {
    .resumeTitle,
    .resumeDetails {
      width: 350px;
      margin: 0;
      padding: 1rem;
      border: none;
    }

    .resumeDetails {
      border-left: 1px solid var(--text-muted);
      padding-left: 2rem;
    }
  }

  @media (min-width: 992px) {
    .resumeDetails {
      width: 500px;
    }
  }

  @media (min-width: 1200px) {
    .resumeTitle {
      width: 350px;
      margin: 1.75rem 1rem;
    }

    .resumeDetails {
      width: 850px;
      border-left: 1px solid var(--text-muted);
      padding-left: 10rem;
    }
  }
`;

export default function resume() {
  return (
    <Styles>
      <Container key="resume" id="resume" fluid>
        <h1>Resume</h1>
        <hr className="hrTitle" />
        <div className="resumeContent">
          <Experience />
          <Education />
          <Awards />
          <Skills />
          <a
            href={danieltaylorResume}
            target="_blank"
            rel="noopener noreferrer"
            className="resumeDownload"
            download
          >
            <MdFileDownload size={32} />
            <p>DOWNLOAD</p>
          </a>
        </div>
      </Container>
    </Styles>
  );
}
