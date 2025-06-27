"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import axios from "axios";

const AddBlogPage = () => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [metaTagInput, setMetaTagInput] = useState("");
  const [metaTags, setMetaTags] = useState<string[]>([]);

  // Admin check
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      router.push("/admin-login");
    } else {
      setIsChecking(false);
    }
  }, [router]);

  // Add a meta tag
  const handleAddMetaTag = () => {
    const trimmed = metaTagInput.trim();
    if (trimmed && !metaTags.includes(trimmed)) {
      setMetaTags([...metaTags, trimmed]);
      setMetaTagInput("");
    }
  };

  // Remove a meta tag
  const handleRemoveMetaTag = (tag: string) => {
    setMetaTags(metaTags.filter((t) => t !== tag));
  };

  // Submit blog
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("content", content);
      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }
      formData.append("metaTags", JSON.stringify(metaTags)); // send tags as JSON string

      const response = await axios.post("http://localhost:5000/api/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Blog submitted successfully!");
      router.push("/blog");
    } catch (err) {
      console.error("Error submitting blog:", err);
      alert("Failed to submit blog.");
    }
  };

  if (isChecking) return null;

  return (
    <div className="min-h-screen py-12 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-swasthya-blue">Add New Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
        {/* Title */}
        <div>
          <label className="block mb-2 font-semibold">Title</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-semibold">Short Description</label>
          <textarea
            className="w-full p-3 border rounded-lg"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-2 font-semibold">Main Content</label>
          <textarea
            className="w-full p-3 border rounded-lg"
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block mb-2 font-semibold">Thumbnail Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
          />
        </div>

        {/* Meta Tags */}
        <div>
          <label className="block mb-2 font-semibold">Meta Tags</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              className="flex-grow p-3 border rounded-lg"
              placeholder="Enter tag"
              value={metaTagInput}
              onChange={(e) => setMetaTagInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddMetaTag())}
            />
            <Button type="button" onClick={handleAddMetaTag}>Add</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {metaTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm cursor-pointer hover:bg-red-200"
                onClick={() => handleRemoveMetaTag(tag)}
              >
                {tag} ✕
              </span>
            ))}
          </div>
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Publish Blog
        </Button>
      </form>
    </div>
  );
};

export default AddBlogPage;
