import Image from "next/image";

import content1 from "@/assets/content-1.webp";
import content2 from "@/assets/content-2.webp";
import content3 from "@/assets/content-3.webp";
import content4 from "@/assets/content-4.webp";
import content5 from "@/assets/content-5.webp";
import content6 from "@/assets/content-6.webp";

const images = [content1, content2, content3, content4, content5, content6, content1, content2, content3, content4,];

export default function Works() {
    return (
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
    )
}