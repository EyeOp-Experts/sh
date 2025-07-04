"use client"
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

interface FeedbackProps {
  _id: string;
  name: string;
  message: string;
  rating: number;
  image?: string;
  createdAt: string;
}

const TestimonialCard = ({ feedback }: { feedback: FeedbackProps }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
            <Image
              src={feedback.image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"}
              alt={feedback.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="56px"
            />
          </div>
          <div>
            <h3 className="font-bold text-medical-dark">{feedback.name}</h3>
            <div className="flex mt-1">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-4 h-4 ${
                    idx < feedback.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-600 italic mb-4">"{feedback.message}"</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState<FeedbackProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    testimonialsData();
  }, []);

  const testimonialsData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks`, {
        method: "GET",
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "No testimonials found");
        return;
      } else {
        setData(result);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <div className="content-container py-12">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700">Loading testimonials...</h2>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <div className="content-container py-12">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-red-600">Error: {error}</h2>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

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

              {data.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {data.map((feedback) => (
                    <TestimonialCard key={feedback._id} feedback={feedback} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <h3 className="text-xl text-gray-700">No testimonials available at the moment</h3>
                  <p className="text-gray-500 mt-2">Check back later for patient reviews and experiences.</p>
                </div>
              )}
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
