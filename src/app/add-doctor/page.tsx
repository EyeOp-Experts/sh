"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import axios from "axios";

const AddDoctorPage: React.FC = () => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  // Form state
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [experience, setExperience] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);

  // Admin check
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      router.push("/admin-login");
    } else {
      setIsChecking(false);
    }
  }, [router]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!profileImageFile) {
      alert("Please upload a profile image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("domain", domain);
    formData.append("experience", experience);
    formData.append("qualifications", qualifications);
    formData.append("videoUrl", videoUrl);
    formData.append("profileImage", profileImageFile); // file object

    try {
      const token = localStorage.getItem("adminToken");

      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/doctors`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Doctor added successfully!");
      router.push("/admin-interface");
    } catch (error) {
      console.error("Failed to add doctor:", error);
      alert("Error adding doctor. Please try again.");
    }
  };


  if (isChecking) return null;

  return (
    <div className="min-h-screen py-12 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-swasthya-blue">Add New Doctor</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-2 font-semibold">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Domain */}
        <div>
          <label className="block mb-2 font-semibold">Domain (e.g., Surgeon, Gynaecologist)</label>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block mb-2 font-semibold">Experience (e.g., 10 years)</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Qualifications */}
        <div>
          <label className="block mb-2 font-semibold">Qualifications</label>
          <input
            type="text"
            value={qualifications}
            onChange={(e) => setQualifications(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Video URL */}
        <div>
          <label className="block mb-2 font-semibold">YouTube Video URL (optional)</label>
          <input
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Profile Image */}
        <div>
          <label className="block mb-2 font-semibold">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfileImageFile(e.target.files?.[0] || null)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Add Doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctorPage;
