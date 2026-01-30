'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Droplets } from 'lucide-react';

const services = [
    {
        id: 'ceramic-coating',
        title: 'Tratamiento Cerámico',
        description: 'Brillo espejo y protección molecular.',
        image: '/images/services/ceramic-card.png',
        icon: Droplets,
        color: 'from-cyan-500 to-blue-500'
    },
    {
        id: 'ppf',
        title: 'Paint Protection Film',
        description: 'Blindaje invisible contra impactos.',
        image: '/images/services/ppf-card.png',
        icon: Shield,
        color: 'from-indigo-500 to-purple-500'
    },
    {
        id: 'detailing',
        title: 'Detailing de Interiores',
        description: 'Restauración profunda de cueros y fibras.',
        image: '/images/services/detailing-card.png',
        icon: Sparkles,
        color: 'from-amber-500 to-orange-500'
    }
];

export default function ServicesHorizontal() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    const opacityText1 = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const opacityText2 = useTransform(scrollYProgress, [0.3, 0.45, 0.55, 0.7], [0, 1, 1, 0]);
    const opacityText3 = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Horizontal Scroll Track */}
                <motion.div style={{ x }} className="flex gap-4 md:gap-12 pl-4 md:pl-[10vw] items-center">

                    {/* Intro Title Card */}
                    <div className="w-[85vw] md:w-[30vw] shrink-0 pr-4 md:pr-10">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-4 leading-tight">
                            Nuestros <br /><span className="text-indigo-500">Servicios</span>
                        </h2>
                        <p className="text-neutral-400 text-base md:text-lg">
                            Desliza para explorar la gama completa de protección y estética.
                        </p>
                        <div className="mt-8 flex items-center gap-4 text-sm font-bold text-white/50">
                            <ArrowRight className="animate-pulse" /> DESLIZA
                        </div>
                    </div>

                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </motion.div>

                {/* Dynamic Background Text / Negative Space Filler */}
                <div className="absolute right-10 bottom-20 z-0 pointer-events-none text-right hidden lg:block">
                    <motion.div style={{ opacity: opacityText1 }} className="absolute bottom-0 right-0 w-[500px]">
                        <h3 className="text-8xl font-black text-neutral-900 uppercase leading-none">Protection</h3>
                        <p className="text-neutral-600 mt-2 text-xl font-light">Ciencia aplicada a la superficie.</p>
                    </motion.div>

                    <motion.div style={{ opacity: opacityText2 }} className="absolute bottom-0 right-0 w-[500px]">
                        <h3 className="text-8xl font-black text-indigo-900/40 uppercase leading-none">Ceramic</h3>
                        <p className="text-indigo-800 mt-2 text-xl font-light">Enlace químico permanente.</p>
                    </motion.div>

                    <motion.div style={{ opacity: opacityText3 }} className="absolute bottom-0 right-0 w-[500px]">
                        <h3 className="text-8xl font-black text-amber-900/40 uppercase leading-none">Detailing</h3>
                        <p className="text-amber-800 mt-2 text-xl font-light">Restauración interior total.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: any }) {
    const Icon = service.icon;
    return (
        <div className="group relative h-[70vh] w-[80vw] md:w-[40vw] shrink-0 overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            {/* Background Image (Texture) */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
            />

            {/* Glass Overlay - Default is dark glass, Hover becomes clearer to reveal texture */}
            <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md transition-all duration-500 group-hover:bg-neutral-950/30 group-hover:backdrop-blur-sm" />

            {/* Gradient for text readability at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <div className={`mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white w-8 h-8 md:w-10 md:h-10" />
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-none uppercase tracking-tight drop-shadow-lg">
                    {service.title}
                </h3>

                <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-sm font-light leading-relaxed group-hover:text-white transition-colors">
                    {service.description}
                </p>

                <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 backdrop-blur-md"
                >
                    Ver Detalles <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
