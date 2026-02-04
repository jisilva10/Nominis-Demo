"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const articles = [
    {
        title: "Posicionamiento MERCO en Ecuador",
        excerpt: "Claves para mejorar tu reputación corporativa. El ranking MERCO es un referente clave para evaluar la reputación...",
        date: "21 Enero, 2025",
        category: "Reputación",
    },
    {
        title: "Marketing de Influencers",
        excerpt: "Potenciando tu marca con voces auténticas. El marketing de influencers ha revolucionado la forma en que las marcas...",
        date: "21 Enero, 2025",
        category: "Marketing",
    },
    {
        title: "Manejo de crisis en el entorno digital",
        excerpt: "Cómo proteger tu marca en momentos de incertidumbre. En un mundo hiperconectado, las crisis empresariales...",
        date: "21 Enero, 2025",
        category: "Crisis",
    },
];

export const Articles = () => {
    return (
        <section id="articulos" className="py-24 relative z-10 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-slate-900">Nuestros Artículos</h2>
                        <p className="text-slate-600 text-lg">Insights y tendencias del mundo de la comunicación.</p>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        href="#"
                        className="hidden md:flex items-center space-x-2 font-bold text-primary hover:text-secondary transition-colors"
                    >
                        <span>VER TODOS LOS ARTÍCULOS</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-white rounded-2xl overflow-hidden text-slate-800 flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow border border-slate-100"
                        >
                            <div className="h-48 bg-slate-200 relative overflow-hidden">
                                {/* Placeholder for article image */}
                                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-slate-900/50 to-transparent" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-transparent bg-clip-text bg-primary-gradient text-xs font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                                    {article.category}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center text-slate-500 text-sm mb-4">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {article.date}
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>

                                <p className="text-slate-600 mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <a href="#" className="inline-flex items-center text-transparent bg-clip-text bg-primary-gradient font-bold text-sm tracking-wide group-hover:translate-x-2 transition-transform">
                                        LEER NOTA COMPLETA <ArrowRight className="ml-2 w-4 h-4 text-primary" />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center space-x-2 font-bold hover:opacity-80 transition-opacity border border-slate-200 text-primary px-6 py-3 rounded-full hover:bg-white hover:shadow-md">
                        <span>VER TODOS LOS ARTÍCULOS</span>
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};
