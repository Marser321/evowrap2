"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import SectionBackground from "@/components/ui/SectionBackground";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Star } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-950 text-white overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Layer - Cinematic */}
        <SectionBackground
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" // Dark Porsche/Luxury Car
          alt="Luxury Car Dark Background"
          opacity={0.6}
          overlayClassName="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/60"
          priority={true}
        />

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-8">
              <Logo className="w-64 h-auto md:w-96 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gold-500 text-lg md:text-2xl font-bold tracking-[0.3em] uppercase mb-6"
            >
              Automotive Luxury
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-10 text-white leading-tight"
            >
              Reinventa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">Tu Vehículo</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/booking"
                className="bg-gold-500 text-black font-extrabold px-8 py-4 rounded-full text-lg uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all flex items-center gap-2 group"
              >
                Cotizar Proyecto
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#transformation"
                className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-widest transition-all backdrop-blur-sm"
              >
                Ver Transformaciones
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-20 text-white/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* 2. TRANSFORMATION SECTION (Slider) */}
      <section id="transformation" className="relative py-32 px-6">
        <SectionBackground
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop" // Interior Detail / Texture
          alt="Garage Texture Background"
          opacity={0.15}
          overlayClassName="bg-neutral-950/90"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
              Transformación <span className="text-gold-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Total</span>
            </h3>
            <p className="text-neutral-400 max-w-xl mx-auto text-lg">
              Desliza para descubrir el cambio radical. De lo estándar a lo extraordinario.
            </p>
          </div>

          <div className="max-w-5xl mx-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl">
            <BeforeAfterSlider
              beforeImage="/images/slider/before.png"
              afterImage="/images/slider/after.png"
              altText="Ferrari Transformation"
              className="aspect-[16/9] md:aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* 3. SERVICES BENTO GRID */}
      <section className="relative py-32 px-6 border-t border-white/5">
        <SectionBackground
          src="https://images.unsplash.com/photo-1605218427306-6354db206fa5?q=80&w=2072&auto=format&fit=crop" // Matte Car Side Profile
          alt="Matte Car Background"
          opacity={0.1}
          overlayClassName="bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-black uppercase italic mb-2">
                Servicios <span className="text-gold-500">Elite</span>
              </h3>
              <p className="text-neutral-400">Soluciones de protección y personalización de clase mundial.</p>
            </div>
            <Link href="/services" className="text-gold-500 hover:text-white uppercase tracking-widest font-bold text-sm flex items-center gap-2 transition-colors">
              Ver Todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
            {/* Card 1: PPF (Large) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm hover:border-white/30 transition-all duration-500"
            >
              {/* Hover Reveal Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                <SectionBackground
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" // PPF Detail
                  opacity={0.4}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

              <div className="absolute bottom-0 left-0 p-10 z-20">
                <Shield className="w-12 h-12 text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-3xl font-black uppercase italic mb-3">Paint Protection Film</h4>
                <p className="text-neutral-300 max-w-md">Escudo invisible de auto-curación contra impactos, arañazos y elementos ambientales. Garantía de 10 años.</p>
              </div>
            </motion.div>

            {/* Card 2: Wrapping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm hover:border-gold-500/50 transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                <SectionBackground
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop" // Wrapping
                  opacity={0.4}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <Zap className="w-10 h-10 text-gold-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-black uppercase italic mb-2">Color Change</h4>
                <p className="text-neutral-400 text-sm">Personalización total con vinilos premium.</p>
              </div>
            </motion.div>

            {/* Card 3: Ceramic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm hover:border-gold-500/50 transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                <SectionBackground
                  src="https://images.unsplash.com/photo-1632823471441-28564a51e505?q=80&w=1972&auto=format&fit=crop" // Ceramic Water Beads
                  opacity={0.4}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <Star className="w-10 h-10 text-gold-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-black uppercase italic mb-2">Ceramic Coating</h4>
                <p className="text-neutral-400 text-sm">Brillo extremo y repelencia hidrofóbica.</p>
              </div>
            </motion.div>

            {/* Card 4: Taining / More (Optional filler) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm hover:border-white/30 transition-all duration-500 flex items-center justify-center p-6"
            >
              <div className="text-center z-10">
                <h4 className="text-xl font-bold uppercase mb-2">¿Buscas algo más?</h4>
                <Link href="/services" className="px-6 py-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all uppercase text-sm font-bold tracking-widest">
                  Ver todos los servicios
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
