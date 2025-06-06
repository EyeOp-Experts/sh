
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from 'react-icons/fa';


interface WhatsAppButtonProps {
  text?: string;
  phone?: string;
  message?: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  fullWidth?: boolean;
}

const WhatsAppButton = ({
  text = "Chat on WhatsApp",
  phone = "+91 9818996967",
  message = "I'd like to schedule a consultation with Swasthya Health",
  className = "",
  size = "default",
  fullWidth = false,
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    // Format the phone number (remove any non-digit characters)
    const formattedPhone = phone.replace(/\D/g, '');
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={`bg-[#25D366] hover:bg-[#128C7E] text-white font-medium shadow-md hover:shadow-lg ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <FaWhatsapp className="w-5 h-5 mr-2" />
      {text}
    </Button>
  );
};

export default WhatsAppButton;
