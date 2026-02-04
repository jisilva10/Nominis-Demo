"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden bg-white">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-black">
                            Libera el Poder de las <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Redes sociales
                            </span>
                        </h1>
                    </>
                }
            >
                {/* Desktop Image */}
                <Image
                    src="/presentacion-sin-titulo.png"
                    alt="hero desktop"
                    height={720}
                    width={1400}
                    className="hidden md:block mx-auto rounded-2xl object-contain h-full w-full object-center"
                    draggable={false}
                />

                {/* Mobile Image */}
                <Image
                    src="/mobile-screenshot.png"
                    alt="hero mobile"
                    height={720}
                    width={1400}
                    className="block md:hidden mx-auto rounded-2xl object-contain h-full w-full object-center"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
