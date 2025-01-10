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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background decorations */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-blue-100/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-100/50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in" role="text">
            Success Stories
          </span>
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-600 inline-block text-transparent bg-clip-text pb-2" itemProp="headline">
            Real Connections, Real Stories
          </h2>
          <p className="text-xl text-gray-600" itemProp="description">
            Discover how Slush Dating is transforming online dating through authentic video connections
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" aria-hidden="true" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" aria-hidden="true" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-blue-50/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 md:p-12" itemScope itemType="https://schema.org/Review">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-900" itemProp="author">
                  {testimonials[activeSlide].names}
                </h3>
                <div className="relative">
                  <span className="absolute -left-4 -top-4 text-4xl text-blue-200" aria-hidden="true">"</span>
                  <p className="text-lg sm:text-xl font-normal leading-relaxed text-blue-800 italic" itemProp="reviewBody">
                    {testimonials[activeSlide].story}
                  </p>
                  <span className="absolute -bottom-4 right-0 text-4xl text-blue-200" aria-hidden="true">"</span>
                </div>
                <div className="inline-block">
                  <span className="text-blue-500 text-sm font-medium" itemProp="about">
                    {testimonials[activeSlide].tag}
                  </span>
                </div>
                <meta itemProp="datePublished" content="2024-01-09" />
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                </div>
              </div>
              
              <div className="relative aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={testimonials[activeSlide].image}
                  alt={`${testimonials[activeSlide].names} - Slush Dating Success Story`}
                  width={500}
                  height={500}
                  quality={95}
                  priority={activeSlide === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full"
                  itemProp="image"
                />
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8" role="tablist">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index ? 'w-8 bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                role="tab"
                aria-selected={activeSlide === index}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}