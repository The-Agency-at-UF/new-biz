import React from "react";
import "./Uber.css";
import UberLogo from "../../images/uber_logo.png";
import UberTeam1 from "../../images/uber_team_1.png";
import UberTeam2 from "../../images/uber_team_2.png";
import UberAd1 from "../../images/uber_ad1.png";
import UberAd2 from "../../images/uber_ad2.png";
import UberBlack1 from "../../images/uber_black1.png";
import UberBlack2 from "../../images/uber_black2.png";
import UberPhone1 from "../../images/uber_phone_1.png";
import UberPhone2 from "../../images/uber_phone_2.png";
import UberPhone3 from "../../images/uber_phone_3.png";
import UberPhone4 from "../../images/uber_phone_4.png";
import UberPhone5 from "../../images/uber_phone_5.png";
import UberBanner1 from "../../images/uber_banner_1.png";
import UberBanner2 from "../../images/uber_banner_2.png";
import UberBanner3 from "../../images/uber_banner_3.png";
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
        <div class="uber-gradient-item1">
          <div className="uber-gradient-item-header">Opportunity</div>
          <p className="uber-gradient-item-text">
            We saw the chance to help the tech giant connect with more
            audiences. <br></br> <br></br>We forecasted trends, drew out a
            monthly cultural pulse and built bold assets.
          </p>
        </div>
        <div class="uber-gradient-item2">
          <div className="uber-gradient-item-header">Solution</div>
          <p className="uber-gradient-item-text">
            We collaborated with Uber’s global marketing and creative teams on
            the ideation and execution of a number of creative briefs. These
            included copy for collaborations and brand activations, including
            Uber x Yankees, Uber x Walgreens and Uber's Go Get Event. With the
            Uber team, our data analysts moderated interviews and developed
            scripts for surveys, both of which generated insights on user
            experience. <br></br> <br></br>Each month, we presented actionable
            recommendations for Uber. We conducted an audit of Uber’s current
            standing with social channels, gaming and loyalty programs to
            suggest new ways the technology company could maximize brand
            affinity among Gen Z and younger millennials. We informed them about
            which kinds of messaging maintains customer loyalty in a general
            market and which emerging channels would be most advantageous to use
            when targeting Gen Z.
          </p>
        </div>
        <div class="uber-gradient-item3">
          <img src={UberAd1} alt="" />
        </div>
        <div class="uber-gradient-item4">
          {" "}
          <img src={UberAd2} alt="" />
        </div>
      </div>
      <div className="uber-black-slide">
        <div className="uber-black-title">
          <div className="uber-black-divider-1"></div>
          <div className="uber-black-text">Solutions for Uber Black</div>
          <div className="uber-black-divider-2"></div>
        </div>
        <div className="uber-black-content">
          <div className="uber-black-subtitle">
            We
            <span className="uber-black-span"> created</span> new and improved
            car labels for Uber Black, which are being displayed overseas.
          </div>
          <div className="uber-black-logo">
            <div className="uber-black-logo-div">
              <img className="uber-black-logo-img" src={UberBlack1} alt="" />
              <img className="uber-black-logo-img" src={UberBlack2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="uber-phone-slide">
        <div className="uber-black-title">
          <div className="uber-black-divider-1"></div>
          <div className="uber-black-text">Solutions for Uber Eats</div>
          <div className="uber-black-divider-2"></div>
        </div>
        <div className="uber-black-content">
          <div className="uber-phone-subtitle">
            Our team helped American and Canadian restaurants promote Uber Eats
            as one of their customers’ dining options by{" "}
            <span className="uber-black-span">
              {" "}
              creating adaptable promotional materials.
            </span>{" "}
            These included{" "}
            <span className="uber-black-span">
              {" "}
              digital templates for evergreen content
            </span>{" "}
            as well as{" "}
            <span className="uber-black-span">
              {" "}
              templates made to fit specific Uber Eats events and discounts.
            </span>{" "}
          </div>
        </div>
        <div className="uber-phone-content">
          <div className="uber-phone-row-1">
            <img className="uber-phone" src={UberPhone1} alt="" />
            <img className="uber-phone" src={UberPhone2} alt="" />
            <img className="uber-phone" src={UberPhone3} alt="" />
          </div>
          <div className="uber-phone-row-1">
            <img className="uber-phone" src={UberPhone4} alt="" />
            <img className="uber-phone" src={UberPhone5} alt="" />
          </div>
        </div>
      </div>

      <div className="uber-impact-slide">
        <div class="uber-impact-item1">
          <div className="uber-impact-item-header">Impact</div>
          <p className="uber-impact-item-text">
            Our creatives and researchers grew in their areas of interest
            through mentorship from junior employees of Uber, who developed
            management experience from guiding us through briefs.
          </p>
          <br />
          <p className="uber-impact-item-text">
            Assisted Uber Eats in building brand awareness and affinity by
            creating materials to promote special events and collaborations
          </p>
          <br />
          <p className="uber-impact-item-text">
            Provided a deeper level of appeal and elegance for Uber Black with
            more striking labels for drivers’ cars in the U.K.
          </p>
          <br />
          <p className="uber-impact-item-text">
            Contributed to upcoming projects by interpreting and presenting
            actionable insights on engaging specific subgroups.
          </p>
        </div>
        <div class="uber-impact-item2">
          <img class="uber-impact-img" src={UberBanner1} alt="" />
        </div>
        <div class="uber-impact-item3">
          <img class="uber-impact-img" src={UberBanner2} alt="" />
        </div>
        <div class="uber-impact-item4">
          <img class="uber-impact-img" src={UberBanner3} alt="" />{" "}
        </div>
      </div>
    </>
  );
};

export default Uber;
