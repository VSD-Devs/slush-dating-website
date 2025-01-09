import { Search, BookOpen, Star, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const helpCategories = [
  {
    title: "Getting Started",
    articles: [
      { title: "How to create an account", link: "#" },
      { title: "Navigating the platform", link: "#" },
      { title: "Your first event", link: "#" }
    ]
  },
  {
    title: "Events",
    articles: [
      { title: "Creating an event", link: "#" },
      { title: "Managing attendees", link: "#" },
      { title: "Event settings", link: "#" }
    ]
  },
  {
    title: "Community",
    articles: [
      { title: "Community guidelines", link: "#" },
      { title: "Building connections", link: "#" },
      { title: "Safety and privacy", link: "#" }
    ]
  },
  {
    title: "Technical Support",
    articles: [
      { title: "System requirements", link: "#" },
      { title: "Troubleshooting", link: "#" },
      { title: "Known issues", link: "#" }
    ]
  }
];

export default function HelpPage() {
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
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div className="absolute right-20 top-1/3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 animate-float-slow hidden md:block">
          <Star className="w-6 h-6 text-white" />
        </div>
        <div className="absolute left-1/4 bottom-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 animate-float hidden md:block">
          <Clock className="w-6 h-6 text-white" />
        </div>

        {/* Circular Gradient Blobs */}
        <div className="absolute -left-20 -top-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
        
        {/* Header Content */}
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Help Center</h1>
          <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to your questions and learn how to get the most out of Slush
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto relative mb-16">
          <Input 
            placeholder="Search for help..." 
            className="pl-12"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              <ul className="space-y-3">
                {category.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <a 
                      href={article.link}
                      className="text-gray-600 hover:text-blue-500 flex items-center gap-2"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We're here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
} 