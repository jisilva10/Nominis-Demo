"use client";

import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";




export const Hero = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-transparent">
            {/* Background Elements - Subtle Blue Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-60" />
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="container mx-auto px-6 h-full relative z-10 flex flex-col items-center pt-[70vh] md:pt-[60vh] text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    {/* Text pushed down by padding, no spacer div needed */}

                    <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        Ayudamos a personas, empresas e instituciones a contar lo que quieren contar y llegar a donde quieren llegar.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contacto"
                            className="group px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:shadow-xl transition-all shadow-lg flex items-center space-x-2"
                        >
                            <span>EMPECEMOS</span>
                            <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#servicios"
                            className="group px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-full font-bold hover:shadow-lg transition-all flex items-center space-x-2 hover:border-primary/30"
                        >
                            <span>NUESTROS SERVICIOS</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
