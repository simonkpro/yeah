import { articles } from '@/data/mockArticles';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { User, Clock } from 'lucide-react';
import { InlineRelatedArticles } from '@/components/article/InlineRelatedArticles'; // 1. Import the new component

// getArticleData and getRelatedArticles functions remain the same
const getArticleData = (slug: string) => {
  return articles.find(article => article.slug === slug);
};

const getRelatedArticles = (currentArticle: typeof articles[0]) => {
  const MAX_RELATED_ARTICLES = 3;
  let relatedByTag = articles.filter(article =>
    article.id !== currentArticle.id &&
    article.tags.some(tag => currentArticle.tags.includes(tag))
  );
  relatedByTag = relatedByTag
    .filter((article, index, self) => index === self.findIndex(a => a.id === article.id))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  if (relatedByTag.length >= MAX_RELATED_ARTICLES) {
    return relatedByTag.slice(0, MAX_RELATED_ARTICLES);
  }
  const relatedByCategory = articles.filter(article =>
    article.id !== currentArticle.id &&
    article.category === currentArticle.category &&
    !relatedByTag.find(related => related.id === article.id)
  ).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const combinedRelated = [...relatedByTag, ...relatedByCategory];
  return combinedRelated.slice(0, MAX_RELATED_ARTICLES);
};


export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleData(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);

  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          {/* --- Article Header --- */}
          <div className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/${article.category.toLowerCase()}`} className="hover:text-foreground">{article.category}</Link>
          </div>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight font-space-grotesk">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{article.excerpt}</p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{article.author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} min read</span>
              </div>
              <span>•</span>
              <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </header>
          {article.imageUrl && (
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-auto rounded-lg mb-8" 
            />
          )}

          {/* --- Updated Article Body --- */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p>
              This is the first part of the article's content. You can write several paragraphs here to set the scene and introduce the main points of your post. This section should engage the reader and make them want to continue.
            </p>

            {/* 2. Insert the inline component */}
            <InlineRelatedArticles articles={relatedArticles} />
            
            <p>
              This is the second part of the article, following the related links. Here, you can delve deeper into the topic, provide analysis, and present your conclusions. This structure helps break up long content and keeps the reader engaged.
            </p>
          </div>

          {/* --- Tags Section --- */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">{tag}</Badge>
              ))}
            </div>
          )}
        </article>

        {/* The old, full-width "Keep Reading" section has been removed */}
      </main>
      <Footer />
    </div>
  );
}