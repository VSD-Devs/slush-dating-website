"use client";

import Link from "next/link";
import Image from "next/image";
import { DownloadCTA } from "@/components/download-cta";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="inline-block">
              <Image 
                src="/slush-logo.png"
                alt="Slush" 
                width={120} 
                height={40} 
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-6">
              Connecting hearts through video dating.
              Experience meaningful connections in a safe and engaging environment.
            </p>
            <DownloadCTA size="sm" showText={false} />
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="text-sm text-gray-600 hover:text-blue-500">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-blue-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-sm text-gray-600 hover:text-blue-500">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="text-sm text-gray-600 hover:text-blue-500">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-sm text-gray-600 hover:text-blue-500">
                  Safety Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-600 hover:text-blue-500">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Download</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://apps.apple.com/gb/app/slush-video-date/id1590373700?itscg=30200&itsct=apps_box_link&mttnsubad=1590373700" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-500">
                  Download iOS
                </Link>
              </li>
              <li>
                <Link href="https://play.google.com/store/apps/details?id=com.slushdating.slush&pli=1" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-500">
                  Download Android
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Slush. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}