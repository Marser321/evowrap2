'use client';

import { useRef, useId } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ProcessStep } from '@/lib/services-data';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ProcessTimelineProps {
    steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <section ref={containerRef} className="relative py-24 bg-neutral-950 overflow-hidden">
            {/* Background Ambient Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 mb-4"
                    >
                        El Proceso EVO
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-400 max-w-2xl mx-auto"
                    >
                        Ciencia y precisión en cada etapa. No saltamos pasos; perfeccionamos cada detalle para un resultado de exhibición.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Vertical Line Container */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-neutral-800 h-full rounded-full">
                        <motion.div
                            style={{ scaleY, transformOrigin: 'top' }}
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-500 origin-top h-full"
                        />
                    </div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <TimelineItem
                                key={index}
                                step={step}
                                index={index}
                                total={steps.length}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ step, index, total }: { step: ProcessStep; index: number; total: number }) {
    const isEven = index % 2 === 0;
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center center'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const highlight = useTransform(scrollYProgress, [0.8, 1], ["rgba(163, 163, 163, 0.1)", "rgba(56, 189, 248, 0.15)"]);
    const iconColor = useTransform(scrollYProgress, [0.8, 1], ["#525252", "#38bdf8"]);

    const Icon = step.icon as LucideIcon;

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale }}
            className={cn(
                "relative flex items-start md:items-center gap-6 md:gap-0",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            )}
        >
            {/* Node on the line */}
            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-neutral-800 bg-neutral-950 z-20 flex items-center justify-center">
                <motion.div
                    style={{ backgroundColor: iconColor }}
                    className="w-2 h-2 rounded-full"
                />
            </div>

            {/* Spacer for the other side on desktop */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content Card */}
            <div className={cn(
                "pl-12 md:pl-0 w-full md:w-1/2",
                isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
            )}>
                <motion.div
                    style={{ backgroundColor: highlight, borderColor: iconColor }}
                    className="p-6 rounded-2xl border border-neutral-800/50 backdrop-blur-sm transition-colors duration-500"
                >
                    <div className={cn(
                        "flex items-center gap-3 mb-3",
                        isEven ? "md:flex-row-reverse" : "md:flex-row"
                    )}>
                        <div className="p-2 rounded-lg bg-neutral-900/50 text-sky-400">
                            <Icon size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-100">{step.title}</h3>
                    </div>
                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                        {step.description}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}
