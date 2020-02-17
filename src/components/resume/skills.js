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
      <div className="resumeDetails two-column-layout">
        <ul>
          <li>C#</li>
          <li>JavaScript</li>
          <li>React/React Native</li>
          <li>Redux</li>
        </ul>
        <ul>
          <li>HTML/CSS</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>Unity</li>
        </ul>
      </div>
    </div>
  );
}
