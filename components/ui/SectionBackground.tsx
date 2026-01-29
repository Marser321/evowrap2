'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

interface SectionBackgroundProps {
    src: string;
    alt?: string;
    className?: string;
    opacity?: number;
    overlayColor?: string; // e.g., 'bg-neutral-950/80'
    /**
     * If true, prioritizes image loading (eager load).
     * Use for LCP images (e.g. Hero section) to improve performance.
     * Default: false (lazy load).
     */
    priority?: boolean;
}

export default function SectionBackground({
    src,
    alt = "Background",
    className,
    opacity = 0.4,
    overlayColor = 'bg-neutral-950/90', // Default strong dark overlay
    priority = false
}: SectionBackgroundProps) {
    return (
        <div className={cn("absolute inset-0 -z-10 overflow-hidden pointer-events-none", className)}>
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950 z-10" />
            <div className={cn("absolute inset-0 z-10 backdrop-blur-[2px]", overlayColor)} />

            {/* Image Container */}
            <div className="relative w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    style={{ opacity: opacity }}
                    priority={priority}
                />
            </div>
        </div>
    );
}
