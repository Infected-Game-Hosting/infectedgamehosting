import { useState, useEffect } from "react";
import * as contentfulService from "@/services/contentful";

// Helper function to extract 'en-US' values from Contentful fields
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

// Helper function to extract arrays with nested fields
const extractLocalizedArray = (items: any[]) => {
  if (!Array.isArray(items)) return [];
  return items.map((item) => extractLocalizedFields(item));
};

export function useContentful<T>(
  fetchFunction: () => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Contentful fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
}

// Fixed blog posts hook
export const useBlogPosts = () => {
  const { data, loading, error } = useContentful(
    contentfulService.getBlogPosts
  );

  return {
    data: Array.isArray(data) ? extractLocalizedArray(data) : [],
    loading,
    error,
  };
};

// Fixed blog post by slug hook
export const useBlogPostBySlug = (slug: string) => {
  const { data, loading, error } = useContentful(
    () => contentfulService.getBlogPostBySlug(slug),
    [slug]
  );

  return {
    data: data ? extractLocalizedFields(data) : null,
    loading,
    error,
  };
};

export const useDownloads = () => {
  const { data, loading, error } = useContentful(
    contentfulService.getDownloads
  );

  return {
    data: Array.isArray(data) ? extractLocalizedArray(data) : [],
    loading,
    error,
  };
};

export const useDownloadBySlug = (slug: string) => {
  const { data, loading, error } = useContentful(
    () => contentfulService.getDownloadBySlug(slug),
    [slug]
  );

  return {
    data: data ? extractLocalizedFields(data) : null,
    loading,
    error,
  };
};

// Other hooks remain the same...
export const useHeroContent = () => {
  const { data, loading, error } = useContentful(
    contentfulService.getHeroContent
  );

  return {
    data: data?.fields || {
      headline: "",
      subheadline: "",
      backgroundImages: [],
      ctaButtons: [],
    },
    loading,
    error,
  };
};

export const useCaseStudyItems = () => {
  const { data, loading, error } = useContentful(
    contentfulService.getCaseStudyItems
  );

  return {
    data: Array.isArray(data) ? data : [],
    loading,
    error,
  };
};

export const useAboutUsContent = () => {
  const { data, loading, error } = useContentful(
    contentfulService.getAboutUsContent
  );

  return {
    data: data?.fields || {
      story: "",
      mission: "",
      vision: "",
      coreValues: [],
      problemOverview: "",
      sdgs: [],
      facilityImage: null,
      logo: null,
    },
    loading,
    error,
  };
};

export const useMachines = () => {
  const { data, loading, error } = useContentful(contentfulService.getMachines);

  return {
    data: Array.isArray(data) ? data : [],
    loading,
    error,
  };
};

export const useServices = () => {
  const { data, loading, error } = useContentful(contentfulService.getServices);

  return {
    data: Array.isArray(data) ? data : [],
    loading,
    error,
  };
};

export const useUseCases = () => {
  const { data, loading, error } = useContentful(contentfulService.getUseCases);

  return {
    data: Array.isArray(data) ? data : [],
    loading,
    error,
  };
};

export const useImpactMetrics = () => {
  const { data, loading, error } = useContentful(
    contentfulService.getImpactMetrics
  );

  return {
    data: data?.fields || {
      stats: [],
      environmentalImpact: [],
      socialImpact: [],
    },
    loading,
    error,
  };
};

export const useProducts = () => {
  const { data, loading, error } = useContentful(contentfulService.getProducts);

  return {
    data: Array.isArray(data) ? data : [],
    loading,
    error,
  };
};

export const usePartners = () => {
  const { data, loading, error } = useContentful(contentfulService.getPartners);

  return {
    data: Array.isArray(data) ? data : [],
    loading,
    error,
  };
};

export const useTestimonials = () => {
  const { data, loading, error } = useContentful(
    contentfulService.getTestimonials
  );

  return {
    data: Array.isArray(data) ? data : [],
    loading,
    error,
  };
};

export const useContactInfo = () => {
  const { data, loading, error } = useContentful(
    contentfulService.getContactInfo
  );

  return {
    data: data?.fields || {
      email: "",
      phone: "",
      whatsappNumber: "",
      address: "",
      socialLinks: [],
    },
    loading,
    error,
  };
};

export const useFilaments = () => {
  const { data, loading, error } = useContentful(
    contentfulService.getFilaments
  );

  return {
    data: Array.isArray(data) ? data : [],
    loading,
    error,
  };
};
