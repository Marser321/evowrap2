'use client';

import { motion } from 'framer-motion';

export default function BackgroundGlow() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden bg-neutral-950">
            {/* Deep Space Base */}
            <div className="absolute inset-0 bg-neutral-950" />

            {/* Primary Glow (Indigo/Purple) - Moving slowly */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-900/20 blur-[120px]"
            />

            {/* Secondary Glow (Cyan/Sky) - Bottom Right */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -30, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-sky-900/20 blur-[100px]"
            />

            {/* Accent Glow (Center) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-indigo-500/5 blur-[80px]" />
        </div>
    );
}
