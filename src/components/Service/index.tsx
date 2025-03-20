import Image from "next/image";
import BlurText from "../BlurText";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Set1 from '@/assets/Set-1.svg';
import Set2 from '@/assets/Set-2.svg';
import Set3 from '@/assets/Set-3.svg';

import Element1 from '../../assets/asset-1.svg'
import Element2 from '../../assets/asset-2.svg'

const cards = [
    {
        image: Set1,
        alt: 'Benefit Creative Supply',
        title: 'Ideas from Creators',
        description: 'Ideas are developed from macro to mega scale creators, so they have a different value.'
    },
    {
        image: Set2,
        alt: 'Benefit Creative Supply',
        title: 'Creative Ecosystem',
        description: 'The interconnected network of creative services in our ecosystem is our greatest strength.'
    },
    {
        image: Set3,
        alt: 'Benefit Creative Supply',
        title: 'Qualified Production Team',
        description: 'Our team has produced various kinds of creative content from digital scale advertisements to TVC.'
    }
];

export default function Service() {
    const scrollRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    });

    const xTransform = useTransform(scrollYProgress, [0, 0.6], ["50%", "5%"]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

    return (
        <div ref={scrollRef} className='relative bg-[var(--color-primary)] h-[300vh] w-full text-[var(--color-white)]'>
            {/* Sticky container */}
            <div className="sticky top-0 h-screen flex flex-col overflow-hidden gap-12 p-36">
                <div className="flex flex-col items-start relative">
                    <div className="flex flex-row items-center gap-6">
                        <BlurText
                            text={"WHATS"}
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-[var(--color-white)] font-extrabold text-4xl md:text-6xl xl:text-9xl text-center mt-8 uppercase"
                        />
                        <Image
                            width={72}
                            height={72}
                            src={Element2}
                            alt='Element'
                        />
                    </div>

                    <div className="flex flex-row items-center gap-6">
                        <BlurText
                            text={"SETS UP APART"}
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-[var(--color-white)] font-extrabold text-4xl md:text-6xl xl:text-9xl text-center mt-8 uppercase"
                        />
                    </div>

                </div>

                <motion.div
                    className="flex gap-10 w-max"
                    style={{ x: xTransform, opacity }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="w-[480px] h-[400px] rounded-[24px] flex-shrink-0"
                        >
                            <div className="w-full h-full flex flex-col items-center text-[var(--color-white)] py-[10px] px-[20px] gap-2">
                                <Image src={card.image} alt={card.alt} className="w-full mt-2 h-[70%]" />
                                <h2 className="text-2xl font-bold mt-[15px]">{card.title}</h2>
                                <p className="text-center mt-[10px] leading-7 text-sm">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
