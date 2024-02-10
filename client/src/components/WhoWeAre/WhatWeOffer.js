import React, {useState} from "react";
import "./WhatWeOffer.css";


const WhatWeOffer = () => {
    const [JC, setJC] = useState("flex-start");
    const slider = document.getElementsByClassName('slider');
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
            <div className="slider" onTransitionEnd={handleTransition}>
                <section className="client-services">
                    <h2 className="section-title">WHAT WE OFFER</h2>
                    <div className="centered">
                        <h1>CLIENT SERVICES</h1>
                        <div className="roles">
                            <p>Project Management</p>
                            <p>Timelines</p>
                            <p>Account Management</p>
                            <p>Event Management</p>
                        </div>
                    </div>
                </section>
                <section className="research">
                    <h2 className="section-title">WHAT WE OFFER</h2>
                        <div className="centered">
                            <h1>RESEARCH</h1>
                            <div className="roles">
                                <p>Research & Strategy</p>
                                <p>1:1, Focus Group, Panel</p>
                                <p>Quantitative Research</p>
                                <p>Analytics</p>
                                <p>Message Testing</p>
                                <p>Environmental Scanning</p>
                                <p>Campaign Performance Tracking</p>
                                <p>Product, Vertical or Media Audit</p>
                            </div>
                        </div>
                </section>
                <section className="creative">
                    <h2 className="section-title">WHAT WE OFFER</h2>
                        <div className="centered">
                            <h1>CREATIVE</h1>
                            <div className="roles">
                                <p>Videography</p>
                                <p>Photography</p>
                                <p>Audio Production</p>
                                <p>Marketing Assets</p>
                                <p>Copywriting</p>
                                <p>Graphic Design</p>
                                <p>Experimental Marketing</p>
                                <p>Ideation & Experimentation</p>
                                <p>Concept Development</p>
                            </div>
                        </div>
                </section>
                <section className="developer">
                    <h2 className="section-title">WHAT WE OFFER</h2>
                        <div className="centered">
                            <h1>DEVELOPER</h1>
                            <div className="roles">
                                <p>Website Development</p>

                            </div>
                        </div>
                </section>
                <section className="media">
                    <h2 className="section-title">WHAT WE OFFER</h2>
                        <div className="centered">
                            <h1>MEDIA</h1>
                            <div className="roles">
                                <p>Content Creation</p>
                                <p>Community Management</p>
                                <p>Media Campaigns</p>
                                <p>Social Media & Marketplace Pages</p>
                            </div>
                        </div>
                </section>
            </div>
            <div className="controls">
                <span className="arrow prev" onClick={goPrev}>prev</span>
                <span className="arrow next" onClick={goNext}>next</span>
            </div>
        </div>
    </div>
  );
};

export default WhatWeOffer;
