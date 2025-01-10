"use client";

import Image from "next/image";
import { Users, Sparkles, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Khalil Kirkwood",
    role: "Co-Founder",
    image: "/khalil.jpeg",
    bio: "With a strong background in sales and web development, Khalil brings technical expertise and a deep understanding of dating apps to Slush. Having found his soulmate on Tinder, he's passionate about creating meaningful connections through technology."
  },
  {
    name: "Russell Adjekwei",
    role: "Co-Founder",
    image: "/russell.jpg",
    bio: "Russell's background in Marketing and social media, combined with his personal success story of finding love on Tinder, drives his vision for revolutionizing the dating app experience through authentic video connections."
  }
];

export default function TeamPage() {
  return (
    <div className="relative">
      {/* Hero Header Section */}
      <div className="relative min-h-[300px] bg-gradient-to-r from-blue-600 to-blue-400 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-10 top-1/4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-6 animate-float hidden md:block">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div className="absolute right-20 top-1/3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 animate-float-slow hidden md:block">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div className="absolute left-1/4 bottom-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 animate-float hidden md:block">
          <Heart className="w-6 h-6 text-white" />
        </div>

        {/* Circular Gradient Blobs */}
        <div className="absolute -left-20 -top-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
        
        {/* Header Content */}
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet The Team</h1>
          <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            The passionate innovators behind Slush, dedicated to transforming how people connect through video dating.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto text-center py-16 md:py-20">
          <p className="text-xl text-gray-600 mb-8">
            At Slush, we're passionate innovators who have experienced firsthand the transformative 
            power of dating apps. Having found love through technology ourselves, we're on a mission 
            to revolutionize how people connect and create meaningful relationships.
          </p>
          <p className="text-xl text-gray-600">
            Our combined expertise in technology, marketing, and community building drives our 
            vision to create an authentic video-first dating experience that helps others find 
            their perfect match, just like we did.
          </p>
        </div>

        {/* Team Members Grid - Updated for 2 people */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-20">
          {teamMembers.map((member, i) => (
            <div 
              key={i}
              className="group bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center md:flex-row md:items-start gap-8"
            >
              <div className="relative w-48 h-56 flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-2xl blur-xl" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 