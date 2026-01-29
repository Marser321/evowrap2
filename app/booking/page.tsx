'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Car, Wrench, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function BookingWizard() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        carMake: '',
        carModel: '',
        carYear: '',
        serviceType: '',
        date: '',
        time: '' // Will handle time slot if needed
    });

    const services = [
        { id: 'ceramic', title: 'Tratamiento Cerámico', price: 'Desde $300' },
        { id: 'ppf', title: 'PPF (Paint Protection Film)', price: 'Desde $800' },
        { id: 'detailing', title: 'Detailing Interior Pro', price: 'Desde $150' },
        { id: 'correction', title: 'Corrección de Pintura', price: 'Desde $200' },
    ];

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
    const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            // Basic validation
            if (!formData.name || !formData.phone || !formData.date) {
                alert('Por favor completa todos los campos requeridos');
                setLoading(false);
                return;
            }

            const { error } = await supabase
                .from('citas')
                .insert([
                    {
                        contact_name: formData.name,
                        contact_phone: formData.phone,
                        car_details: `${formData.carMake} ${formData.carModel} (${formData.carYear})`,
                        service_type: formData.serviceType,
                        requested_date: formData.date
                    }
                ]);

            if (error) throw error;

            alert('¡Reserva solicitada con éxito! Te contactaremos por WhatsApp.');
            router.push('/');
        } catch (error) {
            console.error('Error booking:', error);
            alert('Hubo un error al procesar tu reserva. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 py-32 px-4 transition-colors">
            <div className="max-w-2xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Agenda tu Visita</h1>
                    <p className="text-zinc-400">Configura tu servicio en 3 simples pasos</p>

                    {/* Progress Bar */}
                    <div className="flex items-center justify-center mt-8 gap-4">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= s ? 'bg-indigo-600 text-white' : 'bg-zinc-800 text-zinc-500'}`}>
                                    {s}
                                </div>
                                {s < 3 && <div className={`w-12 h-1 ${step > s ? 'bg-indigo-600' : 'bg-zinc-800'} mx-2`} />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-xl">
                    <AnimatePresence mode="wait">

                        {/* STEP 1: CLIENT & VEHICLE */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                                    <Car className="text-indigo-500" /> Datos del Vehículo
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Tu Nombre"
                                        className="w-full bg-zinc-950 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500"
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Teléfono (WhatsApp)"
                                        className="w-full bg-zinc-950 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500"
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Marca (ej. BMW)"
                                        className="w-full bg-zinc-950 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500"
                                        value={formData.carMake}
                                        onChange={(e) => handleChange('carMake', e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Modelo (ej. Serie 3)"
                                        className="w-full bg-zinc-950 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500"
                                        value={formData.carModel}
                                        onChange={(e) => handleChange('carModel', e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Año"
                                        className="w-full bg-zinc-950 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500"
                                        value={formData.carYear}
                                        onChange={(e) => handleChange('carYear', e.target.value)}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: SERVICES */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                                    <Wrench className="text-indigo-500" /> Selección de Servicio
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {services.map((svc) => (
                                        <div
                                            key={svc.id}
                                            onClick={() => handleChange('serviceType', svc.id)}
                                            className={`p-6 rounded-xl border cursor-pointer transition-all ${formData.serviceType === svc.id ? 'bg-indigo-600/20 border-indigo-500' : 'bg-zinc-950 border-white/10 hover:border-white/30'}`}
                                        >
                                            <h4 className="font-bold text-white mb-1">{svc.title}</h4>
                                            <p className="text-zinc-400 text-sm">{svc.price}</p>
                                            {formData.serviceType === svc.id && <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-2" />}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: DATE */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                                    <Calendar className="text-indigo-500" /> Fecha Preferida
                                </h3>
                                <p className="text-zinc-400 text-sm mb-4">Selecciona una fecha aproximada. Confirmaremos la disponibilidad exacta por WhatsApp.</p>

                                <input
                                    type="date"
                                    className="w-full bg-zinc-950 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 color-scheme-dark"
                                    value={formData.date}
                                    onChange={(e) => handleChange('date', e.target.value)}
                                />

                                <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl mt-4">
                                    <p className="text-orange-200 text-sm">⚠️ Nota: Los tiempos de entrega varían según el tratamiento (3-5 días para Ploteo Completo).</p>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>

                    <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
                        {step > 1 ? (
                            <button onClick={handleBack} className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white flex items-center gap-2 transition-colors">
                                <ChevronLeft className="w-4 h-4" /> Volver
                            </button>
                        ) : <div />}

                        {step < 3 ? (
                            <button onClick={handleNext} className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold flex items-center gap-2 transition-colors">
                                Siguiente <ChevronRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="px-8 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold flex items-center gap-2 transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Procesando...' : 'Confirmar Reserva'} <CheckCircle2 className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
