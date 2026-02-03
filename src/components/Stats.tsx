"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "11", label: "Años de Experiencia", suffix: "+" },
    { value: "2", label: "Años en el Mercado", suffix: "" },
    { value: "20", label: "Clientes Asesorados", suffix: "+" },
];

export const Stats = () => {
    return (
        <section className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-5xl md:text-6xl font-bold font-heading mb-2">
                                {stat.value}
                                <span className="text-transparent bg-clip-text bg-primary-gradient text-4xl">{stat.suffix}</span>
                            </h3>
                            <p className="text-white/80 uppercase tracking-widest text-sm font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
