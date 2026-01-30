'use client';

import { motion } from 'framer-motion';
import HeroBackground from '@/components/home/HeroBackground';
import ServicesHorizontal from '@/components/home/ServicesHorizontal';
import TransformationShowcase from '@/components/home/TransformationShowcase';
import ProtectionDiagnosis from '@/components/home/ProtectionDiagnosis';
import EducationFAQ from '@/components/home/EducationFAQ';
import Logo from '@/components/ui/Logo';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <HeroBackground />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <Logo variant="hero" className="scale-125 md:scale-[2]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-xl md:text-3xl font-light text-zinc-300 tracking-[0.2em] uppercase mb-8">
              Ingeniería en <span className="font-bold text-white">Protección Estética</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="px-8 py-4 bg-gradient-to-r from-gold-600 to-amber-600 text-black font-black rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                Agendar Turno
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Ver Servicios
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-gold-500/50"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* --- SHOWCASE SECTION --- */}
      <section className="py-24 bg-neutral-950">
        <TransformationShowcase />
      </section>

      {/* --- SERVICES HORIZONTAL SECTION --- */}
      <section id="services" className="py-24 bg-neutral-900/30">
        <ServicesHorizontal />
      </section>

      {/* --- DIAGNOSIS SECTION --- */}
      <section id="diagnosis" className="py-24 bg-neutral-950">
        <ProtectionDiagnosis />
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-neutral-900/30">
        <EducationFAQ />
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/5 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            ¿LISTO PARA EL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">RESET TOTAL?</span>
          </h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
            Tu vehículo merece la protección técnica que solo Evo Wrap puede ofrecer.
            Cupos limitados por mes para garantizar perfección.
          </p>
          <Link
            href="/booking"
            className="inline-block px-12 py-6 bg-white text-black font-black text-xl rounded-full hover:bg-gold-500 transition-all hover:scale-105"
          >
            RESERVAR AHORA
          </Link>
        </div>
      </section>
    </main>
  );
}
