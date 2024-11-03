import React from "react";

import alex from "../../images/alex_g.png";
import basketballplayer from "../../images/basketballplayer1.png";
import billboard from "../../images/billboard.png";
import field from "../../images/field.png";
import footballer from "../../images/footballer.png";
import gradient from "../../images/gradient.png";
import purpose from "../../images/purpose.png";
import SECblue from "../../images/SECblue.png";
import social1 from "../../images/social1.png";
import social2 from "../../images/social2.png";
import topview from "../../images/topview.png";
import tv1 from "../../images/tv1.png";
import tv2 from "../../images/tv2.png";
import blue from "../../images/blue.png";
import gradientline from "../../images/gradient_line.png";
import secfield from "../../images/fieldsec.png";
import helmets from "../../images/helmets.png";
import orangex from "../../images/orangeX.png";
import field2 from "../../images/field2.png";
import arrows from "../../images/arrows.png";
import sec_x_gators from "../../images/sec_x_gators.svg"



const GatorsUnidos = () => {
  return (
    <div className="bg-[#0F082F]">
        {/* First section */}
        <div className="font-[Gentona]">
        <div className=""> 
          <div className="relative w-full h-[80vh] overflow-hidden"> 
          <img className="absolute top-0 w-full z-10" src={gradient} alt="gradient"/>
          <img className="absolute w-full inset-0 object-cover" src={topview} alt="topview"/>
          <img className="absolute w-full bottom-0 h-1/2 object-cover" src={field} alt="field"/>
          <img className="mt-6 absolute rotate-180 bottom-0 w-full" src={gradient} alt="gradient"/>
          </div>
        </div> 
          <p className="text-[#EB6220]"> Case Study </p>
            <div className="flex items-center">
                <img src={sec_x_gators}/>
            </div>
          <div className ="flex items-center"> <div className ="w-5/6"> <div className="h-1 bg-[#EB6220]"></div></div></div> 
          <p className="text-3xl text-[#EB6220]">Taking a page out of the Latino Playbook</p>

        </div>
        {/* Section 2 */}
        <div className="relative">
          <img className="absolute h-full z-0" src={SECblue} alt="SECblue" />
          <div className="flex items-center relative">

            <div className="relative flex flex-col">
            <img className="absolute w-full h-[1em]" src={gradientline} alt="gradientline" id="" />
            <p className="font-[Gentona] text-7xl m-4 ">
              THE FIRST HISPANIC AND LATINO 
              CELEBRATION CAMPAIGN FOR ESPN, THE SEC NETWORK,
              AND THE UNIVERSITY OF FLORIDA.
            </p>
            <img className="absolute w-full h-[1em] top-full z-20" src={gradientline} alt="gradientline" id="" />
            </div>

            <img className="z-30" src={footballer} alt="footballer" id="" />
          </div>
        </div>
        {/* Section 3 */}
        <div className="">
          <div className="flex font-[Gentona] text-[#EB6220] items-center">
              <p className="text-6xl m-5">OUR STARTING LINEUP</p>
              <div className="bg-[#EB6220] h-[5px] flex-1"></div>
          </div>
            <div className="text-3xl m-10 text-center text-[Gentona] grid grid-rows-4 grid-flow-col gap-10 w-full h-full">
                <div className="">Operations Manager</div>
                <div className="">Account Supervisor</div>
                <div className="">Project Manager</div>
                
                <div className="">Media Coordinators</div>
                <div className="">Copywriters</div>
                <div className="">Art Director</div>
                
                <div className="">Graphic Designers</div>
                <div className="">Producer</div>
                <div className="">Production Supervisors</div>
                
                <div className="">Videographers</div>
                <div className="">Video Editors</div>
                <div className="">Photographer</div>
            </div>
            {/* <img src={gradient} alt="gradient" />
            <img src={helmets} alt="helmets" />
            <img src={gradient} alt="gradient" /> */}
        </div>
        {/* Section 4 */}
        <div> 
          <div className="flex font-[Gentona] text-[#EB6220] items-center">
              <div className="bg-[#EB6220] h-[5px] flex-1"></div>
              <p className="text-6xl m-7">THE PLAYING FIELD</p>
          </div>
    
        <div className="flex items-center">
            <img src={basketballplayer} alt="basketballplayer" id="" />
            <div className="flex justify-center"> 
            <div className="w-1/2">
            <p className=" text-6xl font-[Gentona]"> We saw the opportunity to elevate this nonprofit during 
            <span className="text-[#EB6220]"> Hispanic Heritage Month</span>.
            It's inaugural merchandise drop was approaching, 
            and there was no better way to support Latino pride than 
            through Gators leaving it all on the court and the field. </p>
            </div> 
            </div>
          {/* <img src={gradient} alt="gradient" id="" /> */}
          {/* <img src={secfield} alt="secfield" id="" />
          <img src={gradient} alt="gradient" id=""/> */}
        </div>
        </div>
        {/* Section 5 */}
        <div className="">
        <div className="">
              <p className="">TIME FOR KICKOFF</p>
              <hr className=""></hr>
            </div>
          <div className="">
            <div className="">
              <div className="">
                <img src={orangex} alt="orangex" id="" />
                <h2 className="">LINEAR SEGMENT</h2>
              </div>
              <p className="">Through a co-production capacity, a 6-minute segment 
                showcased four Latino Gators and how that impacted their journeys 
                as student athletes. Our team provided production coordination, 
                oversight of pre-production planning, talent management, talent producing, 
                and responsibility over the end-to-end content creation.</p>
            </div>
            <div className="">
            <div className="">
                <img src={orangex} alt="orangex" id="" />
                <h2 className="">IN-GAME DISPLAY</h2>
              </div>
              <p className="">Handling all end-to-end creative involvement, 
                we produced a 45-second advertisement that played 
                across the jumbotrons of Ben Hill Griffin Stadium during the UF .v Tennessee 
                football game, presenting the community Gators Unidos fosters 
                along with its inaugural merchandise.</p>
            </div>
            <div className="">
            <div className="">
                <img src={orangex} alt="orangex" id="" />
                <h2 className="">SOCIAL CONTENT BOMBS</h2>
              </div>
              <p className="">Through social content bombs across Instagram, X, 
                Facebook, YouTube, and more, our team created 
                an authentic narrative and call to action to bring 
                fans closer to the Gators Unidos brand.</p>
            </div>
          </div>
          <img src={blue} alt="blue" id="" />
          <img src={alex} alt="alex" id="" />
          <img src={gradient} alt="gradient" id=""/>
        </div>
        <div className="">
          <img src={blue} alt="blue" id="" />
        </div>
        <div className="">
            <div className="">
              <hr className=""></hr>
              <p className="">IMPACT</p>
            </div>

          <img src={gradient} alt="gradient" id="" />
          <img src={field2} alt="field2" id="" />
          <img src={arrows} alt="arrows" id="" />
          <img src={gradient} alt="gradient" id="" />
        </div>
    </div>
  );
};

export default GatorsUnidos;
