import Link from 'next/link';
import { type Article } from '@/types/blog';
import { Newspaper } from 'lucide-react';

interface InlineRelatedArticlesProps {
  articles: Article[];
}

export const InlineRelatedArticles = ({ articles }: InlineRelatedArticlesProps) => {
  // Don't render the component if there are no articles to show
  if (articles.length === 0) {
    return null;
  }

  return (
    <aside className="my-8 p-6 rounded-lg bg-muted/10 not-prose">
      <h3 className="flex items-center text-lg font-semibold text-foreground mb-4">
        Related Articles
      </h3>
      <ul className="space-y-3">
        {articles.map(article => (
          <li key={article.id}>
            <Link 
              href={`/article/${article.slug}`} 
              className="group flex items-center text-base"
            >
              <span className="text-primary font-medium mr-3 transition-transform duration-300 group-hover:translate-x-1">✳</span>
              <span className="text-muted-foreground font-bold group-hover:text-foreground transition-colors">
                {article.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};