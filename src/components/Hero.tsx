"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    const services = [
        {
            title: "Comunicación",
            subtitle: ["Relaciones Públicas", "Digital & BTL"],
        },
        {
            title: "Relaciones Públicas",
            subtitle: ["Reputación de Marca", "Gestión de Crisis"],
        },
        {
            title: "Digital & BTL",
            subtitle: ["Estrategia Digital", "Activaciones de Marca"],
        },
    ];

    const [activeService, setActiveService] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextService = () => {
        setActiveService((prev) => (prev + 1) % services.length);
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-wider mb-6 backdrop-blur-sm">
                        AGENCIA ESTRATÉGICA
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
                        Somos <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">NOMINIS</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-lg">
                        Ayudamos a personas, empresas e instituciones a contar lo que quieren contar y llegar a donde quieren llegar.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contacto"
                            className="group px-8 py-3 bg-white rounded-full font-bold hover:bg-white/90 transition-all shadow-xl flex items-center space-x-2"
                        >
                            <span className="text-transparent bg-clip-text bg-primary-gradient">EMPECEMOS</span>
                            <ArrowRight className="w-5 h-5 text-[#3581bb] transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#servicios"
                            className="px-8 py-3 bg-transparent border border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            NUESTROS SERVICIOS
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block cursor-pointer group"
                    onClick={nextService}
                >
                    {/* Abstract Layout Representation */}
                    <div className="relative w-full aspect-square max-w-lg mx-auto transition-transform duration-500 group-hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl backdrop-blur-xl border border-white/20 transform rotate-6 shadow-2xl transition-transform group-hover:rotate-8" />
                        <div className="absolute inset-0 bg-gradient-to-bl from-white/10 to-transparent rounded-3xl backdrop-blur-md border border-white/10 transform -rotate-3 translate-y-4 transition-transform group-hover:-rotate-6" />

                        <div className="absolute inset-4 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-sm shadow-inner">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center p-8"
                                >
                                    <h3 className="text-4xl font-bold mb-4">{services[activeService].title}</h3>
                                    <div className="w-24 h-1.5 bg-white mx-auto mb-6 rounded-full" />
                                    {services[activeService].subtitle.map((sub, index) => (
                                        <p key={index} className="text-white/90 text-xl font-medium leading-relaxed">
                                            {sub}
                                        </p>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
