"use client";

import Image from "next/image";
import Link from "next/link";

// Simple button component to avoid dependency issues
const Button = ({ 
  children, 
  className = "", 
  size = "default",
  ...props 
}) => {
  const sizeClasses = {
    default: "px-4 py-2",
    sm: "px-3 py-1 text-sm",
    lg: "px-8 py-3 text-lg"
  };
  
  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Simple SVG icons
const HandshakeIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
  </svg>
);

const CalendarIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const MessageSquareIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const AwardIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const ArrowRightIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function PartnershipsPage() {
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
        <div className="absolute left-10 top-1/4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-6 hidden md:block">
          <HandshakeIcon className="w-6 h-6 text-white" />
        </div>
        <div className="absolute right-20 top-1/3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 hidden md:block">
          <CalendarIcon className="w-6 h-6 text-white" />
        </div>
        <div className="absolute left-1/4 bottom-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 hidden md:block">
          <MessageSquareIcon className="w-6 h-6 text-white" />
        </div>

        {/* Circular Gradient Blobs */}
        <div className="absolute -left-20 -top-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
        
        {/* Header Content */}
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Partner With Slush</h1>
          <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join forces with us to create meaningful connections and grow your business through innovative partnerships.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center py-16 md:py-20">
          <p className="text-xl text-gray-600 mb-8">
            At Slush, we believe in the power of collaboration. Our partnerships programme 
            offers unique opportunities to connect with our engaged community of singles 
            looking for authentic connections.
          </p>
          <p className="text-xl text-gray-600">
            Whether you're a dating coach, event organiser, or brand looking to reach 
            our audience, we offer tailored partnership solutions to help you achieve your goals.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CalendarIcon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sponsored Events</h3>
              <p className="text-gray-600 mb-4">
                Promote your events directly in our app to our community of singles. 
                Our in-app event promotion reaches thousands of users looking for meaningful 
                connections and experiences.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Featured placement in our events section
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Targeted notifications to relevant users
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Post-event analytics and insights
                </li>
              </ul>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <MessageSquareIcon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Dating Coach Referrals</h3>
              <p className="text-gray-600 mb-4">
                Partner with our AI dating coach to provide personalised coaching services. 
                We connect users seeking additional guidance with our network of trusted 
                dating professionals.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Seamless referrals from our AI coach
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Profile listing in our coaching directory
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Integration with our coaching platform
                </li>
              </ul>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <AwardIcon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Brand Collaborations</h3>
              <p className="text-gray-600 mb-4">
                Create authentic brand experiences that resonate with our community. 
                From co-branded content to special offers, we help you connect with 
                our users in meaningful ways.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  In-app promotional opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Co-created content for social media
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Access to our engaged community
                </li>
              </ul>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <HandshakeIcon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Strategic Alliances</h3>
              <p className="text-gray-600 mb-4">
                Develop long-term partnerships that create mutual value. We work with 
                complementary businesses to create innovative solutions for singles 
                in the dating ecosystem.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Joint product development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Shared marketing initiatives
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Data-driven partnership strategies
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a successful partnership that benefits your business 
            and our community of singles.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg font-medium">
              Get in Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 