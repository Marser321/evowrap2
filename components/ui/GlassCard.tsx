import { cn } from '@/lib/utils';
import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    intensity?: 'low' | 'medium' | 'high';
    interactive?: boolean;
}

export default function GlassCard({
    children,
    className,
    intensity = 'medium',
    interactive = false,
    ...props
}: GlassCardProps) {

    const blurMap = {
        low: 'backdrop-blur-sm',
        medium: 'backdrop-blur-md',
        high: 'backdrop-blur-xl'
    };

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl",
                blurMap[intensity],
                interactive && "transition-all duration-300 hover:bg-black/50 hover:border-white/20 hover:scale-[1.02]",
                className
            )}
            {...props}
        >
            {/* Glossy reflection gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
