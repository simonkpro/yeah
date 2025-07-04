import { MetadataRoute } from "next";
import { articles } from "../data/mockArticles"; // 1. Import your article data

const baseURL = "http://localhost:3000"; // 2. IMPORTANT: Replace with your actual domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 3. Create entries for your static pages
  const staticRoutes = [
    "", // Home page
    "/about",
    "/contact",
    "/tech",
    "/privacy",
    "/security",
    "/ai",
  ].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // 4. Create entries for each dynamic article page
  const articleRoutes = articles.map((article) => ({
    url: `${baseURL}/${article.category.toLowerCase()}/${article.slug}`,
    lastModified: new Date(article.publishedAt).toISOString(),
    changeFrequency: "yearly" as "yearly",
    priority: 0.6,
  }));

  // 5. Combine all routes and return
  return [...staticRoutes, ...articleRoutes];
}