"use client";

import Link from "next/link";
import { useState, useMemo } from 'react';
import { Header } from './Header';
import { ArticleCard } from '../article/ArticleCard';
import { type Article } from "@/types/blog";

// Define the props the component will accept
interface CategoryPageProps {
  pageTitle: string;
  pageDescription: string;
  categoryName: string;
  articles: Article[];
}

export const CategoryPageClient = ({ 
  pageTitle, 
  pageDescription, 
  categoryName, 
  articles 
}: CategoryPageProps) => {
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <div className="min-h-screen">
      <Header onSearch={setSearchQuery} />
      <main className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="transition-colors">Home</Link> / <span className="text-foreground">{categoryName}</span>
          </nav>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-space-grotesk">{pageTitle}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {pageDescription}
          </p>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-8">
            <p className="text-muted-foreground text-sm">
              {filteredArticles.length} result{filteredArticles.length !== 1 ? 's' : ''} for "{searchQuery}" in {categoryName}
            </p>
          </div>
        )}

        {/* Articles Grid */}
        <section>
          {filteredArticles.length === 0 ? (
             <div className="text-center py-16">
               <p className="text-muted-foreground text-lg mb-2">No {categoryName} articles found.</p>
               {searchQuery && (
                 <p className="text-muted-foreground/70 text-sm">
                   Try adjusting your search terms.
                 </p>
               )}
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>
      </main>
      {/* Your Footer can be a separate component or stay here */}
      <footer className="border-t border-border/50 mt-24 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center text-muted-foreground/70 text-sm mt-8 pt-8 border-t border-border/30">
            © 2024 TechReport. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};