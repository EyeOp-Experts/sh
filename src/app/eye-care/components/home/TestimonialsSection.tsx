"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  procedure: string;
  quote: string;
  rating: number;
  image: string;
}

const Testimonial = ({ name, procedure, quote, rating, image }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-600">{procedure}</p>
            </div>
          </div>
          <Quote size={24} className="text-swasthya-blue-light" />
        </div>

        <p className="text-gray-700 mb-4">"{quote}"</p>

        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Sarah Johnson",
      procedure: "LASIK Surgery",
      quote: "After 15 years of glasses, I can see perfectly without them. The procedure was quick and painless!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Michael Chen",
      procedure: "Cataract Surgery",
      quote: "The colors are so vivid now! I didn't realize how much my cataracts affected my vision until after surgery.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/58.jpg"
    },
    {
      name: "Priya Sharma",
      procedure: "SMILE Surgery",
      quote: "Quick recovery, minimal discomfort, and now I'm seeing 20/20. Best decision I've ever made!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Robert Wilson",
      procedure: "LASIK Surgery",
      quote: "The entire team made me feel comfortable throughout the process. Wish I had done this years ago!",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  return (
    <section className="section-padding bg-swasthya-blue-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from real patients about their life-changing experiences with Swasthya Health&apos;s eye surgery procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              procedure={testimonial.procedure}
              quote={testimonial.quote}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
