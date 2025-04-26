"use client"
import React, { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 animate-fade-up">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-swasthya-blue">Contact Us</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close contact options"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-3">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-3 p-2 hover:bg-swasthya-blue-light rounded-md transition-colors"
            >
              <div className="bg-swasthya-blue rounded-full p-2">
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-sm text-gray-600">+91 9818996967</p>
              </div>
            </a>
            <a
              href="https://wa.me/9818996967"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2 hover:bg-swasthya-blue-light rounded-md transition-colors"
            >
              <div className="bg-green-500 rounded-full p-2">
                <MessageCircle size={16} className="text-white" />
              </div>
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-sm text-gray-600">Chat with us</p>
              </div>
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${
          isExpanded ? "bg-gray-700" : "bg-swasthya-blue"
        } text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300`}
        aria-label="Contact options"
      >
        {isExpanded ? <X size={24} /> : <Phone size={24} />}
      </button>
    </div>
  );
};

export default FloatingContact;
