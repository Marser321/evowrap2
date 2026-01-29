'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoProps {
    variant?: 'header' | 'hero' | 'footer';
    className?: string;
}

export default function Logo({ variant = 'header', className }: LogoProps) {
    // Base classes for the image wrapper
    const wrapperClasses = cn(
        "relative select-none",
        // Mix blend mode multiply helps white backgrounds disappear on dark surfaces
        // Screen helps black backgrounds disappear. 
        // Since the logo is likely black on white or white on black, we need to adjust.
        // Assuming the new logo has a white background and black text (typical for JPG/print).
        // If it's black background with white text, 'screen' is better.
        // Let's assume we might need to invert it nicely.
        // For now, I'll use a mix-blend-mode strategy assuming it's a "logo on background" image.
        variant === 'header' && "h-10 w-auto",
        variant === 'hero' && "w-64 md:w-96",
        variant === 'footer' && "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity",
        className
    );

    return (
        <div className={wrapperClasses}>
            {/* 
        Using a simple img tag for now as Next/Image might be tricky with blended JPGs 
        if we don't know the exact dimensions yet, but for production code Next/Image is better.
        Since I moved it, I know the path.
      */}
            <img
                src="/images/branding/logo-new.jpg"
                alt="Evo Wrap"
                className={cn(
                    "h-full w-full object-contain",
                    // If the logo has a WHITE background and we want to remove it:
                    // mix-blend-multiply (keeps blacks, hides whites) -> works on light backgrounds.
                    // mix-blend-screen (keeps whites, hides blacks) -> works on dark backgrounds.
                    // Since the site is dark mode (neutral-950), we probably want white text.
                    // If the JPG is black text on white, we need to invert it first.
                    "mix-blend-screen"
                )}
            />
        </div>
    );
}
