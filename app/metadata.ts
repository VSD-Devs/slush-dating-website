import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slush Dating - Video Dating App for Meaningful Connections',
  description: 'Discover authentic connections through video dating on Slush. Join thousands of singles for meaningful video dates, events, and real conversations. Download now for iOS and Android.',
  applicationName: 'Slush Dating',
  authors: [{ name: 'Slush Dating Team' }],
  generator: 'Next.js',
  keywords: ['video dating', 'dating app', 'online dating', 'virtual dating', 'video chat dating', 'singles events', 'meaningful connections', 'relationship', 'dating service', 'UK dating'],
  referrer: 'origin-when-cross-origin',
  themeColor: '#3B82F6',
  colorScheme: 'light',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  creator: 'Virtual Speed Date Ltd',
  publisher: 'Virtual Speed Date Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon-v2.png',
    shortcut: '/favicon-v2.png',
    apple: '/favicon-v2.png',
  },
  verification: {
    google: 'verify-code', // Add your Google verification code
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://slushdating.com',
    siteName: 'Slush Dating',
    title: 'Slush Dating - Video Dating App for Meaningful Connections',
    description: 'Discover authentic connections through video dating on Slush. Join thousands of singles for meaningful video dates, events, and real conversations.',
    images: [
      {
        url: '/og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Slush Dating App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@slushdating',
    creator: '@slushdating',
    title: 'Slush Dating - Video Dating App for Meaningful Connections',
    description: 'Discover authentic connections through video dating on Slush. Join thousands of singles for meaningful video dates, events, and real conversations.',
    images: ['/twitter-image.jpg'], // Add your Twitter card image
  },
  alternates: {
    canonical: 'https://slushdating.com',
  },
}; 