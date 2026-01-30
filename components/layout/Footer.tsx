'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            type: "spring" as const,
            stiffness: 50,
            damping: 20
        }
    })
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Gold Glow Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent shadow-[0_0_50px_rgba(245,158,11,0.2)]" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">

                {/* 1. TOP CTA SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-16 mb-16 gap-8"
                >
                    <div className="max-w-2xl text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                            ¿Listo para la <span className="text-gold-500">Transformación?</span>
                        </h2>
                        <p className="text-neutral-400 text-lg font-light">
                            Agenda tu cita hoy y eleva la estética de tu vehículo al siguiente nivel.
                        </p>
                    </div>

                    <Link
                        href="/reservar"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-950 font-bold uppercase tracking-widest rounded-full hover:bg-gold-500 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                    >
                        <span className="relative z-10">Agendar Ahora</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>


                {/* 2. MAIN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand Column */}
                    <motion.div custom={0} initial="hidden" whileInView="visible" variants={footerVariants} viewport={{ once: true }}>
                        <div className="mb-6 w-48">
                            <Logo variant="footer" className="text-white w-full h-auto" />
                        </div>
                        <p className="text-neutral-500 leading-relaxed font-light text-sm max-w-xs">
                            Especialistas en protección y estética automotriz premium. PPF, Cerámicos y Wrapping de clase mundial en Uruguay.
                        </p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div custom={1} initial="hidden" whileInView="visible" variants={footerVariants} viewport={{ once: true }}>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">Explorar</h4>
                        <ul className="space-y-4 text-neutral-400 text-sm font-medium">
                            {['Inicio', 'Servicios', 'Transformación', 'Reservar'].map((item) => (
                                <li key={item}>
                                    <Link href={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`} className="hover:text-gold-500 transition-colors flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-gold-500 transition-all duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div custom={2} initial="hidden" whileInView="visible" variants={footerVariants} viewport={{ once: true }}>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">Contacto</h4>
                        <ul className="space-y-4 text-neutral-400 text-sm">
                            <li className="flex gap-4">
                                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                                <span>Santa Tereza 719<br />Maldonado, Punta del Este</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                                <span className="hover:text-white transition-colors cursor-pointer">+598 99 123 456</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                                <span className="hover:text-white transition-colors cursor-pointer">contacto@evowrap.uy</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Socials */}
                    <motion.div custom={3} initial="hidden" whileInView="visible" variants={footerVariants} viewport={{ once: true }}>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">Social</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group">
                                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </Link>
                            {/* Add logic for more socials if needed */}
                        </div>
                    </motion.div>
                </div>

                {/* 3. BOTTOM BAR */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-medium uppercase tracking-wider"
                >
                    <p>© {currentYear} Evo Wrap Uruguay.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-white transition-colors">Términos</Link>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}
