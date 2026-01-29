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
        variant === 'header' && "h-10 w-auto",
        variant === 'hero' && "w-64 md:w-96",
        variant === 'footer' && "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity",
        className
    );

    return (
        <div className={wrapperClasses}>
            <Image
                src="/images/branding/logo-metal-dark.png"
                alt="Evo Wrap"
                width={500}
                height={150}
                className="w-full h-full object-contain"
                priority={variant === 'header' || variant === 'hero'}
            />
        </div>
    );
}
