// src/data/mockArticles.ts
import { Article, Author, Category } from '../types/blog';

// 1. A separate array for authors has been created.
export const authors: Author[] = [
  {
    name: 'Sarah Johnson',
    slug: 'sarah-johnson',
    bio: 'Sarah Johnson is a veteran cybersecurity reporter with a knack for breaking down complex data breaches for the public.',
    avatar: '/images/avatars/sarah-johnson.png',
  },
  {
    name: 'Michael Chen',
    slug: 'michael-chen',
    bio: 'Michael Chen focuses on the intersection of AI, policy, and regulation, tracking the ever-changing legal landscape of technology.',
    avatar: '/images/avatars/michael-chen.png',
  },
  {
    name: 'Emma Rodriguez',
    slug: 'emma-rodriguez',
    bio: 'Emma Rodriguez is a privacy advocate and software engineer who champions the development and adoption of encrypted technologies.',
    avatar: '/images/avatars/emma-rodriguez.png',
  },
  {
    name: 'David Kim',
    slug: 'david-kim',
    bio: 'David Kim is a consumer rights journalist who investigates the practices of large tech corporations and their impact on users.',
    avatar: '/images/avatars/david-kim.png',
  },
  {
    name: 'Rachel Kim',
    slug: 'rachel-kim',
    bio: 'As a data scientist and ethics researcher, Rachel Kim explores the real-world consequences of algorithmic bias in hiring and beyond.',
    avatar: '/images/avatars/rachel-kim.png',
  },
  {
    name: 'Alex Morgan',
    slug: 'alex-morgan',
    bio: 'Alex Morgan is a security analyst renowned for discovering and reporting zero-day vulnerabilities in major software frameworks.',
    avatar: '/images/avatars/alex-morgan.png',
  },
  {
    name: 'Jordan Lee',
    slug: 'jordan-lee',
    bio: 'Jordan Lee is a market analyst who tracks the growth of privacy-focused startups and their challenge to established tech giants.',
    avatar: '/images/avatars/jordan-lee.png',
  },
  {
    name: 'Dr. Lisa Chen',
    slug: 'dr-lisa-chen',
    bio: 'Dr. Lisa Chen is a quantum physicist and science communicator dedicated to making cutting-edge scientific breakthroughs accessible to all.',
    avatar: '/images/avatars/dr-lisa-chen.png',
  },
  {
    name: 'Maria Santos',
    slug: 'maria-santos',
    bio: 'Maria Santos is an investigative journalist specializing in corporate surveillance and the widespread tracking of consumer data.',
    avatar: '/images/avatars/maria-santos.png',
  },
  {
    name: 'Thomas Anderson',
    slug: 'thomas-anderson',
    bio: 'Thomas Anderson is a technology ethicist who works with industry consortiums to develop and promote responsible AI guidelines.',
    avatar: '/images/avatars/thomas-anderson.png',
  },
];

// 2. Articles now reference authors by 'authorSlug'.
export const articles: Article[] = [
  {
    id: '1',
    slug: 'major-data-breach-exposes-millions-of-user-records',
    title: 'Major Data Breach Exposes Millions of User Records',
    excerpt: 'A sophisticated cyber attack on a leading tech company has compromised personal data of over 10 million users, raising serious questions about data security practices.',
    content: `A major cybersecurity incident has shaken the tech industry this week as hackers successfully breached the systems of TechCorp, one of the leading cloud service providers, exposing sensitive personal information of more than 10 million users.

The breach, discovered on Monday morning by the company's security team, appears to have been ongoing for several weeks before detection. Initial investigations suggest that attackers gained access through a vulnerability in the company's authentication system.

"We take this incident extremely seriously and are working around the clock to secure our systems and protect our users," said Jane Smith, TechCorp's Chief Security Officer, in a statement released Tuesday.

The compromised data includes names, email addresses, phone numbers, and encrypted passwords. While financial information was not accessed, security experts warn that the exposed data could be used for targeted phishing attacks and identity theft.

This incident highlights the ongoing challenges that even well-resourced companies face in protecting user data against increasingly sophisticated cyber threats. The company has notified all affected users and is offering free credit monitoring services.`,
    authorSlug: 'sarah-johnson', // Changed from object to slug
    publishedAt: '2024-06-25',
    category: 'security', // Matched to category slug
    tags: ['cybersecurity', 'data breach', 'privacy'],
    imageUrl: 'https://s.yimg.com/ny/api/res/1.2/MRnq1w0JA2IwyJuRR1kWfA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/aol_gobankingrates_57/2904393e9dd483d5f5183f7d018f643f',
    featured: true,
    readTime: 5
  },
  {
    id: '2',
    slug: 'ai-regulatory-scrutiny',
    title: 'AI Companies Face New Regulatory Scrutiny',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    authorSlug: 'michael-chen', // Changed from object to slug
    publishedAt: '2024-06-24',
    category: 'ai', // Matched to category slug
    tags: ['regulation', 'policy', 'machine learning'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    featured: false,
    readTime: 4
  },
  {
    id: '3',
    slug: 'encryption',
    title: 'Encrypted Messaging App Gains Traction',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    authorSlug: 'emma-rodriguez', // Changed from object to slug
    publishedAt: '2024-06-23',
    category: 'privacy', // Matched to category slug
    tags: ['encryption', 'messaging', 'privacy'],
    imageUrl: 'https://www.zdnet.com/a/img/resize/ada36a8ca094a512f972578b7b4742f38ac90b5c/2024/05/28/95683789-ebda-4272-964e-ce5d1a5a000f/gettyimages-1888972727.jpg?auto=webp&width=1280',
    featured: false,
    readTime: 3
  },
  {
    id: '4',
    slug: 'tech-giants',
    title: 'Tech Giants Lobby Against Right to Repair',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    authorSlug: 'david-kim', // Changed from object to slug
    publishedAt: '2024-06-22',
    category: 'security', // Matched to available category slug
    tags: ['right to repair', 'lobbying', 'consumer rights'],
    imageUrl: 'https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg',
    featured: false,
    readTime: 4
  },
  {
    id: '5',
    slug: 'ml-bias',
    title: 'Machine Learning Bias in Hiring Systems',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.`,
    authorSlug: 'rachel-kim', // Changed from object to slug
    publishedAt: '2024-06-21',
    category: 'ai', // Matched to category slug
    tags: ['bias', 'hiring', 'ethics'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    featured: false,
    readTime: 6
  },
  {
    id: '6',
    slug: "zero-day",
    title: 'Zero-Day Vulnerability Discovered in Popular Framework',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur, nulla at vehicula tincidunt, augue libero.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    authorSlug: 'alex-morgan', // Changed from object to slug
    publishedAt: '2024-06-20',
    category: 'security', // Matched to category slug
    tags: ['vulnerability', 'framework', 'patch'],
    imageUrl: 'https://betanews.com/wp-content/uploads/2022/06/Software-supply-chain-640x384.jpg',
    featured: false,
    readTime: 5
  },
  {
    id: '7',
    slug: 'privacy-first',
    title: 'Privacy-First Search Engine Gains Market Share',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
    authorSlug: 'jordan-lee', // Changed from object to slug
    publishedAt: '2024-06-19',
    category: 'privacy', // Matched to category slug
    tags: ['search', 'privacy', 'competition'],
    imageUrl : 'https://diamondringsmusic.com/wp-content/uploads/2022/02/network-3139208_1280.jpg',
    featured: false,
    readTime: 4
  },
  {
    id: '8',
    slug: 'quantum-comp',
    title: 'Quantum Computing Breakthrough Announced',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`,
    authorSlug: 'dr-lisa-chen', // Changed from object to slug
    publishedAt: '2024-06-18',
    category: 'security', // Matched to available category slug
    tags: ['quantum', 'computing', 'breakthrough'],
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop',
    featured: false,
    readTime: 7
  },
  {
    id: '9',
    slug: 'corporate',
    title: 'Corporate Surveillance Investigation Reveals Widespread Tracking',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.`,
    authorSlug: 'maria-santos', // Changed from object to slug
    publishedAt: '2024-06-17',
    category: 'investigation', // Matched to category slug
    tags: ['surveillance', 'tracking', 'corporate'],
    imageUrl : 'https://www.zdnet.com/a/img/resize/ada36a8ca094a512f972578b7b4742f38ac90b5c/2024/05/28/95683789-ebda-4272-964e-ce5d1a5a000f/gettyimages-1888972727.jpg?auto=webp&width=1280',
    featured: false,
    readTime: 8
  },
  {
    id: '10',
    slug: 'ai-ethics',
    title: 'New AI Ethics Guidelines Released by Tech Consortium',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor blandit quam, et molestie dolor.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    authorSlug: 'thomas-anderson', // Changed from object to slug
    publishedAt: '2024-06-16',
    category: 'ai', // Matched to category slug
    tags: ['ethics', 'guidelines', 'consortium'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    featured: false,
    readTime: 5
  }
];