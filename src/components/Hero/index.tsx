"use client"

import { useState } from 'react';

// Next Hooks
import Image from "next/image";

// Import Next Component
import Overline from "../Overline";

// Import Assets
import KOL from '../../assets/kol.png';
import KOL2 from '../../assets/kol2.png';
import KOL3 from '../../assets/kol3.png';
import KOL4 from '../../assets/kol4.png';
import KOL5 from '../../assets/kol5.png';

// Import Component
import { ButtonOne, ButtonTwo } from "../Button";

// Import Animation Libraries
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    KOL,
    KOL2,
    KOL3,
    KOL4,
    KOL5
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    return (
        <section className="flex flex-col h-screen w-full items-center justify-between bg-[var(--color-primary)] rounded-b-2xl md:rounded-b-[10rem] relative overflow-hidden py-12">
            <div className="flex flex-col items-center">
                <Overline text="Creative Supply" />
                <h1 className="text-[var(--color-white)] font-bold text-4xl md:text-6xl xl:text-8xl text-center mt-8">
                    We Supply Your<br />Creative Needs
                </h1>
            </div>
            <div className='absolute grid grid-cols-3 gap-4 -bottom-12 h-[65%] w-full items-center'>
                <div className='h-full flex justify-center'>
                    <Image
                        src={images[prevIndex]}
                        alt={`Welcome KOL`}
                        className="transition-transform h-full duration-300 hover:translate-y-12 object-contain"
                    />
                </div>
                <div className='h-full flex justify-center'>
                    <Image
                        src={images[currentIndex]}
                        alt={`Welcome KOL`}
                        className="transition-transform h-full duration-300 hover:translate-y-12 object-contain"
                    />
                </div>
                <div className='h-full flex justify-center'>
                    <Image
                        src={images[nextIndex]}
                        alt={`Welcome KOL`}
                        className="transition-transform h-full duration-300 hover:translate-y-12 object-contain"
                    />
                </div>
            </div>
            <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 z-50 bg-white p-4 text-xl font-bold rounded-full shadow-lg hover:bg-gray-200"
            >
                {'<'}
            </button>
            <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50 bg-white p-4 text-xl font-bold rounded-full shadow-lg hover:bg-gray-200"
            >
                {'>'}
            </button>
            <div className="flex flex-row w-fit gap-[10px] z-50 bg-[var(--color-white)] rounded-full xl:p-6 md:p-4 p-6">
                <ButtonOne text="Be Our Partner" />
                <ButtonTwo text="More Projects" />
            </div>
        </section>
    )
}
