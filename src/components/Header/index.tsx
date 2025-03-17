// Next Hook
import Image from "next/image";

// Assets Import
import Logo from '../../assets/logo.png';

// Import Component
import { ButtonOne } from "../Button";

export default function Header() {
    return (
        <header className="w-full">
            <nav className="fixed w-full flex justify-between items-center h-16 md:h-20 xl:h-24 z-40 text-[var(--color-white)]">
                <ul className="flex items-center gap-5 xl:gap-10 ml-5 md:ml-16 text-lg">
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
                        <li key={item} className="hover:text-[var(--color-white)] text-sm transform hover:-translate-y-1 transition duration-300">
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                        </li>
                    ))}
                </ul>
                <ul className="hidden xl:flex items-center gap-10 mr-16 text-lg">
                    {['Contact', 'Projects', 'Join Us', 'About'].map((item) => (
                        <li key={item} className="hover:text-[var(--color-white)] text-sm transform hover:-translate-y-1 transition duration-300">
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                        </li>
                    ))}
                    <li>
                        <ButtonOne text="Be Our Partner" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}