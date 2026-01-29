'use client';

import { cn } from '@/lib/utils';
import { Orbitron } from 'next/font/google';

// Load a futuristic font nicely
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
    // Premium Metallic Gradient Text
    // This creates a chrome-like effect purely with CSS
    const textGradientClass = "bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-500";

    return (
        <div className={cn("flex items-center gap-2 select-none", className)}>
            {/* Stylized Icon - Abstract "E" or Shield */}
            <div className={cn(
                "relative flex items-center justify-center",
                variant === 'hero' ? "w-16 h-16" : "w-10 h-10"
            )}>
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                    <defs>
                        <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#E2E8F0" />
                            <stop offset="50%" stopColor="#94A3B8" />
                            <stop offset="100%" stopColor="#475569" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M 10 20 L 90 20 L 70 80 L 10 80 Z"
                        fill="none"
                        stroke="url(#metal-gradient)"
                        strokeWidth="8"
                        className="drop-shadow-lg"
                    />
                    <path
                        d="M 25 35 L 75 35 M 25 50 L 65 50 M 25 65 L 55 65"
                        stroke="white"
                        strokeWidth="6"
                        strokeLinecap="square"
                        className="opacity-90"
                    />
                </svg>
            </div>

            {/* Typography */}
            <div className={cn(
                orbitron.className,
                "font-black tracking-wider flex flex-col leading-none",
                variant === 'hero' ? "text-5xl" : "text-2xl"
            )}>
                <span className={textGradientClass}>EVO</span>
                <span className={cn(textGradientClass, "text-[0.6em] tracking-[0.2em] text-indigo-400")}>WRAP</span>
            </div>
        </div>
    );
}
