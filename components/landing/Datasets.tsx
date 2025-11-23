import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

export const Datasets = () => {
  const datasets = [
    { lang: "Fon (Benin)", type: "Conversational / Medical", hours: "500 hrs", status: "Ready" },
    { lang: "Yoruba (Nigeria/Benin)", type: "General Domain", hours: "1,200 hrs", status: "Ready" },
    { lang: "Wolof (Senegal)", type: "Agricultural", hours: "350 hrs", status: "Processing" },
    { lang: "Bhojpuri (India)", type: "Conversational", hours: "800 hrs", status: "Ready" },
  ];

  return (
    <section id="datasets" className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif mb-4">Featured Collections</h2>
            <p className="text-gray-600">High-fidelity datasets available for licensing.</p>
          </div>
          <a href="#" className="text-[#FF4D00] font-medium flex items-center gap-2 mt-4 md:mt-0 hover:gap-4 transition-all">
            View full catalogue <ChevronRight size={20} />
          </a>
        </div>
        <div className="space-y-4">
          {datasets.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row items-center justify-between hover:border-[#FF4D00] transition-colors cursor-pointer group">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
                  <Play size={16} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.lang}</h4>
                  <span className="text-sm text-gray-500">{item.type}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                <div className="text-right">
                  <div className="font-mono text-sm font-medium">{item.hours}</div>
                  <div className="text-xs text-gray-400">Sample Depth</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'Ready' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

