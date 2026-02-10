
import React, { useState, useEffect, useRef } from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredItems = filter === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const items = containerRef.current?.querySelectorAll('.reveal');
    items?.forEach(i => observer.observe(i));
    return () => observer.disconnect();
  }, [filter]);

  return (
    <section id="menu" ref={containerRef} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="reveal w-full md:w-auto">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#E68A4D] mb-4">What We Serve</h2>
            <h3 className="text-4xl md:text-7xl font-serif-boutique italic">fresh, generous & good.</h3>
          </div>
          <div className="reveal delay-200 flex flex-wrap gap-3 md:gap-6 w-full md:w-auto">
            {['all', 'burgers', 'sides', 'drinks'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${filter === cat
                    ? 'bg-[#E68A4D] text-white shadow-lg'
                    : 'bg-[#F5F3F0] text-[#2D241E]/60 hover:bg-[#F5F3F0] hover:text-[#2D241E]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className={`reveal group transition-all duration-700`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[4/5] bg-[#FAF9F6] border border-[#2D241E]/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                {item.badge && (
                  <div className="absolute bottom-6 left-6 bg-[#2D241E] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                    {item.badge}
                  </div>
                )}
              </div>
              <div className="space-y-4 px-2">
                <div className="flex justify-between items-baseline gap-2">
                  <h4 className="text-xl md:text-3xl font-serif-boutique italic">{item.name.toLowerCase()}</h4>
                  <span className="text-xs md:text-sm font-light text-[#2D241E]/40 shrink-0">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-xs md:text-sm text-[#2D241E]/60 leading-relaxed font-light line-clamp-3">
                  {item.description}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E68A4D]">
                    House Favorite
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
