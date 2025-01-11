'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, MessageCircle, Video as VideoIcon, Sparkles, Stars } from 'lucide-react';
import Cookies from 'js-cookie';
import Image from 'next/image';

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    await new Promise(resolve => setTimeout(resolve, 1000));
    Cookies.set('auth', 'true');
    router.push('/video');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center hover:scale-105 transition-transform"
          >
            <Image
              src="/slush-logo.png"
              alt="Slush"
              width={100}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Dynamic background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -z-10 top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -z-10 bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Container */}
      <div className="container mx-auto flex items-center justify-between gap-8">
        {/* Left Side - Sign In Form */}
        <div className="w-full max-w-md relative">
          {/* Floating shapes around form */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-32 left-0 w-3 h-3 bg-blue-400 rounded-full animate-float-diagonal opacity-70" />
            <div className="absolute bottom-48 right-0 w-4 h-4 bg-blue-300 rounded-full animate-float opacity-70" />
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float-slow opacity-70" />
          </div>

          {/* Logo and Welcome */}
          <div className="mb-8">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
              Welcome Back
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Break The Ice
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent -ml-1.5"> Again</span>
            </h1>
            <p className="text-base text-gray-600">
              Real Faces, Real Conversations - Continue Your Journey
            </p>
          </div>

          {/* Sign In Form */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-blue-100/50 to-blue-50/50" />
            <div className="relative p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="hello@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    required
                    className="bg-white/70 border-white/20 backdrop-blur-sm focus:bg-white/90 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    disabled={isLoading}
                    required
                    className="bg-white/70 border-white/20 backdrop-blur-sm focus:bg-white/90 transition-all duration-300"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                      Signing in...
                    </div>
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center space-y-4">
                <Link
                  href="/forgot-password"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center gap-1 justify-center"
                >
                  <Sparkles className="w-3 h-3" />
                  Forgot your password?
                </Link>

                <div className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link
                    href="/sign-up"
                    className="font-medium bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-blue-400 transition-all duration-300"
                  >
                    Sign up for free
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Active Users */}
          <div className="mt-8 flex items-center gap-4 justify-start backdrop-blur-sm bg-white/30 rounded-full py-2 px-4">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&q=80",
              ].map((avatar, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full border-2 border-white relative overflow-hidden transform hover:scale-110 hover:z-10 transition-all duration-300"
                >
                  <Image
                    src={avatar}
                    alt={`Active user ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <Stars className="w-3 h-3 text-blue-500" />
              Join 1000+ active users in your area
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 hidden lg:block relative h-[800px] w-full max-w-2xl">
          {/* Interactive elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute right-1/4 top-24 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform rotate-6 animate-float-slow hover:scale-105 transition-transform duration-300">
              <VideoIcon className="w-6 h-6 text-blue-500" />
            </div>
            <div className="absolute left-1/4 top-1/3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform -rotate-6 animate-float hover:scale-105 transition-transform duration-300">
              <Heart className="w-6 h-6 text-blue-400" />
            </div>
            <div className="absolute right-1/3 bottom-32 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform rotate-12 animate-float-slow hover:scale-105 transition-transform duration-300">
              <MessageCircle className="w-6 h-6 text-blue-500" />
            </div>
          </div>

          {/* Main Image */}
          <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=2787&auto=format&fit=crop"
              alt="Couple enjoying coffee"
              fill
              className="object-cover brightness-95"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
} 