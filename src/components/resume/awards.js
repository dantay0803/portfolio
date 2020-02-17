import React from 'react';
import { GiTrophyCup } from 'react-icons/gi';

export default function awards() {
  return (
    <div className="two-column-layout">
      <div className="resumeTitle">
        <h3>
          <GiTrophyCup size={32} /> Awards
        </h3>
      </div>
      <div className="resumeDetails">
        <div id="uwsCourtMedal">
          <h4 className="resumeSubtitle underline">UWS Court Medal</h4>
          <p>
            Achieved in my final year of university by getting the highest
            academic results in my course across all four university campuses.
          </p>
        </div>
        <div id="BCGDP">
          <h4 className="resumeSubtitle underline">
            Best Computer Games Development Project
          </h4>
          <p>
            Awarded whilst attending the Digital Futures showcase at university
            and having been voted by students and attendees as having the best
            project in this category.
          </p>
        </div>
        <div id="DFACA">
          <h4 className="resumeSubtitle underline">
            Digital Futures Attendee Choice Award
          </h4>
          <p>
            Awarded at the Digital Futures showcase at university for having one
            of two most voted projects from all of the different courses on show
            at the event.
          </p>
        </div>
      </div>
    </div>
  );
}
