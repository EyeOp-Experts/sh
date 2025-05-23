"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Changed to Next.js Link
import { ChevronDown, ChevronUp, Search, ArrowRight } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="flex-shrink-0 text-gray-500" /> : <ChevronDown className="flex-shrink-0 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-700 space-y-2">
          {answer}
        </div>
      )}
    </div>
  );
};

interface FAQCategory {
  category: string;
  faqs: Array<{ question: string; answer: React.ReactNode }>;
}

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories: FAQCategory[] = [
    {
      category: "LASIK & SMILE Surgery",
      faqs: [
        {
          question: "What is the difference between LASIK and SMILE surgery?",
          answer: (
            <>
              <p>
                LASIK creates a corneal flap to access and reshape the cornea with an excimer laser, while SMILE is a minimally invasive procedure that uses a femtosecond laser to create a small disc of tissue (lenticule) within the cornea that is removed through a tiny incision.
              </p>
              <p className="mt-2">
                SMILE generally causes less dry eye and has a quicker recovery time, while LASIK can treat a wider range of vision conditions including farsightedness.
              </p>
            </>
          ),
        },
        {
          question: "Am I a candidate for LASIK or SMILE?",
          answer: (
            <>
              <p>Good candidates are typically:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>21 years or older with stable vision for at least a year</li>
                <li>Have sufficient corneal thickness</li>
                <li>Free from certain eye diseases or conditions</li>
                <li>Not pregnant or nursing</li>
              </ul>
              <p className="mt-2">The best way to determine if you're a candidate is through a comprehensive eye exam with our specialists.</p>
            </>
          ),
        },
        {
          question: "How long does LASIK or SMILE surgery take?",
          answer: <p>Both procedures are quick. LASIK typically takes 15-20 minutes for both eyes, while SMILE usually takes 10-15 minutes. The actual laser treatment time is only 20-40 seconds per eye. You'll spend about 2 hours total at our center on the day of your procedure.</p>,
        },
        {
          question: "How long before I can return to normal activities?",
          answer: (
            <>
              <p>Most patients can return to work within 24-48 hours after LASIK or SMILE. However, you should avoid:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Swimming and hot tubs for 2 weeks</li>
                <li>Contact sports for 4 weeks</li>
                <li>Eye makeup for 1 week</li>
              </ul>
              <p className="mt-2">Your doctor will provide specific instructions based on your situation and the procedure you undergo.</p>
            </>
          ),
        },
      ],
    },
    // ... other categories omitted for brevity
  ];

  // Filter FAQs based on search term
  const filteredFAQs = searchTerm
    ? faqCategories
        .map((category) => ({
          ...category,
          faqs: category.faqs.filter((faq) =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((category) => category.faqs.length > 0)
    : faqCategories;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-swasthya-blue-light py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-700 mb-8">
                Find answers to common questions about our eye surgery procedures and services.
              </p>
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-swasthya-blue focus:border-transparent shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom max-w-5xl">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((category, index) => (
                category.faqs.length > 0 && (
                  <div key={index} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-swasthya-blue">{category.category}</h2>
                    <div className="divide-y divide-gray-200">
                      {category.faqs.map((faq, faqIndex) => (
                        <FAQItem key={faqIndex} question={faq.question} answer={faq.answer} />
                      ))}
                    </div>
                  </div>
                )
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-6">No questions found matching your search.</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-swasthya-blue hover:underline font-medium"
                >
                  Clear search and show all questions
                </button>
              </div>
            )}

            <div className="bg-gray-50 rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our team is ready to answer any additional questions you may have about our procedures and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="btn-primary">Contact Us</Button>
                </Link>
                <Link href="/book-consultation">
                  <Button className="btn-secondary">
                    Book a Consultation <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default FAQ;
