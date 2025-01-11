import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from './loading'

// Dynamic imports with proper type handling
const HeroSection = dynamic(() => import('@/components/sections/hero-section').then(mod => ({ default: mod.HeroSection })), {
  loading: () => <Loading />
})
const FeaturesSection = dynamic(() => import('@/components/sections/features-section').then(mod => ({ default: mod.FeaturesSection })), {
  loading: () => <Loading />
})
const EventsSection = dynamic(() => import('@/components/sections/events-section').then(mod => ({ default: mod.EventsSection })), {
  loading: () => <Loading />
})
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials-section').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <Loading />
})
const FAQSection = dynamic(() => import('@/components/sections/faq-section').then(mod => ({ default: mod.FAQSection })), {
  loading: () => <Loading />
})

// SEO optimization
export const metadata = {
  title: 'Slush Dating - Video Dating App for Meaningful Connections | UK',
  description: 'Experience the future of dating with Slush. Join our vibrant community for video dates, virtual events, and genuine connections. Download the app today and find your perfect match.',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Slush Dating",
  "applicationCategory": "DatingApplication",
  "description": "Experience the future of dating with Slush. Join our vibrant community for video dates, virtual events, and genuine connections.",
  "url": "https://slushdating.com",
  "operatingSystem": "iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP"
  }
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <FeaturesSection />
        <EventsSection />
        <TestimonialsSection />
        <FAQSection />
      </Suspense>
    </>
  )
} 