"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF4D00] rounded-full flex items-center justify-center">
            <div className="w-1 h-4 bg-[#FDFBF7] rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight font-serif">Voice99.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#mission" className="text-sm font-medium hover:text-[#FF4D00] transition-colors">Mission</a>
          <a href="#approach" className="text-sm font-medium hover:text-[#FF4D00] transition-colors">Approach</a>
          <a href="#datasets" className="text-sm font-medium hover:text-[#FF4D00] transition-colors">Datasets</a>
          <a href="#contact" className="px-5 py-2.5 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-[#FF4D00] transition-colors">
            Partner with us
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FDFBF7] border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden">
          <a href="#mission" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Mission</a>
          <a href="#approach" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Approach</a>
          <a href="#datasets" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Datasets</a>
          <a href="#contact" className="text-lg font-medium text-[#FF4D00]" onClick={() => setIsMenuOpen(false)}>Partner with us</a>
        </div>
      )}
    </nav>
  );
};

