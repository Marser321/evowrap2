'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SlideProps {
    children: React.ReactNode;
    className?: string;
    videoSrc?: string; // Background Video
    imageSrc?: string; // Background Image (Higher priority/Stability)
    overlayColor?: string; // Gradient overlay
}

export default function Slide({ children, className, videoSrc, imageSrc, overlayColor = "bg-black/40" }: SlideProps) {
    return (
        <section className={cn("relative min-w-[100vw] h-screen snap-center overflow-hidden flex items-center justify-center bg-zinc-950", className)}>

            {/* Background Layer */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt="Background"
                        className="w-full h-full object-cover scale-105"
                    />
                ) : videoSrc ? (
                    <video
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover scale-105"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                ) : (
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-black" />
                )}

                {/* Cinematic Overlays */}
                <div className={cn("absolute inset-0 z-10", overlayColor)} />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-black/60" />

                {/* Grain Texture */}
                <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-lines.png")' }}
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 container mx-auto px-6 md:px-12">
                {children}
            </div>

        </section>
    );
}
