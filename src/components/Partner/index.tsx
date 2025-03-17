import Image from 'next/image';

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

const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11];

export default function Partner() {
    return (
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
    )
}