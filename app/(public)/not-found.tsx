import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Slush Dating',
  description: 'The page you are looking for could not be found. Return to Slush Dating to continue your dating journey.',
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/">
              Return to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto ml-0 sm:ml-4">
            <Link href="/help">
              Visit Help Center
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 