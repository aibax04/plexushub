import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const inputRef = useRef(null);
  
  const phoneNumber = '916307114437';
  const doctorName = 'Dr. Samad';

  useEffect(() => {
    // Show a small notification badge/hint after 3 seconds
    const timer = setTimeout(() => {
      if (!isOpen) setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-[1001] flex flex-col items-start">
      {/* Chat Window */}
      <div className={`mb-4 w-[320px] sm:w-[360px] bg-white rounded-[2rem] shadow-2xl border border-border/50 overflow-hidden transition-all duration-500 origin-bottom-left ${
        isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'
      }`}>
        {/* Header */}
        <div className="bg-primary p-6 text-white relative">
          <button 
            onClick={toggleChat}
            className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                <User className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-primary animate-pulse"></div>
            </div>
            <div>
              <h3 className="font-semibold text-lg leading-tight">{doctorName}</h3>
              <p className="text-white/70 text-xs flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                Online & ready to help
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 bg-[#f8f9fa] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-border/30 max-w-[85%] relative animate-page-entry">
            <p className="text-text text-sm leading-relaxed">
              "Stop worrying about your dental health. Your dream smile is just one message away. How can I help you today?"
            </p>
            <span className="text-[10px] text-text-muted mt-2 block text-right">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-border/50 flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-bg-alt/50 border border-border/50 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary/30 focus:bg-white transition-all"
          />
          <button
            type="submit"
            disabled={!message.trim()}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
              message.trim() ? 'bg-primary text-white scale-100 shadow-lg' : 'bg-bg-alt text-text-muted scale-90'
            }`}
          >
            <Send className="w-5 h-5 ml-0.5" />
          </button>
        </form>
      </div>

      {/* Main Toggle Button */}
      <div className="relative group">
        {/* Notification Bubble */}
        {showNotification && !isOpen && (
          <div className="absolute bottom-full left-0 mb-4 animate-bounce">
            <div className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-border/50 text-[13px] font-medium text-text whitespace-nowrap relative">
              Chat with Dr. Samad
              <div className="absolute top-full left-6 -mt-1 border-8 border-transparent border-t-white"></div>
            </div>
          </div>
        )}

        {/* Pulse effect */}
        {!isOpen && (
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 scale-125"></div>
        )}
        
        <button
          onClick={toggleChat}
          className={`relative flex items-center justify-center p-3.5 sm:p-4 rounded-full shadow-lg transition-all duration-500 active:scale-95 group overflow-hidden ${
            isOpen ? 'bg-primary text-white' : 'bg-[#25D366] text-white hover:scale-110'
          }`}
          aria-label="Toggle Chat"
        >
          {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/10" />}
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
