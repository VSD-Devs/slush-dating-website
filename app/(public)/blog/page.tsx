import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import prisma from '@/lib/prisma';
import { formatDistanceToNow } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Plus, BookOpen, Star, Clock, MessageCircle, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dating Blog & Relationship Advice | Slush Dating',
  description: 'Expert dating advice, relationship tips, and success stories from the Slush Dating community. Learn how to make meaningful connections through video dating.',
  openGraph: {
    title: 'Dating Blog & Relationship Advice | Slush Dating',
    description: 'Expert dating advice, relationship tips, and success stories from the Slush Dating community.',
    type: 'website',
    url: 'https://slushdating.com/blog'
  }
};

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string | null;
  createdAt: Date;
  author: string;
}

interface DbPost {
  id: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  image: string | null;
  createdAt: Date;
  author: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  console.log('Environment:', {
    nodeEnv: process.env.NODE_ENV,
    hasDbUrl: !!process.env.DATABASE_URL,
    dbUrlStart: process.env.DATABASE_URL?.substring(0, 30) + '...'
  });

  try {
    console.log('Attempting to fetch posts...');
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log('Posts retrieved:', {
      count: posts.length,
      firstPost: posts[0] ? {
        id: posts[0].id,
        title: posts[0].title,
        hasExcerpt: !!posts[0].excerpt,
        hasCategory: !!posts[0].category
      } : null
    });

    return posts.map((post) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt || '',
      category: post.category || 'Uncategorized',
      image: post.image,
      createdAt: post.createdAt,
      author: post.author
    }));
  } catch (error: any) {
    console.error('Database error:', {
      name: error?.name,
      message: error?.message,
      code: error?.code,
      stack: error?.stack?.split('\n').slice(0, 3)
    });
    return [];
  }
}

export default async function BlogPage() {
  console.log('Starting BlogPage render...');
  try {
    const posts = await getBlogPosts();
    console.log('Posts fetched:', { count: posts.length, posts });
    const categories = Array.from(new Set(posts.map(post => post.category)));
    console.log('Categories:', categories);

    // Add error boundary
    if (!posts || posts.length === 0) {
      console.log('No posts found or posts array is empty');
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts Coming Soon</h1>
            <p className="text-gray-600">Check back later for exciting updates!</p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative">
        {/* Hero Header Section */}
        <div className="relative min-h-[300px] bg-gradient-to-r from-blue-600 to-blue-400 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }} />
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-10 top-1/4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-6 animate-float hidden md:block">
            <BookOpen className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
          <div className="absolute right-20 top-1/3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 animate-float-slow hidden md:block">
            <Star className="w-6 h-6 text-yellow-300" aria-hidden="true" />
          </div>
          <div className="absolute left-1/4 bottom-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 animate-float hidden md:block">
            <Clock className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
          <div className="absolute right-1/4 bottom-20 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-6 animate-float-slow hidden md:block">
            <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
          </div>

          {/* Circular Gradient Blobs */}
          <div className="absolute -left-20 -top-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" aria-hidden="true" />
          
          {/* Header Content */}
          <div className="container mx-auto px-4 py-16 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" itemProp="headline">
              Our Blog
            </h1>
            <div className="w-24 h-1 bg-white/80 mx-auto mb-6" aria-hidden="true"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8" itemProp="description">
              Insights, stories, and updates from the Slush community
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/blog/manage" className="inline-flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Write a Post
              </Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <Link 
                key={category}
                href={`/blog/category/${category.toLowerCase()}`}
                className="px-4 py-2 bg-blue-50 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-200 text-blue-600 font-medium shadow-sm hover:shadow-md"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {post.image && (
                  <Link href={`/blog/${post.id}`} className="block aspect-video relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      itemProp="image"
                    />
                  </Link>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-blue-600 font-medium" itemProp="articleSection">
                      {post.category}
                    </span>
                    <time 
                      className="text-sm text-gray-500"
                      itemProp="datePublished"
                      dateTime={post.createdAt.toISOString()}
                    >
                      {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                    </time>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-gray-900" itemProp="headline">
                    <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4" itemProp="description">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500" itemProp="author">
                      By {post.author}
                    </span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/blog/${post.id}`}>
                        Read more
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
              Explore More on Slush Dating
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                href="/events"
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <h3 className="font-semibold mb-2">Dating Events</h3>
                <p className="text-sm text-gray-600">Join our video speed dating events</p>
              </Link>
              <Link 
                href="/guidelines"
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <h3 className="font-semibold mb-2">Dating Guidelines</h3>
                <p className="text-sm text-gray-600">Learn about safe and respectful dating</p>
              </Link>
              <Link 
                href="/help"
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <h3 className="font-semibold mb-2">Help Center</h3>
                <p className="text-sm text-gray-600">Get answers to common questions</p>
              </Link>
              <Link 
                href="/success-stories"
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <h3 className="font-semibold mb-2">Success Stories</h3>
                <p className="text-sm text-gray-600">Read about couples who found love</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    console.error('Error rendering BlogPage:', error);
    console.error('Error details:', {
      name: error?.name,
      message: error?.message,
      stack: error?.stack
    });
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts Coming Soon</h1>
          <p className="text-gray-600">Check back later for exciting updates!</p>
        </div>
      </div>
    );
  }
} 