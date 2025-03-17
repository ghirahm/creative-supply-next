import Image from "next/image";

import Set1 from '@/assets/Set-1.svg';
import Set2 from '@/assets/Set-2.svg';
import Set3 from '@/assets/Set-3.svg';

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
    return (
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
    )
}