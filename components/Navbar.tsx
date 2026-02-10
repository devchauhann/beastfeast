
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-transform duration-500 px-6 py-4 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/40 backdrop-blur-lg border border-[#2D241E]/5 rounded-3xl px-6 py-3 shadow-sm">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/icon/icon.webp" alt="BeastFeast" className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-2xl font-serif-boutique italic font-medium tracking-tight text-[#2D241E]">beastfeast.</span>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase text-[#2D241E]/70">
            <Link to="/" className="hover:text-[#E68A4D] transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-[#E68A4D] transition-colors">Menu</Link>
            <a href="https://www.google.com/maps/place/BEAST+FEAST+Cafe/@28.969389,77.649807,16z/data=!4m14!1m7!3m6!1s0x390c67ff6e349453:0xfb84f7ee62d1582f!2sBEAST+FEAST+Cafe!8m2!3d28.9693893!4d77.6498074!16s%2Fg%2F11ykly7j53!3m5!1s0x390c67ff6e349453:0xfb84f7ee62d1582f!8m2!3d28.9693893!4d77.6498074!16s%2Fg%2F11ykly7j53?hl=en&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" className="hover:text-[#E68A4D] transition-colors">Location</a>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-[#2D241E] p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="9" y2="9" /><line x1="4" x2="20" y1="15" y2="15" /></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[70] bg-white transition-transform duration-500 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div className="pt-6 px-6 pb-20 flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-[#FAF9F6] rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 mb-auto">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif-boutique italic text-[#2D241E] hover:text-[#E68A4D] transition-colors border-b border-[#2D241E]/10 pb-4">
              Home
            </Link>
            <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif-boutique italic text-[#2D241E] hover:text-[#E68A4D] transition-colors border-b border-[#2D241E]/10 pb-4">
              Menu
            </Link>
            <a href="https://www.google.com/maps/place/BEAST+FEAST+Cafe/@28.969389,77.649807,16z/data=!4m14!1m7!3m6!1s0x390c67ff6e349453:0xfb84f7ee62d1582f!2sBEAST+FEAST+Cafe!8m2!3d28.9693893!4d77.6498074!16s%2Fg%2F11ykly7j53!3m5!1s0x390c67ff6e349453:0xfb84f7ee62d1582f!8m2!3d28.9693893!4d77.6498074!16s%2Fg%2F11ykly7j53?hl=en&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif-boutique italic text-[#2D241E] hover:text-[#E68A4D] transition-colors border-b border-[#2D241E]/10 pb-4 flex items-center gap-2">
              <FaMapMarkerAlt size={20} /> Location
            </a>
          </div>

          {/* Footer - Social Icons */}
          <div className="pt-6 border-t border-[#2D241E]/10">
            <p className="text-sm opacity-50 uppercase tracking-widest font-semibold mb-4">Follow Us</p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/beastfeast.in" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#2D241E]/60 hover:text-[#E68A4D] transition-colors">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/beastfeast.in" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#2D241E]/60 hover:text-[#E68A4D] transition-colors">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
