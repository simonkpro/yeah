import { articles } from '../../data/mockArticles';
import { CategoryPageClient } from '../../components/layout/CategoryPageClient';

const PrivacyPage = () => {
  // 1. Define page-specific info on the server
  const pageTitle = "Privacy & Digital Rights";
  const pageDescription = "Explore privacy issues, digital rights, and data protection in our increasingly connected world.";
  const categoryName = "Privacy";

  // 2. Filter data on the server
  const privacyArticles = articles.filter(article => article.category === categoryName);

  // 3. Render the client component with the correct props
  return (
    <CategoryPageClient 
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      categoryName={categoryName}
      articles={privacyArticles}
    />
  );
};

export default PrivacyPage;