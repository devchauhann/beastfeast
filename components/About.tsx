
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="reveal">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#E68A4D] mb-4">Our Ritual</h2>
              <h3 className="text-5xl md:text-7xl font-serif-boutique italic leading-tight">the art of<br />the soft bite.</h3>
            </div>
            
            <p className="text-lg text-[#2D241E]/70 leading-relaxed font-light reveal delay-200">
              BeastFeast isn't just a kitchen; it's a sanctuary for those who value the intersection of premium culinary craft and deep sensory comfort. Every element of our burgers—from the 48-hour fermented brioche to the custom grind of wagyu—is a ritual of care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 reveal delay-400">
              {[
                { title: 'Ritual Sourcing', desc: 'Working with single-estate farms for every herb.' },
                { title: 'Patient Prep', desc: 'Cold-fermented buns for the softest cloud feel.' },
                { title: 'Intentional Space', desc: 'Minimalist aesthetics for maximal calm.' }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-[#2D241E]/5 rounded-[2rem] bg-white shadow-sm">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-[#2D241E] mb-2">{item.title}</h4>
                  <p className="text-xs text-[#2D241E]/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal delay-600">
            <div className="rounded-[4rem] overflow-hidden border border-[#2D241E]/5">
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1530&auto=format&fit=crop" 
                alt="Burger Craft" 
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute top-12 -right-12 w-48 h-48 bg-[#E68A4D] rounded-full p-8 text-white flex items-center justify-center text-center rotate-12 hidden lg:flex">
              <p className="font-serif-boutique italic text-2xl leading-none">handcrafted comfort.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
