"use client";

import { MessageCircle, Heart, Video as VideoIcon } from "lucide-react";
import Image from "next/image";
import { DownloadCTA } from "@/components/download-cta";

const userAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&q=80", // Professional woman smiling
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80", // Young man with a warm smile
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&q=80", // Business woman looking confident
];

export function HeroSection() {
  return (
    <section className="relative overflow-x-hidden">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 translate-x-1/4 hidden md:block">
          <Image
            src="/Hero background.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
              Online Dating Reimagined
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Break The Ice
              <span className="text-blue-500"> Through </span>
              Video
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Created by founders who found love on dating apps, we're revolutionizing online dating with authentic video connections. No filters, no endless texting – just real people having meaningful conversations.
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <DownloadCTA size="lg" />
            </div>
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-4">
                {userAvatars.map((avatar, i) => (
                  <div key={i} className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white relative overflow-hidden">
                    <Image
                      src={avatar}
                      alt={`Active user ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">Join 1000+ active users</p>
            </div>
          </div>

          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0 hidden md:block">
            <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-purple-50/90 backdrop-blur-sm" />
              
              <div className="relative h-full w-full p-3 sm:p-4">
                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/20 shadow-inner">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted
                    playsInline
                    poster="/video-poster.jpg"
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-12 bg-white rounded-2xl p-4 shadow-lg transform rotate-6 animate-float-slow hidden md:block">
              <VideoIcon className="w-6 h-6 text-blue-500" />
            </div>
            <div className="absolute -left-6 top-1/4 bg-white rounded-2xl p-4 shadow-lg transform -rotate-6 animate-float hidden md:block">
              <Heart className="w-6 h-6 text-pink-500" />
            </div>
            <div className="absolute -right-2 bottom-20 bg-white rounded-2xl p-4 shadow-lg transform rotate-12 animate-float-slow hidden md:block">
              <MessageCircle className="w-6 h-6 text-purple-500" />
            </div>

            <div className="absolute -z-10 -top-6 -right-6 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl hidden md:block" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}