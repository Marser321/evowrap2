'use client';

import { cn } from '@/lib/utils';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['700', '900'],
    variable: '--font-orbitron',
});

interface LogoProps {
    variant?: 'header' | 'hero' | 'footer';
    className?: string;
}

export default function Logo({ variant = 'header', className }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-2 select-none", className)}>
            {/* 3D Metallic Icon - Pure CSS/SVG construction */}
            <div className={cn(
                "relative flex items-center justify-center filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]",
                variant === 'hero' ? "w-20 h-20" : "w-10 h-10"
            )}>
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <defs>
                        {/* Chrome Gradient - Vertical */}
                        <linearGradient id="chrome-v" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#e0e0e0" />
                            <stop offset="45%" stopColor="#808080" />
                            <stop offset="50%" stopColor="#404040" />
                            <stop offset="55%" stopColor="#808080" />
                            <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                        {/* Chrome Gradient - Horizontal/Angled */}
                        <linearGradient id="chrome-h" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="20%" stopColor="#a0a0a0" />
                            <stop offset="50%" stopColor="#4d4d4d" />
                            <stop offset="80%" stopColor="#a0a0a0" />
                            <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                    </defs>

                    {/* Outer Shield Frame - 3 Layers for 3D depth */}
                    <path
                        d="M 10 10 L 40 10 L 30 90 L 10 90 Z"
                        fill="url(#chrome-v)"
                        stroke="#333"
                        strokeWidth="1"
                        transform="skewX(-10)"
                    />
                    <path
                        d="M 15 15 L 35 15 L 28 85 L 15 85 Z"
                        fill="#1a1a1a" // Inner dark recess
                        transform="skewX(-10)"
                    />

                    {/* "FW" Monogram Shapes */}
                    <path
                        d="M 25 30 L 60 30 L 55 45 L 30 45 Z" // Top Bar
                        fill="url(#chrome-h)"
                        transform="translate(-5, 0)"
                    />
                    <path
                        d="M 28 50 L 55 50 L 50 65 L 32 65 Z" // Middle Bar
                        fill="url(#chrome-h)"
                        transform="translate(-5, 0)"
                    />
                    <path
                        d="M 32 70 L 45 70 L 42 80 L 32 80 Z" // Bottom Dot
                        fill="url(#chrome-h)"
                        transform="translate(-5, 0)"
                    />
                </svg>
            </div>

            {/* Typography */}
            <div className={cn(
                orbitron.className,
                "flex flex-col justify-center",
                variant === 'hero' ? "h-20" : "h-10"
            )}>
                {/* EVO - Top Line */}
                <div className="relative">
                    <span className={cn(
                        "block font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-600 drop-shadow-lg",
                        variant === 'hero' ? "text-5xl leading-[0.8]" : "text-2xl leading-[0.8]"
                    )}
                        style={{
                            textShadow: '0px 2px 4px rgba(0,0,0,0.5)',
                            WebkitTextStroke: '1px rgba(255,255,255,0.2)'
                        }}
                    >
                        EVO
                    </span>
                </div>

                {/* WRAP - Bottom Line (Smaller, spaced) */}
                <div className={cn(
                    "border-t-2 border-zinc-500 w-full mt-1",
                    variant === 'hero' ? "pt-1" : "pt-[2px]"
                )}>
                    <span className={cn(
                        "block font-bold tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-300",
                        variant === 'hero' ? "text-xl" : "text-[0.6rem]"
                    )}>
                        WRAP
                    </span>
                </div>
            </div>
        </div>
    );
}
