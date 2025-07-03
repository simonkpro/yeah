import { articles } from '../../data/mockArticles';
import { CategoryPageClient } from '../../components/layout/CategoryPageClient';

const SecurityPage = () => {
  // 1. Define page-specific info on the server
  const pageTitle = "Cybersecurity News";
  const pageDescription = "Stay informed about the latest cybersecurity threats, data breaches, and security developments.";
  const categoryName = "Security";

  // 2. Filter data on the server
  const securityArticles = articles.filter(article => article.category === categoryName);

  // 3. Render the client component with the correct props
  return (
    <CategoryPageClient 
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      categoryName={categoryName}
      articles={securityArticles}
    />
  );
};

export default SecurityPage;