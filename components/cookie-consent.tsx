'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { initializeTracking } from '@/lib/cookies';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowBanner(true);
    } else {
      // Initialize tracking based on saved preferences
      initializeTracking();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    initializeTracking();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
    initializeTracking(); // This will disable tracking
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-4 mb-4 md:mb-0">
            <Cookie className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">We Value Your Privacy</h3>
              <p className="text-sm text-gray-600">
                We care about your privacy and want to be transparent about how we use cookies and similar technologies. 
                We use these to enhance your browsing experience, provide personalized content and features, and analyze our website traffic. 
                Learn more about how we use cookies in our{' '}
                <Link href="/cookies" className="text-blue-600 hover:text-blue-800 underline">
                  Cookie Policy
                </Link>.
              </p>
            </div>
          </div>
          <div className="flex gap-3 justify-end flex-shrink-0">
            <Button
              variant="outline"
              onClick={handleReject}
              className="whitespace-nowrap hover:bg-gray-100"
            >
              Reject All
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 