import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, ArrowRight, User } from "lucide-react";

interface TestimonialProps {
  id: number;
  name: string;
  location: string;
  testimonial: string;
  surgery: string;
  rating: number;
  imageSrc?: string;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Sunita Gupta",
    location: "Delhi",
    testimonial:
      "I was extremely nervous about my hysterectomy, but the doctors at MediConsult made the entire process smooth and pain-free. Their transparent pricing helped me plan my finances too.",
    surgery: "Hysterectomy",
    rating: 5,
    imageSrc: "/assets/testimonials/patient1.jpg",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Gurgaon",
    testimonial:
      "After suffering from severe knee pain for years, I finally found relief after my knee replacement surgery. The surgeons were highly experienced and the staff was supportive throughout my recovery.",
    surgery: "Knee Replacement",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Meera Singh",
    location: "Noida",
    testimonial:
      "My LASIK eye surgery was a life-changing experience. The doctors explained every step clearly and I felt safe throughout the procedure. Now I enjoy perfect vision without glasses!",
    surgery: "LASIK",
    rating: 5,
    imageSrc: "/assets/testimonials/patient3.jpg",
  },
  {
    id: 4,
    name: "Anand Verma",
    location: "Faridabad",
    testimonial:
      "The kidney stone removal procedure was quick and I experienced minimal discomfort. The cost was also much lower than other hospitals I consulted with, without compromising on quality.",
    surgery: "Kidney Stone Removal",
    rating: 4.9,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 relative">
          {testimonial.imageSrc ? (
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="48px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-medical-light">
              <User className="w-6 h-6 text-medical-primary" />
            </div>
          )}
        </div>
        <div className="ml-3">
          <h4 className="font-medium text-medical-dark">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>

      <div className="mb-3 flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(testimonial.rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-gray-600 italic mb-3">"{testimonial.testimonial}"</p>

      <div className="text-sm font-medium text-medical-primary">
        Procedure: {testimonial.surgery}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 2 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read genuine experiences from our patients who have undergone various surgeries.
            Their stories reflect the quality of care and outcomes we deliver.
          </p>
        </div>

        {/* Testimonials slider for desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8">
            {[0, 1].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              return (
                <TestimonialCard
                  key={testimonials[index].id}
                  testimonial={testimonials[index]}
                />
              );
            })}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" className="rounded-full" onClick={prevSlide}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" onClick={nextSlide}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Testimonials for mobile */}
        <div className="md:hidden space-y-6">
          {testimonials.slice(0, 2).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

       <div className="text-center mt-10">
  <Link href="/testimonials" className="btn-secondary">
    View All Testimonials
  </Link>
</div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
