"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-950 text-white overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Placeholder Background */}
        <div className="absolute inset-0 z-0 bg-neutral-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black opacity-80" />
          {/* Simulate video movement/texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/60 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-neon-lime text-lg md:text-xl font-bold tracking-[0.3em] uppercase mb-4">
              Automotive Luxury
            </h2>
            <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500 drop-shadow-lg">
              Reinventa <br /> Tu Vehículo
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              Protección invisible. Estética agresiva. El máximo nivel de detalle para quienes exigen perfección.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/booking"
                className="bg-neon-lime text-black font-extrabold px-8 py-4 rounded-full text-lg uppercase tracking-wider hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all flex items-center gap-2 group"
              >
                Cotizar Proyecto
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- BEFORE / AFTER SECTION (Wow Effect) --- */}
      <section className="relative py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold uppercase italic mb-4">
              Transformación <span className="text-neon-cyan">Total</span>
            </h3>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Desliza para ver el poder de un cambio radical. De pintura estándar a un acabado mate de competición.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/slider/before.png"
              afterImage="/images/slider/after.png"
              altText="Ferrari Transformation"
            />
          </div>
        </div>
      </section>

      {/* --- BENTO GRID GALLERY --- */}
      <section className="relative py-24 px-6 bg-neutral-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold uppercase italic mb-12 text-center md:text-left">
            Servicios <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-green-400">Elite</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Card 1: Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 row-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/50 hover:border-white/10 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
              {/* Placeholder content for now - can use generated images or empty */}
              <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700" />

              <div className="absolute bottom-0 left-0 p-8 z-20">
                <Shield className="w-10 h-10 text-neon-cyan mb-4" />
                <h4 className="text-3xl font-bold uppercase mb-2">Paint Protection Film</h4>
                <p className="text-neutral-400">Escudo invisible de auto-curación contra impactos y arañazos.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/50 hover:border-neon-lime/30 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
              <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <Zap className="w-8 h-8 text-neon-lime mb-2" />
                <h4 className="text-xl font-bold uppercase">Color Change Wraps</h4>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/50 hover:border-neon-cyan/30 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
              <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <Star className="w-8 h-8 text-purple-400 mb-2" />
                <h4 className="text-xl font-bold uppercase">Ceramic Coating</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
