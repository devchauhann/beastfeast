
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';

const predefinedResponses: { [key: string]: string } = {
  'what are your best sellers?': 'our signature burgers and fries are fan favorites! the craft patties are made fresh daily with quality beef, and our hand-cut fries are cooked to perfection. highly recommend trying our bestselling flame-grilled burger.',
  'do you have vegetarian options?': 'absolutely! we offer several vegetarian options including veggie burgers, fresh salads, and sides. all our dishes are prepared with the same care and fresh ingredients as our meat options.',
  'whats your delivery time?': 'we partner with swiggy and zomato for quick delivery. typical delivery time is 30-45 minutes depending on your location. you can order directly through their apps for real-time tracking.',
  'are you open today?': 'yes, we\'re open! visit us at shahkumbri plaza, ga1, baghpat rd, meerut. you can call us at +91 7906355028 or click directions to find us easily.',
  'do you offer catering?': 'yes, we offer catering for events and parties! contact us at +91 7906355028 to discuss your catering needs and get a custom quote.',
  'whats your price range?': 'our pricing is honest and fair - no markup nonsense. burgers range from ₹150-400, sides from ₹80-150, and drinks from ₹50-120. great quality at genuine prices!',
  'can i customize my order?': 'absolutely! we prepare everything fresh to order. you can customize any burger or dish exactly how you like it - extra toppings, no onions, special sauces, you name it!',
  'do you have a loyalty program?': 'we believe in treating every customer well! visit us often and enjoy consistent quality at great prices. ask us in-person about any special offers available.',
};

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "hey! welcome to beastfeast. i'm here to help! ask me about our menu, delivery, pricing, or anything else you'd like to know. 👋" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    // Simulate a small delay for natural feel
    await new Promise(resolve => setTimeout(resolve, 300));

    const lowerInput = userMsg.toLowerCase();
    let response = predefinedResponses[lowerInput] || "i'm not sure about that. try asking about our menu, delivery, prices, location, or anything else about beastfeast! 😊";

    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[100]">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] md:w-[380px] max-w-md h-[70vh] md:h-[550px] bg-white rounded-2xl md:rounded-[3rem] shadow-2xl border border-[#2D241E]/5 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10">
          <div className="bg-[#2D241E] p-4 md:p-8 text-[#FAF9F6] flex justify-between items-center flex-shrink-0">
            <div className="flex items-center gap-2 md:gap-4 min-w-0">
              <img src="./icon.webp" alt="BeastFeast" className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-serif-boutique italic truncate">beastbuddy.</h3>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-60">Here to Help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100 flex-shrink-0 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 md:space-y-6 bg-[#FAF9F6]/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-[2rem] text-sm md:text-base ${msg.role === 'user'
                  ? 'bg-[#E68A4D] text-white rounded-tr-none'
                  : 'bg-white text-[#2D241E] rounded-tl-none border border-[#2D241E]/5 shadow-sm'
                  }`}>
                  <p className={`leading-relaxed ${msg.role === 'assistant' ? 'font-light text-xs md:text-sm' : 'font-light text-xs md:text-sm'}`}>
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-[2rem] rounded-tl-none border border-[#2D241E]/5 shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-1 h-1 bg-[#E68A4D] rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-[#E68A4D] rounded-full animate-pulse delay-75"></div>
                    <div className="w-1 h-1 bg-[#E68A4D] rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-3 md:p-6 bg-white border-t border-[#2D241E]/5 max-h-24 md:max-h-32 overflow-y-auto flex-shrink-0">
            <div className="grid grid-cols-1 gap-1 md:gap-2 mb-3 md:mb-4">
              {Object.keys(predefinedResponses).map((question) => (
                <button
                  key={question}
                  onClick={() => {
                    setInput(question);
                  }}
                  className="text-left text-[10px] md:text-[11px] p-1.5 md:p-2 hover:bg-[#F5F3F0] rounded-lg transition-colors text-[#2D241E]/70 hover:text-[#2D241E] font-light truncate"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 md:p-6 bg-white border-t border-[#2D241E]/5 flex-shrink-0">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative flex items-center gap-2 md:gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ask a question..."
                className="flex-1 bg-transparent border-b border-[#2D241E]/10 py-1.5 md:py-2 focus:outline-none focus:border-[#E68A4D] text-xs md:text-sm font-light placeholder:italic"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 md:w-10 md:h-10 bg-[#2D241E] text-white rounded-full flex items-center justify-center hover:bg-[#E68A4D] transition-all disabled:opacity-30 flex-shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#2D241E] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all border border-[#FAF9F6]/20 flex-shrink-0"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        ) : (
          <img src="./icon.webp" alt="BeastFeast" className="w-8 h-8 rounded-lg" />
        )}
      </button>
    </div>
  );
};

export default AiAssistant;
