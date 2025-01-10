'use client';

import { ChevronDown, Apple, Play, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/sections/footer";
import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenus = () => {
    setIsHelpOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image 
              src="/slush-logo.png" 
              alt="Slush" 
              width={200} 
              height={50} 
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center justify-center flex-grow gap-6 mx-4">
            <Link href="/team" className="text-sm font-medium text-gray-600 hover:text-gray-900">Meet the Team</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900">Blog</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">Contact</Link>
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
                    href="/guidelines" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={closeMenus}
                  >
                    Community Guidelines
                  </Link>
                </div>
              )}
            </div>
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
          <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <div className="flex gap-2 justify-center">
                <Link href="https://apps.apple.com/gb/app/slush-video-date/id1590373700?itscg=30200&itsct=apps_box_link&mttnsubad=1590373700" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 w-full">
                    <Apple className="h-4 w-4" />
                    iOS
                  </Button>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.slushdating.slush&pli=1" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" className="flex items-center gap-1 bg-black hover:bg-gray-800 w-full">
                    <Play className="h-4 w-4" />
                    Android
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link 
                  href="/team" 
                  className="text-sm hover:text-blue-500 py-2"
                  onClick={closeMenus}
                >
                  Meet the Team
                </Link>
                <Link 
                  href="/blog" 
                  className="text-sm hover:text-blue-500 py-2"
                  onClick={closeMenus}
                >
                  Blog
                </Link>
                <Link 
                  href="/contact" 
                  className="text-sm hover:text-blue-500 py-2"
                  onClick={closeMenus}
                >
                  Contact Us
                </Link>
                <Link 
                  href="/help" 
                  className="text-sm hover:text-blue-500 py-2"
                  onClick={closeMenus}
                >
                  Help Center
                </Link>
                <Link 
                  href="/terms" 
                  className="text-sm hover:text-blue-500 py-2"
                  onClick={closeMenus}
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-sm hover:text-blue-500 py-2"
                  onClick={closeMenus}
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/guidelines" 
                  className="text-sm hover:text-blue-500 py-2"
                  onClick={closeMenus}
                >
                  Community Guidelines
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          {children}
        </Suspense>
      </main>

      <Footer />
    </div>
  );
} 