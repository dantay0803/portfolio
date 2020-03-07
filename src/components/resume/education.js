import React from 'react';
import { GiBookmarklet } from 'react-icons/gi';

export default function education() {
  return (
    <div className="two-column-layout">
      <div className="resumeTitle">
        <h3>
          <GiBookmarklet size={32} />
          Education
        </h3>
        <p className="resumeDate">September 2012 - June 2016</p>
      </div>
      <div className="resumeDetails">
        <div id="university">
          <h4 className="resumeSubtitle underline">
            University of the West of Scotland
          </h4>
          <p className="resumeDate" />
          <p>BSc. Hons Computer Games Development (First Class)</p>
        </div>
      </div>
    </div>
  );
}
