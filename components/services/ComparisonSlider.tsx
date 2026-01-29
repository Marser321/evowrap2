'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComparisonSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    className?: string;
}

export default function ComparisonSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Antes",
    afterLabel = "Después",
    className
}: ComparisonSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full h-[500px] overflow-hidden cursor-ew-resize select-none touch-none group", className)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
        >
            {/* Background Image (After - Full) */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${afterImage})` }}
            >
                <span className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 text-sm font-bold uppercase backdrop-blur-md rounded">
                    {afterLabel}
                </span>
            </div>

            {/* Foreground Image (Before - Clipped) */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center will-change-[clip-path]"
                style={{
                    backgroundImage: `url(${beforeImage})`,
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`, // Reveal from left
                }}
            >
                <span className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 text-sm font-bold uppercase backdrop-blur-md rounded">
                    {beforeLabel}
                </span>
            </div>

            {/* Slider Line */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_20px_rgba(255,255,255,0.5)] z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                {/* Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform active:scale-110 transition-transform">
                    <ArrowLeftRight className="w-5 h-5 text-black" />
                </div>

                {/* Glint Effect (Vertical Sparkle that follows the line) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-80" />
            </div>

            {/* Glint Animation overlay when crossing middle (Visual Flair) */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-30 mix-blend-overlay"
                animate={{
                    opacity: sliderPosition > 45 && sliderPosition < 55 ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
            >
                <div className="w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
            </motion.div>

        </div>
    );
}
