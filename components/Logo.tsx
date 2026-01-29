import React from "react";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <svg
                viewBox="0 0 300 100"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto"
                aria-label="Evo Wrap Logo"
            >
                <defs>
                    <linearGradient id="gradB" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#ccc", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                <text
                    x="10"
                    y="70"
                    fontFamily="Impact, sans-serif"
                    fontStyle="italic"
                    fontSize="60"
                    fill="url(#gradB)"
                    transform="skewX(-15)"
                    letterSpacing="-2"
                >
                    EVO
                </text>

                {/* "Speed Line" underline */}
                <path
                    d="M10 80 L280 80 L260 85 L-10 85 Z"
                    fill="#ccff00"
                    transform="skewX(-15)"
                />

                <text
                    x="130"
                    y="70"
                    fontFamily="Arial, sans-serif"
                    fontWeight="800"
                    fontStyle="italic"
                    fontSize="60"
                    fill="none"
                    stroke="#ccff00"
                    strokeWidth="2"
                    transform="skewX(-15)"
                >
                    WRAP
                </text>
            </svg>
        </div>
    );
};
