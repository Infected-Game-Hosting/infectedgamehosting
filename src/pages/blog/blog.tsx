import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useBlogPosts } from "@/hooks/useContentful";
import { formatDistanceToNow } from "date-fns";
import Navbar from "@/components/navbar/blog-header";

export const Blog = () => {
  const { data: blogPosts, loading } = useBlogPosts();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0b0f]">
        <Navbar />
        <main className="pt-20">
          <section className="py-20 bg-[#0b0b0f]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="h-8 bg-[#39ff14]/20 rounded w-64 mx-auto mb-4 animate-pulse"></div>
                <div className="h-4 bg-[#39ff14]/20 rounded w-96 mx-auto animate-pulse"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-[#39ff14]/20 h-64 rounded-t-lg"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-[#39ff14]/20 rounded"></div>
                      <div className="h-4 bg-[#39ff14]/20 rounded"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-[#39ff14]/20 rounded"></div>
                        <div className="h-3 bg-[#39ff14]/20 rounded"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="h-10 bg-[#39ff14]/20 rounded flex-1"></div>
                        <div className="h-10 bg-[#39ff14]/20 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0f]">
      <Helmet>
        <title>Blog | Make Maker</title>
        <meta
          name="description"
          content="Stay updated with the latest insights, trends, and innovations in game hosting."
        />
        <meta property="og:title" content="Blog | Make Maker" />
        <meta
          property="og:description"
          content="Stay updated with the latest insights, trends, and innovations in game hosting."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.makemaker.com/blog" />
        <meta property="og:image" content="/opengraph-image.png" />
      </Helmet>

      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-[#0b0b0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent mb-4">
                Latest Articles
              </h1>
              <p className="text-xl text-[#c8cbd0] max-w-3xl mx-auto">
                Stay updated with the latest insights, trends, and innovations
                in game hosting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts?.map((post) => (
                <Card
                  key={post.sys.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-[#0b0b0f] border-[#39ff14]/20"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={
                          post.fields.featuredImage?.fields.file.url ||
                          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400"
                        }
                        alt={post.fields.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.fields.category && (
                        <Badge className="absolute top-4 left-4 bg-[#39ff14] text-black border-none">
                          {post.fields.category}
                        </Badge>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                        {post.fields.title}
                      </h3>
                      <p className="text-[#c8cbd0] mb-4 line-clamp-3">
                        {post.fields.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-[#c8cbd0] mb-4">
                        <span>{post.fields.author}</span>
                        <span>
                          {formatDistanceToNow(
                            new Date(post.fields.publishDate)
                          )}{" "}
                          ago
                        </span>
                      </div>

                      <Link
                        to={`/blog/${post.fields.slug}`}
                        className="inline-flex items-center text-[#39ff14] hover:text-[#2ee80f] font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
