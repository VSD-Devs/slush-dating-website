import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Protected routes that require authentication
  const protectedPaths = ['/events', '/video', '/chat', '/profile'];
  const isProtectedPath = protectedPaths.some((path) => 
    request.nextUrl.pathname.startsWith(path)
  );

  // Check if user is authenticated (we'll use a simple cookie for frontend demo)
  const isAuthenticated = request.cookies.has('auth');

  if (isProtectedPath && !isAuthenticated) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/events/:path*', '/video/:path*', '/chat/:path*', '/profile/:path*']
};