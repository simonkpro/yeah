
export interface Author {
  name: string;
  slug: string;
  bio: string;
  avatar?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  featured: boolean;
  readTime: number;
  authorSlug: string; // 2. Change 'author' object to 'authorSlug' string
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}