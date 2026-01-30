"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import SectionBackground from "@/components/ui/SectionBackground";
import Hero from "@/components/home/Hero";
import TransformationSection from "@/components/home/TransformationSection";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Star } from "lucide-react";
import ServicesHorizontal from "@/components/home/ServicesHorizontal";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-950 text-white">

      {/* 1. HERO SECTION (Redesigned) */}
      <Hero />

      {/* 2. TRANSFORMATION SECTION (Slider) */}
      <TransformationSection />

      {/* 3. SERVICES HORIZONTAL SCROLL (Restored) */}
      <ServicesHorizontal />

    </main>
  );
}
