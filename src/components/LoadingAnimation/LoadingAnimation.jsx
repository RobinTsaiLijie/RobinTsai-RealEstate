import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import "./LoadingAnimation.css";

const landscapeMoon = `${process.env.PUBLIC_URL}/images/landscapeMoon.png`;
const portraitMoon = `${process.env.PUBLIC_URL}/images/portraitMoon.png`;
const lanternImage = `${process.env.PUBLIC_URL}/images/lantern.png`;

const DISPLAY_DURATION = 5000;

const LoadingAnimation = ({ onLoadingComplete }) => {

    const [isVisible,setIsVisible] = useState(true);

    const overlayRef = useRef(null);
    const contentRef = useRef(null);

    const lanternRefs = useRef([]);

    const lanterns = useMemo(()=>[

        {id:1,left:5,size:60,duration:5,delay:0,drift:50},
        {id:2,left:14,size:95,duration:5,delay:0,drift:-65},
        {id:3,left:24,size:70,duration:7,delay:0,drift:45},
        {id:4,left:34,size:130,duration:6,delay:0,drift:-80},
        {id:5,left:46,size:80,duration:5,delay:0,drift:70},

        {id:6,left:57,size:115,duration:4,delay:0,drift:-55},
        {id:7,left:68,size:65,duration:6,delay:0,drift:40},
        {id:8,left:78,size:125,duration:4,delay:0,drift:-90},
        {id:9,left:88,size:85,duration:5,delay:0,drift:60},
        {id:10,left:95,size:55,duration:6,delay:0,drift:-45},

    ],[]);

    useEffect(()=>{

        const tl = gsap.timeline();

        gsap.fromTo(

            overlayRef.current,

            {
                opacity:0
            },

            {
                opacity:1,
                duration:1
            }

        );

        gsap.fromTo(

            contentRef.current.children,

            {

                opacity:0,
                y:35

            },

            {

                opacity:1,
                y:0,
                stagger:.22,
                duration:1,
                delay:.4,
                ease:"power3.out"

            }

        );

        lanternRefs.current.forEach((lantern,index)=>{

            if(!lantern) return;

            const config = lanterns[index];

            gsap.set(lantern,{

                xPercent:-50,

                y:window.innerHeight+300,

                rotation:-8+Math.random()*16,

                opacity:.45+Math.random()*.5

            });

            gsap.to(lantern,{

                y:-window.innerHeight-350,

                x:config.drift,

                duration:config.duration,

                delay:config.delay,

                repeat:-1,

                ease:"none"

            });

            gsap.to(lantern,{

                rotation:8,

                x:`+=${35+Math.random()*40}`,

                duration:3+Math.random()*2,

                repeat:-1,

                yoyo:true,

                ease:"sine.inOut"

            });

            gsap.to(lantern,{

                scale:1.05,

                duration:2,

                repeat:-1,

                yoyo:true,

                ease:"sine.inOut"

            });

        });

        const timer = setTimeout(()=>{

            gsap.to(

                overlayRef.current,

                {

                    opacity:0,

                    duration:1.2,

                    onComplete:()=>{

                        setIsVisible(false);

                        if(onLoadingComplete){

                            onLoadingComplete();

                        }

                    }

                }

            );

        },DISPLAY_DURATION);

        return ()=>{

            clearTimeout(timer);

            tl.kill();

        };

    },[lanterns,onLoadingComplete]);

    if(!isVisible){

        return null;

    }
        return (
        <div
            ref={overlayRef}
            className="mid-autumn-loading"
            style={{
                "--desktop-background": `url(${landscapeMoon})`,
                "--mobile-background": `url(${portraitMoon})`,
            }}
        >

            {/* Background */}
            <div className="mid-autumn-loading__background" />
            <div className="mid-autumn-loading__shade" />
            <div className="mid-autumn-loading__stars" />

            {/* Flying Lanterns */}
            <div className="lantern-field">

                {lanterns.map((lantern,index)=>(

                    <img
                        key={lantern.id}
                        ref={(element)=>{

                            lanternRefs.current[index]=element;

                        }}
                        src={lanternImage}
                        alt=""
                        className="flying-lantern"
                        draggable={false}
                        style={{
                            left:`${lantern.left}%`,
                            width:`${lantern.size}px`,
                            zIndex:lantern.size>100?150:120
                        }}
                    />

                ))}

            </div>

            {/* Content */}
            <main
                ref={contentRef}
                className="mid-autumn-content"
            >

                <p className="festival-eyebrow">
                    Happy Mid-Autumn Festival
                </p>

                <h1 className="festival-title">
                    中 秋 节 快 乐
                </h1>

                <div className="agent-block">

                    <h2 className="agent-name">
                        Robin Tsai
                    </h2>

                    <p className="agent-slogan">
                        Diagnosing your property goals,
                        <br />
                        prescribing the right solutions.
                    </p>

                </div>

                <div
                    className="loading-indicator"
                    aria-hidden="true"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </main>

        </div>
    );

};

export default LoadingAnimation;