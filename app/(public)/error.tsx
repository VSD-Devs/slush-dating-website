'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Our team has been notified and is working on fixing the issue.
        </p>
        <div className="space-y-4">
          <Button
            onClick={reset}
            variant="default"
            size="lg"
            className="w-full sm:w-auto"
          >
            Try again
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto ml-0 sm:ml-4"
            onClick={() => window.location.href = '/'}
          >
            Return home
          </Button>
        </div>
      </div>
    </div>
  );
} 