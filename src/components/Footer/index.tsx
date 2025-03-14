// Next Hook
// Import Image from "next/image";

// Import Icon Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLocation } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faDribbble, faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
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
    )
}