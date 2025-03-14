import Image from "next/image";

import Logo from "../assets/logo.png";
import KOL from "../assets/kol.png";

import content1 from "../assets/content-1.webp";
import content2 from "../assets/content-2.webp";
import content3 from "../assets/content-3.webp";
import content4 from "../assets/content-4.webp";
import content5 from "../assets/content-5.webp";
import content6 from "../assets/content-6.webp";

import Set1 from '../assets/Set-1.svg';
import Set2 from '../assets/Set-2.svg';
import Set3 from '../assets/Set-3.svg';

import partner1 from '@/assets/partner-1.webp';
import partner2 from '@/assets/partner-2.webp';
import partner3 from '@/assets/partner-3.webp';
import partner4 from '@/assets/partner-4.webp';
import partner5 from '@/assets/partner-5.webp';
import partner6 from '@/assets/partner-6.webp';
import partner7 from '@/assets/partner-7.webp';
import partner8 from '@/assets/partner-8.webp';
import partner9 from '@/assets/partner-9.webp';
import partner10 from '@/assets/partner-10.webp';
import partner11 from '@/assets/partner-11.webp';

const images = [content1, content2, content3, content4, content5, content6, content1, content2, content3, content4,];

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

const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11];

import Hero from "@/components/Hero";

export default function Home() {

    return (
        <div className="bg-[var(--color-white)] text-[var(--color-black)]">
            <main className="pt-2">
                <Hero />
                <section id="our-works" className="my-24 h-fit w-full text-[var(--color-black)]">
                    <div className="flex flex-col items-center gap-12">
                        <div className="flex flex-col lg:flex-row w-[80%] items-center justify-between gap-6">
                            <div className="w-[60%]">
                                <h2 className="font-bold text-4xl">Empowering Every Step, Digitally Connected!</h2>
                                <p className="mt-4 text-lg font-light text-balance">
                                    Welcome to Creative Supply, where creativity meets technology to transform ideas into impactful solutions. We specialize in crafting compelling brand stories, innovative designs, and seamless digital experiences.
                                </p>
                            </div>
                            <button className="bg-[var(--color-primary)] text-[var(--color-white)] font-bold py-2 px-4 rounded-full">
                                More Projects
                            </button>
                        </div>
                        <div className="w-[80%] grid grid-cols-2 md:grid-cols-5 gap-4">
                            {images.map((src, index) => (
                                <div key={index} className="p-2 rounded-lg hover:-translate-y-2 transition duration-300">
                                    <Image
                                        src={src}
                                        alt={`Showcase ${index + 1}`}
                                        className="w-full rounded-xl"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="services" className="flex flex-col items-center justify-center text-[var(--text-primary)] md:my-[100px] xl:h-fit xl:my-0 xl:py-12">
                    <h2 className="text-center font-bold text-[30px] md:w-[500px] xl:text-[40px] xl:w-[640px]">What Sets Us Apart</h2>
                    <h3 className="text-center text-[12px] md:w-[500px] xl:text-[20px] xl:w-[640px]">Your Vision, Our Power</h3>
                    <div className="carousel-container mt-[20px] flex gap-[30px] w-[310px] xl:justify-center xl:w-full">
                        <div className="carousel flex flex-col xl:flex-row gap-[30px] md:gap-[20px] xl:gap-[30px] text-[#303030] transition-transform duration-300">
                            {cards.map((card, index) => (
                                <div key={index} className="w-[320px] h-[400px] bg-[var(--color-secondary)] rounded-[24px] mt-[20px] transition duration-300 hover:-translate-y-2">
                                    <div className="w-full h-full flex flex-col items-center text-[var(--color-white)] py-[10px] px-[20px] ">
                                        <Image src={card.image} alt={card.alt} className="w-full mt-2 h-[50%]" />
                                        <h2 className="text-[20px] font-bold mt-[15px]">{card.title}</h2>
                                        <p className="text-center mt-[10px]">{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center justify-center text-[var(--text-primary)] md:my-[100px] xl:h-fit my-12 xl:my-0 xl:py-48">
                    <h2 className="text-center font-bold px-[20px] text-[30px] md:w-[500px] xl:text-[40px] xl:w-[640px]">
                        Partners in Progress
                    </h2>
                    <h3 className="text-center px-[20px] text-[12px] md:w-[500px] xl:text-[20px] xl:w-[640px]">
                        Where Creativity Meets Purpose
                    </h3>
                    <ul className="flex w-[60%] items-center flex-wrap mt-6 sm:mt-12 mx-[40px] justify-center gap-[20px] xl:gap-[70px]">
                        {partners.map((partner, index) => (
                            <li key={index}>
                                <Image src={partner} alt={`Partner ${index + 1}`} className="h-[20px] w-fit invert" />
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}
