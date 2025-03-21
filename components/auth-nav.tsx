'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Settings, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';

export function AuthNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  // Debug log
  useEffect(() => {
    console.log('Session status:', status);
    console.log('Session data:', session);
  }, [session, status]);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
        >
          Slush
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {status === 'authenticated' && session ? (
            <>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-2 hover:bg-blue-50"
                asChild
              >
                <Link href="/profile">
                  <User className="w-4 h-4" />
                  Profile
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-2 hover:bg-blue-50"
                asChild
              >
                <Link href="/settings">
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleSignOut}
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link 
                href="/sign-in" 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Sign in
              </Link>
              <Button asChild size="sm" className="shadow-sm">
                <Link href="/sign-up">
                  Sign up
                </Link>
              </Button>
            </>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {status === 'authenticated' && session ? (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-2 justify-start hover:bg-blue-50"
                  asChild
                >
                  <Link 
                    href="/profile"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-2 justify-start hover:bg-blue-50"
                  asChild
                >
                  <Link 
                    href="/settings"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Link 
                  href="/sign-in" 
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Button asChild size="sm" className="shadow-sm w-full">
                  <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
                    Sign up
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
} 