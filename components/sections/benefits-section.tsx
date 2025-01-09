"use client";

import { Button } from "@/components/ui/button";
import { Crown, Star, Smartphone, Sparkles } from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute right-0 top-0 w-72 h-72 bg-blue-100/50 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-100/50 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
            Why Join Now
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-600 inline-block text-transparent bg-clip-text pb-2">
            Exclusive Early Access Benefits
          </h2>
          <p className="text-xl text-gray-600">
            Join now and get exclusive perks that won't be available after launch
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: Star,
              title: "Early Access",
              description: "Be among the first to experience our revolutionary dating platform",
              color: "blue"
            },
            {
              icon: Crown,
              title: "Premium Perks",
              description: "Enjoy exclusive features and priority support for a superior experience",
              color: "blue"
            },
            {
              icon: Smartphone,
              title: "Try the App",
              description: "Get instant access to our iOS and Android apps before the public launch",
              color: "blue"
            }
          ].map((benefit, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Decorative corner sparkle */}
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-4 h-4 text-blue-500/30" />
              </div>

              <div className={`w-16 h-16 mb-6 rounded-xl bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <div className="absolute left-4 top-20 bg-white rounded-xl p-3 shadow-lg transform -rotate-6 animate-float hidden lg:block">
          <Star className="w-5 h-5 text-blue-500" />
        </div>
        <div className="absolute right-4 bottom-20 bg-white rounded-xl p-3 shadow-lg transform rotate-6 animate-float-slow hidden lg:block">
          <Crown className="w-5 h-5 text-blue-500" />
        </div>
      </div>
    </section>
  );
}