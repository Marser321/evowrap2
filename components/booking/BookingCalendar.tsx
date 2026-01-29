'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

export default function BookingCalendar() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Fake availability data
    // Logic: "Ploteo Completo" requires 3 days. We simulate a check.
    const isDateAvailable = (day: number) => {
        // Simulate fully booked weekends
        if (day % 7 === 0 || day % 7 === 6) return false;
        return true;
    };

    const handleDateClick = (day: number) => {
        if (isDateAvailable(day)) {
            // Logic: Check if next 2 days are also available for "Ploteo"
            // This is a mockup; real logic connects to Supabase
            alert(`Seleccionaste el día ${day}. El sistema verifica disponibilidad de 3 días consecutivos para Ploteo.`);
        }
    };

    return (
        <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl max-w-md mx-auto">
            <div className="flex items-center justify-between mb-6 text-white">
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-indigo-500" />
                    Agendar Cita
                </h3>
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-zinc-800 rounded-full"><ChevronLeft className="w-5 h-5" /></button>
                    <button className="p-2 hover:bg-zinc-800 rounded-full"><ChevronRight className="w-5 h-5" /></button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm text-zinc-400 mb-2">
                <div>Do</div><div>Lu</div><div>Ma</div><div>Mi</div><div>Ju</div><div>Vi</div><div>Sa</div>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                    const available = isDateAvailable(day);
                    return (
                        <button
                            key={day}
                            onClick={() => handleDateClick(day)}
                            disabled={!available}
                            className={cn(
                                "h-10 w-10 rounded-lg flex items-center justify-center transition-all",
                                available
                                    ? "bg-zinc-800 text-white hover:bg-indigo-600 hover:scale-105"
                                    : "bg-zinc-900/50 text-zinc-700 cursor-not-allowed line-through",
                                selectedDate?.getDate() === day && "bg-indigo-600 ring-2 ring-indigo-400"
                            )}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>

            <div className="mt-4 text-xs text-zinc-500 text-center">
                *Ploteos requieren 3 días consecutivos libres.
            </div>
        </div>
    );
}
