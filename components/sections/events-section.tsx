"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Star, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DownloadCTA } from "@/components/download-cta";

const events = [
  {
    id: 1,
    title: "Friday Frenzy - 5 Dates",
    image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=800", // Romantic restaurant setting
    description: "Speed dating in a luxurious setting"
  },
  {
    id: 2,
    title: "Coffee & Connection",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800", // Coffee date
    description: "Casual coffee meetups"
  },
  {
    id: 3,
    title: "Adventure Dating",
    image: "https://images.unsplash.com/photo-1530027644375-9c83053d392e?q=80&w=800", // Outdoor adventure
    description: "Outdoor activities and fun"
  },
  {
    id: 4,
    title: "Sunset Social",
    image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=800", // Rooftop social
    description: "Rooftop mixer event"
  }
];

export function EventsSection() {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 py-16 relative overflow-hidden" id="events">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
      <div className="absolute left-0 top-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      
      {/* Floating decorative elements - hidden on mobile */}
      <div className="absolute left-10 top-20 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform -rotate-6 animate-float hidden md:block">
        <Calendar className="w-6 h-6 text-white" />
      </div>
      <div className="absolute right-20 top-40 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform rotate-12 animate-float-slow hidden md:block">
        <Star className="w-6 h-6 text-yellow-300" />
      </div>
      <div className="absolute left-1/4 bottom-20 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform -rotate-12 animate-float hidden md:block">
        <Users className="w-6 h-6 text-white" />
      </div>
      <div className="absolute right-1/4 bottom-40 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform rotate-6 animate-float-slow hidden md:block">
        <Sparkles className="w-6 h-6 text-yellow-300" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-100 font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
            Speed Dating Events for Every Interest
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Upcoming Events
          </h2>
          <p className="text-xl text-blue-50/90">
            Join our exclusive events and connect with amazing people
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
              onClick={() => setActiveSlide(index)}
            >
              <div className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm">
                {/* Glass effect border */}
                <div className="absolute inset-0 rounded-2xl border border-white/20" />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10" />
                
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Event title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                  <h3 className="text-white text-base md:text-lg font-semibold mb-0.5 md:mb-1">{event.title}</h3>
                  <p className="text-white/80 text-xs md:text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-6 mb-8">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSlide === index ? 'w-6 bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Download CTA */}
        <div className="text-center mb-16">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-6">
            Download Slush
          </h3>
          <DownloadCTA centered size="lg" variant="white" />
        </div>
      </div>

      {/* Blue banner with improved glass effect */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-400/30 via-white/30 to-blue-400/30 backdrop-blur-md py-4 border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex gap-8">
              <span className="text-lg font-medium text-white">Limited Spots Available</span>
              <span className="text-lg font-medium text-white">Don't Miss Out - Sign Up Before Time Runs Out!</span>
              <span className="text-lg font-medium text-white">Limited Spots Available</span>
              <span className="text-lg font-medium text-white">Don't Miss Out – Sign Up Before Time Runs Out!</span>
            </div>
            <div className="animate-marquee flex gap-8" aria-hidden="true">
              <span className="text-lg font-medium text-white">Limited Spots Available</span>
              <span className="text-lg font-medium text-white">Don't Miss Out – Sign Up Before Time Runs Out!</span>
              <span className="text-lg font-medium text-white">Limited Spots Available</span>
              <span className="text-lg font-medium text-white">Don't Miss Out – Sign Up Before Time Runs Out!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}