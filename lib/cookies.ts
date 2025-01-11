declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

type CookieConsent = {
  necessary: boolean; // Always true - required for the site to work
  analytics: boolean; // Google Analytics, etc.
  marketing: boolean; // Marketing/advertising cookies
  preferences: boolean; // User preferences, theme, etc.
};

export const getCookieConsent = (): CookieConsent => {
  const consent = localStorage.getItem('cookieConsent');
  
  // If no consent is given yet, only allow necessary cookies
  if (!consent) {
    return {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
  }

  // If user accepted all cookies
  if (consent === 'true') {
    return {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
  }

  // If user rejected optional cookies
  return {
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  };
};

export const initializeTracking = () => {
  const { analytics } = getCookieConsent();
  
  // Update Google Analytics consent
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': analytics ? 'granted' : 'denied',
      'ad_storage': 'denied', // We always deny ad storage for privacy
    });
  }
};

// Helper to check if a specific type of cookie is allowed
export const isCookieAllowed = (type: keyof CookieConsent): boolean => {
  const consent = getCookieConsent();
  return consent[type];
}; 