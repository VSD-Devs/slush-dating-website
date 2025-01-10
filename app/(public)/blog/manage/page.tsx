"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, Save, Info, Wand2, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import ImageUpload from '@/components/image-upload';

interface BlogPost {
  title: string;
  content: string;
  excerpt: string;
  category: string;
  image: string;
}

interface SeoScore {
  title: boolean;
  excerpt: boolean;
  content: boolean;
  headings: boolean;
  links: boolean;
  image: boolean;
}

const TEMPLATES = {
  'How-To Guide': {
    structure: `## Introduction
Brief overview of what readers will learn.

## Why This Matters
Explain the benefits and importance.

## Step 1: [First Step]
Detailed explanation of the first step.

## Step 2: [Second Step]
Detailed explanation of the second step.

## Step 3: [Third Step]
Detailed explanation of the third step.

## Common Mistakes to Avoid
- Mistake 1
- Mistake 2
- Mistake 3

## Tips for Success
Share expert tips and best practices.

## Conclusion
Summarize key points and next steps.`,
    excerpt: "A comprehensive guide to [topic]. Learn step-by-step instructions, avoid common mistakes, and get expert tips for success."
  },
  'Success Story': {
    structure: `## The Beginning
Set the scene and introduce the story.

## The Challenge
Describe the obstacles faced.

## The Journey
Share the process and key moments.

## The Solution
Explain how challenges were overcome.

## The Results
Share the positive outcomes.

## Key Takeaways
- Lesson 1
- Lesson 2
- Lesson 3

## Advice for Others
Share recommendations for readers.`,
    excerpt: "Discover how [subject] achieved [result]. An inspiring journey from challenge to success, with valuable lessons learned."
  },
  'Product Update': {
    structure: `## What's New
Overview of the new features/changes.

## Key Features
### Feature 1
Detailed explanation with use cases.

### Feature 2
Detailed explanation with use cases.

### Feature 3
Detailed explanation with use cases.

## How to Use
Step-by-step guide to using new features.

## Benefits
Explain how these changes help users.

## What's Next
Preview of upcoming developments.`,
    excerpt: "Introducing exciting new features to enhance your experience. Discover what's new, how to use it, and what's coming next."
  }
};

const SEO_TIPS = {
  title: 'Keep titles between 50-60 characters for optimal SEO. Include your main keyword near the beginning.',
  excerpt: 'Write a compelling meta description between 150-160 characters. This appears in search results and social shares.',
  content: `
    • Use H2 headings (##) to break up your content into scannable sections
    • Include your main keyword in the first paragraph
    • Aim for at least 1,500 words for in-depth content
    • Use H3 headings (###) for subsections
    • Include relevant internal and external links
    • Add alt text to any images
    • End with a clear call-to-action
  `
};

export default function BlogManage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showTips, setShowTips] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [post, setPost] = useState<BlogPost>({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    image: ''
  });
  const [isPreview, setIsPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [seoScore, setSeoScore] = useState<SeoScore>({
    title: false,
    excerpt: false,
    content: false,
    headings: false,
    links: false,
    image: false
  });

  useEffect(() => {
    // Calculate SEO score
    setSeoScore({
      title: post.title.length >= 30 && post.title.length <= 60,
      excerpt: post.excerpt.length >= 120 && post.excerpt.length <= 160,
      content: post.content.length >= 1500,
      headings: post.content.includes('##'),
      links: post.content.includes('[') && post.content.includes(']('),
      image: !!post.image
    });
  }, [post]);

  const calculateSeoPercentage = () => {
    const scores = Object.values(seoScore);
    const achieved = scores.filter(Boolean).length;
    return Math.round((achieved / scores.length) * 100);
  };

  const applyTemplate = (templateName: keyof typeof TEMPLATES) => {
    const template = TEMPLATES[templateName];
    setPost(prev => ({
      ...prev,
      content: template.structure,
      excerpt: template.excerpt
    }));
    setShowTemplates(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate required fields
    if (!post.title) {
      setError('Title is required');
      return;
    }
    if (!post.content) {
      setError('Content is required');
      return;
    }
    if (!post.excerpt) {
      setError('Excerpt is required');
      return;
    }
    if (!post.category) {
      setError('Category is required');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }
    
    try {
      setIsSaving(true);
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...post, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/blog');
        router.refresh();
      } else {
        setError(data.error || 'Failed to create post');
        if (response.status === 401) {
          setError('Incorrect password');
        } else if (response.status === 400) {
          setError('Please fill in all required fields');
        } else {
          setError(data.error || 'Failed to create post');
        }
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isPreview) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setIsPreview(false)}
            className="mb-8 flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to editing
          </button>

          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            <img
              src={post.image || '/images/placeholder.jpg'}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>

          <article className="prose prose-lg max-w-none">
            <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
              <span className="font-semibold">{post.category}</span>
              <span>By Slush Team</span>
            </div>
            <p className="lead text-xl text-gray-600 mb-8">{post.excerpt}</p>
            <div className="prose-headings:font-display prose-headings:font-semibold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-600 prose-a:text-blue-600 hover:prose-a:text-blue-800" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <div className="flex-1 max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/blog"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to blog
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowTemplates(!showTemplates)}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                <Wand2 className="w-4 h-4 mr-2" />
                Templates
              </button>
              <button
                onClick={() => setShowTips(!showTips)}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                <Info className="w-4 h-4 mr-2" />
                SEO Tips
              </button>
              <button
                onClick={() => setIsPreview(true)}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSaving}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'Saving...' : 'Publish Post'}
              </button>
            </div>
          </div>

          {showTemplates && (
            <div className="bg-white border rounded-lg p-6 mb-8 shadow-lg">
              <h3 className="font-semibold text-lg mb-4">Choose a Template</h3>
              <div className="grid grid-cols-3 gap-4">
                {Object.keys(TEMPLATES).map((template) => (
                  <button
                    key={template}
                    onClick={() => applyTemplate(template as keyof typeof TEMPLATES)}
                    className="p-4 border rounded-lg hover:bg-blue-50 text-left transition-colors"
                  >
                    <h4 className="font-medium mb-2">{template}</h4>
                    <p className="text-sm text-gray-500">
                      {template === 'How-To Guide' ? 'Perfect for tutorials and instructions' :
                       template === 'Success Story' ? 'Share inspiring achievements' :
                       'Announce new features and updates'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {showTips && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
              <h3 className="font-semibold text-blue-800 mb-2">SEO Writing Tips</h3>
              <pre className="whitespace-pre-wrap text-sm text-blue-700">{SEO_TIPS.content}</pre>
            </div>
          )}

          <form className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image
              </label>
              <ImageUpload
                value={post.image}
                onChange={(url) => setPost({ ...post, image: url })}
              />
              <p className="mt-2 text-sm text-gray-500">
                Recommended: 1200×675px with descriptive file name for SEO
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
                <span className="ml-2 text-sm text-gray-500">
                  ({post.title.length}/60 characters)
                </span>
              </label>
              <input
                type="text"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 font-display text-xl"
                placeholder="Enter your blog post title"
                maxLength={60}
                required
              />
              <p className="mt-2 text-sm text-gray-500">{SEO_TIPS.title}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={post.category}
                onChange={(e) => setPost({ ...post, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a category</option>
                <option value="Community">Community</option>
                <option value="Technology">Technology</option>
                <option value="Events">Events</option>
                <option value="Dating Tips">Dating Tips</option>
                <option value="Success Stories">Success Stories</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt
                <span className="ml-2 text-sm text-gray-500">
                  ({post.excerpt.length}/160 characters)
                </span>
              </label>
              <textarea
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                placeholder="Write a compelling meta description"
                maxLength={160}
                required
              />
              <p className="mt-2 text-sm text-gray-500">{SEO_TIPS.excerpt}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <div className="mb-2 text-sm text-gray-500">
                Use Markdown for formatting:
                <ul className="list-disc list-inside mt-1">
                  <li>## for H2 headings</li>
                  <li>### for H3 headings</li>
                  <li>**text** for bold</li>
                  <li>*text* for italic</li>
                  <li>[text](url) for links</li>
                </ul>
              </div>
              <textarea
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 font-serif"
                rows={20}
                placeholder="Write your blog post content here using Markdown formatting"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password to publish"
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm">
                {error}
              </div>
            )}
          </form>
        </div>

        {/* Fixed SEO Checklist Sidebar */}
        <div className="w-80 shrink-0">
          <div className="fixed top-24 right-8 bg-white rounded-lg shadow-lg w-80 border border-gray-200">
            <div className="p-4 border-b flex items-center justify-between bg-white">
              <h2 className="font-semibold">SEO Score</h2>
              <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                calculateSeoPercentage() >= 80 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-orange-100 text-orange-800'
              }`}>
                {calculateSeoPercentage()}%
              </span>
            </div>
            <div className="p-4 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
              {Object.entries(seoScore).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center">
                    {value ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-gray-300 mr-2 shrink-0" />
                    )}
                    <span className="text-sm">
                      {key === 'title' && 'Title length (50-60 chars)'}
                      {key === 'excerpt' && 'Meta description (120-160 chars)'}
                      {key === 'content' && 'Content length (1500+ words)'}
                      {key === 'headings' && 'Using H2 headings'}
                      {key === 'links' && 'Contains links'}
                      {key === 'image' && 'Featured image'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 