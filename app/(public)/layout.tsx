'use client';

import { ChevronDown, Apple, Play, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/sections/footer";
import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import Script from "next/script";

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenus = () => {
    setIsHelpOpen(false);
    setIsLegalOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Slush Dating",
            "url": "https://slushdating.com",
            "logo": "https://slushdating.com/slush-logo.png",
            "sameAs": [
              "https://facebook.com/slushdating",
              "https://twitter.com/slushdating",
              "https://instagram.com/slushdating"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "103 Colney Hatch Ln",
              "addressLocality": "Muswell Hill",
              "addressRegion": "London",
              "postalCode": "N10 1LR",
              "addressCountry": "GB"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "support@slushdating.com"
            }
          }
        `}
      </Script>
      <div className="min-h-screen flex flex-col">
        <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b" role="navigation" aria-label="Main navigation">
          <div className="container mx-auto px-4 py-3 flex items-center">
            <Link href="/" className="flex items-center flex-shrink-0" aria-label="Slush Dating Home">
              <Image 
                src="/slush-logo.png" 
                alt="Slush Dating Logo" 
                width={200} 
                height={50} 
                className="h-10 w-auto"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center justify-center flex-grow gap-6 mx-4">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900" aria-label="Home">Home</Link>
              <Link href="/team" className="text-sm font-medium text-gray-600 hover:text-gray-900" aria-label="Meet our Team">Meet the Team</Link>
              <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900" aria-label="Read our Blog">Blog</Link>
              
              {/* Help Dropdown */}
              <div className="relative">
                <button 
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1"
                  onClick={() => setIsHelpOpen(!isHelpOpen)}
                >
                  Help
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isHelpOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border">
                    <Link 
                      href="/help" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={closeMenus}
                    >
                      Help Center
                    </Link>
                    <Link 
                      href="/safety-tips" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={closeMenus}
                    >
                      Safety Tips
                    </Link>
                    <Link 
                      href="/guidelines" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={closeMenus}
                    >
                      Community Guidelines
                    </Link>
                  </div>
                )}
              </div>

              {/* Legal Dropdown */}
              <div className="relative">
                <button 
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1"
                  onClick={() => setIsLegalOpen(!isLegalOpen)}
                >
                  Legal
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isLegalOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border">
                    <Link 
                      href="/terms" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={closeMenus}
                    >
                      Terms of Service
                    </Link>
                    <Link 
                      href="/privacy" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={closeMenus}
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      href="/child-safety" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={closeMenus}
                    >
                      Child Protection Policy
                    </Link>
                    <Link 
                      href="/cookies" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={closeMenus}
                    >
                      Cookie Policy
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900" aria-label="Contact Us">Contact</Link>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Link href="https://apps.apple.com/gb/app/slush-video-date/id1590373700?itscg=30200&itsct=apps_box_link&mttnsubad=1590373700" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600">
                  <Apple className="h-4 w-4" />
                  <span className="hidden lg:inline">Download for</span> iOS
                </Button>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.slushdating.slush&pli=1" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="flex items-center gap-1 bg-black hover:bg-gray-800">
                  <Play className="h-4 w-4" />
                  <span className="hidden lg:inline">Download for</span> Android
                </Button>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden ml-auto flex items-center gap-2">
              <Button size="sm" className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600">
                Download
              </Button>
              <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg py-4">
              <div className="container mx-auto px-4">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-2">Menu</div>
                    <div className="space-y-2">
                      <Link 
                        href="/" 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={closeMenus}
                      >
                        Home
                      </Link>
                      <Link 
                        href="/team" 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={closeMenus}
                      >
                        Meet the Team
                      </Link>
                      <Link 
                        href="/blog" 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={closeMenus}
                      >
                        Blog
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-2">Help</div>
                    <div className="space-y-2">
                      <Link 
                        href="/help" 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={closeMenus}
                      >
                        Help Center
                      </Link>
                      <Link 
                        href="/safety-tips" 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={closeMenus}
                      >
                        Safety Tips
                      </Link>
                      <Link 
                        href="/guidelines" 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={closeMenus}
                      >
                        Community Guidelines
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-2">Legal</div>
                    <div className="space-y-2">
                      <Link 
                        href="/terms" 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={closeMenus}
                      >
                        Terms of Service
                      </Link>
                      <Link 
                        href="/privacy" 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={closeMenus}
                      >
                        Privacy Policy
                      </Link>
                      <Link 
                        href="/child-safety" 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={closeMenus}
                      >
                        Child Protection Policy
                      </Link>
                      <Link 
                        href="/cookies" 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={closeMenus}
                      >
                        Cookie Policy
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-2">Contact</div>
                    <div className="space-y-2">
                      <Link 
                        href="/contact" 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={closeMenus}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>

        <main id="main-content" className="flex-grow" role="main">
          <Suspense fallback={<LoadingFallback />}>
            {children}
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
} 