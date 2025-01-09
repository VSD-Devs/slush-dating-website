'use client';

import { useState } from 'react';
import { Camera, MapPin, Cake, Heart, Briefcase, GraduationCap, Edit2, Plus } from 'lucide-react';

interface Profile {
  name: string;
  age: number;
  location: string;
  occupation: string;
  education: string;
  bio: string;
  interests: string[];
  photos: string[];
  lookingFor: string[];
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    name: 'Sarah Johnson',
    age: 28,
    location: 'New York City, NY',
    occupation: 'UX Designer at Tech Co',
    education: 'Masters in Design, NYU',
    bio: 'Creative soul with a passion for art and design. Love exploring new cafes, hiking trails, and attending gallery openings. Looking for someone who shares my enthusiasm for life and creativity.',
    interests: [
      'Art & Design',
      'Hiking',
      'Coffee',
      'Photography',
      'Travel',
      'Yoga',
      'Reading',
      'Cooking'
    ],
    photos: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400'
    ],
    lookingFor: ['Long-term relationship', 'Age 27-35', 'Within 10 miles']
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-50 to-white relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Profile Header */}
        <div className="relative mb-20">
          <div className="h-64 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-30" />
          </div>
          <div className="absolute -bottom-16 left-8 border-4 border-white rounded-2xl shadow-2xl overflow-hidden group">
            <div className="relative">
              <img
                src={profile.photos[0]}
                alt={profile.name}
                className="w-36 h-36 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute bottom-2 right-2 p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
                <Camera className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="flex justify-end mb-12 px-6">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <Edit2 className="w-5 h-5 mr-2" />
            {isEditing ? 'Save Profile' : 'Edit Profile'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                {profile.name}, {profile.age}
              </h1>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                  {profile.location}
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-3 text-blue-500" />
                  {profile.occupation}
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-3 text-blue-500" />
                  {profile.education}
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
            </div>

            {/* Photos */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Photos</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {profile.photos.map((photo, index) => (
                  <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
                    <img
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {isEditing && (
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-white hover:text-red-500 transition-colors">
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <button className="aspect-square rounded-2xl border-3 border-dashed border-blue-200 flex items-center justify-center text-blue-400 hover:text-blue-500 hover:border-blue-300 hover:bg-blue-50/50 transition-all">
                    <Plus className="w-10 h-10" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Interests */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {interest}
                  </span>
                ))}
                {isEditing && (
                  <button className="px-4 py-2 border-2 border-dashed border-blue-200 rounded-xl text-sm text-blue-400 hover:text-blue-500 hover:border-blue-300 hover:bg-blue-50/50 transition-all">
                    Add Interest
                  </button>
                )}
              </div>
            </div>

            {/* Looking For */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Looking For</h2>
              <div className="space-y-4">
                {profile.lookingFor.map((item, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <Heart className="w-5 h-5 mr-3 text-pink-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Completion */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Strength</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-600">85% Complete</span>
                  <span className="text-blue-600">Strong</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500" 
                    style={{ width: '85%' }} 
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Add more photos to increase your profile strength
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 