"use client";

import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    names: "Tina and Davis",
    story: "Before They Built Their Tiny House Together, Tina and Davis Met on Slush",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    tag: "Real love talk"
  },
  {
    id: 2,
    names: "Sarah and Mike",
    story: "From Coffee Shop to Wedding Chapel: Sarah and Mike's Slush Journey",
    image: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?w=800",
    tag: "Success story"
  },
  // Add more testimonials as needed
];

export function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-blue-100/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-100/50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-600 inline-block text-transparent bg-clip-text pb-2">
            Real Connections, Real Stories
          </h2>
          <p className="text-xl text-gray-600">
            See how Slush is bringing people together
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hidden md:block"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {testimonials[activeSlide].names}
                </h3>
                <p className="text-2xl sm:text-3xl font-bold leading-tight">
                  {testimonials[activeSlide].story}
                </p>
                <div className="inline-block">
                  <span className="text-blue-500 font-script text-xl">
                    {testimonials[activeSlide].tag}
                  </span>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={testimonials[activeSlide].image}
                  alt={testimonials[activeSlide].names}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index ? 'w-8 bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}