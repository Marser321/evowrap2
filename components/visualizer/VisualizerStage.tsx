'use client';

import { useState, useRef } from 'react';
import { Upload, RefreshCw, Palette, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Mock Filters
const FILTERS = [
    { id: 'original', name: 'Original', style: {} },
    { id: 'matte-black', name: 'Matte Stealth', style: { filter: 'grayscale(100%) brightness(40%) contrast(120%)' } },
    { id: 'nardo-grey', name: 'Nardo Grey', style: { filter: 'grayscale(100%) brightness(110%) contrast(90%)' } },
    { id: 'satin-white', name: 'Satin White', style: { filter: 'grayscale(100%) brightness(180%) contrast(80%)' } },
    { id: 'midnight-purple', name: 'Midnight Purple', style: { filter: 'sepia(100%) hue-rotate(240deg) saturate(300%) brightness(60%) contrast(120%)' } },
    { id: 'race-red', name: 'Race Red', style: { filter: 'sepia(100%) hue-rotate(320deg) saturate(400%) brightness(90%) contrast(110%)' } },
    { id: 'miami-blue', name: 'Miami Blue', style: { filter: 'sepia(100%) hue-rotate(150deg) saturate(300%) brightness(110%)' } },
];

export default function VisualizerStage() {
    const [image, setImage] = useState<string>('https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2000&auto=format&fit=crop'); // Default Porsche
    const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImage(url);
            setActiveFilter(FILTERS[0]); // Reset filter
        }
    };

    return (
        <div className="flex flex-col lg:flex-row h-[85vh] gap-6 p-6">

            {/* 1. Main Stage (Canvas) */}
            <div className="flex-1 relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl group">

                {/* The Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <motion.img
                        key={image}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        src={image}
                        alt="Vehicle Preview"
                        className="w-full h-full object-contain transition-all duration-700 ease-in-out"
                        style={activeFilter.style}
                    />

                    {/* Overlay for Texture (e.g. Matte Grain) if needed - Optional */}
                    {activeFilter.id.includes('matte') && (
                        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-lines.png")' }}
                        />
                    )}
                </div>

                {/* Floating Actions */}
                <div className="absolute top-6 right-6 flex gap-2">
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors border border-white/10 text-white"
                        title="Subir Foto"
                    >
                        <Upload className="w-5 h-5" />
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileUpload}
                    />
                    <button
                        onClick={() => setImage('https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2000&auto=format&fit=crop')}
                        className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors border border-white/10 text-white"
                        title="Resetear Demo"
                    >
                        <RefreshCw className="w-5 h-5" />
                    </button>
                </div>

                {/* Current Filter Badge */}
                <div className="absolute bottom-6 left-6">
                    <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                        <Palette className="w-4 h-4 text-indigo-500" />
                        {activeFilter.name}
                    </div>
                </div>

            </div>

            {/* 2. Controls Sidebar */}
            <div className="w-full lg:w-80 flex flex-col gap-4">
                <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/5 h-full backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-2">Evo Studio</h3>
                    <p className="text-zinc-500 text-sm mb-6">Selecciona un acabado para simular el look final.</p>

                    <div className="space-y-3 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter)}
                                className={cn(
                                    "w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-3 group relative overflow-hidden",
                                    activeFilter.id === filter.id
                                        ? "bg-white/10 border-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                                        : "bg-black/20 border-white/5 text-zinc-400 hover:bg-white/5 hover:border-white/10"
                                )}
                            >
                                {/* Color Dot Preview */}
                                <div className="w-8 h-8 rounded-full border border-white/10 shadow-inner" style={filter.id !== 'original' ? { background: filter.id === 'matte-black' ? '#222' : filter.id === 'nardo-grey' ? '#666' : filter.id === 'satin-white' ? '#eee' : filter.id === 'midnight-purple' ? '#3b0764' : filter.id === 'race-red' ? '#991b1b' : filter.id === 'miami-blue' ? '#06b6d4' : 'transparent' } : { background: 'linear-gradient(45deg, #333, #666)' }} />

                                <span className="font-medium group-hover:translate-x-1 transition-transform">
                                    {filter.name}
                                </span>

                                {activeFilter.id === filter.id && (
                                    <motion.div layoutId="active-indicator" className="absolute right-0 top-0 bottom-0 w-1 bg-indigo-500" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                        <button className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                            <Download className="w-5 h-5" />
                            Solicitar este Look
                        </button>
                        <p className="text-center text-xs text-zinc-600 mt-2">
                            *Simulación aproximada. Los colores reales pueden variar.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
