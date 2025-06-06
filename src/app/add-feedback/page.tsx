"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // your custom Button component
import axios from "axios";

const AddFeedbackPage: React.FC = () => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  // Form state
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Admin auth check (adjust as needed)
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

    try {
      if (!name || !message || !rating) {
        alert("Please fill all required fields.");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("message", message);
      formData.append("rating", rating.toString());
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const token = localStorage.getItem("adminToken");

      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Feedback added successfully!");
      router.push("/admin-interface"); // redirect after success
    } catch (error) {
      console.error("Failed to add feedback:", error);
      alert("Error adding feedback. Please try again.");
    }
  };

  if (isChecking) return null;

  return (
    <div className="min-h-screen py-12 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-swasthya-blue">Add Feedback</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-2 font-semibold">Rating (1-5)</label>
          <select
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            className="w-full p-3 border rounded-lg"
            required
          >
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-2 font-semibold">Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Add Feedback
        </Button>
      </form>
    </div>
  );
};

export default AddFeedbackPage;
