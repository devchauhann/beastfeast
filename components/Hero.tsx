
import React, { useEffect, useRef } from 'react';

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

            {/* Primary CTA Button */}
            <div className="flex justify-center md:justify-start">
              <a href="#menu" className="group inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#E68A4D] text-white rounded-full font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-[#2D241E] transition-all duration-500 hover:shadow-lg">
                View Our Menu
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
            </div>

            {/* Swiggy and Zomato Order Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#2D241E]/60 text-center md:text-left">Order on</h3>
              <div className="flex items-center justify-center md:justify-start gap-6 flex-wrap">
                <a href="https://www.swiggy.com/city/meerut/beast-feast-cafe-partapur-meerut-rest993848?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 transition-all duration-500 cursor-pointer group">
                  <img src="./swiggy.svg" alt="Swiggy" className="h-7 md:h-9 w-auto shrink-0 transition-all" />
                </a>

                <img src="./arrow.svg" alt="" className="h-7 md:h-9 w-auto opacity-30" />

                <a href="https://www.zomato.com/meerut/beast-feast-mohkam-pur/order" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 transition-all duration-500 cursor-pointer group">
                  <img src="./zomato.svg" alt="Zomato" className="h-7 md:h-9 w-auto shrink-0 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative w-full flex items-center justify-center">
          <div className="reveal delay-400 relative z-10 w-full max-w-sm md:max-w-none rounded-2xl md:rounded-[3rem] overflow-hidden border border-[#2D241E]/10 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1471&auto=format&fit=crop"
              alt="Artistic Burger"
              className="w-full h-full object-cover aspect-square md:aspect-[3/4] hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Card Overlay */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-[#2D241E]/10 shadow-lg reveal delay-600">
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#2D241E]/50 mb-2 font-bold">Featured</p>
            <p className="font-serif-boutique italic text-base md:text-xl text-[#2D241E]">fresh, honest, indulgent</p>
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
