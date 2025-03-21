"use client"

import { useState } from 'react';

// Next Hooks
import Image from "next/image";

// Import Next Component
import Overline from "../Overline";
import { ButtonOne, ButtonTwo, ButtonThree } from "../Button";
import BlurText from '../BlurText';

// Import Assets
import KOL from '../../assets/kol.png';
import KOL2 from '../../assets/kol2.png';
import KOL3 from '../../assets/kol3.png';
import KOL4 from '../../assets/kol4.png';
import KOL5 from '../../assets/kol5.png';

import Element1 from '../../assets/asset-1.svg';
import Element2 from '../../assets/asset-2.svg';
import Element3 from '../../assets/asset-3.svg';

// Import Animation Libraries
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const images = [
    KOL,
    KOL2,
    KOL3,
    KOL4,
    KOL5
];

const SECTIONHEIGHT = 200;

export default function Hero() {
    // Track Scroll Progress
    const { scrollYProgress } = useScroll();

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 20,
        restDelta: 0.001
    });

    const yTransform = useTransform(smoothScroll, [0, 1], ["0vh", SECTIONHEIGHT]);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Animation Variants
    const reveal = {
        hidden: { opacity: 0, scale: 0.7 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut", delay: 0.6 } },
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;


    return (
        <section>
            <motion.div
                className="flex flex-col w-full items-center justify-start bg-[var(--color-primary)] relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ height: `calc(${SECTIONHEIGHT}vh)` }}
            >
                {/* SECTION 1 */}
                <motion.div className='h-screen sticky top-0'>
                    <motion.div
                        className="flex flex-col items-center justify-center h-screen gap-4"
                        style={{ transform: yTransform }}
                    >
                        {/* Overline Reveal */}
                        <motion.div initial="hidden" animate="visible" variants={reveal}>
                            <Overline text="Creative Supply" />
                        </motion.div>

                        <div className="w-fit h-fit relative flex flex-col items-center">
                            <BlurText
                                text={"WE SUPPLY YOUR"}
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-[var(--color-white)] font-extrabold text-4xl md:text-6xl xl:text-9xl text-center mt-8 uppercase"
                            />
                            <BlurText
                                text={"CREATIVE NEEDS"}
                                delay={180}
                                animateBy="words"
                                direction="top"
                                className="text-[var(--color-white)] font-extrabold text-4xl md:text-6xl xl:text-9xl text-center mt-8 uppercase"
                            />
                            <Image
                                width={48}
                                height={48}
                                src={Element3}
                                alt='Element'
                                className='absolute top-12 right-[383px] transform'
                            />
                            <Image
                                width={48}
                                height={48}
                                src={Element3}
                                alt='Element'
                                className='absolute bottom-16 left-[295px] transform'
                            />
                        </div>

                        {/* Button Reveal */}
                        <motion.div initial="hidden" animate="visible" variants={reveal}>
                            <ButtonThree text="Click to Discover the Magic" />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* SECTION 2*/}
                <motion.div className="h-screen relative w-full flex items-center justify-center overflow-hidden z-30">
                    <motion.div className="absolute grid grid-cols-3 gap-4 h-[80%] -bottom-10 w-full items-end" >
                        {[prevIndex, currentIndex, nextIndex].map((index, i) => (
                            <motion.div
                                key={index}
                                className={`relative flex justify-center items-end mx-auto ${i === 1 ? "w-full h-full" : "w-2/3 h-2/3"
                                    }`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                <Image
                                    src={images[index]}
                                    alt="Welcome KOL"
                                    fill
                                    className="transition-transform duration-300 hover:translate-y-12 object-contain object-bottom z-30"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>


                <motion.div
                    className="absolute bottom-8 flex flex-row w-fit gap-[10px] z-50 bg-[var(--color-white)] rounded-full p-4"
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            delay: 0.4,
                            duration: 1,
                        },
                    }}
                    viewport={{
                        once: true,
                        amount: 1,
                    }}
                >
                    <ButtonOne text="Be Our Partner" />
                    <ButtonTwo text="More Projects" />
                </motion.div>
            </motion.div>
        </section>
    )
}
