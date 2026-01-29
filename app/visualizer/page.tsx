'use client';

import VisualizerStage from '@/components/visualizer/VisualizerStage';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function VisualizerPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
            {/* Header */}
            <header className="h-[10vh] border-b border-white/5 flex items-center justify-between px-8 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ArrowLeft className="w-6 h-6 text-zinc-400" />
                    </Link>
                    <h1 className="text-2xl font-black tracking-tighter">
                        EVO <span className="text-indigo-500">STUDIO</span>
                    </h1>
                </div>
                <div className="hidden md:block text-xs uppercase tracking-widest text-zinc-500 font-bold border border-white/10 px-3 py-1 rounded-full">
                    Beta v1.0
                </div>
            </header>

            {/* Editor Stage */}
            <VisualizerStage />

        </main>
    );
}
