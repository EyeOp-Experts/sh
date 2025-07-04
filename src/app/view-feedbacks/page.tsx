"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Star, Trash2, Edit } from "lucide-react";
import Image from "next/image";

interface Feedback {
  _id: string;
  name: string;
  message: string;
  rating: number;
  image?: string;
  createdAt: string;
}

const ViewFeedbacksPage: React.FC = () => {
  const router = useRouter();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin-login");
      return;
    }
    fetchFeedbacks();
  }, [router]);

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch feedbacks");
      }

      const data = await response.json();
      setFeedbacks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this feedback?")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete feedback");
      }

      // Remove from local state
      setFeedbacks(feedbacks.filter(feedback => feedback._id !== id));
      alert("Feedback deleted successfully!");
    } catch (err) {
      alert("Error deleting feedback. Please try again.");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Loading feedbacks...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600">Error: {error}</h2>
          <Button onClick={fetchFeedbacks} className="mt-4">Retry</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-swasthya-blue">View Feedbacks</h1>
        <Button onClick={() => router.push("/admin-interface")}>
          Back to Admin
        </Button>
      </div>

      {feedbacks.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <h3 className="text-xl text-gray-700">No feedbacks available</h3>
          <p className="text-gray-500 mt-2">No customer feedbacks have been submitted yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((feedback) => (
            <div key={feedback._id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {feedback.image ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                      <Image
                        src={feedback.image}
                        alt={feedback.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="48px"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      <span className="text-gray-500 font-semibold">
                        {feedback.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-800">{feedback.name}</h3>
                    <div className="flex items-center">
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
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(feedback._id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-gray-600 italic mb-4">"{feedback.message}"</p>
              
              <div className="text-sm text-gray-500">
                {formatDate(feedback.createdAt)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewFeedbacksPage; 