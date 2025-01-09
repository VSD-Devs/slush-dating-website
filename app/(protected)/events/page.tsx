'use client';

import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Search, Filter, Heart, Star, Plus } from 'lucide-react';
import Link from 'next/link';

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
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'speed-dating', name: 'Speed Dating' },
    { id: 'singles-mixer', name: 'Singles Mixer' },
    { id: 'activity', name: 'Activity Based' },
    { id: 'workshop', name: 'Workshops' }
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
      }
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
      }
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
      }
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12 mt-8">
          <img
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=3000"
            alt="Events Hero"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <div className="text-center space-y-6 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 animate-gradient">
                Find Your Perfect Match
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join exciting events and connect with amazing people in your area
              </p>
              
              {/* Search Bar */}
              <div className="flex w-full max-w-2xl gap-4 mx-auto mt-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events by location or type..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <button className="px-6 py-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 text-white hover:bg-white/20 transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
                  <Filter className="w-5 h-5" />
                  Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 px-2 -mx-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-3 rounded-2xl text-sm font-medium whitespace-nowrap transition-all hover:scale-105 active:scale-95 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <div key={event.id} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              {/* Event Image */}
              <div className="relative h-56">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <button 
                  className={`absolute top-4 right-4 p-3 rounded-2xl backdrop-blur-md ${
                    event.isBookmarked ? 'bg-pink-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                  } hover:scale-110 active:scale-95 transition-all shadow-lg`}
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Event Content */}
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
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
                    <img
                      src={event.host.image}
                      alt={event.host.name}
                      className="w-10 h-10 rounded-full ring-2 ring-white mr-3"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">{event.host.name}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-600">{event.host.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href={`/events/${event.id}`}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    Join Event
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 