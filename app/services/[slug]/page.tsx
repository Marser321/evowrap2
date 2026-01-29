'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Shield, Sparkles, Droplets, Trophy, CheckCircle2, MessageCircle } from 'lucide-react';
import { servicesData } from '@/lib/services-data';
import { ProcessTimeline } from '@/components/services/ProcessTimeline';
import BrandWatermark from '@/components/ui/BrandWatermark';

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const service = servicesData[slug];

    if (!service) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500 selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <Link
                    href="/"
                    className="pointer-events-auto flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/20"
                >
                    <ArrowLeft size={18} />
                    <span className="text-sm font-medium">Volver</span>
                </Link>

                <div className="hidden md:block">
                    <img src="/images/branding/logo-full.png" alt="Evo Wrap" className="h-6 opacity-80" />
                </div>

                <div className="w-[88px] md:hidden" /> {/* Spacer for centering if needed */}
            </nav>

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Image / Gradient */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent z-10" />
                    {/* Fallback gradient if no image, or overlay on image */}
                    <div className="w-full h-full bg-neutral-900">
                        {service.heroImage && (
                            <img
                                src={service.heroImage}
                                alt={service.title}
                                className="w-full h-full object-cover opacity-60"
                            />
                        )}
                    </div>
                </div>

                <div className="container relative z-20 px-4 text-center max-w-4xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                    >
                        Servicio Premium
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                    >
                        {service.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        {service.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Technical Specs & Description */}
            <section className="py-20 px-4 md:px-6 container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Ciencia aplicada a su vehículo</h2>
                        <p className="text-neutral-400 leading-relaxed text-lg">
                            {service.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {service.technicalSpecs.map((spec, idx) => (
                                <div key={idx} className="p-4 rounded-xl bg-neutral-900 border border-white/5">
                                    <p className="text-neutral-500 text-sm mb-1">{spec.label}</p>
                                    <p className="text-white font-semibold">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group">
                        {/* Visual placeholder or secondary image */}
                        <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-neutral-600 font-mono text-sm">[Imagen de Detalle Técnico]</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process Timeline */}
            <ProcessTimeline steps={service.process} />

            {/* Gallery Section */}
            {service.gallery && service.gallery.length > 0 && (
                <section className="py-20 px-4 bg-black relative overflow-hidden">
                    <BrandWatermark opacity={0.05} scale={2} className="top-0" />
                    <div className="container mx-auto max-w-6xl relative z-10">
                        <h2 className="text-3xl font-bold text-center mb-12">Galería de Resultados</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.gallery.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group bg-neutral-900"
                                >
                                    <img
                                        src={img}
                                        alt={`Result ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            <section className="py-24 px-4 bg-neutral-900/30">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
                        {service.faq.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-2xl bg-neutral-950 border border-white/5 hover:border-white/10 transition-colors"
                            >
                                <h3 className="text-lg font-semibold mb-2 text-white flex items-start gap-3">
                                    <span className="text-indigo-500 mt-1"><CheckCircle2 size={16} /></span>
                                    {item.question}
                                </h3>
                                <p className="text-neutral-400 ml-7 text-sm leading-relaxed">
                                    {item.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center px-4">
                <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-indigo-950/20 border border-indigo-500/20 backdrop-blur-sm">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar su vehículo?</h2>
                    <p className="text-indigo-200 mb-8">
                        Agenda una evaluación personalizada. Trabajamos con un número limitado de vehículos por semana para garantizar la excelencia.
                    </p>
                    <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-bold rounded-full overflow-hidden hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)]">
                        <MessageCircle className="w-5 h-5" />
                        <span>Consultar por WhatsApp</span>
                        <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:scale-105 transition-transform" />
                    </button>
                </div>
            </section>

            {/* Footer Simple */}
            <footer className="py-8 text-center text-neutral-600 text-sm border-t border-white/5">
                <p>© {new Date().getFullYear()} EVO Wrap. Estética Absoluta.</p>
            </footer>
        </main>
    );
}
