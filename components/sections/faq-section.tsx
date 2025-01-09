"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Heart, Video, Calendar, Shield, User, LucideIcon } from "lucide-react";
import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

type Category = {
  id: "getting-started" | "events" | "technical" | "safety";
  name: string;
  icon: LucideIcon;
  description: string;
};

type FAQs = {
  [K in Category["id"]]: FAQ[];
};

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<Category["id"]>("getting-started");

  const categories: Category[] = [
    {
      id: "getting-started",
      name: "Getting Started",
      icon: User,
      description: "New to Slush? Start here"
    },
    {
      id: "events",
      name: "Events & Dating",
      icon: Calendar,
      description: "Learn about our video dating events"
    },
    {
      id: "technical",
      name: "Technical",
      icon: Video,
      description: "Setup and technical questions"
    },
    {
      id: "safety",
      name: "Safety & Privacy",
      icon: Shield,
      description: "Your security matters"
    }
  ];

  const faqs: FAQs = {
    "getting-started": [
      {
        question: "What is Slush?",
        answer: "Slush is a modern video speed dating app designed to help you meet new people through face-to-face connections. Instead of endless messaging, we help you connect instantly through video dates with potential matches who share your interests."
      },
      {
        question: "How do I prepare for a video dating event?",
        answer: "Choose a quiet, well-lit space with a stable internet connection. Test your camera and microphone beforehand, dress as you would for a casual date, and most importantly - be yourself! We recommend joining the waiting room a few minutes early to ensure everything is working properly."
      }
    ],
    "events": [
      {
        question: "How do Slush events work?",
        answer: "Slush events are structured video speed dating sessions. Once you book an event, you'll enter a virtual waiting room at the scheduled time. From there, you'll have 5-10 video dates (depending on the event), each lasting a few minutes. After each date, you'll have the opportunity to like or dislike the person you spoke with. If there's a mutual match, you'll be able to continue the conversation!"
      },
      {
        question: "What happens in the waiting room?",
        answer: "The waiting room is where you'll gather before your event begins. You can use this time to test your camera and microphone, ensure your lighting is good, and get ready for your dates. We'll notify you when it's time for your first date to begin."
      },
      {
        question: "How long are the video dates?",
        answer: "Each video date lasts 3 minutes, giving you enough time to make a meaningful first impression while keeping the experience exciting and dynamic."
      },
      {
        question: "What happens after each date?",
        answer: "After each date, you'll have a brief moment to indicate whether you're interested in the person you just met by selecting 'like' or 'pass'. If both people like each other, it's a match! You'll be notified of any matches after the event."
      },
      {
        question: "What if I miss my scheduled event?",
        answer: "If you can't make your scheduled event, please try to cancel at least 24 hours in advance so we can open your spot to someone else. Repeated no-shows may affect your ability to book future events."
      },
      {
        question: "How do matches work after an event?",
        answer: "If you and someone else both 'liked' each other during the event, you'll be notified of the match afterward. You'll then be able to message each other through the app to continue your conversation and potentially plan an in-person date!"
      }
    ],
    "technical": [
      {
        question: "Can I leave a date early if I'm not enjoying it?",
        answer: "Yes, absolutely! While we encourage giving each date a fair chance, you can leave a date early if you're uncomfortable or not enjoying the conversation. You'll be placed back in the waiting room until your next scheduled date begins."
      },
      {
        question: "What devices can I use for video dating?",
        answer: "Slush works on most modern smartphones, tablets, and computers with a camera and microphone. We recommend using a device with a stable internet connection for the best experience."
      }
    ],
    "safety": [
      {
        question: "Is my privacy protected during video dates?",
        answer: "Absolutely! We take your privacy seriously. Your full name and contact information are never shared with other users without your consent. You control what personal information you share during your dates."
      },
      {
        question: "How do you ensure user safety?",
        answer: "We have strict community guidelines and a zero-tolerance policy for inappropriate behavior. All users are verified, and you can report any concerns immediately. Our team monitors events and responds quickly to any issues."
      }
    ]
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 py-20 md:py-32" id="faq">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
      <div className="absolute left-0 top-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      {/* Floating decorative elements */}
      <div className="absolute left-10 top-20 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform -rotate-6 animate-float hidden md:block">
        <HelpCircle className="w-6 h-6 text-white" />
      </div>
      <div className="absolute right-20 top-40 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform rotate-12 animate-float-slow hidden md:block">
        <MessageCircle className="w-6 h-6 text-yellow-300" />
      </div>
      <div className="absolute left-1/4 bottom-20 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform -rotate-12 animate-float hidden md:block">
        <Heart className="w-6 h-6 text-white" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-100 font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-blue-50/90">
            Everything you need to know about Slush video speed dating
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Category Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-white/[0.08] backdrop-blur-sm border-white/20 shadow-lg"
                      : "bg-white/[0.04] border-white/10 hover:bg-white/[0.06]"
                  } border`}
                >
                  <Icon className={`w-6 h-6 mb-2 ${
                    activeCategory === category.id ? "text-yellow-300" : "text-blue-100"
                  }`} />
                  <h3 className={`font-semibold mb-1 ${
                    activeCategory === category.id ? "text-white" : "text-blue-50"
                  }`}>
                    {category.name}
                  </h3>
                  <p className="text-sm text-blue-100/80">{category.description}</p>
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white/[0.04] backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <Accordion type="single" collapsible className="divide-y divide-white/10">
              {faqs[activeCategory].map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`}
                  className="animate-fade-in group"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline transition-all duration-200 hover:bg-white/[0.04] data-[state=open]:bg-white/[0.04]">
                    <span className="text-left font-semibold text-blue-50 group-hover:text-white transition-colors duration-200">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-blue-100/90 px-6 py-4 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Help text */}
          <p className="text-center mt-8 text-blue-100/80">
            Still have questions?{" "}
            <a href="/contact" className="text-yellow-300 hover:text-yellow-200 font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}