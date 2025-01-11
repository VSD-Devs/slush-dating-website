'use client';

import { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Clock, Users, Heart, Star, ChevronRight, Sparkles, PartyPopper } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: {
    count: number;
    gender_ratio: string;
    age_range: string;
  };
  imageUrl: string;
  description: string;
  category: string;
  isBookmarked: boolean;
  host: {
    name: string;
    image: string;
    rating: number;
  };
  price?: string;
  spots_left?: number;
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Events', icon: Sparkles },
    { id: 'speed-dating', name: 'Speed Dating', icon: Clock },
    { id: 'singles-mixer', name: 'Singles Mixer', icon: PartyPopper },
    { id: 'activity', name: 'Activity Based', icon: Users },
    { id: 'workshop', name: 'Workshops', icon: Calendar }
  ];

  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "Speed Dating at Central Park",
      date: "Jan 15, 2024",
      time: "6:00 PM",
      location: "Central Park, NY",
      attendees: {
        count: 24,
        gender_ratio: "12M : 12F",
        age_range: "25-35"
      },
      imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=3269&auto=format&fit=crop",
      description: "Join us for a fun evening of speed dating in the heart of Central Park. Meet new people in a relaxed atmosphere.",
      category: "speed-dating",
      isBookmarked: false,
      host: {
        name: "NYC Dating Events",
        image: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?w=400",
        rating: 4.8
      },
      price: "$29",
      spots_left: 6
    },
    {
      id: 2,
      title: "Singles Mixer Downtown",
      date: "Jan 18, 2024",
      time: "7:30 PM",
      location: "The Grand Hotel",
      attendees: {
        count: 50,
        gender_ratio: "25M : 25F",
        age_range: "27-40"
      },
      imageUrl: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=3270&auto=format&fit=crop",
      description: "A sophisticated evening of mingling and making connections. Light refreshments will be served.",
      category: "singles-mixer",
      isBookmarked: true,
      host: {
        name: "Elite Dating Co",
        image: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?w=400",
        rating: 4.9
      },
      price: "$45",
      spots_left: 12
    },
    {
      id: 3,
      title: "Coffee Meet & Greet",
      date: "Jan 20, 2024",
      time: "10:00 AM",
      location: "Brew & Bean Café",
      attendees: {
        count: 16,
        gender_ratio: "8M : 8F",
        age_range: "23-35"
      },
      imageUrl: "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?q=80&w=2848&auto=format&fit=crop",
      description: "Start your weekend right with coffee and conversation. Casual and friendly atmosphere.",
      category: "activity",
      isBookmarked: false,
      host: {
        name: "Coffee & Connect",
        image: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?w=400",
        rating: 4.7
      },
      price: "$15",
      spots_left: 4
    },
  ]);

  const filteredEvents = events.filter(event => {
    if (selectedCategory !== 'all' && event.category !== selectedCategory) return false;
    if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !event.location.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 relative">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -z-10 top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -z-10 bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden mb-12 group">
          <Image
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=3000"
            alt="Events Hero"
            fill
            className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          
          {/* Floating decorative elements */}
          <div className="absolute left-10 top-1/4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 transform -rotate-6 animate-float hover:scale-105 transition-all duration-300 hidden md:block">
            <Calendar className="w-6 h-6 text-blue-500" />
          </div>
          <div className="absolute right-20 top-1/3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 animate-float-slow hover:scale-105 transition-all duration-300 hidden md:block">
            <Heart className="w-6 h-6 text-blue-400" />
          </div>
          <div className="absolute left-1/4 bottom-10 bg-white/80 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 animate-float hover:scale-105 transition-all duration-300 hidden md:block">
            <Users className="w-6 h-6 text-blue-500" />
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <div className="text-center space-y-6 max-w-3xl">
              <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
                Discover Local Events
              </span>
              <h1 className="text-4xl md:text-6xl font-bold animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                Find Your Perfect Match
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
                Join exciting events and connect with amazing people in your area
              </p>
              
              {/* Search Bar */}
              <div className="flex w-full max-w-2xl gap-4 mx-auto mt-8 animate-fade-in">
                <div className="flex-1 relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search events by location or type..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all group-hover:bg-white/15"
                  />
                </div>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-6 py-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 text-white hover:bg-white/20 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl text-sm font-medium whitespace-nowrap transition-all hover:scale-105 active:scale-95 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white/90 shadow-sm border border-white/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredEvents.map((event) => (
              <div key={event.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-blue-600/5 rounded-[2rem] transform group-hover:scale-[1.02] transition-transform duration-300" />
                <div className="relative bg-white/80 backdrop-blur-lg rounded-[2rem] shadow-xl shadow-blue-100/50 overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/50">
                  {/* Event Image */}
                  <div className="relative h-56">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <button 
                      className={`absolute top-4 right-4 p-3 rounded-2xl backdrop-blur-md ${
                        event.isBookmarked ? 'bg-blue-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                      } hover:scale-110 active:scale-95 transition-all shadow-lg`}
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    {event.spots_left !== undefined && event.spots_left <= 10 && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-blue-500/90 backdrop-blur-sm text-white text-sm font-medium">
                        {event.spots_left} spots left
                      </div>
                    )}
                  </div>

                  {/* Event Content */}
                  <div className="p-6 space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h3>
                        <span className="text-lg font-semibold text-blue-600">{event.price}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                        {event.location}
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-blue-500" />
                        {event.attendees.count} attendees • {event.attendees.gender_ratio} • Ages {event.attendees.age_range}
                      </div>
                    </div>

                    {/* Host Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="relative w-10 h-10">
                          <Image
                            src={event.host.image}
                            alt={event.host.name}
                            fill
                            className="rounded-full object-cover ring-2 ring-white"
                          />
                        </div>
                        <div className="flex flex-col ml-3">
                          <span className="text-sm font-medium text-gray-900">{event.host.name}</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <span className="text-sm text-gray-600">{event.host.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Link 
                        href={`/events/${event.id}`}
                        className="group/btn inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
                      >
                        Join Event
                        <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 