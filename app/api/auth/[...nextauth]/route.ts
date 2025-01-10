import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Authentication endpoint' });
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const validPassword = process.env.BLOG_PASSWORD;

    if (password === validPassword) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
} 