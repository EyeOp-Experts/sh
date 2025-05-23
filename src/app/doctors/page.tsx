"use client"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Link from "next/link";  // Next.js Link
import Image from "next/image"; // Next.js optimized Image
import { Button } from "@/components/ui/button";
import { Award, Calendar, Search } from "lucide-react";
import { useState } from "react";

interface DoctorProps {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  qualification: string;
  imageSrc: string;
  path: string;
}

const allDoctors: DoctorProps[] = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Gynaecology",
      experience: "15+ Years",
      qualification: "MS, MBBS, FICOG",
      imageSrc: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2187&q=80",
      path: "/doctors/dr-priya-sharma",
    },
    {
      id: 2,
      name: "Dr. Vikram Mehta",
      specialty: "Orthopedics",
      experience: "18+ Years",
      qualification: "MS (Ortho), MBBS",
      imageSrc: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      path: "/doctors/dr-vikram-mehta",
    },
    {
      id: 3,
      name: "Dr. Ananya Patel",
      specialty: "Ophthalmology",
      experience: "12+ Years",
      qualification: "MS (Ophtha), MBBS, DNB",
      imageSrc: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      path: "/doctors/dr-ananya-patel",
    },
    {
      id: 4,
      name: "Dr. Raj Kumar Singh",
      specialty: "Oncology",
      experience: "20+ Years",
      qualification: "MS, MBBS, DNB (Onco)",
      imageSrc: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      path: "/doctors/dr-raj-singh",
    }
  ];
  

const specialties = [
  "All",
  "Gynaecology",
  "Orthopedics",
  "Ophthalmology",
  "Oncology",
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Endocrinology",
];

const DoctorCard = ({ doctor }: { doctor: DoctorProps }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-medical-accent transform hover:-translate-y-1">
      <div className="relative w-full h-64">
        <Image
          src={doctor.imageSrc}
          alt={doctor.name}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={doctor.id === 1} // prioritize first doctor image loading
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-medical-dark">{doctor.name}</h3>
            <p className="text-medical-primary font-medium">{doctor.specialty}</p>
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
            <span>{doctor.qualification}</span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
  <Button variant="outline" className="flex-1 border-medical-primary text-medical-primary hover:bg-medical-light">
    <Calendar className="w-4 h-4 mr-1" />
    Book Now
  </Button>
  <Link
    href={doctor.path}
    className="flex-1 bg-medical-primary hover:bg-medical-dark text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
  >
    View Profile
  </Link>
</div>

      </div>
    </div>
  );
};

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const filteredDoctors = allDoctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-b from-medical-light to-white">
          <div className="content-container">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Our Expert Doctors</h1>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Consult with experienced specialists across multiple disciplines who are committed to providing the highest quality of care for all your health needs.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-10 justify-between">
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {specialties.map((specialty) => (
                  <button
                    key={specialty}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedSpecialty === specialty ? "bg-medical-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedSpecialty(specialty)}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>

            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <h3 className="text-xl text-gray-700">No doctors found matching your criteria</h3>
                <Button
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedSpecialty("All");
                  }}
                >
                  Clear Filters
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
