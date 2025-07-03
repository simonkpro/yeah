import { articles } from '../../data/mockArticles';
import { CategoryPageClient } from '../../components/layout/CategoryPageClient';

const TechPage = () => {
  // 1. Define page-specific info on the server
  const pageTitle = "Tech News";
  const pageDescription = "Stay updated with the latest technology news, innovations, and industry developments.";
  const categoryName = "Tech";

  // 2. Filter data on the server
  const techArticles = articles.filter(article => article.category === categoryName);

  // 3. Render the client component with the correct props
  return (
    <CategoryPageClient 
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      categoryName={categoryName}
      articles={techArticles}
    />
  );
};

export default TechPage;