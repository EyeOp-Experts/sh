"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminInterface = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin-login");
    }
  }, []);

  // Render buttons only if token is present (optional)
  const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  if (!token) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-swasthya-purple">Admin Interface</h1>

      <div className="space-y-4 w-full max-w-md">
        <button
          onClick={() => router.push("/add-blog")}
          className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 py-3 rounded-lg text-lg font-semibold transition"
        >
          Add Blogs
        </button>
        <button
          onClick={() => router.push("/add-doctor")}
          className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 py-3 rounded-lg text-lg font-semibold transition"
        >
          Add Doctors
        </button>
        <button
          onClick={() => router.push("/add-feedback")}
          className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 py-3 rounded-lg text-lg font-semibold transition"
        >
          Add Customer Feedback
        </button>
        <button
          onClick={() => router.push("/view-feedbacks")}
          className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-3 rounded-lg text-lg font-semibold transition"
        >
          View Feedbacks
        </button>
      </div>
    </div>
  );
};

export default AdminInterface;
