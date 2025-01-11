'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { getCookieConsent } from '@/lib/cookies';

const GA_MEASUREMENT_ID = 'G-1M58PYP4L5';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (command: string, ...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    const { analytics } = getCookieConsent();
    
    // Set default consent mode
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'default', {
        'analytics_storage': analytics ? 'granted' : 'denied',
        'ad_storage': 'denied',
      });
    }
  }, []);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="worker"
      />
      <Script id="google-analytics" strategy="worker">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
} 