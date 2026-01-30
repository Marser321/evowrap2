'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Sparkles, Droplets } from 'lucide-react';
import Footer from '../layout/Footer'; // Import Footer to show at bottom if needed, or just let page handle it

const services = [
    {
        id: 'ppf',
        title: 'Paint Protection Film',
        subtitle: 'El Escudo Invisible',
        description: 'Protección de grado militar contra impactos de piedra, arañazos y vandalismo. Tecnología de auto-curación que mantiene tu vehículo inmaculado por años.',
        image: '/images/services/ppf-card.png',
        icon: Shield,
        color: '#4f46e5', // Indigo
        gradient: 'from-indigo-500/20 to-purple-500/20'
    },
    {
        id: 'ceramic',
        title: 'Tratamiento Cerámico',
        subtitle: 'Brillo & Hidrofobia',
        description: 'Recubrimiento molecular que repele agua, suciedad y contaminantes. Otorga un brillo profundo y facilita el lavado como nunca antes.',
        image: '/images/services/ceramic-card.png',
        icon: Droplets,
        color: '#06b6d4', // Cyan
        gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
        id: 'detailing',
        title: 'Detailing Interior',
        subtitle: 'Restauración Absoluta',
        description: 'Limpieza profunda, hidratación de cueros y restauración de fibras. Un habitáculo estéril, renovado y con aroma a nuevo.',
        image: '/images/services/detailing-card.png',
        icon: Sparkles,
        color: '#f59e0b', // Amber
        gradient: 'from-amber-500/20 to-orange-500/20'
    }
];

export default function ServicesVertical() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} className="relative bg-neutral-950">
            {/* Title Section (Sticky) */}
            <div className="sticky top-0 z-0 h-screen flex flex-col items-center justify-start pt-24 pointer-events-none">
                <h2 className="text-5xl md:text-8xl font-black text-white/5 uppercase tracking-tighter">
                    Servicios
                </h2>
            </div>

            {/* Cards Container */}
            <div className="relative z-10 -mt-[100vh] pb-[50vh]">
                {services.map((service, i) => {
                    // Scale calculation for stacking effect
                    const targetScale = 1 - ((services.length - i) * 0.05);
                    return (
                        <Card
                            key={service.id}
                            i={i}
                            {...service}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}

interface CardProps {
    i: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    color: string;
    gradient: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    id: string; // Add ID for linking
}

const Card = ({ i, title, subtitle, description, image, color, gradient, progress, range, targetScale, id }: CardProps) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="relative w-[90vw] md:w-[70vw] h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl origin-top"
            >
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-center opacity-60 transition-transform duration-700 hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${gradient} mix-blend-overlay`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                    <h4 className="text-gold-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                        0{i + 1} — {subtitle}
                    </h4>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-none">
                        {title}
                    </h3>
                    <p className="text-neutral-300 text-lg md:text-xl font-light max-w-lg mb-8 leading-relaxed">
                        {description}
                    </p>

                    <Link href={`/services/${id}`} className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors w-fit">
                        <span>Ver Servicio</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
