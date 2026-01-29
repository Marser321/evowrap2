'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HorizontalScroll({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: containerRef });

    // Optional: Add a progress bar or indicator based on scrollXProgress

    return (
        <div
            ref={containerRef}
            className="flex flex-nowrap overflow-x-auto overflow-y-hidden h-screen w-screen snap-x snap-mandatory scroll-smooth bg-black"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar
        >
            <style jsx global>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

            {children}
        </div>
    );
}
