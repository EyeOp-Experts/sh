"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

// Define BlogPost interface matching backend
interface BlogPost {
  _id: string;
  title: string;
  description: string;
  content: string;
  thumbnailUrl: string;
  metaTags: string[];
  createdAt: string;
  category?: string;
  readTime?: string;
  author?: string;
  authorRole?: string;
}

// Categories list
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

// Blog Card Component
const BlogCard = ({ post }: { post: BlogPost }) => {
  const imageUrl =
    post.thumbnailUrl && post.thumbnailUrl.startsWith("http")
      ? post.thumbnailUrl
      : "/assets/default-blog.jpg";

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post._id}`} passHref>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={post.title}
            className="object-cover transition-transform duration-500 hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-3">
            <span className="bg-medical-light text-medical-primary px-3 py-1 rounded-full text-xs font-medium">
              {post.category || "General"}
            </span>
            <span className="text-gray-500 text-xs">
              {post.readTime || "5 min read"}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-medical-dark hover:text-medical-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {post.description || post.content.slice(0, 100) + "..."}
          </p>
          <div className="flex items-center justify-between">
            <div className="font-medium text-sm">
              <span className="text-medical-dark">{post.author || "Admin"}</span>
              <p className="text-gray-500 text-xs">
                {post.authorRole || "Healthcare Writer"}
              </p>
            </div>
            <span className="text-gray-500 text-xs">
              {new Date(post.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })}
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

// Main Blog Component
const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`
        );
        setBlogPosts(response.data);
      } catch (err) {
        setError("Failed to fetch blog posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchTerm.toLowerCase());

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
              {/* Search Input */}
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

              {/* Category Filter Buttons */}
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

            {/* Blog Cards Display */}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading blogs...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">{error}</div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post._id} post={post} />
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
