"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    altText: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    altText,
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Manipulación manual de eventos para un control fluido
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleInteractionStart = () => setIsDragging(true);
    const handleInteractionEnd = () => setIsDragging(false);

    return (
        <div
            className="relative w-full aspect-video overflow-hidden rounded-xl border border-white/10 shadow-2xl select-none group cursor-ew-resize"
            ref={containerRef}
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onMouseLeave={handleInteractionEnd}
            onMouseMove={handleMouseMove}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            onTouchMove={handleTouchMove}
        >
            {/* Imagen 'Antes' (Fondo base) */}
            <Image
                src={beforeImage}
                alt={`${altText} - Antes`}
                fill
                className="object-cover pointer-events-none"
                priority
            />

            {/* Etiqueta 'Antes' */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 z-10">
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                    Original
                </span>
            </div>

            {/* Imagen 'Después' (Máscara recortada) */}
            <motion.div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                initial={false}
            >
                <Image
                    src={afterImage}
                    alt={`${altText} - Después`}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Etiqueta 'Después' dentro de la máscara para que aparezca con ella */}
                <div className="absolute top-4 right-4 bg-cyan-500/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-400/20">
                    <span className="text-xs font-bold text-black uppercase tracking-widest">
                        Evo Wrap
                    </span>
                </div>
            </motion.div>

            {/* Línea divisoria y manija */}
            <motion.div
                className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent z-20 pointer-events-none shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-black/80 border border-cyan-500/50 rounded-full flex items-center justify-center backdrop-blur-lg shadow-lg">
                    <MoveHorizontal className="w-5 h-5 text-cyan-400" />
                </div>
            </motion.div>
        </div>
    );
}
