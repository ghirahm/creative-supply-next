"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

// Assets Import
import Logo from '../../assets/logo.png';

// Import Component
import { ButtonOne } from "../Button";

// Import Motion
import { useAnimation, motion, useScroll } from "framer-motion";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
                controls.start({ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", padding: "12px 0", backgroundColor: "var(--color-primary)" });
            } else {
                setIsScrolled(false);
                controls.start({ boxShadow: "none", padding: "8px 0", backgroundColor: "transparent" });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    const playSound = () => {
        const audio = new Audio('/hover.mp3');
        audio.volume = 0;
        audio.play().then(() => {
            audio.volume = 0.2;
        }).catch(err => console.error("Audio play error:", err));
    };

    return (
        <header className="w-full h-auto flex flex-col lg:flex-row px-0 lg:px-[56px] z-50 fixed top-4 text-[var(--color-white)] uppercase font-bold">
            <motion.nav
                animate={controls}
                className="w-full mx-auto lg:w-full flex justify-between rounded-full px-2 py-2 relative bg-[var(--color-primary)]">
                <ul className="flex items-center gap-5 xl:gap-10 ml-5 md:ml-16 text-lg">
                    <Link onMouseEnter={playSound} href="/">
                        <Image
                            src={Logo}
                            alt="Creative Supply"
                            width={32}
                            height={32}
                            className="h-8 cursor-pointer transition-transform duration-300 hover:rotate-36"
                        />
                    </Link>
                    {['Service', 'Projects'].map((item) => (
                        <Link
                            key={item}
                            className="cursor-pointer overflow-hidden h-6"
                            onMouseEnter={playSound}
                            href={`/${item.toLowerCase()}`}
                        >
                            <div className="relative h-12 w-full flex flex-col items-center transition-transform duration-300 ease-in-out hover:-translate-y-6 text-sm">
                                <p className="h-6 flex items-center justify-center w-full">{item}</p>
                                <p className="h-6 flex items-center justify-center w-full">{item}</p>
                            </div>
                        </Link>
                    ))}
                </ul>
                <ul className="hidden xl:flex items-center gap-10 mr-16 text-lg">
                    {['Career', 'About'].map((item) => (
                        <Link
                            key={item}
                            className="cursor-pointer overflow-hidden h-6"
                            onMouseEnter={playSound}
                            href={`/${item.toLowerCase()}`}
                        >
                            <div className="relative h-12 w-full flex flex-col items-center transition-transform duration-300 ease-in-out hover:-translate-y-6 text-sm">
                                <p className="h-6 flex items-center justify-center w-full">{item}</p>
                                <p className="h-6 flex items-center justify-center w-full">{item}</p>
                            </div>
                        </Link>
                    ))}
                    <Link onMouseEnter={playSound} href={'/contact'}>
                        <ButtonOne text="Be Our Partner" />
                    </Link>
                </ul>
            </motion.nav>
        </header>
    );
}
