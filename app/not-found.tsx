'use client';

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Home, BookOpen } from "lucide-react"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      {/* Floating icons */}
      <div className="absolute left-10 top-20 bg-white rounded-2xl p-4 shadow-lg transform -rotate-6 animate-float hidden md:block">
        <Heart className="w-6 h-6 text-pink-500" />
      </div>
      <div className="absolute right-10 bottom-20 bg-white rounded-2xl p-4 shadow-lg transform rotate-6 animate-float-slow hidden md:block">
        <MessageCircle className="w-6 h-6 text-blue-500" />
      </div>

      <div className="relative max-w-2xl w-full">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          <div className="text-center space-y-6">
            {/* 404 Text with gradient */}
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient pb-2">
                404
              </h1>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Page Not Found
            </h2>

            <p className="text-gray-600 max-w-md mx-auto text-lg">
              Oops! Looks like you've wandered into uncharted territory. Let's help you find your perfect match... with the right page!
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <Button size="lg" className="w-full group" asChild>
                <Link href="/">
                  <Home className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                  Return Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full group" asChild>
                <Link href="/help">
                  <BookOpen className="mr-2 w-4 h-4 group-hover:animate-pulse" />
                  Help Center
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="pt-6">
              <p className="text-sm text-gray-500 mb-3">Or try these popular pages:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link href="/events" className="text-sm text-blue-600 hover:text-blue-700 hover:underline px-2">Events</Link>
                <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-700 hover:underline px-2">Blog</Link>
                <Link href="/about" className="text-sm text-blue-600 hover:text-blue-700 hover:underline px-2">About</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </div>
  )
} 