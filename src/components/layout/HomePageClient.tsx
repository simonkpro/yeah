"use client";

import Link from "next/link";
import { useState, useMemo } from 'react';
import { Header } from './Header';
import { Footer } from './Footer'; 
import { ArticleCard } from '../article/ArticleCard';
import { CategoryFilter } from './CategoryFilter';
import { type Article } from "@/types/blog";

export const HomePageClient = ({ articles }: { articles: Article[] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === null || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, articles]);

  // Determine the featured article based on the filtered list
  const featuredArticle = useMemo(() => 
    articles.find(article => article.featured), 
  [articles]);

  // Exclude the featured article from the regular list
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

        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {featuredArticle && !searchQuery && !selectedCategory && (
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-8 tracking-tight font-space-grotesk">Featured Story</h2>
            <ArticleCard article={featuredArticle} featured={true} />
          </section>
        )}

        <section>
          <h2 className="text-3xl font-semibold text-foreground mb-8 tracking-tight font-space-grotesk">
            {selectedCategory ? `${selectedCategory} Articles` : 'Latest Articles'}
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