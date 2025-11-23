"use client";

import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { SoundWave } from '@/components/landing/SoundWave';
import { Mission } from '@/components/landing/Mission';
import { Datasets } from '@/components/landing/Datasets';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';
import { BentoGrid } from '@/components/landing/BentoGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#FF4D00] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <SoundWave />
      <Mission />
      <BentoGrid />
      <Datasets />
      <Contact />
      <Footer />
    </div>
  );
}
