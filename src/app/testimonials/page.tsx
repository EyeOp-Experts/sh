// pages/testimonials.tsx
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface TestimonialProps {
  id: number;
  name: string;
  avatar: string;
  procedure: string;
  content: string;
  rating: number;
  date: string;
}

const testimonials: TestimonialProps[] = [
    {
      id: 1,
      name: "Aishwarya Patel",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      procedure: "Hysteroscopy",
      content: "My experience with Dr. Sharma at Swasthya Health was exceptional. The hysteroscopy procedure was well-explained beforehand, and the care I received was compassionate and professional. Recovery was much faster than I expected, and I'm grateful for the excellent medical care.",
      rating: 5,
      date: "August 15, 2024"
    },
    {
      id: 2,
      name: "Rajiv Verma",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      procedure: "Knee Replacement",
      content: "After years of knee pain, I finally found relief thanks to Dr. Mehta and the team at Swasthya Health. The surgery was successful, and their rehabilitation program helped me regain mobility. I'm now back to walking pain-free and enjoying life again.",
      rating: 5,
      date: "July 28, 2024"
    },
    {
      id: 3,
      name: "Neha Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      procedure: "LASIK Eye Surgery",
      content: "Having worn glasses for 20 years, LASIK surgery with Dr. Patel was life-changing. The procedure was quick and painless. The staff was attentive and caring throughout the process. I can now see perfectly without glasses - it feels like a miracle!",
      rating: 5,
      date: "June 12, 2024"
    },
    {
      id: 4,
      name: "Vikram Singh",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      procedure: "Cancer Treatment",
      content: "Dr. Singh's expertise in oncology gave me hope during a challenging time. The personalized treatment plan and supportive care at Swasthya Health made a difficult journey much easier. I'm now cancer-free and grateful for the exceptional care I received.",
      rating: 5,
      date: "May 5, 2024"
    },
    {
      id: 5,
      name: "Pooja Gupta",
      avatar: "https://images.unsplash.com/photo-1563306406-e66174fa3787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      procedure: "Gallbladder Surgery",
      content: "After suffering from gallstones for months, I underwent laparoscopic surgery at Swasthya Health. The procedure was minimally invasive, and I was able to return home the same day. The follow-up care was excellent, and I recovered quickly.",
      rating: 4,
      date: "April 18, 2024"
    },
    {
      id: 6,
      name: "Arjun Kapoor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      procedure: "Spine Surgery",
      content: "Living with chronic back pain for years, I was hesitant about surgery. Dr. Kumar at Swasthya Health explained everything thoroughly and performed a minimally invasive procedure. The difference is remarkable - I've regained my quality of life.",
      rating: 5,
      date: "March 22, 2024"
    },
    {
      id: 7,
      name: "Meera Reddy",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      procedure: "Thyroid Surgery",
      content: "When I was diagnosed with a thyroid condition requiring surgery, I was anxious. Dr. Joshi at Swasthya Health was reassuring and skilled. The surgery went smoothly, and I appreciated the comprehensive aftercare. I highly recommend their services.",
      rating: 5,
      date: "February 10, 2024"
    },
    {
      id: 8,
      name: "Karan Mehra",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      procedure: "Hernia Repair",
      content: "The hernia repair at Swasthya Health was efficient and effective. The surgical team was professional, and the facilities were top-notch. My recovery was quick, and I was able to return to normal activities within weeks. Great experience overall.",
      rating: 4,
      date: "January 15, 2024"
    }
  ];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              layout="fill"
              objectFit="cover"
              priority
              sizes="56px"
            />
          </div>
          <div>
            <h3 className="font-bold text-medical-dark">{testimonial.name}</h3>
            <p className="text-medical-primary text-sm">{testimonial.procedure}</p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-4 h-4 ${
                    idx < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>

        <div className="text-right text-sm text-gray-500">{testimonial.date}</div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <>
      <Head>
        <title>Patient Testimonials | Swasthya Health</title>
        <meta
          name="description"
          content="Read what our patients have to say about their experience with Swasthya Health's medical services and surgeries."
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-b from-medical-light to-white">
            <div className="content-container">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-medical-dark mb-4">Patient Testimonials</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Read what our patients have to say about their experience with Swasthya Health's medical services and surgeries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>

              <div className="mt-16 bg-medical-light bg-opacity-30 p-8 rounded-2xl">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl font-bold text-medical-dark mb-6">Share Your Experience</h2>
                  <p className="text-gray-700 mb-6">
                    We value your feedback! If you've received treatment at Swasthya Health, please consider sharing your experience to
                    help other patients make informed decisions about their healthcare.
                  </p>
                  <Button size="lg" className="bg-medical-primary hover:bg-medical-dark text-white">
                    Submit Your Testimonial
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default Testimonials;
