import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SectionBackgroundProps {
    src?: string;
    alt?: string;
    className?: string;
    overlayClassName?: string;
    children?: React.ReactNode;
    opacity?: number;
    priority?: boolean;
}

export default function SectionBackground({
    src,
    alt = "Background",
    className,
    overlayClassName,
    children,
    opacity = 0.4,
    priority = false
}: SectionBackgroundProps) {
    return (
        <div className={cn("absolute inset-0 z-0 overflow-hidden", className)}>
            {/* Background Image/Video Placeholder */}
            {src ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover object-center"
                    priority={priority} // Optimized LCP control
                    quality={80}
                />
            ) : (
                // Fallback: Abstract Dark Gradient if no image provided
                <div className="absolute inset-0 bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            )}

            {/* Dynamic Overlay for Text Legibility */}
            <div
                className={cn(
                    "absolute inset-0 bg-neutral-950",
                    overlayClassName
                )}
                style={{ opacity }}
            />

            {/* Texture Overlay (Noise) for "Film" look */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

            {/* Content Injection (if needed directly in bg container) */}
            {children && <div className="relative z-10">{children}</div>}
        </div>
    );
}
