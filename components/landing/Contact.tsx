import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="bg-[#1A1A1A] rounded-[2rem] p-12 md:p-24 relative overflow-hidden text-center">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF4D00] rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
              Build the future <br/>of local voice.
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Whether you are an LLM provider needing diverse data, or a linguist wanting to preserve a dialect, we want to talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#FF4D00] text-white rounded-full text-lg font-medium hover:bg-[#ff6a2b] transition-colors">
                Contact Sales
              </button>
              <button className="px-8 py-4 bg-transparent border border-gray-600 text-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all">
                Join the Lab
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

