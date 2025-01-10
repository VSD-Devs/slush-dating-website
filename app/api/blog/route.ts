import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/blog - Get all blogs
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error in GET /api/blog:', error);
    return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 });
  }
}

// POST /api/blog - Create a new blog
export async function POST(req: Request) {
  try {
    console.log('Starting POST /api/blog');
    const body = await req.json();
    console.log('Received body:', { ...body, password: '[REDACTED]' });

    const { title, content, excerpt, category, image, password } = body;

    // Debug environment variables
    console.log('Environment check:', {
      hasBlogPassword: !!process.env.BLOG_PASSWORD,
      hasDbUrl: !!process.env.DATABASE_URL,
    });

    // Validate required fields
    if (!title || !content || !excerpt || !category || !password) {
      const missingFields = [];
      if (!title) missingFields.push('title');
      if (!content) missingFields.push('content');
      if (!excerpt) missingFields.push('excerpt');
      if (!category) missingFields.push('category');
      if (!password) missingFields.push('password');

      console.log('Missing required fields:', missingFields);
      return NextResponse.json({ 
        error: `Missing required fields: ${missingFields.join(', ')}` 
      }, { status: 400 });
    }

    // Debug password check
    const submittedPassword = password.toString();
    const expectedPassword = process.env.BLOG_PASSWORD?.toString();

    console.log('Password check:', {
      submittedPasswordLength: submittedPassword?.length,
      expectedPasswordLength: expectedPassword?.length,
      match: submittedPassword === expectedPassword
    });

    if (!expectedPassword) {
      console.error('Blog password not set in environment variables');
      return NextResponse.json({ 
        error: 'Server configuration error: Blog password not set',
        details: 'Please contact the administrator'
      }, { status: 500 });
    }

    if (submittedPassword !== expectedPassword) {
      console.log('Password mismatch');
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
    }

    console.log('Creating post in database with data:', {
      title: title.length,
      contentLength: content.length,
      excerptLength: excerpt.length,
      category,
      hasImage: !!image
    });

    const post = await prisma.post.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        excerpt: excerpt.trim(),
        category: category.trim(),
        image: image?.trim() || '',
        author: 'Slush Team',
      },
    });

    console.log('Post created successfully:', post.id);
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error in POST /api/blog:', error);
    // Enhanced error response
    return NextResponse.json({ 
      error: 'Error creating post',
      details: error instanceof Error ? error.message : 'Unknown error',
      type: error?.constructor?.name || 'Unknown',
    }, { status: 500 });
  }
}

// PUT /api/blog/[id] - Update a blog
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, content, excerpt, category, image, password } = body;

    if (password?.toString() !== process.env.BLOG_PASSWORD?.toString()) {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
    }

    const post = await prisma.post.update({
      where: { id },
      data: { 
        title: title.trim(), 
        content: content.trim(),
        excerpt: excerpt.trim(),
        category: category.trim(),
        image: image?.trim() || ''
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error in PUT /api/blog:', error);
    return NextResponse.json({ error: 'Error updating post' }, { status: 500 });
  }
}

// DELETE /api/blog/[id] - Delete a blog
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const password = searchParams.get('password');

    if (password?.toString() !== process.env.BLOG_PASSWORD?.toString()) {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
    }

    if (!id) {
      return NextResponse.json({ error: 'Post ID required' }, { status: 400 });
    }

    await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Post deleted' });
  } catch (error) {
    console.error('Error in DELETE /api/blog:', error);
    return NextResponse.json({ error: 'Error deleting post' }, { status: 500 });
  }
} 