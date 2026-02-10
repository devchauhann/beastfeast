
import React from 'react';
import { FaInstagram, FaFacebook, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF9F6] pt-32 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-20 border-b border-[#2D241E]/10">

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img src="./icon.webp" alt="BeastFeast" className="w-10 h-10" />
              <h4 className="text-3xl font-serif-boutique italic tracking-tight">beastfeast.</h4>
            </div>
            <p className="text-sm font-light text-[#2D241E]/60 leading-relaxed">
              Where comfort food meets thoughtful quality. Fresh, generous portions, honest ingredients, and consistently good food. Your neighborhood café for indulgent yet satisfying meals.
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/beastfeast.in" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#2D241E]/60 hover:text-[#E68A4D] transition-colors">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/beastfeast.in" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#2D241E]/60 hover:text-[#E68A4D] transition-colors">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D241E]/40">Café</h5>
            <ul className="space-y-4 text-sm font-light">
              <li className="hover:text-[#E68A4D] transition-colors"><a href="/menu">Menu</a></li>
              <li className="hover:text-[#E68A4D] transition-colors"><a href="/">About Us</a></li>
              <li className="hover:text-[#E68A4D] transition-colors"><a href="https://www.google.com/maps/place/BEAST+FEAST+Cafe/@28.969389,77.649807,16z/data=!4m14!1m7!3m6!1s0x390c67ff6e349453:0xfb84f7ee62d1582f!2sBEAST+FEAST+Cafe!8m2!3d28.9693893!4d77.6498074!16s%2Fg%2F11ykly7j53!3m5!1s0x390c67ff6e349453:0xfb84f7ee62d1582f!8m2!3d28.9693893!4d77.6498074!16s%2Fg%2F11ykly7j53?hl=en&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D">Locations</a></li>
              <li className="hover:text-[#E68A4D] transition-colors"><a href="tel:+917906355028">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Location Map and Details Section */}
        <div className="py-12">
          <h3 className="text-xl md:text-2xl font-serif-boutique italic mb-8">Find Us</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Details - Left side, 1 column */}
            <div className="space-y-5 flex flex-col justify-start order-2 lg:order-1">
              <div>
                <h4 className="text-base font-bold text-[#2D241E] mb-2">Our Location</h4>
                <p className="text-xs font-light text-[#2D241E]/70 leading-relaxed">
                  BEAST FEAST Cafe<br />
                  Shahkumbri Plaza, GA1<br />
                  Baghpat Rd, near DPS<br />
                  Malyana, Meerut<br />
                  Uttar Pradesh 250002<br />
                  India
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-[#2D241E] mb-2">Get In Touch</h4>
                <p className="text-xs font-light text-[#2D241E]/70">
                  <a href="tel:+917906355028" className="hover:text-[#E68A4D] transition-colors">📞 +91 7906355028</a>
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <a href="tel:+917906355028" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#2D241E] text-white rounded-full font-bold text-xs hover:bg-[#E68A4D] transition-all w-fit">
                  <FaPhone size={16} />
                  Call Us
                </a>
              </div>
            </div>

            {/* Map - Right side, 2 columns */}
            <div className="lg:col-span-2 space-y-3 flex flex-col order-1 lg:order-2">
              <div className="relative w-full rounded-lg overflow-hidden border border-[#2D241E]/10 h-64 lg:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5631634098373!2d77.64980762346818!3d28.969389323561857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c67ff6e349453%3A0xfb84f7ee62d1582f!2sBEAST%20FEAST%20Cafe!5e0!3m2!1sen!2sin!4v1707023500000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-[#2D241E]/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 items-center md:items-center">
              {/* Swiggy Partner */}
              <a href="https://www.swiggy.com/city/meerut/beast-feast-cafe-partapur-meerut-rest993848?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-all duration-500 cursor-pointer w-full md:w-auto justify-center md:justify-start">
                <img src="./swiggy.svg" alt="Swiggy" className="h-6 w-auto shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-[#2D241E]/40">Swiggy</span>
                  <span className="text-[10px] font-bold text-[#FE5005]">4.6 ★</span>
                </div>
              </a>

              {/* Zomato Partner */}
              <a href="https://www.zomato.com/meerut/beast-feast-mohkam-pur/order" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-all duration-500 cursor-pointer w-full md:w-auto justify-center md:justify-start">
                <img src="./zomato.svg" alt="Zomato" className="h-6 w-auto shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-[#2D241E]/40">Zomato</span>
                  <span className="text-[10px] font-bold text-[#CB202D]">4.6 ★</span>
                </div>
              </a>
            </div>

            <p className="text-[10px] font-bold uppercase tracking-widest text-[#2D241E]/40 text-center md:text-right">
              © 2026 BeastFeast Café. Comfort food, honestly good.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
