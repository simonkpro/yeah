"use client";

import { useState, useMemo } from 'react';
import { Header } from './Header';
import { Footer } from './Footer'; 
import { ArticleCard } from '../article/ArticleCard';
import { type Article } from "@/types/blog";

export const HomePageClient = ({ articles }: { articles: Article[] }) => {
  // The onSearch prop from the Header now handles the search query state.
  const [searchQuery, setSearchQuery] = useState('');

  // The filtering logic is now simplified to only use the search query.
  const filteredArticles = useMemo(() => {
    if (searchQuery === '') {
      return articles;
    }
    return articles.filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, articles]);

  // Logic for featured and regular articles remains the same.
  const featuredArticle = useMemo(() => 
    articles.find(article => article.featured), 
  [articles]);

  const regularArticles = filteredArticles.filter(article => !article.featured || article.id !== featuredArticle?.id);

  return (
    <div className="min-h-screen">
      <Header onSearch={setSearchQuery} />
      <main className="container mx-auto px-6 py-12">
        {searchQuery && (
          <div className="mb-8">
            <p className="text-muted-foreground text-sm">
              {filteredArticles.length} result{filteredArticles.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
          </div>
        )}

        {/* The CategoryFilter component has been removed. */}

        {/* Show featured story only when not searching. */}
        {featuredArticle && !searchQuery && (
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-8 tracking-tight font-space-grotesk">Featured Story</h2>
            <ArticleCard article={featuredArticle} featured={true} />
          </section>
        )}

        <section>
          {/* Title is now always "Latest Articles" when not searching. */}
          <h2 className="text-3xl font-semibold text-foreground mb-8 tracking-tight font-space-grotesk">
            {searchQuery ? 'Search Results' : 'Latest Articles'}
          </h2>
          
          {regularArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-2">No articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer /> 
    </div>
  );
};