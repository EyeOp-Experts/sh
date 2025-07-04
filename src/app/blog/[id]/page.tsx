import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

interface Section {
  sectionTitle: string;
  sectionContent: string;
  order: number;
}

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  sections: Section[];
  thumbnailUrl: string;
  metaTags: string[];
  createdAt: string;
  __v: number;
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
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

  // Render section content with bullet point support
  const renderSectionContent = (content: string) => {
    // Split content by lines to handle bullet points
    const lines = content.split('\n');
    
    return (
      <div className="space-y-3">
        {lines.map((line, index) => {
          const trimmedLine = line.trim();
          
          // Check if line starts with bullet point indicators
          if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) {
            return (
              <div key={index} className="flex items-start">
                <span className="text-medical-primary mr-2 mt-1">•</span>
                <span className="text-gray-700">{trimmedLine.substring(1).trim()}</span>
              </div>
            );
          }
          
          // Check if line starts with numbered list
          if (/^\d+\./.test(trimmedLine)) {
            const match = trimmedLine.match(/^(\d+)\.\s*(.*)/);
            if (match) {
              return (
                <div key={index} className="flex items-start">
                  <span className="text-medical-primary mr-2 mt-1 font-medium">{match[1]}.</span>
                  <span className="text-gray-700">{match[2]}</span>
                </div>
              );
            }
          }
          
          // Regular paragraph
          if (trimmedLine) {
            return (
              <p key={index} className="text-gray-700 leading-relaxed">
                {trimmedLine}
              </p>
            );
          }
          
          // Empty line
          return <div key={index} className="h-3"></div>;
        })}
      </div>
    );
  };

  // Sort sections by order
  const sortedSections = blog.sections?.sort((a, b) => a.order - b.order) || [];

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

          {/* Blog Sections */}
          {sortedSections.length > 0 ? (
            <div className="space-y-8">
              {sortedSections.map((section, index) => (
                <section key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-medical-dark mb-4">
                    {section.sectionTitle}
                  </h2>
                  <div className="text-gray-700">
                    {renderSectionContent(section.sectionContent)}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 italic bg-white rounded-lg p-6 shadow-sm">
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