import React, {useState, useRef, useEffect} from "react";
import "./Bliss.css";
import blissLogo from "../../images/bliss.png";
import mario from "../../images/mario.png";
import blissBottle1 from "../../images/bliss_bottle.png";
import blissComment1 from "../../images/bliss_comment.png";
import fortnite from "../../images/fortnite.png";
import blissBottle2 from "../../images/bliss_bottle2.png";
import challengeTexts from "../../images/challenge_texts.png";
import marvel from "../../images/black_panther.png";
import blissBottle3 from "../../images/bliss_bottle3.png";
import solutionTexts1 from "../../images/solution_texts1.png";
import solutionTexts2 from "../../images/solution_texts2.png";
import vector1 from "../../images/vector_1.png";
import vector3 from "../../images/vector_3.png";
import vector4 from "../../images/vector_4.png";
import vector5 from "../../images/vector_5.png";
import vector7 from "../../images/vector_7.png";

const Bliss = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.9 //90% in viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);


  return (
    <div class="case-study-bliss">
      <img src={blissLogo} alt="amazon alexa logo" id="alexa-logo" />

      <div ref={ref} className={ isVisible ? "horizontal-scroll-wrapper-bliss" : " horizontal-scroll-wrapper-bliss out-of-view"}>
        <div class="img-wrapper fastest">
          <img src={vector1} alt="" id="vector1" />
        </div>

        <div class="img-wrapper">
          <div className="block" id="team">
            <h2 className="title">OUR TEAM</h2>
            <p className="text desc">
              14-person team of researchers, <br /> strategists & copywriters
            </p>
            <ul>
              <li>1 Operations Manager</li>
              <li>1 Account Lead</li>
              <li>1 Project Manager</li>
              <li>1 Researcher</li>
              <li>2 Strategists</li>
              <li>8 Copywriters</li>
            </ul>
          </div>
        </div>

        <div class="img-wrapper slower1">
          <img src={vector7} alt="" id="vector7" />
        </div>

        <div class="img-wrapper slower vertical">
          <img src={blissBottle1} alt="tall amazon alexa" id="tall-alexa" />
        </div>

        <div class="img-wrapper fastest">
          <img src={blissBottle3} alt="mario" id="mario" />
        </div>

        <div class="img-wrapper faster1">
          <img src={blissComment1} alt="text bubbles" id="team-texts" />
        </div>

        <div class="img-wrapper">
          <div className="block block2">
            <h2 className="title title2">CHALLENGE</h2>
            <p className="text body-text">
              To satisfy users, Amazon Alexa must stay <br />
              informed about popular culture, including <br />
              games, anime, and TV shows, and provide <br />
              accurate answers to related questions. <br />
              The challenge is to maintain relevance in <br />
              the face of rapidly changing cultural <br />
              trends. In response, the Amazon Alexa <br />
              Personality Team entrusted us with the <br />
              task of both engaging and aligning with <br />
              Alexa’s personality while serving a global <br />
              audience, and we eagerly accepted this <br />
              responsibility.
            </p>
          </div>
        </div>

        <div class="img-wrapper slower">
          <img src={vector4} alt="" id="vector4" />
        </div>

        <div class="img-wrapper faster1">
          <img src={vector3} alt="" id="vector3" />
        </div>

        <div class="img-wrapper fastest">
          <img src={challengeTexts} alt="text bubbles" id="challenge-texts" />
        </div>

        <div class="img-wrapper">
          <img src={fortnite} alt="fortnite character" id="fortnite" />
        </div>

        <div class="img-wrapper">
          <img src={blissBottle3} alt="small amazon alexa" id="small-alexa" />
        </div>

        <div className="img-wrapper">
          <div className="block block3">
            <h2 className="title">SOLUTION</h2>
            <p className="text body-text">
              Our team conducted in-depth research on <br />
              Gen Z-related topics, presenting concise <br />
              findings to the Amazon Alexa Personality <br />
              Team to highlight cultural trends. This <br />
              informed the creation of 250+ engaging <br />
              responses, crafted in collaboration between <br />
              our copywriters and the personality team, <br />
              tailored to address frequently asked questions <br />
              from young audiences.
            </p>
          </div>
        </div>

        <div class="img-wrapper slower2">
          <img src={vector5} alt="" id="vector5" />
        </div>

        <div class="img-wrapper slower slower2">
          <img src={blissBottle2} alt="amazon alexa" id="alexa-2" />
        </div>

        <div class="img-wrapper">
          <img src={solutionTexts1} alt="text bubbles" id="solution-texts-1" />
        </div>

        <div class="img-wrapper slower">
          <img src={solutionTexts2} alt="text bubbles" id="solution-texts-2" />
        </div>

        <div class="img-wrapper slower secondlast">
          <img src={marvel} alt="black panther" id="marvel" />
        </div>

        <div className="img-wrapper final">
          <div className="block block4">
            <h2 className="title">IMPACT</h2>
            <ul>
              <li className="text body-text impact-list">
                Generated insights on topics <br />
                such as video games, music, <br />
                anime and TV shows, to be used <br />
                by the Amazon Alexa Personality <br />
                Team for years to come
              </li>
              <li className="text body-text impact-list">
                Wrote over{" "}
                <span className="bolded">
                  {" "}
                  250 approved <br />
                  responses
                </span>
                , which can be heard <br />
                by millions around the world in <br />
                <span className="bolded">8 languages and 42 countries</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bliss;
