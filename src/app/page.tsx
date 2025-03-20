"use client";

import { ReactLenis } from 'lenis/react'

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Import Components
import { PartnerOne, PartnerTwo } from '@/components/Partner';
import BlurText from '@/components/BlurText';
import Service from '@/components/Service';
import Hero from '@/components/Hero';
import Works from '@/components/Works';
import Overline from '@/components/Overline';
import Squares from '@/components/Squares';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faDribbble, faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
    const circleRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: circleRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0.5, 1], [1.5, 2.5]);

    return (
        <ReactLenis root>
            <Hero />
            <PartnerOne />
            <PartnerTwo />
            <div ref={circleRef} className='h-[400vh] w-full overflow-y-clip'>
                <Service />

                <div className='relative bg-amber-500 overflow-x-clip h-screen'>
                    {/* Expanding Circle Animation */}
                    <motion.div
                        className="absolute left-0 right-0 -top-1/4 w-full h-[100vh] bg-[var(--color-white)] rounded-t-full z-20"
                        style={{ scale }}
                    ></motion.div>
                    <div className="w-full h-fit sticky top-0 bg-[var(--color-white)] z-30 flex flex-col items-center">
                        <BlurText
                            text={"OUR"}
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-[var(--color-primary)] font-extrabold text-4xl md:text-6xl xl:text-9xl text-center mt-8 uppercase"
                        />
                        <BlurText
                            text={"WORKS"}
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-[var(--color-primary)] font-extrabold text-4xl md:text-6xl xl:text-9xl text-center mt-8 uppercase"
                        />
                        <Works />
                    </div>
                </div>
            </div>

            <div className='sticky bg-[var(--color-primary)] h-screen z-10 top-0 flex flex-col items-center p-36 text-[var(--color-white)] gap-12'>
                {/* Squares as Background
                <div className="absolute inset-0 w-full h-full">
                    <Squares
                        speed={0.5}
                        squareSize={40}
                        direction="down"
                        borderColor="#ff458d"
                        hoverFillColor="#fff"
                    />
                </div> */}

                {/* Foreground Content */}
                <Overline text="We are deeply dedicated to" />
                <BlurText
                    text={"build meaningful connections with our clients"}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="font-extrabold text-4xl md:text-6xl xl:text-9xl text-center mt-8 uppercase"
                />
                <button className='relative text-[var(--color-white)] bg-[var(--color-primary)] p-6 border border-[var(--color-white)] rounded-3xl hover:border-b-8 hover:border-r-8 transition-all cursor-pointer'>
                    <span className='font-extrabold text-6xl uppercase'>Be Our Partner</span>
                </button>
            </div>


            <div className='bg-[var(--color-white)] h-screen z-0 sticky top-0'></div>

            {/* Footer */}
            <div className='bg-[var(--color-tertiary)] h-[100vh] w-full z-30 text-[var(--color-black)] flex flex-col items-center justify-center relative'>
                <div className='flex flex-row items-center'>
                    {[
                        { name: faFacebook, label: 'Facebook' },
                        { name: faDiscord, label: 'Discord' },
                        { name: faTwitter, label: 'Twitter' },
                        { name: faGithub, label: 'Github' },
                        { name: faDribbble, label: 'Dribbble' }
                    ].map((icon) => (
                        <a href="#" key={icon.label} className="text-[var(--color-white)] hover:text-[var(--color-white)] ms-5">
                            <FontAwesomeIcon icon={icon.name} className="w-4 h-4" />
                            <span className="sr-only">{icon.label} Page</span>
                        </a>
                    ))}
                </div>
                <hr className="border-[var(--color-white)] sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-[var(--color-white)] sm:text-center">
                        <a href="#" className="hover:underline font-bold">Creative Supply </a>© 2023 All rights reserved - East Jakarta, ID
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">

                    </div>
                </div>
            </div>
        </ReactLenis >
    );
}
