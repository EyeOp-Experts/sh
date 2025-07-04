"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, MoveUp, MoveDown } from "lucide-react";
import axios from "axios";

interface Section {
  sectionTitle: string;
  sectionContent: string;
  order: number;
}

const AddBlogPage = () => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState<Section[]>([]);
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

  // Add a new section
  const addSection = () => {
    const newSection: Section = {
      sectionTitle: "",
      sectionContent: "",
      order: sections.length,
    };
    setSections([...sections, newSection]);
  };

  // Remove a section
  const removeSection = (index: number) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    // Reorder remaining sections
    const reorderedSections = updatedSections.map((section, i) => ({
      ...section,
      order: i,
    }));
    setSections(reorderedSections);
  };

  // Move section up
  const moveSectionUp = (index: number) => {
    if (index === 0) return;
    const updatedSections = [...sections];
    [updatedSections[index], updatedSections[index - 1]] = [updatedSections[index - 1], updatedSections[index]];
    // Update order
    const reorderedSections = updatedSections.map((section, i) => ({
      ...section,
      order: i,
    }));
    setSections(reorderedSections);
  };

  // Move section down
  const moveSectionDown = (index: number) => {
    if (index === sections.length - 1) return;
    const updatedSections = [...sections];
    [updatedSections[index], updatedSections[index + 1]] = [updatedSections[index + 1], updatedSections[index]];
    // Update order
    const reorderedSections = updatedSections.map((section, i) => ({
      ...section,
      order: i,
    }));
    setSections(reorderedSections);
  };

  // Update section
  const updateSection = (index: number, field: 'sectionTitle' | 'sectionContent', value: string) => {
    const updatedSections = [...sections];
    updatedSections[index] = {
      ...updatedSections[index],
      [field]: value,
    };
    setSections(updatedSections);
  };

  // Submit blog
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (sections.length === 0) {
      alert("Please add at least one section to your blog.");
      return;
    }

    // Validate sections
    const hasEmptySections = sections.some(section => !section.sectionTitle.trim() || !section.sectionContent.trim());
    if (hasEmptySections) {
      alert("Please fill in all section titles and content.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);

      // Send the first section as individual fields (backend expects this)
      formData.append("sectionTitle", sections[0].sectionTitle);
      formData.append("sectionContent", sections[0].sectionContent);

      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }
      formData.append("metaTags", JSON.stringify(metaTags));

      const token = localStorage.getItem("adminToken");

      console.log("Submitting blog with data:", {
        title,
        description,
        sectionTitle: sections[0].sectionTitle,
        sectionContent: sections[0].sectionContent,
        metaTags,
        hasThumbnail: !!thumbnail,
        totalSections: sections.length
      });

      // Log the FormData contents for debugging
      console.log("FormData contents:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Blog submitted successfully:", response.data);

      // If there are additional sections, add them one by one
      if (sections.length > 1) {
        const blogId = response.data._id;

        for (let i = 1; i < sections.length; i++) {
          const section = sections[i];
          try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${blogId}/sections`, {
              sectionTitle: section.sectionTitle,
              sectionContent: section.sectionContent
            }, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            });
            console.log(`Section ${i + 1} added successfully`);
          } catch (sectionErr) {
            console.error(`Error adding section ${i + 1}:`, sectionErr);
          }
        }
      }

      alert("Blog submitted successfully!");
      router.push("/blog");
    } catch (err: any) {
      console.error("Error submitting blog:", err);

      // Log more detailed error information
      if (err.response) {
        console.error("Error response:", err.response.data);
        console.error("Error status:", err.response.status);
        console.error("Error headers:", err.response.headers);
        alert(`Failed to submit blog: ${err.response.data?.message || err.response.statusText}`);
      } else {
        alert("Failed to submit blog. Please check your connection and try again.");
      }
    }
  };

  if (isChecking) return null;

  return (
    <div className="min-h-screen py-12 px-4 max-w-4xl mx-auto">
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

        {/* Sections */}
        <div>
                      <div className="mb-4">
              <label className="block font-semibold">Blog Sections</label>
            </div>

          {sections.length === 0 ? (
            <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">No sections added yet. Click "Add Section" to get started.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-700">Section {index + 1}</h3>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => moveSectionUp(index)}
                        disabled={index === 0}
                      >
                        <MoveUp className="w-4 h-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => moveSectionDown(index)}
                        disabled={index === sections.length - 1}
                      >
                        <MoveDown className="w-4 h-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeSection(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block mb-1 text-sm font-medium">Section Title</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={section.sectionTitle}
                        onChange={(e) => updateSection(index, 'sectionTitle', e.target.value)}
                        placeholder="Enter section title"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium">Section Content</label>
                      <textarea
                        className="w-full p-2 border rounded"
                        rows={6}
                        value={section.sectionContent}
                        onChange={(e) => updateSection(index, 'sectionContent', e.target.value)}
                        placeholder="Enter section content. You can use bullet points (• or - or *) and numbered lists (1. 2. 3.)"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Tip: Use • or - or * for bullet points, and 1. 2. 3. for numbered lists
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Section Button */}
          <div className="flex justify-end mt-4">
            <Button type="button" onClick={addSection} className="flex items-center gap-2 w-32">
              <Plus className="w-4 h-4" />
              Add Section
            </Button>
          </div>
        </div>

        {/* Submit */}
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={sections.length === 0}>
            Publish Blog
          </Button>

      </form>
    </div>
  );
};

export default AddBlogPage;