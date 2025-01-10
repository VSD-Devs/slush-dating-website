"use client";

import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    names: "Emma & James",
    story: "\"We matched on Slush after both answering 'What book changed your life?' Emma's profile caught my eye with her answer about Murakami. A year of book-swapping dates later, we moved in together and opened our own little bookshop cafe.\"",
    image: "/testimonials/couple-1.jpg",
    tag: "Found love through literature"
  },
  {
    id: 2,
    names: "Alex & Maya",
    story: "\"I almost didn't message Maya on Slush, thinking she was out of my league. Her prompt about debugging at 3 AM made me laugh. Six months of virtual coffee dates later, we met at a tech conference. Now we're co-founding our second startup together.\"",
    image: "/testimonials/couple-2.jpg",
    tag: "Connected through code"
  },
  {
    id: 3,
    names: "David & Sophie",
    story: "\"Sophie's Slush profile had this hilarious take on pineapple on pizza. We started chatting about controversial food opinions, which led to our first date cooking together. Two years later, we host weekly supper clubs and just got engaged at our favorite restaurant.\"",
    image: "/testimonials/couple-3.jpg",
    tag: "Bonded over food"
  }
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
                <div className="relative">
                  <span className="absolute -left-4 -top-4 text-4xl text-blue-200">"</span>
                  <p className="text-lg sm:text-xl font-normal leading-relaxed text-gray-600 italic">
                    {testimonials[activeSlide].story}
                  </p>
                  <span className="absolute -bottom-4 right-0 text-4xl text-blue-200">"</span>
                </div>
                <div className="inline-block">
                  <span className="text-blue-500 text-sm font-medium">
                    {testimonials[activeSlide].tag}
                  </span>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={testimonials[activeSlide].image}
                  alt={testimonials[activeSlide].names}
                  width={500}
                  height={500}
                  quality={95}
                  priority={activeSlide === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full"
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