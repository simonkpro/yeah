import { articles, authors } from '@/data/mockArticles'; // Import both
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/article/ArticleCard';
import Link from 'next/link';

const getAuthorData = (slug: string) => {
  const author = authors.find(a => a.slug === slug);
  if (!author) return { author: null, authorArticles: [] };

  const authorArticles = articles
    .filter(article => article.authorSlug === slug)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return { author, authorArticles };
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const { author, authorArticles } = getAuthorData(params.slug);

  if (!author) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link> / <span className="text-foreground">{author.name}</span>
            </nav>
          </div>

          {/* Author Bio Section */}
          <section className="mb-16 flex flex-col md:flex-row items-center text-center md:text-left gap-8">
            {author.avatar && (
              <img
                src={author.avatar}
                alt={author.name}
                className="w-32 h-32 rounded-full flex-shrink-0"
              />
            )}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4 font-space-grotesk">{author.name}</h1>
              <p className="text-lg text-muted-foreground">{author.bio}</p>
            </div>
          </section>

          {/* Articles by this Author */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 font-space-grotesk">
              Articles by {author.name}
            </h2>
            {authorArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {authorArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
                </div>
            ) : (
                <p className='text-muted-foreground'>No articles found for this author yet.</p>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}