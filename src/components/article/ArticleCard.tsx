"use client";

import Link from 'next/link';
import { type Article } from '../../types/blog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Clock, User } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const handleCategoryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (featured) {
    // --- Renders the featured card with text BELOW the image ---
    return (
      <Link href={`/article/${article.slug}`} className="block group h-full">
        <Card className="cosmic-card cosmic-glow h-full overflow-hidden">
          {/* Image container */}
          <div className="relative overflow-hidden">
            {/* Main article image */}
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 h-64"
            />
            {/* Texture overlay */}
            <img
              src="/texture.png" // Assumes texture.png is in the `public` folder
              alt="Texture overlay"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25"
            />
            {/* Category Badge on top */}
            <div className="absolute top-4 left-4 z-10">
              <Link
                href={`/${article.category.toLowerCase()}`}
                onClick={handleCategoryClick}
                className="relative"
              >
                <Badge
                  variant="secondary"
                  className="cosmic-glass text-xs font-medium hover:bg-primary/80 transition-colors"
                >
                  {article.category}
                </Badge>
              </Link>
            </div>
          </div>
          
          {/* Text content is now outside and below the image, ensuring readability */}
          <CardHeader className="p-8">
            <h2 className="font-semibold text-foreground leading-tight group-hover:text-primary transition-colors text-2xl mb-3">
              {article.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              {article.excerpt}
            </p>
          </CardHeader>

          <CardContent className="px-8 pb-8 pt-0">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{article.author.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
              <span className="text-xs">{formatDate(article.publishedAt)}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  // --- Renders the regular, non-featured card ---
  return (
    <Link href={`/article/${article.slug}`} className="block group h-full">
      <Card className="cosmic-card h-full">
        {article.imageUrl && (
          <div className="relative overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 h-48"
            />
            <div className="absolute top-4 left-4 z-10">
              <Link
                href={`/${article.category.toLowerCase()}`}
                onClick={handleCategoryClick}
                className="relative"
              >
                <Badge
                  variant="secondary"
                  className="cosmic-glass text-xs font-medium hover:bg-primary/80 transition-colors"
                >
                  {article.category}
                </Badge>
              </Link>
            </div>
          </div>
        )}
        
        <CardHeader className="p-6">
          <h2 className="font-semibold text-foreground leading-tight group-hover:text-primary transition-colors text-lg mb-2">
            {article.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {article.excerpt}
          </p>
        </CardHeader>

        <CardContent className="px-6 pb-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{article.author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
            <span className="text-xs">{formatDate(article.publishedAt)}</span>
          </div>
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="text-xs font-normal border-border/50 text-muted-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

// Helper function to format the date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}