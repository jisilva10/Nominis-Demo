"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contacto" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Contáctanos</h2>
                        <p className="text-xl text-white/80 mb-12">
                            Estamos listos para contar tu historia. Escríbenos y empecemos a trabajar juntos.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white group-hover:text-[#3581bb] transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Llámanos</h3>
                                    <p className="text-white/70">(593)-987166287</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white group-hover:text-[#3581bb] transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Escríbenos</h3>
                                    <p className="text-white/70">mcordova@mccomunicaciones.com.ec</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white group-hover:text-[#3581bb] transition-colors">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Visítanos</h3>
                                    <p className="text-white/70">Quito, Ecuador</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/10">
                            <div className="aspect-video w-full rounded-2xl bg-slate-800/50 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-78.47, -0.18,12/600x400')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity grayscale hover:grayscale-0"></div>
                                <span className="relative z-10 font-bold tracking-widest bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">VER EN MAPA</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 text-slate-800 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-[#3581bb]">Envíanos un mensaje</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-600 mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-100 rounded-xl border-2 border-transparent focus:border-[#3581bb] focus:bg-white transition-all outline-none"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-600 mb-2">Empresa</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-100 rounded-xl border-2 border-transparent focus:border-[#3581bb] focus:bg-white transition-all outline-none"
                                        placeholder="Tu empresa"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-600 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-slate-100 rounded-xl border-2 border-transparent focus:border-[#3581bb] focus:bg-white transition-all outline-none"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-600 mb-2">Mensaje</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 bg-slate-100 rounded-xl border-2 border-transparent focus:border-[#3581bb] focus:bg-white transition-all outline-none resize-none"
                                    placeholder="¿Cómo podemos ayudarte?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-[#3581bb] to-[#46a7ca] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
                            >
                                <span>ENVIAR MENSAJE</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
