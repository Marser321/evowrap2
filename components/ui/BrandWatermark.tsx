'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BrandWatermarkProps {
    opacity?: number;
    className?: string;
    scale?: number;
}

export default function BrandWatermark({
    opacity = 0.05,
    className = "",
    scale = 1.5
}: BrandWatermarkProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: opacity }}
                transition={{ duration: 1.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] flex items-center justify-center"
            >
                <img
                    src="/images/branding/logo-icon.png"
                    alt=""
                    className="w-full h-full object-contain invert brightness-0 invert-1 dark:invert"
                    style={{ transform: `scale(${scale})` }}
                />
            </motion.div>
        </div>
    );
}
