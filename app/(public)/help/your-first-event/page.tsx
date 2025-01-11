import { ArrowLeft, Calendar, Users, Ticket, CheckCircle } from "lucide-react";
import Link from "next/link";
import { DownloadCTA } from "@/components/download-cta";

const steps = [
  {
    title: "Browse Events",
    description: "Explore our curated selection of events in the Events section to find the perfect match for your interests.",
    icon: Calendar,
    tips: [
      "Use filters to find events that match your interests",
      "Check event dates and times that work with your schedule",
      "Read event descriptions thoroughly for the best experience"
    ]
  },
  {
    title: "Reserve Your Spot",
    description: "Once you've found an event you'd like to attend, secure your spot by registering for the event.",
    icon: Ticket,
    tips: [
      "Register early as spots are limited",
      "Make sure to check any age restrictions or requirements",
      "Save the event to your calendar"
    ]
  },
  {
    title: "Prepare for the Event",
    description: "Review event details and make necessary preparations to ensure the best experience.",
    icon: Users,
    tips: [
      "Check if there are any materials or preparations needed",
      "Review any provided pre-event information",
      "Plan your arrival time accounting for check-in"
    ]
  },
  {
    title: "Attend and Engage",
    description: "Join the event and make the most of your experience by actively participating and connecting with others.",
    icon: CheckCircle,
    tips: [
      "Arrive a few minutes early to get settled",
      "Engage with other attendees and our staff",
      "Share your experience and provide feedback after the event"
    ]
  }
];

export default function YourFirstEventGuide() {
  return (
    <div className="relative">
      {/* Hero Header Section */}
      <div className="relative min-h-[200px] bg-gradient-to-r from-blue-600 to-blue-400">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        {/* Header Content */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <Link 
            href="/help"
            className="inline-flex items-center text-white hover:text-blue-100 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Help Center
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Your First Event</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A guide to attending your first Slush event and making the most of your experience
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              At Slush, we carefully curate and organize events that bring people together in meaningful ways. 
              This guide will help you navigate attending your first event and ensure you have an amazing experience.
            </p>

            {/* Steps */}
            <div className="space-y-12 mt-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-2">Pro Tips:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            {step.tips.map((tip, tipIndex) => (
                              <li key={tipIndex}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4">Get Started with Slush</h2>
              <p className="text-gray-600 mb-6">
                Download Slush today and start exploring events near you.
              </p>
              <div className="flex justify-center">
                <DownloadCTA size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 