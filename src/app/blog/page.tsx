"use client"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  content: string;
  thumbnailUrl: string;
  metaTags: string[];
  createdAt: string;
  __v: number;
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Extract category from metaTags or use a default
  const getCategory = (metaTags: string[]) => {
    return metaTags.length > 0 ? metaTags[0] : "General";
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post._id}`} passHref>
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.thumbnailUrl || "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"}
              alt={post.title}
              className="object-cover transition-transform duration-500 hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
            />
          </div>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="bg-medical-light text-medical-primary px-3 py-1 rounded-full text-xs font-medium">
                {getCategory(post.metaTags)}
              </span>
              <span className="text-gray-500 text-xs">5 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-medical-dark hover:text-medical-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{post.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="font-medium text-sm">
                  <span className="text-medical-dark">Admin</span>
                  <p className="text-gray-500 text-xs">Medical Team</p>
                </div>
              </div>
              <span className="text-gray-500 text-xs">{formatDate(post.createdAt)}</span>
            </div>
          </CardContent>
      </Link>
    </Card>
  );
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState("");
  const [data, setData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogData();
  }, []);

  const blogData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`, {
        method: "GET",
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "No blog");
        return;
      } else {
        setData(result);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories from the API data
  const getCategoriesFromData = () => {
    const categories = new Set<string>();
    data.forEach(post => {
      if (post.metaTags && post.metaTags.length > 0) {
        post.metaTags.forEach(tag => categories.add(tag));
      } else {
        categories.add("General");
      }
    });
    return ["All", ...Array.from(categories)];
  };

  const categories = getCategoriesFromData();

  const filteredPosts = data.filter((post) => {
    const matchesSearch =
      (post.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (post.description?.toLowerCase() || '').includes(searchTerm.toLowerCase());
    
    const postCategory = post.metaTags && post.metaTags.length > 0 ? post.metaTags[0] : "General";
    const matchesCategory = selectedCategory === "All" || postCategory === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <div className="content-container py-12">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700">Loading blogs...</h2>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <div className="content-container py-12">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-red-600">Error: {error}</h2>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

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
