'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroVideo() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" /> {/* Bottom fade */}

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover scale-105"
                >
                    {/* High-quality stock footage of a car wrap/detailing process */}
                    <source src="https://videos.pexels.com/video-files/5233157/5233157-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Hero Content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-medium tracking-wider uppercase text-white/90">
                        Maldonado • Punta del Este
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-extrabold text-white tracking-tighter mix-blend-overlay"
                >
                    EVO WRAP
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-6 text-xl md:text-2xl text-zinc-200 max-w-2xl font-light leading-relaxed"
                >
                    No es solo estética. Es <span className="font-bold text-white">protección absoluta</span>.
                    <br />
                    PPF, Cerámicos y Styling Vehicular de Alta Gama.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mt-10 flex flex-col md:flex-row gap-4"
                >
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-transform hover:scale-105 active:scale-95">
                        Cotizar Transformación
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
                        Ver Catálogo
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown className="w-8 h-8" />
            </motion.div>
        </div>
    );
}
