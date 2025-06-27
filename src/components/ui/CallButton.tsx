'use client';

import React from 'react';
import { Phone } from 'lucide-react'; // optional icon import

interface CallButtonProps {
  label: string;
  className?: string;
}

const CallButton = ({ label, className = '' }: CallButtonProps) => {
  const phoneNumber = '+919818996967';
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      className={`px-6 py-3 bg-medical-primary text-white font-medium rounded-lg shadow-md hover:bg-medical-dark transition-colors flex items-center justify-center ${className}`}
    >
      <Phone className="w-4 h-4 mr-2" />
      {label}
    </button>
  );
};

export default CallButton;
