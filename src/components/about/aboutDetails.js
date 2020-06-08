import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .recentTechList {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  p {
    max-width: 300px;
  }

  @media (min-width: 992px) {
    p {
      max-width: 400px;
    }
  }

  @media (min-width: 1200px) {
    p {
      max-width: 560px;
    }
  }
`;

export default () => (
  <Styles>
    <div className="about-description">
      <p>
        Hello, I’m Daniel Taylor a software developer based in Scotland. I enjoy
        creating things for desktop, mobile and the web using technologies like
        C#, JavaScript and React. I graduated from the University of the West of
        Scotland a few years ago with a BSc. Honours in Computer Games
        Development.
      </p>

      <p>
        Shortly after graduating from university, I started my professional
        career working as a Unity developer for two years. Before switching
        things up and working as a full-stack developer over the third year of
        my career.
      </p>

      <p>Some technologies I've been working with recently:</p>
      <div className="recentTechList">
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>C#</li>
        </ul>
        <ul>
          <li>HTML & CSS</li>
          <li>Gatsby</li>
          <li>ASP.Net</li>
        </ul>
      </div>
    </div>
  </Styles>
);
