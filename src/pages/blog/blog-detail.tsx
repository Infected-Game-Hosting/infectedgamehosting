import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { useBlogPostBySlug, useBlogPosts } from "@/hooks/useContentful";
import {
  useBlogPostBySlugQuery,
  useBlogPostsQuery,
  usePrefetchBlogPost,
} from "@/hooks/useContentQuery";
import { ContentfulRichTextRenderer } from "@/components/common/ContentfulRichTextRenderer";
import { toast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

import Footer from "@/components/Footer";
import { useQueryClient } from "@tanstack/react-query";
import Navbar from "@/components/navbar/blog-header";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  // const { data: article, loading: isLoading } = useBlogPostBySlug(slug || "");
  // const { data: allPosts } = useBlogPosts();
  const { data: article, isLoading } = useBlogPostBySlugQuery(slug);
  const { data: allPosts } = useBlogPostsQuery();
  const prefetchBlogPost = usePrefetchBlogPost();
  const qc = useQueryClient();
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);

  useEffect(() => {
    if (article && allPosts) {
      // Ensure allPosts is an array before processing
      const postsArray = Array.isArray(allPosts) ? allPosts : [];

      // Get related articles (excluding current article)
      const related = postsArray
        .filter((post: any) => {
          // More robust filtering
          return (
            post &&
            post.sys &&
            post.sys.id &&
            article &&
            article.sys &&
            article.sys.id &&
            post.sys.id !== article.sys.id
          );
        })
        .slice(0, 3);

      setRelatedArticles(related);
    }
  }, [article, allPosts]);

  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(article?.fields?.title || "")}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      default:
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "The article link has been copied to your clipboard.",
          duration: 3000,
        });
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };
  // Safe function to get author initials
  const getAuthorInitials = (authorName: string | undefined) => {
    if (!authorName || typeof authorName !== "string") return "MM";
    try {
      return (
        authorName
          .split(" ")
          .map((n: string) => n[0])
          .join("") || "MM"
      );
    } catch (error) {
      console.warn("Error getting author initials:", error);
      return "MM";
    }
  };

  // Safe function to get tags array
  const getTagsArray = (tags: any) => {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    if (typeof tags === "string") return [tags];
    return [];
  };

  // Safe function to get featured image URL
  const getFeaturedImageUrl = (featuredImage: any) => {
    if (!featuredImage) return null;

    // Handle different possible structures
    let imageUrl = null;

    if (featuredImage.fields?.file?.url) {
      imageUrl = featuredImage.fields.file.url;
    } else if (featuredImage.url) {
      imageUrl = featuredImage.url;
    }

    if (imageUrl && imageUrl.startsWith("//")) {
      return `https:${imageUrl}`;
    }

    return imageUrl;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0b0b0f] flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-[#c8cbd0] hover:text-[#39ff14] mb-6"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to all posts
            </Link>
            <Skeleton className="h-12 w-3/4 mb-6 bg-[#39ff14]/20" />
            <div className="flex items-center mb-6">
              <Skeleton className="h-6 w-32 mr-4 bg-[#39ff14]/20" />
              <Skeleton className="h-6 w-24 bg-[#39ff14]/20" />
            </div>
            <Skeleton className="h-64 w-full mb-8 rounded-lg bg-[#39ff14]/20" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-full bg-[#39ff14]/20" />
              <Skeleton className="h-6 w-full bg-[#39ff14]/20" />
              <Skeleton className="h-6 w-3/4 bg-[#39ff14]/20" />
              <Skeleton className="h-20 w-full bg-[#39ff14]/20" />
              <Skeleton className="h-6 w-full bg-[#39ff14]/20" />
              <Skeleton className="h-6 w-5/6 bg-[#39ff14]/20" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article || !article?.fields) {
    return (
      <div className="min-h-screen bg-[#0b0b0f] flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-white">
              Article not found
            </h1>
            <p className="mb-6 text-[#c8cbd0]">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/blog">
              <Button className="bg-[#39ff14] text-black hover:bg-[#2ee80f]">
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get tags and image safely
  const tagsArray = getTagsArray(article?.fields?.tags);
  const featuredImageUrl = getFeaturedImageUrl(article?.fields?.featuredImage);

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex flex-col">
      <Helmet>
        <title>{article?.fields?.title} | Make Maker</title>
        <meta name="description" content={article?.fields?.description} />
        <meta
          property="og:title"
          content={`${article?.fields?.title} | Make Maker`}
        />
        <meta
          property="og:description"
          content={article?.fields?.description}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.makemaker.com/blog/${slug}`}
        />
        {article?.fields?.featuredImage && (
          <meta
            property="og:image"
            content={`https:${article?.fields?.featuredImage?.fields?.file?.url}`}
          />
        )}
        <meta
          property="article:published_time"
          content={article?.fields?.publishDate}
        />
        <meta
          property="article:author"
          content={article?.fields?.author || ""}
        />
        {article?.fields?.category && (
          <meta
            property="article:section"
            content={article?.fields?.category}
          />
        )}
        {article?.fields?.tags &&
          article?.fields?.tags.map((tag: string) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="w-full bg-[#0b0b0f] py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-[#c8cbd0] hover:text-[#39ff14] mb-4"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#c8cbd0] to-[#39ff14] bg-clip-text text-transparent">
              {article?.fields?.title || "Untitled Article"}
            </h1>

            <div className="flex flex-wrap items-center text-[#c8cbd0] gap-3 md:gap-4 mb-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>
                  {article?.fields?.publishDate
                    ? new Date(article.fields.publishDate).toLocaleDateString()
                    : "No date"}
                </span>
              </div>

              {article?.fields?.readingTime && (
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{article.fields.readingTime}</span>
                </div>
              )}

              {article?.fields?.category && (
                <div className="bg-[#39ff14] text-black px-3 py-1 rounded-full text-sm">
                  {article.fields.category}
                </div>
              )}
            </div>

            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarFallback className="bg-[#39ff14] text-black">
                  {getAuthorInitials(article?.fields?.author)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-white">
                  {article?.fields?.author || "Make Maker Team"}
                </p>
                <p className="text-sm text-[#c8cbd0]">Content Creator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full max-w-4xl mx-auto px-4 -mt-8 md:-mt-16">
          {featuredImageUrl && (
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src={featuredImageUrl || "/placeholder.svg"}
                alt={
                  article?.fields?.featuredImage?.fields?.title ||
                  article?.fields?.title ||
                  "Featured image"
                }
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Social Share Sidebar - Desktop */}
            <div className="hidden md:flex flex-col items-center sticky top-24 h-fit space-y-4 px-2">
              <p className="text-sm font-medium text-[#c8cbd0]">Share</p>
              <button
                onClick={() => handleShare("facebook")}
                className="p-2 rounded-full bg-[#39ff14]/10 hover:bg-[#39ff14]/20 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook size={18} className="text-[#39ff14]" />
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="p-2 rounded-full bg-[#39ff14]/10 hover:bg-[#39ff14]/20 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter size={18} className="text-[#39ff14]" />
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="p-2 rounded-full bg-[#39ff14]/10 hover:bg-[#39ff14]/20 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={18} className="text-[#39ff14]" />
              </button>
              <button
                onClick={() => handleShare("copy")}
                className="p-2 rounded-full bg-[#39ff14]/10 hover:bg-[#39ff14]/20 transition-colors"
                aria-label="Copy Link"
              >
                <Share2 size={18} className="text-[#39ff14]" />
              </button>
            </div>

            {/* Article Content */}
            <div className="flex-1">
              {article?.fields?.content && (
                <div className="prose prose-lg max-w-none text-[#c8cbd0]">
                  <ContentfulRichTextRenderer
                    document={article.fields.content}
                  />
                </div>
              )}

              {/* Tags - Fixed version */}
              {tagsArray.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3 text-[#39ff14]">
                    Tags:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tagsArray.map((tag: string, index: number) => (
                      <span
                        key={`${tag}-${index}`}
                        className="px-3 py-1 bg-[#39ff14]/10 text-[#39ff14] rounded-full text-sm"
                      >
                        {typeof tag === "string" ? tag : String(tag)}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Share - Mobile */}
              <div className="md:hidden mt-8">
                <h3 className="text-lg font-semibold mb-3 text-[#39ff14]">
                  Share this article:
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="p-2 rounded-full bg-[#39ff14]/10 hover:bg-[#39ff14]/20 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={18} className="text-[#39ff14]" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="p-2 rounded-full bg-[#39ff14]/10 hover:bg-[#39ff14]/20 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={18} className="text-[#39ff14]" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="p-2 rounded-full bg-[#39ff14]/10 hover:bg-[#39ff14]/20 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} className="text-[#39ff14]" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="p-2 rounded-full bg-[#39ff14]/10 hover:bg-[#39ff14]/20 transition-colors"
                    aria-label="Copy Link"
                  >
                    <Share2 size={18} className="text-[#39ff14]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles - Fixed version */}
        {relatedArticles && relatedArticles.length > 0 && (
          <div className="bg-gradient-to-br from-[#39ff14]/5 via-transparent to-[#39ff14]/10 py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle, index) => {
                  const relatedImageUrl = getFeaturedImageUrl(
                    relatedArticle?.fields?.featuredImage
                  );
                  const relatedSlug = relatedArticle?.fields?.slug;

                  return (
                    <div
                      key={relatedArticle?.sys?.id || `related-${index}`}
                      className="bg-[#0b0b0f] border border-[#39ff14]/20 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    >
                      {relatedImageUrl && (
                        <img
                          src={relatedImageUrl || "/placeholder.svg"}
                          alt={
                            relatedArticle?.fields?.featuredImage?.fields
                              ?.title ||
                            relatedArticle?.fields?.title ||
                            "Related article image"
                          }
                          className="w-full h-36 object-cover"
                        />
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2 text-white">
                          {relatedArticle?.fields?.title || "Untitled Article"}
                        </h3>
                        <p className="text-sm text-[#c8cbd0] line-clamp-3 mb-3">
                          {relatedArticle?.fields?.excerpt ||
                            relatedArticle?.fields?.description ||
                            "No excerpt available"}
                        </p>
                        {relatedArticle?.fields?.slug && (
                          // <Link
                          //   to={`/blog/${relatedArticle.fields.slug}`}
                          //   className="text-sm text-[#39ff14] hover:text-[#2ee80f] font-medium"
                          // >
                          //   Read more
                          // </Link>
                          <Link
                            to={`/blog/${relatedSlug}`}
                            onMouseEnter={() => {
                              // prefetch on hover
                              prefetchBlogPost(relatedSlug);
                            }}
                            onClick={() => {
                              // ensure we start at top once navigated
                              window.scrollTo(0, 0);
                              // optionally invalidate to force refetch:
                              // qc.invalidateQueries(["blogPost", relatedSlug]);
                            }}
                          >
                            Read more
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
