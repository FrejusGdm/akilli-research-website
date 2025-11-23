import React from 'react';
import { Globe, Users, Activity } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#FDFBF7] py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm">
          © 2025 Voice99 Research Lab. Cotonou • Bangalore • Global.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-[#FF4D00] transition-colors"><Globe size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-[#FF4D00] transition-colors"><Users size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-[#FF4D00] transition-colors"><Activity size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

