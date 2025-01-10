import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { EventsSection } from "@/components/sections/events-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Slush Dating - Video Dating App for Meaningful Connections | UK',
  description: 'Experience the future of dating with Slush. Join our vibrant community for video dates, virtual events, and genuine connections. Download the app today and find your perfect match.',
  keywords: [
    'video dating app',
    'online dating UK',
    'video speed dating',
    'virtual dating events',
    'dating app London',
    'video first dating',
    'meaningful connections',
    'virtual speed dating',
    'safe dating app',
    'video chat dating'
  ],
  alternates: {
    canonical: 'https://slushdating.com'
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://slushdating.com',
    siteName: 'Slush Dating',
    title: 'Slush Dating - Find Real Connections Through Video Dating',
    description: 'Join thousands of singles on Slush Dating for authentic video dates and events. Download now for iOS and Android.',
    images: [
      {
        url: 'https://slushdating.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Slush Dating App - Video Dating for Meaningful Connections'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@slushdating',
    creator: '@slushdating',
    title: 'Slush Dating - Video Dating Reimagined',
    description: 'Experience authentic connections through video dating. Join thousands of singles for meaningful conversations.',
    images: ['https://slushdating.com/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  }
};

// Enhance JSON-LD schema with more detailed information
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Slush Dating',
  applicationCategory: ['DatingApplication', 'LifestyleApplication'],
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    category: 'Dating Apps'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
    bestRating: '5',
    worstRating: '1'
  },
  description: 'Slush Dating is a video-first dating app that helps singles find meaningful connections through virtual dates and events.',
  downloadUrl: 'https://slushdating.com/download',
  featureList: [
    'Video Dating',
    'Virtual Events',
    'Profile Verification',
    'Instant Messaging',
    'Smart Matching',
    'Safe Dating Environment',
    'Location-based Matching',
    'Interest-based Connections'
  ],
  author: {
    '@type': 'Organization',
    name: 'Slush Dating Ltd',
    url: 'https://slushdating.com'
  },
  provider: {
    '@type': 'Organization',
    name: 'Slush Dating Ltd',
    url: 'https://slushdating.com'
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5'
    },
    author: {
      '@type': 'Person',
      name: 'Sarah Thompson'
    },
    datePublished: '2024-01-15',
    reviewBody: 'The best video dating app I\'ve used. The video-first approach really helps you get to know people before meeting.'
  },
  screenshot: [
    {
      '@type': 'ImageObject',
      url: 'https://slushdating.com/screenshots/video-dating.jpg',
      caption: 'Video Dating Interface'
    },
    {
      '@type': 'ImageObject',
      url: 'https://slushdating.com/screenshots/events.jpg',
      caption: 'Virtual Dating Events'
    }
  ],
  countriesSupported: ['GB', 'US', 'CA', 'AU', 'NZ'],
  softwareVersion: '2.0.0'
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <FeaturesSection />
      <EventsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
} 