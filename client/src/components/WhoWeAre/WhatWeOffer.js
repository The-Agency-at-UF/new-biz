import React, {useState} from "react";
import "./WhatWeOffer.css";
import prevarrow from '../../images/arrow-prev.png';
import nextarrow from '../../images/arrow-next.png';


const WhatWeOffer = () => {
    const [JC, setJC] = useState("flex-start");
    const slider = document.getElementsByClassName('slider-wwo');
    var direction = 1;

    const goNext = () => {
        direction = -1;
        setJC("flex-start");
        slider.item(0).classList.remove('not-sliding');
        slider.item(0).classList.add('sliding-right');
    }; 

    const goPrev = () => {
        if (direction === -1) {
            slider.item(0).appendChild(slider.item(0).firstElementChild);
            direction = 1;
        }
        setJC("flex-end");
        slider.item(0).classList.remove('not-sliding');
        slider.item(0).classList.add('sliding-left');
    }; 

    const handleTransition = () => {
        if (direction === -1) {
            slider.item(0).appendChild(slider.item(0).firstElementChild);
        } else if (direction === 1) {
            slider.item(0).prepend(slider.item(0).lastElementChild);
        }
        slider.item(0).classList.add('no-transition');
        slider.item(0).classList.remove('sliding-right');
        slider.item(0).classList.remove('sliding-left');
        slider.item(0).classList.add('not-sliding');
        setTimeout(function() {
            slider.item(0).classList.remove('no-transition');
        });
    }

  return (
    <div className="container">
        <div className="carousel" style={{justifyContent: JC}}>
            <div className="slider-wwo" onTransitionEnd={handleTransition}>
                <section className="client-services">
                    <h2 className="section-title">WHAT WE OFFER</h2>
                    <div className="centered">
                        <h1>CLIENT SERVICES</h1>
                        <div className="roles">
                            <p> <span>Project Management</span> 
                            <span>Timelines</span>
                            <span>Account Management</span>
                            </p>

                            <p> <span>Event Management</span> </p>
                        </div>
                    </div>
                </section>
                <section className="research">
                    <h2 className="section-title">WHAT WE OFFER</h2>
                        <div className="centered">
                            <h1>RESEARCH</h1>
                            <div className="roles">
                                <p> <span>Research & Strategy</span>
                                <span>1:1, Focus Group, Panel</span>
                                </p>

                                <p> <span>Analytics</span>
                                    <span>Message Testing</span>
                                    <span>Environmental Scanning</span>
                                </p>

                                <p> <span>Campaign Performance Tracking</span>
                                    <span>Product, Vertical or Media Audit</span>
                                </p>

                                <p><span>Quantitative Research</span></p>
                                
                            </div>
                        </div>
                </section>
                <section className="creative">
                    <h2 className="section-title">WHAT WE OFFER</h2>
                        <div className="centered">
                            <h1>CREATIVE</h1>
                            <div className="roles">
                                <p> <span>Videography</span>
                                    <span>Photography</span>
                                    <span>Audio Production</span>
                                </p>
                                
                                <p> <span>Marketing Assets</span>
                                    <span>Copywriting</span>
                                    <span>Graphic Design</span>
                                </p>
                                
                                <p> <span>Experimental Marketing</span>
                                    <span>Ideation & Experimentation</span>
                                </p>
                                <p> <span>Concept Development</span></p>
                            </div>
                        </div>
                </section>
                <section className="developer">
                    <h2 className="section-title">WHAT WE OFFER</h2>
                        <div className="centered">
                            <h1>DEVELOPER</h1>
                            <div className="roles">
                                <p> <span>Website Development</span></p>

                            </div>
                        </div>
                </section>
                <section className="media">
                    <h2 className="section-title">WHAT WE OFFER</h2>
                        <div className="centered">
                            <h1>MEDIA</h1>
                            <div className="roles">
                                <p> <span>Content Creation</span>
                                    <span>Community Management</span>
                                    <span>Media Campaigns</span>
                                </p>
                                
                                <p> <span>Social Media & Marketplace Pages</span> </p>
                            </div>
                        </div>
                </section>
            </div>
            <div className="controls">
                <span className="arrow-wwo prev" onClick={goPrev}><img className="arrow-size" src={prevarrow}/></span>
                <span className="arrow-wwo next" onClick={goNext}><img className="arrow-size" src={nextarrow}/></span>
            </div>
        </div>
    </div>
  );
};

export default WhatWeOffer;
