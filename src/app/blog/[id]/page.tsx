import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

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

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  let blog: BlogPost;

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${id}`);
    
    if (!res.data) {
      notFound();
    }
    
    blog = res.data;
  } catch (err) {
    console.error('Error fetching blog:', err);
    notFound(); // Show 404 page if blog not found
  }

  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Get category from metaTags
  const getCategory = (metaTags: string[]) => {
    return metaTags && metaTags.length > 0 ? metaTags[0] : "General";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50 pt-8 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <div className="mb-4">
            <Link href="/blog">
              <button className="text-medical-primary hover:underline text-sm font-medium">
                ← Back to all blogs
              </button>
            </Link>
          </div>

          {/* Blog Image */}
          {blog.thumbnailUrl && (
            <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
              <Image
                src={blog.thumbnailUrl}
                alt={blog.title || 'Blog image'}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {/* Blog Meta Info */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <span className="bg-medical-light text-medical-primary px-3 py-1 rounded-full text-xs font-medium">
              {getCategory(blog.metaTags)}
            </span>
            <span>{formatDate(blog.createdAt)}</span>
          </div>

          {/* Blog Title & Description */}
          <h1 className="text-3xl font-bold text-medical-dark mb-4">
            {blog.title || 'Untitled Blog Post'}
          </h1>
          {blog.description && (
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {blog.description}
            </p>
          )}

          {/* Blog Content */}
          {blog.content ? (
            <div
              className="prose prose-lg max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            <div className="text-gray-500 italic">
              No content available for this blog post.
            </div>
          )}

          {/* Author Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center">
              <div className="font-medium text-sm">
                <span className="text-medical-dark">Admin</span>
                <p className="text-gray-500 text-xs">Medical Team</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}