"use client"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  category: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
    {
      id: "understanding-hysteroscopy",
      title: "Understanding Hysteroscopy: What to Expect Before, During, and After",
      excerpt: "A comprehensive guide to hysteroscopy procedures, including preparation, the procedure itself, and recovery tips for patients.",
      imageSrc: "/assets/surgeries/hysteroscopy.jpg",
      category: "Gynaecology",
      author: "Dr. Priya Sharma",
      authorRole: "Senior Gynaecologist",
      publishDate: "May 10, 2024",
      readTime: "5 min read"
    },
    {
      id: "advancements-knee-replacement",
      title: "Latest Advancements in Knee Replacement Surgery",
      excerpt: "Explore the cutting-edge technologies and techniques that are revolutionizing knee replacement surgeries and improving patient outcomes.",
      imageSrc: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Orthopedics",
      author: "Dr. Vikram Mehta",
      authorRole: "Orthopedic Surgeon",
      publishDate: "April 28, 2024",
      readTime: "7 min read"
    },
    {
      id: "myths-about-lasik",
      title: "Common Myths About LASIK Surgery Debunked",
      excerpt: "Separating fact from fiction about LASIK eye surgery to help potential patients make informed decisions about this vision correction procedure.",
      imageSrc: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80",
      category: "Ophthalmology",
      author: "Dr. Ananya Patel",
      authorRole: "Ophthalmologist",
      publishDate: "April 15, 2024",
      readTime: "6 min read"
    },
    {
      id: "cancer-prevention-tips",
      title: "Essential Cancer Prevention Tips Everyone Should Know",
      excerpt: "Learn about lifestyle changes, early detection methods, and preventive measures that can significantly reduce your risk of developing cancer.",
      imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Oncology",
      author: "Dr. Raj Kumar Singh",
      authorRole: "Oncologist",
      publishDate: "April 5, 2024",
      readTime: "8 min read"
    },
    {
      id: "heart-health-tips",
      title: "10 Simple Ways to Improve Your Heart Health",
      excerpt: "Practical lifestyle changes and habits that can help maintain a healthy heart and prevent cardiovascular diseases.",
      imageSrc: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Cardiology",
      author: "Dr. Sanjay Gupta",
      authorRole: "Cardiologist",
      publishDate: "March 22, 2024",
      readTime: "5 min read"
    },
    {
      id: "skincare-routine-dermatologist",
      title: "The Perfect Skincare Routine According to Dermatologists",
      excerpt: "Expert recommendations for an effective skincare regimen that addresses common concerns and promotes healthy skin.",
      imageSrc: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Dermatology",
      author: "Dr. Meena Reddy",
      authorRole: "Dermatologist",
      publishDate: "March 10, 2024",
      readTime: "6 min read"
    }
  ];

const categories = [
  "All",
  "Gynaecology",
  "Orthopedics",
  "Ophthalmology",
  "Oncology",
  "Cardiology",
  "Dermatology",
  "Neurology"
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.id}`} passHref>
          <div className="relative h-48 overflow-hidden">
            {/* Next.js Image with layout='fill' */}
            <Image
              src={post.imageSrc}
              alt={post.title}
              className="object-cover transition-transform duration-500 hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
              priority={post.id === "understanding-hysteroscopy"} // Example to prioritize main image
            />
          </div>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="bg-medical-light text-medical-primary px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 text-xs">{post.readTime}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-medical-dark hover:text-medical-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="font-medium text-sm">
                  <span className="text-medical-dark">{post.author}</span>
                  <p className="text-gray-500 text-xs">{post.authorRole}</p>
                </div>
              </div>
              <span className="text-gray-500 text-xs">{post.publishDate}</span>
            </div>
          </CardContent>
      </Link>
    </Card>
  );
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <section className="py-12 bg-medical-light">
          <div className="content-container text-center">
            <h1 className="text-4xl font-bold text-medical-dark mb-4">
              Health & Wellness Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest medical insights, surgical
              advancements, and health tips from our expert doctors.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="content-container">
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-medical-primary text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <h3 className="text-xl text-gray-700">
                  No articles found matching your criteria
                </h3>
                <button
                  className="mt-4 bg-medical-primary text-white px-4 py-2 rounded-md hover:bg-medical-dark transition-colors"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear Filters
                </button>
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

export default Blog;
