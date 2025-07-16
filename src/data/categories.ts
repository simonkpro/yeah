// src/data/categories.ts

export interface SubCategory {
    name: string;
    slug: string;
    description: string;
  }
  
  export interface MainCategory {
    name: string;
    slug: string;
    subCategories: SubCategory[];
  }
  
  export const navigationData: MainCategory[] = [
    {
      name: "Crypto",
      slug: "crypto",
      subCategories: [
        { name: "Bitcoin", slug: "bitcoin", description: "The latest news and analysis on Bitcoin." },
        { name: "Ethereum", slug: "ethereum", description: "Updates from the Ethereum ecosystem." },
        { name: "Altcoins", slug: "altcoins", description: "Discover promising alternative cryptocurrencies." },
        { name: "Airdrops", slug: "airdrops", description: "Find and claim upcoming crypto airdrops." },
        { name: "DeFi", slug: "defi", description: "Insights into decentralized finance." },
      ],
    },
    {
      name: "Stocks",
      slug: "stocks",
      subCategories: [
        { name: "Tech Stocks", slug: "tech", description: "Technology stock market." },
        { name: "Dividend Investing", slug: "dividends", description: "Strategies for investors." },
        { name: "Penny Stocks", slug: "penny", description: "High-risk, high-reward opportunities." },
        { name: "Blue Chip Stocks", slug: "blue-chip", description: "Investing in established, stable companies." },
      ],
    },
    {
      name: "Markets",
      slug: "markets",
      subCategories: [
          { name: "Macro Analysis", slug: "macro", description: "Understanding broad economic trends." },
          { name: "Company Earnings", slug: "earnings", description: "Breaking down the latest earnings reports." },
          { name: "On-Chain Data", slug: "onchain", description: "Using blockchain data to gain an edge." },
          { name: "Technical Analysis", slug: "technical", description: "Charting patterns and market indicators." },
      ],
    },
    {
      name : "Strategies",
      slug: "strategies",
      subCategories: [
        { name : "Long Term", slug: "long-term", description: ""},
        { name : "Swing Trading", slug: "swing-trading", description: ""},
        { name : "Tax Plays", slug: "tax-plays", description: ""},
      ]

    },
    {
      name : "Tools",
      slug : "tools",
      subCategories: [
        { name : "Portfolio Trackers", slug: "portfolio-flug", description: ""},
        { name : "Wallet", slug: "wallet", description: ""},
        { name : "Trading Platforms", slug: "trading-platforms", description: ""}
      ]


    }
  ];