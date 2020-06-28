import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .recentTechList {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  p {
    max-width: 290px;
  }

  @media (min-width: 992px) {
    p {
      max-width: 390px;
    }
  }

  @media (min-width: 1200px) {
    p {
      max-width: 550px;
    }
  }
`;

export default () => (
  <Styles>
    <div className="about-description">
      <p>
        Hello, I'm Daniel Taylor. A software developer based in Glasgow,
        Scotland. I enjoy creating digital experiences for desktop, mobile and
        web. I have experience working with technologies like JavaScript, React,
        C# and Unity.
      </p>

      <p>
        After graduating from university with a first-class BSc. Honours in
        Computer Games Development. I spent the start of my career as the sole
        developer on a children's mobile application. On the project, I
        refreshed its design and added enhanced features. Which led to the
        application's launch in Australia and America.
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
