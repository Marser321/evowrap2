'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const [contextMessage, setContextMessage] = useState("Hola, quiero consultar...");
    const [showLabel, setShowLabel] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Simple logic: check element positions
            const services = document.getElementById('services');
            const diagnosis = document.getElementById('diagnosis');
            const scrollY = window.scrollY;

            if (diagnosis && scrollY >= diagnosis.offsetTop - 300 && scrollY < diagnosis.offsetTop + diagnosis.offsetHeight) {
                setContextMessage("Quiero blindar mi auto contra el salitre");
                setShowLabel(true);
            } else if (services && scrollY >= services.offsetTop - 300 && scrollY < services.offsetTop + services.offsetHeight) {
                setContextMessage("Me interesan sus servicios");
                setShowLabel(true);
            } else {
                setContextMessage("Hola, quiero consultar proceos");
                setShowLabel(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
            <AnimatePresence>
                {showLabel && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="hidden md:block bg-white text-black px-4 py-2 rounded-full shadow-lg font-bold text-sm"
                    >
                        {contextMessage}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                className="relative group p-4 bg-green-500 rounded-full text-white shadow-[0_0_20px_rgba(22,197,90,0.5)] hover:bg-green-400 transition-colors transform hover:scale-110"
                onClick={() => window.open(`https://wa.me/59899999999?text=${encodeURIComponent(contextMessage)}`, '_blank')}
            >
                <MessageCircle size={32} fill="white" className="relative z-10" />
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
            </button>
        </div>
    );
}
