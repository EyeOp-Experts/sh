
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialtyInterest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const specialties = [
    "Gynaecology",
    "Cancer Surgeries",
    "Eye Surgeries",
    "Ortho",
    "Liver",
    "Stone Removal",
    "ENT",
    "Gastro",
    "Dental",
    "Abdominal Surgeries",
    "Neurosurgeries",
    "Other"
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! We'll contact you shortly.");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        specialtyInterest: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Enter your full name"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Enter your phone number"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter your email address (optional)"
        />
      </div>
      
      <div>
        <label htmlFor="specialtyInterest" className="block text-sm font-medium text-gray-700 mb-1">
          Specialty of Interest *
        </label>
        <select
          id="specialtyInterest"
          name="specialtyInterest"
          value={formData.specialtyInterest}
          onChange={handleChange}
          required
          className="form-input"
        >
          <option value="">Select a specialty</option>
          {specialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="form-input resize-none"
          placeholder="Briefly describe your concern or question"
        ></textarea>
      </div>
      
      <div className="text-sm text-gray-500">
        * Required fields
      </div>
      
      <div>
        <Button 
          type="submit" 
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </Button>
      </div>
      
      <p className="text-xs text-gray-500">
        By submitting this form, you agree to our privacy policy and consent to being contacted
        regarding your inquiry.
      </p>
    </form>
  );
};

export default ContactForm;
