'use client'; // Add this if you're using the Next.js App Router and using interactive components

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, Calendar } from "lucide-react";

interface DoctorProps {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  qualification: string;
  imageSrc: string;
  path: string;
}

const doctors: DoctorProps[] = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Gynaecology",
    experience: "15+ Years",
    qualification: "MS, MBBS, FICOG",
    imageSrc: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2187&q=80",
    path: "/doctors/dr-priya-sharma"
  },
  {
    id: 2,
    name: "Dr. Vikram Mehta",
    specialty: "Orthopedics",
    experience: "18+ Years",
    qualification: "MS (Ortho), MBBS",
    imageSrc: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    path: "/doctors/dr-vikram-mehta"
  },
  {
    id: 3,
    name: "Dr. Ananya Patel",
    specialty: "Ophthalmology",
    experience: "12+ Years",
    qualification: "MS (Ophtha), MBBS, DNB",
    imageSrc: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    path: "/doctors/dr-ananya-patel"
  },
  {
    id: 4,
    name: "Dr. Raj Kumar Singh",
    specialty: "Oncology",
    experience: "20+ Years",
    qualification: "MS, MBBS, DNB (Onco)",
    imageSrc: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    path: "/doctors/dr-raj-singh"
  }
];

const DoctorCard = ({ doctor }: { doctor: DoctorProps }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-medical-accent transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={doctor.imageSrc}
          alt={doctor.name}
          className="object-cover w-full h-64 object-top"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
          <Award className="w-5 h-5 text-medical-primary" />
        </div>
      </div>
      <div className="p-6">
        <div>
          <h3 className="text-xl font-bold text-medical-dark">{doctor.name}</h3>
          <p className="text-medical-primary font-medium">{doctor.specialty}</p>
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
          <Button
            variant="outline"
            className="flex-1 border-medical-primary text-medical-primary hover:bg-medical-light"
          >
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

const DoctorsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-medical-light">
      <div className="content-container">
        <div className="text-center mb-12">
          <span className="bg-medical-light text-medical-primary px-4 py-1.5 rounded-full text-sm font-medium">Our Specialists</span>
          <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mt-4 mb-6">Expert Surgeons. Better Outcomes.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of highly skilled surgeons bring years of experience and specialized expertise
            to provide you with the best possible care and recovery journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/doctors">
            <Button className="bg-medical-primary hover:bg-medical-dark text-white font-medium py-6 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl">
              Meet All Our Specialists
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
