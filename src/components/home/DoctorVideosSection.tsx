"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Video } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface DoctorVideoProps {
  id: number;
  name: string;
  specialty: string;
  title: string;
  thumbnailUrl: string;
  profilePath: string;
}

const doctorVideos: DoctorVideoProps[] = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Gynaecology",
    title: "Understanding Hysteroscopy Procedures",
    thumbnailUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80",
    profilePath: "/doctors/dr-priya-sharma"
  },
  {
    id: 2,
    name: "Dr. Vikram Mehta",
    specialty: "Orthopedics",
    title: "Advances in Joint Replacement Surgery",
    thumbnailUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    profilePath: "/doctors/dr-vikram-mehta"
  },
  {
    id: 3,
    name: "Dr. Ananya Patel",
    specialty: "Ophthalmology",
    title: "Modern Techniques in Cataract Surgery",
    thumbnailUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    profilePath: "/doctors/dr-ananya-patel"
  },
  {
    id: 4,
    name: "Dr. Raj Kumar Singh",
    specialty: "Oncology",
    title: "New Approaches to Cancer Treatment",
    thumbnailUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    profilePath: "/doctors/dr-raj-singh"
  }
];

const VideoCard = ({ video }: { video: DoctorVideoProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={video.thumbnailUrl}
          alt={`${video.name} - ${video.title}`}
          className="w-full h-48 object-cover"
        />
        <div
          className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-70"
          }`}
        >
          <div
            className={`bg-white/90 rounded-full p-3 transform transition-transform duration-300 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          >
            <Play className="h-8 w-8 text-medical-primary" />
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow">
          <Video className="h-4 w-4 text-medical-primary" />
        </div>
      </div>

      <div className="p-4 bg-white">
        <h3 className="font-bold text-lg text-medical-dark mb-1">{video.title}</h3>
        <Link href={video.profilePath} className="text-medical-primary font-medium hover:underline mb-3 block">
          {video.name} - {video.specialty}
        </Link>
      </div>
    </div>
  );
};

const DoctorVideosSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-medical-light to-white">
      <div className="content-container">
        <div className="text-center mb-12">
          <span className="bg-medical-light text-medical-primary px-4 py-1.5 rounded-full text-sm font-medium">
            Expert Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mt-4 mb-6">
            Learn From Our Specialists
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch informative videos from our expert doctors explaining procedures, treatments, 
            and offering valuable health advice.
          </p>
        </div>

        <div className="relative px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {doctorVideos.map((video) => (
                <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <VideoCard video={video} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        <div className="text-center mt-10">
          <Link href="/videos">
            <Button className="bg-medical-primary hover:bg-medical-dark text-white font-medium py-2 px-6">
              View All Videos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorVideosSection;
