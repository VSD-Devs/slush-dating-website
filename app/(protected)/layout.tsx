'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Calendar, Video, MessageCircle, User, LogOut, Settings, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = Cookies.get('auth');
    if (!isAuthenticated) {
      router.push('/sign-in');
    }
  }, [router]);

  const navigation = [
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Video Feed', href: '/video', icon: Video },
    { name: 'Chat', href: '/chat', icon: MessageCircle },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const handleSignOut = () => {
    Cookies.remove('auth');
    localStorage.removeItem('user');
    router.push('/sign-in');
  };

  const isVideoPage = pathname === '/video';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="h-16 bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between h-full">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center mr-8"
              >
                <Image
                  src="/slush-logo.png"
                  alt="Slush"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <div className="flex gap-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        flex items-center px-4 py-2 text-sm font-medium rounded-lg
                        transition-all duration-200 gap-2
                        ${isActive 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }
                      `}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleSignOut}
                className="text-gray-600 hover:text-gray-900 gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main 
        className={`pt-16 min-h-[calc(100vh-4rem)] ${
          isVideoPage 
            ? '' 
            : 'container mx-auto py-6 px-4'
        }`}
      >
        {/* Background decorations */}
        <div className="fixed left-0 top-0 w-72 h-72 bg-blue-100/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="fixed right-0 bottom-0 w-96 h-96 bg-purple-100/50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </main>
    </div>
  );
} 