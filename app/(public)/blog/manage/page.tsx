"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, Save, Info, Wand2, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import ImageUpload from '@/components/image-upload';

interface BlogPost {
  title: string;
  subheader: string;
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
    subheader: '',
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
    <div className="relative min-h-screen bg-gray-50">
      {/* SEO Score - Fixed Position */}
      <div className="fixed right-8 top-32 w-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">SEO Score</h3>
            <span className="text-2xl font-bold text-blue-600">{calculateSeoPercentage()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${calculateSeoPercentage()}%` }}
            />
          </div>
        </div>
        <div className="p-4 space-y-3">
          {Object.entries(seoScore).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between text-sm">
              <span className="capitalize text-gray-600">{key}</span>
              {value ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
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
                type="button"
                onClick={() => setShowTips(!showTips)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Info className="w-4 h-4" />
                SEO Tips
              </button>
              <button
                type="button"
                onClick={() => setShowTemplates(!showTemplates)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Wand2 className="w-4 h-4" />
                Templates
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Featured Image
              </label>
              <ImageUpload
                value={post.image}
                onChange={(url) => setPost({ ...post, image: url })}
                aspectRatio={16/9}
              />
              <p className="text-xs text-gray-500">
                Recommended size: 1200×675px (16:9). Maximum size: 10MB.
              </p>
            </div>

            {/* Title Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Title *
                <span className="ml-2 text-sm text-gray-500">
                  {60 - post.title.length} characters remaining
                </span>
              </label>
              <input
                type="text"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                maxLength={60}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter a compelling title..."
                required
              />
            </div>

            {/* Subheader Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Subheader
                <span className="ml-2 text-sm text-gray-500">
                  {100 - (post.subheader?.length || 0)} characters remaining
                </span>
              </label>
              <input
                type="text"
                value={post.subheader}
                onChange={(e) => setPost({ ...post, subheader: e.target.value })}
                maxLength={100}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Add a brief subheader to support your title..."
              />
            </div>

            {/* Category Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Category *
              </label>
              <select
                value={post.category}
                onChange={(e) => setPost({ ...post, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a category</option>
                <option value="Dating Tips">Dating Tips</option>
                <option value="Relationship Advice">Relationship Advice</option>
                <option value="Success Stories">Success Stories</option>
                <option value="Dating Safety">Dating Safety</option>
                <option value="Video Dating">Video Dating</option>
                <option value="Online Dating">Online Dating</option>
              </select>
            </div>

            {/* Excerpt Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Excerpt *
                <span className="ml-2 text-sm text-gray-500">
                  {160 - post.excerpt.length} characters remaining
                </span>
              </label>
              <textarea
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                maxLength={160}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write a compelling summary for search results and social sharing..."
                required
              />
            </div>

            {/* Content Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Content *
                <span className="ml-2 text-sm text-gray-500">
                  {post.content.length} characters
                </span>
              </label>
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-2">
                  {/* Text Style Controls */}
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content') as HTMLTextAreaElement;
                      const start = textarea.selectionStart;
                      const end = textarea.selectionEnd;
                      const text = textarea.value;
                      const newText = 
                        text.substring(0, start) +
                        `**${text.substring(start, end)}**` +
                        text.substring(end);
                      setPost({ ...post, content: newText });
                    }}
                    className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded flex items-center gap-1"
                    title="Bold"
                  >
                    <span className="font-bold">B</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content') as HTMLTextAreaElement;
                      const start = textarea.selectionStart;
                      const end = textarea.selectionEnd;
                      const text = textarea.value;
                      const newText = 
                        text.substring(0, start) +
                        `*${text.substring(start, end)}*` +
                        text.substring(end);
                      setPost({ ...post, content: newText });
                    }}
                    className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded flex items-center gap-1"
                    title="Italic"
                  >
                    <span className="italic">I</span>
                  </button>
                  <div className="w-px h-6 bg-gray-300 mx-1" />
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content') as HTMLTextAreaElement;
                      const start = textarea.selectionStart;
                      const text = textarea.value;
                      const newText = 
                        text.substring(0, start) +
                        '\n## Heading\n' +
                        text.substring(start);
                      setPost({ ...post, content: newText });
                    }}
                    className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded flex items-center gap-1"
                    title="Add H2 Heading"
                  >
                    H2
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content') as HTMLTextAreaElement;
                      const start = textarea.selectionStart;
                      const text = textarea.value;
                      const newText = 
                        text.substring(0, start) +
                        '\n### Subheading\n' +
                        text.substring(start);
                      setPost({ ...post, content: newText });
                    }}
                    className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded flex items-center gap-1"
                    title="Add H3 Subheading"
                  >
                    H3
                  </button>
                  <div className="w-px h-6 bg-gray-300 mx-1" />
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content') as HTMLTextAreaElement;
                      const start = textarea.selectionStart;
                      const text = textarea.value;
                      const newText = 
                        text.substring(0, start) +
                        '\n- List item\n' +
                        text.substring(start);
                      setPost({ ...post, content: newText });
                    }}
                    className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded flex items-center gap-1"
                    title="Add Bullet List"
                  >
                    • List
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content') as HTMLTextAreaElement;
                      const start = textarea.selectionStart;
                      const text = textarea.value;
                      const newText = 
                        text.substring(0, start) +
                        '\n1. Numbered item\n' +
                        text.substring(start);
                      setPost({ ...post, content: newText });
                    }}
                    className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded flex items-center gap-1"
                    title="Add Numbered List"
                  >
                    1. List
                  </button>
                  <div className="w-px h-6 bg-gray-300 mx-1" />
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content') as HTMLTextAreaElement;
                      const start = textarea.selectionStart;
                      const end = textarea.selectionEnd;
                      const text = textarea.value;
                      const url = prompt('Enter URL:');
                      if (url) {
                        const newText = 
                          text.substring(0, start) +
                          `[${text.substring(start, end)}](${url})` +
                          text.substring(end);
                        setPost({ ...post, content: newText });
                      }
                    }}
                    className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded flex items-center gap-1"
                    title="Add Link"
                  >
                    Link
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content') as HTMLTextAreaElement;
                      const start = textarea.selectionStart;
                      const text = textarea.value;
                      const newText = 
                        text.substring(0, start) +
                        '\n> Quote or highlight text here\n' +
                        text.substring(start);
                      setPost({ ...post, content: newText });
                    }}
                    className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded flex items-center gap-1"
                    title="Add Blockquote"
                  >
                    "Quote"
                  </button>
                </div>
                <textarea
                  id="content"
                  value={post.content}
                  onChange={(e) => setPost({ ...post, content: e.target.value })}
                  rows={20}
                  className="w-full px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your blog post content here..."
                  required
                />
              </div>
              <p className="text-xs text-gray-500">
                Use Markdown for formatting: **bold**, *italic*, ## headings, - for lists, [text](url) for links
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}

            {/* Bottom Actions */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 py-4">
              <div className="flex items-center justify-between max-w-4xl mx-auto">
                <div className="flex items-center gap-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter password to publish"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setIsPreview(true)}
                    className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center disabled:opacity-50"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSaving ? 'Publishing...' : 'Publish Post'}
                </button>
              </div>
            </div>
          </form>

          {/* Templates Modal */}
          {showTemplates && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">Blog Templates</h2>
                <div className="grid gap-4">
                  {Object.entries(TEMPLATES).map(([name, template]) => (
                    <button
                      key={name}
                      onClick={() => applyTemplate(name as keyof typeof TEMPLATES)}
                      className="text-left p-4 border rounded-lg hover:border-blue-500"
                    >
                      <h3 className="font-medium text-lg mb-2">{name}</h3>
                      <p className="text-gray-600 text-sm">{template.excerpt}</p>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setShowTemplates(false)}
                  className="mt-4 px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* SEO Tips Modal */}
          {showTips && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">SEO Writing Tips</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Title</h3>
                    <p className="text-gray-600">{SEO_TIPS.title}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Excerpt</h3>
                    <p className="text-gray-600">{SEO_TIPS.excerpt}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Content</h3>
                    <div className="text-gray-600 whitespace-pre-line">{SEO_TIPS.content}</div>
                  </div>
                </div>
                <button
                  onClick={() => setShowTips(false)}
                  className="mt-4 px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 