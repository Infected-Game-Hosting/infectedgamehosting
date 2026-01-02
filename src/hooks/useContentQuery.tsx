// src/hooks/useContentfulQuery.ts
import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as contentfulService from "@/services/contentful";

/* helper to extract en-US localized fields (same as yours) */
const extractLocalizedFields = (entry: any) => {
  if (!entry || !entry.fields) return entry;

  const extractedFields: any = {};
  for (const [key, value] of Object.entries(entry.fields)) {
    if (value && typeof value === "object" && "en-US" in value) {
      extractedFields[key] = (value as any)["en-US"];
    } else {
      extractedFields[key] = value;
    }
  }

  return {
    ...entry,
    fields: extractedFields,
  };
};

const extractLocalizedArray = (items: any[]) => {
  if (!Array.isArray(items)) return [];
  return items.map((item) => extractLocalizedFields(item));
};

/* ---------------- Blog Posts list ---------------- */
export const useBlogPostsQuery = () => {
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      const res = await contentfulService.getBlogPosts();
      return Array.isArray(res) ? extractLocalizedArray(res) : [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes stale
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
};

/* ---------------- Blog post by slug ---------------- */

export const useBlogPostBySlugQuery = (slug?: string) => {
  return useQuery({
    queryKey: ["blogPost", slug],
    queryFn: async () => {
      if (!slug) return null;
      const res = await contentfulService.getBlogPostBySlug(slug);
      return res ? extractLocalizedFields(res) : null;
    },
    enabled: !!slug,
    // choose staleTime based on how fresh you want it:
    staleTime: 0, // 0 = always fresh on mount (adjust if you want caching)
    refetchOnWindowFocus: false,
    // keepPreviousData false ensures we don't keep old article while new loads
    placeholderData: undefined,
    retry: 1,
  });
};

export const usePrefetchBlogPost = () => {
  const qc = useQueryClient();
  return (slug: string) =>
    qc.prefetchQuery({
      queryKey: ["blogPost", slug],
      queryFn: async () => {
        const res = await contentfulService.getBlogPostBySlug(slug);
        return res ? extractLocalizedFields(res) : null;
      },
      staleTime: 1000 * 60 * 5, // cached for prefetched queries
    });
};
