import React from "react";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <svg
                viewBox="0 0 500 100" // Adjusted aspect ratio for the wide logo
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto"
                aria-label="Evo Wrap Logo"
            >
                {/* --- Emblem (Left Side) --- */}
                <g transform="translate(10, 10) scale(0.8)">
                    {/* Outer Hexagon Shield Parts */}
                    <path d="M20,10 L70,10 L85,50 L70,90 L20,90 L5,50 Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />

                    {/* Stylized 'E' / 'W' inside */}
                    <path d="M30,30 L60,30 M30,50 L55,50 M30,70 L60,70" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    {/* Diagonal cuts for speed/aggression */}
                    <path d="M65,30 L55,70" fill="none" stroke="currentColor" strokeWidth="4" />
                </g>

                {/* --- Top & Bottom Horizontal Lines --- */}
                {/* Connect from emblem area to end of text */}
                <rect x="90" y="15" width="400" height="8" rx="2" fill="currentColor" />
                <rect x="90" y="77" width="400" height="8" rx="2" fill="currentColor" />

                {/* --- Text "EVOWRAP" --- */}
                <text
                    x="100"
                    y="68"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontWeight="900"
                    fontSize="50"
                    letterSpacing="2"
                    fill="currentColor"
                >
                    EVOWRAP
                </text>
            </svg>
        </div>
    );
};
