import React from 'react';
import { Globe, Activity, Database } from 'lucide-react';

export const Approach = () => {
  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-serif mb-6">More than just labeling.</h2>
          <p className="text-xl text-gray-600">
            We operate at the intersection of a research laboratory and a data pipeline. 
            We don&apos;t just collect noise; we curate cultural context.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#FF4D00] mb-8 group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
              <Globe size={24} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Ethical Sourcing</h3>
            <p className="text-gray-600 leading-relaxed">
              We work directly with communities. Data contributors are compensated fairly, ensuring the value of their language stays within the community.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#FF4D00] mb-8 group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
              <Activity size={24} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Acoustic Research</h3>
            <p className="text-gray-600 leading-relaxed">
              Low-resource languages often have unique tonal and phonetic properties. We research the best sampling rates and capture methods for specific dialects.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#FF4D00] mb-8 group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
              <Database size={24} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Clean Datasets</h3>
            <p className="text-gray-600 leading-relaxed">
              We deliver STT (Speech-to-Text) and TTS (Text-to-Speech) ready datasets. Cleaned, tagged, and validated by native linguistic experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

