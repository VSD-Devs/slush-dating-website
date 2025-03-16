import { MetadataRoute } from 'next'
import { Post, Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

interface BlogPost {
  id: string;
  category: string | null;
  createdAt: Date;
  updatedAt: Date | null;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://slushdating.com'
  
  // Main pages with static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/help',
    '/privacy',
    '/guidelines',
    '/child-safety',
    '/cookies',
    '/blog',
    '/contact',
    '/download',
    '/about',
    '/features',
    '/success-stories',
    '/safety',
    '/faq',
    '/partnerships'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' || route === '/success-stories' 
      ? 'daily' as const 
      : route === '' 
        ? 'always' as const 
        : 'weekly' as const,
    priority: route === '' 
      ? 1 
      : route === '/features' || route === '/success-stories'
        ? 0.9
        : 0.8,
  }));

  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    // Test database connection first
    await prisma.$connect();

    // Get all published blog posts
    const posts = await prisma.post.findMany({
      where: {
        published: true,
        AND: [
          { title: { not: '' } },
          { content: { not: '' } }
        ]
      },
      select: {
        id: true,
        category: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    }) as BlogPost[];

    if (posts && posts.length > 0) {
      // Blog post pages
      const blogRoutes = posts.map((post: BlogPost) => ({
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: post.updatedAt || post.createdAt,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }));

      // Get unique categories (excluding null values)
      const validCategories = posts
        .map(post => post.category)
        .filter((category): category is string => category !== null);
      
      const categories = Array.from(new Set(validCategories));

      // Category pages
      const categoryRoutes = categories.map((category) => ({
        url: `${baseUrl}/blog/category/${category.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.7,
      }));

      dynamicRoutes = [...blogRoutes, ...categoryRoutes];
    }
  } catch (error) {
    console.error('Error generating sitemap:', error);
  } finally {
    try {
      await prisma.$disconnect();
    } catch (e) {
      console.error('Error disconnecting from database:', e);
    }
  }

  // Always return at least the static routes
  return [...staticRoutes, ...dynamicRoutes];
} 