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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag() {
            window.dataLayer.push(arguments);
          };
          window.gtag('js', new Date());
          window.gtag('config', GA_MEASUREMENT_ID);
        }}
      />
    </>
  );
} 