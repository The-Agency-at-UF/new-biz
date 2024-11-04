import React from "react";
import "./Uber.css";
import UberLogo from "../../images/uber_logo.png";
import UberTeam1 from "../../images/uber_team_1.png";
import UberTeam2 from "../../images/uber_team_2.png";
const Uber = () => {
  return (
    <>
      <div className="uber-main-slide">
        <div className="uber-main-content">
          <div className="uber-main-header">Case Study</div>
          <img src={UberLogo} alt="Uber Logo" id="uber_logo" />
          <div className="uber-main-divider"></div>
          <div className="uber-main-subtitle">
            Sharing a Ride with Uber on Its Road to Refined Research and
            Captivating Assets
          </div>
        </div>
      </div>
      <div className="uber-team-slide">
        <div className="uber-team-title">
          <div className="uber-team-divider"></div>
          <div className="uber-team-text">Team Composition</div>
          <div className="uber-team-divider"></div>
        </div>
        <div className="uber-team-content">
          <div className="uber-team-table">
            <ul className="uber-team-table-child">
              <li className="uber-team-table-item">1 Account Lead</li>
              <li className="uber-team-table-item">1 Project Manager</li>
              <li className="uber-team-table-item">1 Data Analyst</li>
            </ul>
            <ul className="uber-team-table-child">
              <li className="uber-team-table-item">2 Graphic Designers</li>
              <li className="uber-team-table-item">1 Illustrator</li>
              <li className="uber-team-table-item">1 Motion Designer</li>
            </ul>
            <ul className="uber-team-table-child">
              <li className="uber-team-table-item">1 Producer</li>
              <li className="uber-team-table-item">1 Researcher</li>
              <li className="uber-team-table-item">1 Copywriters</li>
            </ul>
          </div>
          <img src={UberTeam1} alt="Uber Logo" id="uber_team_1" />
          <div className="uber-team-subtitle">
            Each Agency Member was Mentored by a Professional at Uber
          </div>
          <img src={UberTeam2} alt="Uber Logo" id="uber_team_2" />
        </div>
      </div>

      <div className="uber-gradient-slide">
        <div className="uber-gradient-left">
          <div className="uber-gradient-block1">asdfsdf</div>
          <div className="uber-gradient-block2">sadfsd</div>
        </div>
        <div className="uber-gradient-right">
          <div className="uber-gradient-block3">asdfsd</div>
        </div>
      </div>
    </>
  );
};

export default Uber;
