import { MetadataRoute } from 'next'
import prisma from '@/lib/prisma'

interface BlogPost {
  id: string;
  category: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://slushdating.com'
  
  // Main pages
  const routes = [
    '',
    '/help',
    '/privacy',
    '/guidelines',
    '/child-safety',
    '/blog',
    '/contact',
    '/download'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Get all blog posts
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      category: true,
      createdAt: true,
      updatedAt: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  }) as BlogPost[]

  // Blog post pages
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.updatedAt || post.createdAt,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Get unique categories
  const categories = Array.from(new Set(posts.map(post => post.category)))

  // Category pages
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogRoutes, ...categoryRoutes]
} 