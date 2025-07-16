// src/app/[category]/[subcategory]/page.tsx
import { articles } from '@/data/mockArticles';
import { navigationData } from '@/data/categories';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/article/ArticleCard';
import Link from 'next/link';

const getSubCategoryData = (categorySlug: string, subCategorySlug: string) => {
  const mainCategory = navigationData.find(c => c.slug === categorySlug);
  const subCategory = mainCategory?.subCategories.find(s => s.slug === subCategorySlug);

  if (!subCategory || !mainCategory) return { subCategory: null, filteredArticles: [] };

  const filteredArticles = articles.filter(article => article.category === subCategory.slug);
  
  return { subCategory, mainCategory, filteredArticles };
}

export default function SubCategoryPage({ params }: { params: { category: string, subcategory: string } }) {
  const { subCategory, mainCategory, filteredArticles } = getSubCategoryData(params.category, params.subcategory);

  if (!subCategory || !mainCategory) {
    notFound();
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            {/* The main category is not a link here, as it's a dropdown trigger */}
            <span className="capitalize">{mainCategory.name}</span>
            <span className="mx-2">/</span>
            <span className="text-foreground capitalize">{subCategory.name}</span>
        </div>
        
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-space-grotesk capitalize">{subCategory.name}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{subCategory.description}</p>
        </div>

        {/* Articles Grid */}
        <section>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found in this sub-category.</p>
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
      <Footer />
    </div>
  );
}