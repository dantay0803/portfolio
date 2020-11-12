import React from 'react';
import { GiSandsOfTime } from 'react-icons/gi';

export default function skills() {
  return (
    <div className="two-column-layout">
      <div className="resumeTitle">
        <h3>
          <GiSandsOfTime size={32} />
          Skills
        </h3>
      </div>
      <div className="resumeDetails skillList">
        <ul>
          <li>C#</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>Redux</li>
        </ul>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Gatsby</li>
          <li>Bootstrap</li>
          <li>Unity</li>
        </ul>
      </div>
    </div>
  );
}
