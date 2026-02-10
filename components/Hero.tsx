
import React, { useEffect, useRef } from 'react';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const items = containerRef.current?.querySelectorAll('.reveal');
    items?.forEach(i => observer.observe(i));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 md:pt-24 px-6 md:px-12 pb-32 md:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-center">

        <div className="md:col-span-7 space-y-8 md:space-y-16 lg:space-y-20">
          <div className="reveal">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif-boutique italic leading-[0.9] text-[#2D241E]">
              comfort<br />
              food,<br />
              <span className="text-[#E68A4D]">honestly good.</span>
            </h1>
          </div>

          <div className="reveal delay-200 flex flex-col gap-8 md:gap-12 lg:gap-14">
            <p className="text-base md:text-lg lg:text-xl text-[#2D241E]/70 leading-relaxed font-light max-w-lg">
              BeastFeast Café is where comfort food meets thoughtful quality. Curated for people who love big flavors without overpaying—serving food that feels indulgent, satisfying, and consistently good.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start flex-wrap">
              <a href="#menu" className="group inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#E68A4D] text-white rounded-full font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-[#2D241E] transition-all duration-500 hover:shadow-lg">
                View Our Menu
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <a href="https://www.swiggy.com/city/meerut/beast-feast-cafe-partapur-meerut-rest993848?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#2D241E] text-white rounded-full font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-[#E68A4D] transition-all duration-500 hover:shadow-lg">
                <FaPhone size={16} />
                Book a Order
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative w-full">
          <div className="reveal delay-400 relative z-10 rounded-3xl md:rounded-[4rem] overflow-hidden border-[1px] border-[#2D241E]/10">
            <img
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1471&auto=format&fit=crop"
              alt="Artistic Burger"
              className="w-full h-full object-cover aspect-[3/4] md:aspect-[4/5] hover:scale-105 transition-transform duration-[2s] ease-out"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-16 bg-white p-5 md:p-8 rounded-xl md:rounded-2xl border border-[#2D241E]/5 shadow-sm max-w-[200px] md:max-w-[240px] hidden md:block reveal delay-700">
            <p className="text-xs uppercase tracking-widest text-[#2D241E]/40 mb-2 font-bold">Today's Favorite</p>
            <p className="font-serif-boutique italic text-lg md:text-2xl">fresh, honest, indulgent</p>
          </div>
        </div>

      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#2D241E] py-4 md:py-6 text-[#FAF9F6] border-t border-[#FAF9F6]/10 overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-[marquee_50s_linear_infinite] shrink-0">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-16 md:mx-20 flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em]">
              <span className="w-2 h-2 rounded-full bg-[#E68A4D]"></span>
              Available on Swiggy
              <span className="w-2 h-2 rounded-full bg-[#E68A4D]"></span>
              Available on Zomato
              <span className="w-2 h-2 rounded-full bg-[#E68A4D]"></span>
              Order Online Now
            </span>
          ))}
        </div>
        <div className="flex animate-[marquee_60s_linear_infinite] shrink-0">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-16 md:mx-20 flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em]">
              <span className="w-2 h-2 rounded-full bg-[#E68A4D]"></span>
              Available on Swiggy
              <span className="w-2 h-2 rounded-full bg-[#E68A4D]"></span>
              Available on Zomato
              <span className="w-2 h-2 rounded-full bg-[#E68A4D]"></span>
              Order Online Now
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
