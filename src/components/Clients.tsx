"use client";

import { motion } from "framer-motion";

const clients = [
    {
        name: "Volvo",
        logo: "https://placehold.co/200x80/white/3581bb?text=Volvo", // Placeholder
    },
    {
        name: "JAC MOTORS",
        logo: "https://placehold.co/200x80/white/3581bb?text=JAC+MOTORS", // Placeholder
    },
    {
        name: "Nutri",
        logo: "https://placehold.co/200x80/white/3581bb?text=Nutri", // Placeholder
    },
    {
        name: "Medicamenta Ecuatoriana",
        logo: "https://placehold.co/200x80/white/3581bb?text=Medicamenta", // Placeholder
    },
];

export const Clients = () => {
    return (
        <section className="py-24 bg-white/5 relative z-10">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold font-heading mb-6">NUESTROS CLIENTES</h2>
                    <div className="w-24 h-1.5 bg-primary-gradient mx-auto rounded-full mb-12" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-20">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center h-32"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-2xl"
                >
                    <h3 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-primary-gradient">
                        Somos tu aliado estratégico
                    </h3>
                    <p className="text-xl md:text-2xl text-slate-600 font-light">
                        Comunicación estratégica de 360° para resultados efectivos.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
