"use client"

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Service from "@/components/Service";
import Partner from "@/components/Partner";

export default function Home() {
    return (
        <div className="bg-[var(--color-white)] text-[var(--color-black)]">
            <Parallax pages={4}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <div className="flex items-center justify-center">
                        <Hero />
                    </div>
                </ParallaxLayer>

                {/* <ParallaxLayer offset={1} speed={0.3}>
                    <div className="h-screen flex items-center justify-center">
                        <Works />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.5}>
                    <div className="h-screen flex items-center justify-center">
                        <Service />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.5}>
                    <div className="h-screen flex items-center justify-center">
                        <Partner />
                    </div>
                </ParallaxLayer> */}
            </Parallax>
        </div>
    );
}
