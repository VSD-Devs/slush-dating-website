'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { Heart, Mail, Lock, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { AuthNav } from '@/components/auth-nav';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name && email && password) {
      Cookies.set('auth', 'true', { expires: 7 });
      localStorage.setItem('user', JSON.stringify({ email, name }));
      router.push('/events');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen flex pt-16">
      <AuthNav />
      
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute left-0 top-0 w-72 h-72 bg-blue-100/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-purple-100/50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

        {/* Floating decorative elements */}
        <div className="absolute left-10 top-20 bg-white rounded-xl p-3 shadow-lg transform -rotate-6 animate-float hidden lg:block">
          <Heart className="w-5 h-5 text-pink-500" />
        </div>
        <div className="absolute right-10 bottom-20 bg-white rounded-xl p-3 shadow-lg transform rotate-6 animate-float-slow hidden lg:block">
          <User className="w-5 h-5 text-blue-500" />
        </div>

        <div className="max-w-md w-full space-y-8 relative">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Join our community and start connecting
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-500 text-sm text-center bg-red-50 py-2 px-4 rounded-lg">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <div className="relative">
                <label htmlFor="name" className="sr-only">Full Name</label>
                <User className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="pl-10 appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="sr-only">Email address</label>
                <Mail className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="pl-10 appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">Password</label>
                <Lock className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="pl-10 appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Create Account
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/sign-in" className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1523464862212-d6631d073194?w=1200"
          alt="Couple enjoying together"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 mix-blend-multiply" />
      </div>
    </div>
  );
} 