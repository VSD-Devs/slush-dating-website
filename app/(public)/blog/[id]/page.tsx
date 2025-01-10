import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import { formatDistanceToNow, format } from 'date-fns';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { marked } from 'marked';

// Configure marked for safe HTML
marked.setOptions({
  gfm: true,
  breaks: true
});

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  image: string | null;
  createdAt: Date;
  author: string;
}

interface DbPost {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  category: string | null;
  image: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  author: string;
}

async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const post = await prisma.post.findUnique({
      where: { 
        id,
        published: true,
        AND: [
          { title: { not: '' } },
          { content: { not: '' } }
        ]
      }
    });
    
    if (!post) return null;

    // Transform the post data to match BlogPost interface
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || '',  // Provide default empty string if null
      category: post.category || 'Uncategorized',  // Provide default category if null
      image: post.image,
      createdAt: post.createdAt,
      author: post.author
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

async function getRelatedPosts(category: string, currentId: string): Promise<BlogPost[]> {
  try {
    const posts = await prisma.post.findMany({
      where: {
        category,
        id: { not: currentId },
        published: true,
        AND: [
          { title: { not: '' } },
          { content: { not: '' } }
        ]
      },
      take: 3,
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Transform the posts data to match BlogPost interface
    return posts.map((post: DbPost) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || '',
      category: post.category || 'Uncategorized',
      image: post.image,
      createdAt: post.createdAt,
      author: post.author
    }));
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found | Slush Dating Blog',
      description: 'The blog post you are looking for could not be found.'
    };
  }

  return {
    title: `${post.title} | Slush Dating Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.createdAt.toISOString(),
      authors: [post.author],
      url: `https://slushdating.com/blog/${post.id}`,
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined
    }
  };
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.category, post.id);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image || undefined,
    datePublished: post.createdAt.toISOString(),
    dateModified: post.createdAt.toISOString(),
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Slush Dating',
      logo: {
        '@type': 'ImageObject',
        url: 'https://slushdating.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://slushdating.com/blog/${post.id}`
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/BlogPosting">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link 
                  href={`/blog/category/${post.category.toLowerCase()}`}
                  className="text-gray-500 hover:text-blue-600"
                >
                  {post.category}
                </Link>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <h1 
              className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900"
              itemProp="headline"
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span itemProp="author">{post.author}</span>
              <span>•</span>
              <time 
                dateTime={post.createdAt.toISOString()}
                itemProp="datePublished"
              >
                {format(post.createdAt, 'MMMM d, yyyy')}
              </time>
              <span>•</span>
              <span itemProp="articleSection">{post.category}</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                itemProp="image"
              />
            </div>
          )}

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none mb-16 prose-headings:font-display prose-headings:font-semibold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-600 prose-a:text-blue-600 hover:prose-a:text-blue-800"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    {relatedPost.image && (
                      <div className="aspect-video relative rounded-xl overflow-hidden mb-4">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {formatDistanceToNow(relatedPost.createdAt, { addSuffix: true })}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Button asChild variant="ghost">
              <Link href="/blog">
                ← Back to Blog
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">
                Back to Home →
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
} 