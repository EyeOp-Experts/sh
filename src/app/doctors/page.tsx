"use client"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Link from "next/link";  // Next.js Link
import Image from "next/image"; // Next.js optimized Image
import { Button } from "@/components/ui/button";
import { Award, Calendar, Search } from "lucide-react";
import { useState, useEffect } from "react";

interface DoctorProps {
  _id: string;
  name: string;
  experience: string;
  qualifications: string;
  imageSrc: string;
  path?: string;
}

const DoctorCard = ({ doctor }: { doctor: DoctorProps }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-medical-accent transform hover:-translate-y-1">
      <div className="relative w-full h-64">
        <Image
          src={doctor.imageSrc || "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2187&q=80"}
          alt={doctor.name}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-medical-dark">{doctor.name}</h3>
          </div>
          <div className="bg-medical-light rounded-full p-2">
            <Award className="w-5 h-5 text-medical-primary" />
          </div>
        </div>

        <div className="mt-4 space-y-2 text-gray-600">
          <div className="flex items-center">
            <span className="font-semibold w-28">Experience:</span>
            <span>{doctor.experience}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-28">Qualification:</span>
            <span>{doctor.qualifications}</span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Button variant="outline" className="flex-1 border-medical-primary text-medical-primary hover:bg-medical-light">
            <Calendar className="w-4 h-4 mr-1" />
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState<DoctorProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    doctorsData();
  }, []);

  const doctorsData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/doctors`, {
        method: "GET",
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "No doctors found");
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

  const filteredDoctors = data.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.qualifications.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.experience.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <div className="content-container py-12">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700">Loading doctors...</h2>
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-b from-medical-light to-white">
          <div className="content-container">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Our Expert Doctors</h1>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Consult with experienced specialists who are committed to providing the highest quality of care for all your health needs.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search doctors by name, qualification, or experience..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor._id} doctor={doctor} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <h3 className="text-xl text-gray-700">No doctors found matching your criteria</h3>
                <Button
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                  }}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Doctors;
