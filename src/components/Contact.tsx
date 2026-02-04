"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contacto" className="py-24 relative z-10 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-slate-900">Contáctanos</h2>
                        <p className="text-xl text-slate-600 mb-12">
                            Estamos listos para contar tu historia. Escríbenos y empecemos a trabajar juntos.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-blue-50 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1 text-slate-800">Llámanos</h3>
                                    <p className="text-slate-600">(593)-987166287</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-blue-50 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1 text-slate-800">Escríbenos</h3>
                                    <p className="text-slate-600">mcordova@mccomunicaciones.com.ec</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-blue-50 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1 text-slate-800">Visítanos</h3>
                                    <p className="text-slate-600">Quito, Ecuador</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <div className="aspect-video w-full rounded-2xl bg-slate-200 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-inner">
                                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-78.47, -0.18,12/600x400')] bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity"></div>
                                <span className="relative z-10 font-bold tracking-widest bg-white/90 px-4 py-2 rounded-lg backdrop-blur-sm text-slate-800 shadow-lg">VER EN MAPA</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-6 md:p-12 text-slate-800 shadow-2xl border border-slate-100 mx-1 md:mx-0"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-primary-gradient">Envíanos un mensaje</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-600 mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-primary focus:bg-white transition-all outline-none"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-600 mb-2">Empresa</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-primary focus:bg-white transition-all outline-none"
                                        placeholder="Tu empresa"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-600 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-primary focus:bg-white transition-all outline-none"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-600 mb-2">Mensaje</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-primary focus:bg-white transition-all outline-none resize-none"
                                    placeholder="¿Cómo podemos ayudarte?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary-gradient text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
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
