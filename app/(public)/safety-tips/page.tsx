import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import { Shield, Video, MessageCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Safety Tips | Slush Dating - Stay Safe While Dating Online',
  description: 'Essential safety guidelines for video dating and chat messaging on Slush Dating. Learn how to protect yourself while finding meaningful connections.',
  alternates: {
    canonical: 'https://slushdating.com/safety-tips'
  },
  openGraph: {
    title: 'Safety Tips | Slush Dating - Stay Safe While Dating Online',
    description: 'Essential safety guidelines for video dating and chat messaging on Slush Dating.',
    url: 'https://slushdating.com/safety-tips',
  }
};

export default function SafetyTipsPage() {
  return (
    <>
      <Script id="safety-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Safety Tips",
            "description": "Safety guidelines for online dating on Slush Dating",
            "publisher": {
              "@type": "Organization",
              "name": "Slush Dating"
            },
            "mainEntity": {
              "@type": "Article",
              "headline": "Online Dating Safety Tips",
              "datePublished": "2024-01-09",
              "dateModified": "2024-01-09",
              "author": {
                "@type": "Organization",
                "name": "Slush Dating"
              }
            }
          }
        `}
      </Script>
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
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="absolute right-20 top-1/3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 animate-float-slow hidden md:block">
            <Video className="w-6 h-6 text-white" />
          </div>
          <div className="absolute left-1/4 bottom-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 animate-float hidden md:block">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>

          {/* Circular Gradient Blobs */}
          <div className="absolute -left-20 -top-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
          
          {/* Header Content */}
          <div className="container mx-auto px-4 py-16 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">SAFETY TIPS</h1>
            <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your safety is our top priority
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <article itemScope itemType="https://schema.org/Article">
              {/* Introduction Card */}
              <div className="max-w-3xl mx-auto mb-16">
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-blue-500" />
                  </div>
                  <p className="text-xl text-center leading-relaxed text-gray-700">
                    At Slush Dating, we want you to have the best possible speed dating experience while staying safe. 
                    Whether you're on video dates or chatting with your matches, please take a moment to read through these essential safety guidelines.
                  </p>
                </div>
              </div>

              {/* Essential Tips Grid */}
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Essential Safety Tips</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <Video className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-semibold">Video Dating Safety</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Keep your personal information private</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Use our platform's video chat feature exclusively</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Ensure your background doesn't reveal personal details</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Stay in well-lit, appropriate settings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Use virtual backgrounds when needed</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <MessageCircle className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-semibold">Match Chat Safety</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Never share financial information or send money</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Keep conversations on the Slush platform</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Be cautious with personal details</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Block and report suspicious behavior</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Trust your instincts if something feels off</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Detailed Guidelines */}
              <div className="space-y-16 max-w-6xl mx-auto">
                {/* Privacy Section */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                  <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col items-center mb-8">
                      <div className="p-3 bg-blue-50 rounded-xl mb-4">
                        <Shield className="w-6 h-6 text-blue-500" />
                      </div>
                      <h2 className="text-2xl font-semibold text-center">Protect Your Privacy</h2>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Never share sensitive personal or financial information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Keep your social media profiles separate from dating</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Don't share links to personal social media accounts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                        <span>Be cautious about sharing identifying details</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Red Flags Section */}
                <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-100">
                  <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col items-center mb-8">
                      <div className="p-3 bg-red-50 rounded-xl mb-4">
                        <AlertTriangle className="w-6 h-6 text-red-500" />
                      </div>
                      <h2 className="text-2xl font-semibold text-center">Red Flags to Watch For</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5" />
                          <span>Requests for money or financial assistance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5" />
                          <span>Pressure to move communication off-platform</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5" />
                          <span>Inconsistent information in their profile</span>
                        </li>
                      </ul>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5" />
                          <span>Inappropriate behavior or harassment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5" />
                          <span>Attempts to gather personal information</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5" />
                          <span>Suspicious behavior during video speed dates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Reporting Section */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
                  <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col items-center mb-8">
                      <h2 className="text-2xl font-semibold text-center">Reporting & Support</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-medium mb-4 text-gray-900">Report Concerns:</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5" />
                            <span>Use the "Report" button in chats or video calls</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5" />
                            <span>Block users who make you uncomfortable</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5" />
                            <span>Contact support@slushdating.com</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium mb-4 text-gray-900">Emergency Situations:</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5" />
                            <span>End the chat or video call immediately</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5" />
                            <span>Contact local law enforcement</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5" />
                            <span>Save any evidence that might be helpful</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Note */}
              <div className="mt-16 max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 text-center">
                  <h2 className="text-2xl font-semibold mb-4">Remember</h2>
                  <p className="text-lg text-gray-700">
                    Your safety is our top priority at Slush Dating. While we work hard to create a safe environment, 
                    staying vigilant and following these guidelines will help ensure a positive speed dating experience. 
                    Trust your instincts and don't hesitate to reach out to our support team if you need assistance.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
} 