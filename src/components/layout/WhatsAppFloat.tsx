"use client";

import { FaWhatsapp } from "react-icons/fa";
const WhatsAppFloat = () => {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      // WhatsApp number and pre-filled message
      const phone = "9818996967";
      const message = "I'd like to schedule a consultation for surgery.";

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      // Open in new tab
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
      aria-label="Open WhatsApp chat"
    >
      <div className="relative">
        <div className="animate-pulse-slow absolute -inset-1.5 bg-[#25D366] opacity-40 rounded-full"></div>
        <div className="relative bg-[#25D366] text-white p-3.5 rounded-full shadow-lg flex items-center justify-center">
          <FaWhatsapp className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
