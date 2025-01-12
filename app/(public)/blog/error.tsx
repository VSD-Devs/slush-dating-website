'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog error:', error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4 text-center">
        <AlertCircle className="h-12 w-12 text-red-500" />
        <h2 className="text-2xl font-bold text-gray-900">Something went wrong!</h2>
        <p className="text-gray-600 max-w-md">
          We're having trouble loading the blog posts. This might be due to a temporary connection issue.
        </p>
        <div className="flex space-x-4">
          <Button onClick={() => reset()} variant="default">
            Try again
          </Button>
          <Button onClick={() => window.location.reload()} variant="outline">
            Refresh page
          </Button>
        </div>
      </div>
    </div>
  );
} 