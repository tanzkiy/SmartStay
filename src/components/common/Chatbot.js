import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your SmartStay AI assistant. How can I help you find the perfect place today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "Find dorms near SLU under ₱5000",
    "Show verified listings",
    "Apartments with WiFi",
    "Properties near Session Road"
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
    }, 1000);

    setInputValue('');
  };

  const generateBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('dorm') || lowerInput.includes('slu')) {
      return "I found 3 verified dormitories near SLU! The 'Cozy Studio near SLU' is ₱5,000/month with WiFi and study area. Would you like to see more details?";
    } else if (lowerInput.includes('verified') || lowerInput.includes('blockchain')) {
      return "We have 4 blockchain-verified properties available. These listings have been authenticated by the City Government. Would you like to filter by location or price?";
    } else if (lowerInput.includes('wifi') || lowerInput.includes('amenities')) {
      return "I found several properties with WiFi! Most include study areas, kitchen access, and laundry facilities. What's your preferred location?";
    } else if (lowerInput.includes('session road') || lowerInput.includes('downtown')) {
      return "Great choice! Session Road area has 2 verified listings: a modern 1BR at ₱7,000/month and a luxury condo at ₱12,000/month. Both are walking distance to SM Baguio.";
    } else if (lowerInput.includes('price') || lowerInput.includes('budget')) {
      return "Our listings range from ₱3,500 to ₱12,000 per month. What's your budget range? I can show you the best options!";
    } else {
      return "I can help you find properties by location, price, amenities, or show you AI-recommended listings. What are you looking for?";
    }
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-mountain-green hover:bg-mountain-green-light text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-mountain-green/40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-4 right-4 md:bottom-24 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
            style={{ height: '80vh', maxHeight: 'calc(100vh - 2rem)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-mountain-green to-mountain-green-light text-white p-4 rounded-t-2xl flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">SmartStay AI Assistant</h3>
                <p className="text-xs opacity-90">Powered by AI</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-mountain-green text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1.5 rounded-full transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-mountain-green/40"
                  aria-label="Chat message input"
                />
                <button
                  onClick={handleSend}
                  className="bg-mountain-green hover:bg-mountain-green-light text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-mountain-green/40"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
