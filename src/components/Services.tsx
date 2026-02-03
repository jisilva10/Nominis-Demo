"use client";

import { motion } from "framer-motion";
import { Megaphone, Globe, Users, ArrowUpRight } from "lucide-react";

const services = [
    {
        icon: <Megaphone className="w-8 h-8" />,
        title: "Relaciones Públicas",
        description: "Gestión estratégica de la comunicación para construir y proteger la reputación de tu marca.",
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Comunicación Digital",
        description: "Estrategias de contenido y gestión de redes sociales para conectar con tu audiencia digital.",
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Agencia BTL",
        description: "Activaciones de marca y experiencias memorables que generan impacto directo en el consumidor.",
    },
];

export const Services = () => {
    return (
        <section id="servicios" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Conoce Nuestros Servicios</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Soluciones integrales diseñadas para potenciar tu marca en un mercado competitivo.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2"
                        >
                            <div className="mb-6 p-4 bg-white/10 rounded-2xl w-fit group-hover:bg-[#3581bb] group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-white/70 mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <a href="#" className="inline-flex items-center text-sm font-bold tracking-wider uppercase group-hover:text-[#3581bb] hover:bg-white hover:px-4 hover:py-2 hover:rounded-full transition-all">
                                Saber más <ArrowUpRight className="ml-2 w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
