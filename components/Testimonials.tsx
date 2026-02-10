
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#2D241E] text-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#E68A4D] mb-4">What People Say</h2>
          <h3 className="text-5xl md:text-7xl font-serif-boutique italic">loved by our guests.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="group bg-[#3D3531] rounded-2xl p-10 space-y-8 hover:bg-[#4D4541] transition-all">
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div>
                  <h4 className="text-lg font-serif-boutique italic text-[#FAF9F6]">{t.name.toLowerCase()}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#E68A4D]">{t.handle}</p>
                </div>
              </div>
              <p className="text-lg font-light leading-relaxed italic opacity-80 text-[#FAF9F6]">
                "{t.text}"
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#E68A4D]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
