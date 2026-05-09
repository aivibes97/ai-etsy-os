// Niche Analysis Types
export interface NicheAnalysis {
  products: string[];
  targetAudience: string;
  demandLevel: string;
  competitionLevel: string;
  angle: string;
}

// SEO Generator Types
export interface SEOResult {
  title: string;
  description: string;
  tags: string[];
  benefits: string[];
  priceRange: string;
}

// TikTok Hook Types
export interface TikTokHook {
  hooks: string[];
  videoScript: string;
  cta: string;
  hashtags: string[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
