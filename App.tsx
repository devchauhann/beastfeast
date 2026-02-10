import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GiFlame, GiWeightScale, GiMoneyStack, GiMeal } from 'react-icons/gi';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      <Menu />

      {/* Why BeastFeast Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#E68A4D] mb-4">Why Choose Us</h2>
            <h3 className="text-5xl md:text-7xl font-serif-boutique italic text-[#2D241E] mb-6">no shortcuts. just good food.</h3>
            <p className="text-lg text-[#2D241E]/60 max-w-2xl mx-auto font-light">We believe in simplicity done right. Fresh ingredients, generous portions, and honest prices—because great food shouldn't cost a fortune.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="bg-[#F5F3F0] rounded-2xl p-8 space-y-6">
              <div className="inline-flex w-16 h-16 items-center justify-center text-4xl text-[#E68A4D]">
                <GiMeal />
              </div>
              <div>
                <h4 className="text-2xl font-serif-boutique italic text-[#2D241E] mb-3">Fresh Daily</h4>
                <p className="text-sm text-[#2D241E]/60 leading-relaxed font-light">Everything is prepared fresh to order. No frozen shortcuts, no day-old ingredients. Quality that you can taste.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F5F3F0] rounded-2xl p-8 space-y-6">
              <div className="inline-flex w-16 h-16 items-center justify-center text-4xl text-[#E68A4D]">
                <GiWeightScale />
              </div>
              <div>
                <h4 className="text-2xl font-serif-boutique italic text-[#2D241E] mb-3">Honest Portions</h4>
                <p className="text-sm text-[#2D241E]/60 leading-relaxed font-light">Big, satisfying servings that make you feel indulged. We don't believe in tiny plates and huge bills.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5F3F0] rounded-2xl p-8 space-y-6">
              <div className="inline-flex w-16 h-16 items-center justify-center text-4xl text-[#E68A4D]">
                <GiMoneyStack />
              </div>
              <div>
                <h4 className="text-2xl font-serif-boutique italic text-[#2D241E] mb-3">Real Prices</h4>
                <p className="text-sm text-[#2D241E]/60 leading-relaxed font-light">Fair value for exceptional quality. No markup nonsense. Just genuinely good food at prices that make sense.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-[#E68A4D]/20 selection:text-[#2D241E]">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>

        <Footer />
        <AiAssistant />

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;
