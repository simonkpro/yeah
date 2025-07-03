import { articles } from '../data/mockArticles';
import { HomePageClient } from '../components/layout/HomePageClient';

// This is the main Server Component for your homepage.
const IndexPage = () => {
  // 1. All articles are loaded on the server.
  //    In a real app, this is where you'd fetch from your database or CMS.
  const allArticles = articles;

  // 2. The data is passed to the Client Component which handles all interactivity.
  return <HomePageClient articles={allArticles} />;
};

export default IndexPage;