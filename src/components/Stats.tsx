"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "11", label: "Años de Experiencia", suffix: "+" },
    { value: "2", label: "Años en el Mercado", suffix: "" },
    { value: "20", label: "Clientes Asesorados", suffix: "+" },
];

export const Stats = () => {
    return (
        <section className="py-20 relative z-10 bg-white border-b border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-8 text-center transition-colors group"
                        >
                            <h3 className="text-5xl md:text-6xl font-bold font-heading mb-2 text-slate-800">
                                {stat.value}
                                <span className="text-primary text-4xl">{stat.suffix}</span>
                            </h3>
                            <p className="text-slate-500 uppercase tracking-widest text-sm font-medium group-hover:text-primary transition-colors">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
