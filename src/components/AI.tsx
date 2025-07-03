import { articles } from '../data/mockArticles';
import { CategoryPageClient } from '../components/layout/CategoryPageClient';

const AIPage = () => {
  // 1. Define page-specific info on the server
  const pageTitle = "Artificial Intelligence";
  const pageDescription = "Discover the latest developments in artificial intelligence, machine learning, and their impact on society.";
  const categoryName = "AI";
  
  // 2. Filter data on the server
  const aiArticles = articles.filter(article => article.category === categoryName);

  // 3. Render the client component with the correct props
  return (
    <CategoryPageClient 
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      categoryName={categoryName}
      articles={aiArticles}
    />
  );
};

export default AIPage;