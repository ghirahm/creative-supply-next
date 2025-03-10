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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHouse, faLocation } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faDribbble, faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
    return (
        <div className="bg-primary text-primary">
            <nav className="fixed w-full flex justify-between items-center h-16 md:h-20 xl:h-24 bg-[var(--color-white)] z-40">
                <ul className="flex items-center gap-5 xl:gap-10 ml-5 md:ml-16 text-lg font-bold">
                    <li>
                        <Image
                            src={Logo}
                            alt="Creative Supply"
                            width={32}
                            height={32}
                            className="h-8 cursor-pointer transition-transform duration-300 hover:rotate-12"
                        />
                    </li>
                    {['Home', 'Services', 'Our Works'].map((item) => (
                        <li key={item} className="hover:text-[var(--color-black)] text-sm transform hover:-translate-y-1 transition duration-300">
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                        </li>
                    ))}
                </ul>
                <ul className="hidden xl:flex items-center gap-10 mr-16 text-lg font-bold">
                    {['Contact', 'Projects', 'Join Us', 'About'].map((item) => (
                        <li key={item} className="hover:text-[var(--color-black)] text-sm transform hover:-translate-y-1 transition duration-300">
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                        </li>
                    ))}
                    <li>
                        <button className="btn-style-one">
                            <span className="btn-title text-sm">Our Partner</span>
                        </button>
                    </li>
                </ul>
            </nav>

            <main className="pt-16">
                <section className="flex flex-col h-screen w-full items-center justify-between bg-[var(--color-primary)] rounded-b-2xl md:rounded-b-[10rem] relative overflow-hidden py-12">
                    <div className="flex flex-col items-center">
                        <div className="w-fit border rounded-full py-2 px-4 mt-5 xl:mt-16 border-[var(--color-white)]">
                            <h2 className="text-[var(--color-white)] ">Creative Supply</h2>
                        </div>
                        <h1 className="text-[var(--color-white)] font-bold text-4xl md:text-6xl xl:text-8xl text-center mt-8">
                            We Supply Your<br />Creative Needs
                        </h1>
                    </div>
                    <Image
                        src={KOL}
                        alt="Welcome KOL"
                        className="absolute bottom-[-20px] h-[65%] w-auto transition-transform duration-300 hover:translate-y-12"
                    />
                    <div className="flex flex-row w-fit gap-[10px] z-30 bg-[var(--color-white)] rounded-full xl:p-6 md:p-4 p-6">
                        <button className="btn-style-one rounded-full">
                            <span className="btn-title">Be Our Partner</span>
                        </button>
                        <button className="border border-[var(--text-secondary)] sm:border-[var(--text-primary)] rounded-full py-[10px] px-[20px] text-[var(--text-tertiary)] font-bold flex items-center">
                            <h2 className="font-bold transform hover:mr-[7px] ease-in-out duration-300 transition-all">More Projects</h2>
                            <FontAwesomeIcon icon={faArrowRight} className="ml-[6px] size-6"></FontAwesomeIcon>
                        </button>
                    </div>
                </section>

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
            <footer className="bg-[var(--color-primary)]">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-12">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="#" className="flex flex-col gap-2 items-start justify-start">
                                {/* <Image src={Logo} alt="Creative Supply Logo" width={32} height={32} className="h-8 me-3" /> */}
                                <h2 className="text-2xl text-[var(--color-white)] font-bold whitespace-nowrap">PT Kreatif Suplai Indonesia</h2>
                                <p className="mt-4 text-sm font-light text-balance text-[var(--color-white)] flex flex-row gap-2 items-center"><FontAwesomeIcon icon={faHouse} className="size-4" />
                                    Jl Bintara Raya No 23, Kelurahan Jakasampurna, Kecamatan Bekasi Barat, Kota Bekasi, Jawa Barat
                                </p>
                                <p className="mt-4 text-sm font-light text-balance text-[var(--color-white)] flex flex-row gap-2 items-center"><FontAwesomeIcon icon={faLocation} className="size-4" />
                                    Blok BE2 No.1, Jl. Kelapa Hibrida 7, Pondok Kelapa, Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
                                </p>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            {[
                                {
                                    title: 'Products',
                                    category: ['Creative Supply', 'CS People', 'CS Works'],
                                    links: ['https://www.instagram.com/creativesupply.id/', 'https://www.instagram.com/cspeople.id/', 'https://www.instagram.com/csworks.id/']
                                },
                                {
                                    title: 'Follow Us',
                                    category: ['Tiktok', 'Instagram'],
                                    links: ['https://www.tiktok.com/@creativesupply.id', 'https://www.instagram.com/creativesupply.id/']
                                },
                                {
                                    title: 'Legal',
                                    category: ['Privacy Policy', 'Terms & Conditions'],
                                    links: ['https://www.instagram.com/creativesupply.id/', 'https://www.instagram.com/creativesupply.id/']
                                }
                            ].map((section) => (
                                <div key={section.title}>
                                    <h2 className="mb-6 text-md font-bold text-[var(--color-white)]">{section.title}</h2>
                                    <ul className="text-[var(--color-white)] text-sm font-semibold">
                                        {section.category.map((item, index) => (
                                            <li key={item} className="mb-4">
                                                <a href={section.links[index]} className="transition-all duration-150 hover:translate-y-2">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className="my-6 border-[var(--color-white)] sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-[var(--color-white)] sm:text-center">
                            © 2023 <a href="#" className="hover:underline">Creative Supply</a>
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
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
                    </div>
                </div>
            </footer>
        </div>
    );
}
