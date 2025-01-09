'use client';

import { Calendar, MapPin, Users, Clock, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Attendee {
  name: string;
  avatar: string;
}

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch this data based on the event ID
  const event = {
    id: 1,
    title: "Speed Dating at Central Park",
    date: "Jan 15, 2024",
    time: "6:00 PM",
    location: "Central Park, NY",
    attendees: {
      count: 24,
      gender_ratio: "12M : 12F",
      age_range: "25-35",
      list: [
        { name: "Sarah J.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
        { name: "Michael C.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
        { name: "Emma W.", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400" },
        // Add more attendees as needed
      ]
    },
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
    description: "Join us for a fun evening of speed dating in the heart of Central Park. Meet new people in a relaxed atmosphere. Our experienced hosts will ensure everyone feels comfortable and has a great time.\n\nWhat to expect:\n• 5-minute rounds with each date\n• Ice-breaker games\n• Complimentary welcome drink\n• Post-event mingling\n\nDress code: Smart casual\nAge range: 25-35\nGender ratio maintained for optimal matching",
    category: "speed-dating",
    host: {
      name: "NYC Dating Events",
      image: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?w=400",
      rating: 4.8
    },
    spotsLeft: 6
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <Link 
        href="/events"
        className="fixed top-24 left-8 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all group"
      >
        <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
      </Link>

      {/* Event Image */}
      <div className="relative h-[50vh] w-full">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
            </div>
            
            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                {event.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-500" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                {event.location}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center">
                <img
                  src={event.host.image}
                  alt={event.host.name}
                  className="w-12 h-12 rounded-full ring-2 ring-white mr-3"
                />
                <div>
                  <div className="font-medium text-gray-900">Hosted by {event.host.name}</div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{event.host.rating} rating</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-blue-600 font-medium">{event.spotsLeft} spots left</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">About this event</h2>
            <p className="text-gray-600 whitespace-pre-line">{event.description}</p>
          </div>

          {/* Attendees */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Attendees</h2>
              <div className="text-sm text-gray-600">
                {event.attendees.count} people • {event.attendees.gender_ratio} • Ages {event.attendees.age_range}
              </div>
            </div>
            <div className="flex -space-x-2 overflow-hidden">
              {event.attendees.list.map((attendee, index) => (
                <div
                  key={index}
                  className="relative w-10 h-10 rounded-full ring-2 ring-white overflow-hidden filter blur-sm hover:blur-none transition-all"
                >
                  <img
                    src={attendee.avatar}
                    alt={attendee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="relative w-10 h-10 rounded-full ring-2 ring-white bg-gray-100 flex items-center justify-center">
                <span className="text-sm text-gray-600">+{event.attendees.count - event.attendees.list.length}</span>
              </div>
            </div>
          </div>

          {/* Book Button */}
          <div className="pt-6 border-t">
            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-medium hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all">
              Join Event
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              Free event • Limited spots available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 