"use client";

import { Video, Users, Heart, Clock, MessageSquare, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";

export function FeaturesSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24" id="features" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block" role="text">
            The Future of Video Dating
          </span>
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-600 inline-block text-transparent bg-clip-text pb-2" itemProp="headline">
            Experience Dating Differently
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" itemProp="description">
            Discover meaningful connections through our innovative video-first dating platform. Join thousands of singles finding authentic relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] lg:h-[600px] order-1 lg:order-1" role="img" aria-label="Dating app features showcase">
            {/* Background decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl" aria-hidden="true" />
            
            {/* Phone container */}
            <div className="absolute inset-0 rounded-[2.5rem] transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-sm rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/30" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-blue-50/5 to-white/10 rounded-[2.5rem]" />
              <div className="absolute inset-0 bg-blue-500/[0.02] rounded-[2.5rem]" />
              <div className="absolute inset-[2px] rounded-[2.5rem] shadow-inner" />
              
              <div className="relative h-full w-full p-4 lg:p-8">
                <Image
                  src="/Phone display.png"
                  alt="Slush Dating app interface showcasing video dating features"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-10 order-2 lg:order-2">
            {[
              {
                icon: Video,
                title: "Speed Dating Events",
                description: "Join dynamic 3-minute video dates with 5 or 10 potential matches in one session. Perfect for busy professionals seeking meaningful connections.",
                highlights: ["3-Minute Video Dates", "5 or 10 Dates per Event", "Real-time Connections"]
              },
              {
                icon: Users,
                title: "Video-First Profiles",
                description: "Create engaging video profiles that showcase your authentic personality. Stand out from the crowd and make genuine first impressions.",
                highlights: ["Dynamic Video Profiles", "Authentic Self-Expression", "Verified Profiles"]
              },
              {
                icon: MessageSquare,
                title: "Instant Chat",
                description: "Connect instantly with your matches through our real-time chat system. Share messages, reactions, and build meaningful conversations at your own pace.",
                highlights: ["Real-time Messaging", "Media Sharing", "Expressive Reactions"]
              }
            ].map((feature, i) => (
              <div key={i} className="group" itemScope itemProp="hasOfferCatalog" itemType="https://schema.org/OfferCatalog">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900" itemProp="name">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed" itemProp="description">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.highlights.map((highlight, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-blue-500" aria-hidden="true" />
                          <span itemProp="itemOffered">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}