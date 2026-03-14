import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '916307114437';
  const message = 'Hello Doctor, I would like to book an appointment and discuss my dental case.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-8 left-8 z-[1001] flex items-center gap-3">
      <div className="relative group">
        {/* Tooltip/Label */}
        <div className={`absolute bottom-full left-0 mb-3 px-4 py-2 bg-white rounded-2xl shadow-xl border border-border/50 text-sm font-medium text-text whitespace-nowrap transition-all duration-300 transform origin-bottom-left ${
          isHovered ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}>
          Chat with Doctor
          <div className="absolute top-full left-6 -mt-1 border-8 border-transparent border-t-white"></div>
        </div>

        {/* Pulse effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 scale-125"></div>
        
        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all duration-300 group overflow-hidden"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle shine effect */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20 -skew-y-12 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          
          <MessageCircle className="w-7 h-7 fill-white/10" strokeWidth={1.5} />
        </button>

        {/* Doctor Status Badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center border-2 border-[#25D366] z-10">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
