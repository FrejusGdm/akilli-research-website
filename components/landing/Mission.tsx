import React from 'react';

export const Mission = () => {
  const stats = [
    { label: "Languages Covered", value: "45+" },
    { label: "Hours of Audio", value: "10k+" },
    { label: "Native Speakers", value: "5000" },
    { label: "Dialect Diversity", value: "High" }
  ];

  return (
    <section id="mission" className="py-24 bg-[#1A1A1A] text-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              The language gap is <br />
              <span className="text-[#FF4D00] italic">the new digital divide.</span>
            </h2>
          </div>
          <div className="space-y-8 text-lg text-gray-400 leading-relaxed font-light">
            <p>
              Today, the most advanced AI models only fluently speak English, Mandarin, and a handful of European languages.
            </p>
            <p>
              This creates a massive barrier for billions of people across Africa and Asia who cannot access the benefits of AI in their native tongues. The technology exists, but the data to power it does not.
            </p>
            <p className="text-white font-medium">
              We are building the data foundation to make it possible.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-gray-800 pt-12">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-serif text-[#FF4D00] mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
