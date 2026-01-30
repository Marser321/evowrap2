'use client';

import { LayoutDashboard, Calendar, Users, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import BrandWatermark from '@/components/ui/BrandWatermark';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-zinc-950 text-white">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-zinc-900/50 backdrop-blur-xl hidden md:flex flex-col relative overflow-hidden">
                <BrandWatermark opacity={0.03} scale={1.2} />

                <div className="p-8 pb-4 relative z-10">
                    <img src="/images/branding/logo-full.png" alt="Evo Wrap Admin" className="h-8 mb-2 invert brightness-0 invert-1" />
                    <p className="text-xs text-zinc-500 tracking-widest uppercase mt-1 pl-1">Mission Control</p>
                </div>

                <nav className="flex-1 px-4 space-y-2 relative z-10">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-500/10 text-indigo-400 font-medium">
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link href="/admin/calendar" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                        <Calendar className="w-5 h-5" />
                        Calendario
                    </Link>
                    <Link href="/admin/clients" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                        <Users className="w-5 h-5" />
                        Clientes
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                        <Settings className="w-5 h-5" />
                        Configuración
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-red-500/10 text-zinc-400 hover:text-red-400 transition-colors">
                        <LogOut className="w-5 h-5" />
                        Cerrar Sesión
                    </button>
                </div>
            </aside>

            {/* Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
