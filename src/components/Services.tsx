"use client";

import { motion } from "framer-motion";
import { Megaphone, Globe, Users, ArrowUpRight } from "lucide-react";

const services = [
    {
        icon: <Megaphone className="w-8 h-8" />,
        title: "Relaciones Públicas",
        description: "Gestión estratégica de la comunicación para construir y proteger la reputación de tu marca.",
        details: [
            "Free press",
            "Giras de Medios",
            "Ruedas de Prensa",
            "Alianzas estratégicas con medios",
            "Alianzas con entidades empresariales",
            "Networking",
            "Eventos"
        ]
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Comunicación Digital",
        description: "Estrategias de contenido y gestión de redes sociales para conectar con tu audiencia digital.",
        details: [
            "Social Listening",
            "Estrategia Digital",
            "Social Media",
            "Mailing",
            "Marketing Digital",
            "Identidad Gráfica",
            "Benchmark digital"
        ]
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Agencia BTL",
        description: "Activaciones de marca y experiencias memorables que generan impacto directo en el consumidor.",
        details: [
            "Congresos, festivales y convenciones",
            "Protocolo y producción del evento",
            "Producción actividades culturales",
            "Gabinete de prensa",
            "Diseño de logística"
        ]
    },
];

export const Services = () => {
    return (
        <section id="servicios" className="py-24 relative z-10 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-slate-900">Conoce Nuestros Servicios</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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
                            className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-primary/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl"
                        >
                            <div className="mb-6 p-4 bg-blue-50 rounded-2xl w-fit text-primary group-hover:bg-primary-gradient group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">{service.title}</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-2 mb-8">
                                {service.details.map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-600 text-sm">
                                        <span className="mr-2 text-primary font-bold">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a href="#" className="inline-flex items-center text-sm font-bold tracking-wider uppercase text-primary hover:text-secondary transition-all group-hover:underline decoration-2 underline-offset-4">
                                Saber más <ArrowUpRight className="ml-2 w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
