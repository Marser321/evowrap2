'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* Base Dark Layer */}
            {/* Base Dark Layer removed to blend, or kept with lower opacity if needed. Let's make it fully transparent to blend with page bg */}
            <div className="absolute inset-0 bg-neutral-950/80" />

            {/* 1. Dynamic Tech Grid - Simulates a floor/road */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    animate={{
                        backgroundPosition: ["0px 0px", "0px 64px"]
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        transform: "perspective(500px) rotateX(60deg)"
                    }}
                    className="absolute w-[300%] h-[300%] -top-[100%] -left-[50%] bg-[linear-gradient(to_right,rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-100"
                />
            </div>

            {/* 2. Primary Spotlight (Indigo) */}
            <motion.div
                initial={{ opacity: 0.6, scale: 0.8 }}
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.8, 1.1, 0.8] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-600/20 rounded-full blur-[100px] mix-blend-screen"
            />

            {/* 3. Secondary Flowing Glows (Automotive Sheen) */}
            <motion.div
                animate={{
                    x: ['-20%', '20%', '-20%'],
                    y: ['-10%', '10%', '-10%'],
                    rotate: [0, 10, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-amber-900/10 rounded-full blur-[100px]"
            />

            <motion.div
                animate={{
                    x: ['20%', '-20%', '20%'],
                    y: ['10%', '-10%', '10%'],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-gold-900/10 rounded-full blur-[100px]"
            />

            {/* 4. Speed Particles / Dust */}
            <div className="absolute inset-0 opacity-30">
                <ParticleSystem />
            </div>

            {/* 5. Vignette Overlay for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.2)_40%,rgba(10,10,10,0.9)_100%)]" />
        </div>
    );
}

function ParticleSystem() {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        setParticles([...Array(20)].map((_, i) => ({
            id: i,
            initialX: Math.random() * 1000 - 500 + "%",
            initialY: Math.random() * 1000 - 500 + "%",
            initialOpacity: Math.random() * 0.5 + 0.2,
            targetY: Math.random() * 100 - 50 + "%",
            duration: Math.random() * 10 + 10,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
        })));
    }, []);

    return (
        <>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{
                        x: p.initialX,
                        y: p.initialY,
                        opacity: p.initialOpacity,
                    }}
                    animate={{
                        y: [null, p.targetY],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                    style={{
                        left: p.left,
                        top: p.top,
                    }}
                />
            ))}
        </>
    );
}
