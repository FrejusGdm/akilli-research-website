import React from 'react';

// Custom Feature Icons

export const NetworkGlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FF4D00]">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2"/>
    <path d="M12 2C12 2 16 7 16 12C16 17 12 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 2C12 2 8 7 8 12C8 17 12 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2.5 9H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2.5 15H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <circle cx="16" cy="15" r="1.5" fill="currentColor" className="animate-pulse"/>
    <circle cx="8" cy="9" r="1.5" fill="currentColor" className="animate-pulse delay-75"/>
  </svg>
);

export const WaveformIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
    <path d="M3 12L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 12L7.5 10L8.5 14L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 12L15.5 14L16.5 10L17 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 12L11.5 7L12.5 17L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
  </svg>
);

export const CleanDataIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600">
    <path d="M12 3L4 7L12 11L20 7L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 17L12 21L20 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="1" fill="currentColor"/>
  </svg>
);

export const ComplianceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600">
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 16V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const BentoGrid = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif mb-6">The Foundry Architecture</h2>
          <p className="text-xl text-gray-600">
            We combine community-driven sourcing with rigorous acoustic science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Ethical Sourcing (Large, spans 2 columns) */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-100 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                {/* Enhanced Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 shadow-sm flex items-center justify-center">
                  <NetworkGlobeIcon />
                </div>
                <h3 className="text-2xl font-serif">Ethical Sourcing</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <p className="text-gray-600 leading-relaxed">
                  We treat data contributors as partners, not resources. Our direct-to-community model ensures fair compensation and cultural preservation.
                </p>
                {/* Micro-visualization: Map nodes */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-400">Active Nodes</span>
                    <span className="text-xs font-bold text-green-600">Live</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]"></span> Cotonou, BJ</span>
                      <span className="font-mono text-gray-500">45ms</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span> Lagos, NG</span>
                      <span className="font-mono text-gray-500">12ms</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span> Dakar, SN</span>
                      <span className="font-mono text-gray-500">89ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Acoustic Research (Tall, spans 1 column, 2 rows height) */}
          <div className="md:row-span-2 bg-[#1A1A1A] rounded-3xl p-8 border border-gray-800 text-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 50 Q 25 80 50 50 T 100 50" stroke="#FF4D00" strokeWidth="0.5" fill="none" />
                  <path d="M0 50 Q 25 20 50 50 T 100 50" stroke="#FF4D00" strokeWidth="0.5" fill="none" />
                  <path d="M0 50 Q 25 65 50 50 T 100 50" stroke="white" strokeWidth="0.2" fill="none" />
                </svg>
             </div>

            <div className="relative z-10 h-full flex flex-col">
               {/* Enhanced Icon Container - Dark Mode */}
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <WaveformIcon />
              </div>
              <h3 className="text-2xl font-serif mb-4">Acoustic Lab</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Dialects have unique fingerprints. We research sampling rates (44.1kHz+) and mic placement for tonal languages.
              </p>
              
              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="flex items-end gap-1 h-12 justify-between opacity-50">
                  {[40, 70, 30, 80, 50, 90, 20, 60, 40, 80, 50].map((h, i) => (
                    <div key={i} className="w-2 bg-[#FF4D00]" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="text-xs font-mono text-gray-500 mt-2 text-center">SPECTRAL ANALYSIS</div>
              </div>
            </div>
          </div>

          {/* Card 3: Clean Datasets (Standard) */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3 mb-4">
              {/* Enhanced Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm flex items-center justify-center">
                <CleanDataIcon />
              </div>
              <h3 className="text-xl font-bold">Clean Data</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Pre-processed, tagged, and validated. Ready for immediate training.
            </p>
            <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs text-green-400 overflow-hidden">
              <div className="opacity-50 text-gray-400">// export.json</div>
              <div>{"{"}</div>
              <div className="pl-2">"lang": "fon",</div>
              <div className="pl-2">"confidence": 0.98,</div>
              <div className="pl-2">"validated": true</div>
              <div>{"}"}</div>
            </div>
          </div>

          {/* Card 4: Security/Compliance (Standard) */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3 mb-4">
               {/* Enhanced Icon Container */}
               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-sm flex items-center justify-center">
                <ComplianceIcon />
              </div>
              <h3 className="text-xl font-bold">Compliance</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Full GDPR & local data sovereignty compliance. You own the model; communities own the voice.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
