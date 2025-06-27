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
}

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  let blog: BlogPost;

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${id}`);
    blog = res.data;
  } catch (err) {
    notFound(); // Show 404 page if blog not found
  }

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
          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
            <Image
              src={blog.thumbnailUrl}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Blog Title & Description */}
          <h1 className="text-3xl font-bold text-medical-dark mb-4">{blog.title}</h1>
          <p className="text-gray-600 mb-4">{blog.description}</p>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Created At */}
          <div className="mt-8 text-sm text-gray-500">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
