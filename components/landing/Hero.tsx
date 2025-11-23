import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Static Abstract Visuals */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform rotate-12">
           <path fill="#FF4D00" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.1,22.9,71.3,34.6C60.5,46.3,50.3,56.1,38.6,63.6C26.9,71.1,13.7,76.3,-0.9,77.9C-15.5,79.4,-29.6,77.3,-41.8,70.3C-54,63.3,-64.3,51.4,-72.2,38.1C-80.1,24.8,-85.6,10.1,-84.1,-4.1C-82.6,-18.3,-74.1,-32,-63.9,-43.3C-53.7,-54.6,-41.8,-63.5,-29.2,-71.7C-16.6,-79.9,-3.3,-87.4,9.2,-85.8L21.7,-84.2L44.7,-76.4Z" transform="translate(100 100)" />
         </svg>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/50 border border-orange-200 text-[#FF4D00] text-xs font-bold tracking-wider mb-8 uppercase">
            The Voice of the 99%
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tighter mb-8 text-[#1A1A1A]">
            Giving the <span className="text-[#FF4D00]">rest of the world</span> <br />
            <span className="italic font-light text-gray-500">a voice in the age of AI.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-12">
            We are building the data infrastructure for the billions left behind. A voice-first data foundry and research lab for the Global South.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full text-lg font-medium hover:bg-[#FF4D00] transition-colors flex items-center gap-3">
              Explore our datasets <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-gray-300 text-[#1A1A1A] rounded-full text-lg font-medium hover:border-[#1A1A1A] transition-colors">
              Read our Manifesto
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

