'use client';

import { useState } from 'react';
import { Search, Heart, MoreHorizontal, Send, Image as ImageIcon, Smile, Check, Clock } from 'lucide-react';

interface ChatUser {
  id: number;
  name: string;
  avatar: string;
  age: number;
  lastMessage: string;
  lastMessageTime: string;
  isOnline: boolean;
  unreadCount?: number;
  matchDate: string;
  interests: string[];
}

interface Message {
  id: number;
  senderId: number;
  text: string;
  time: string;
  status: 'sent' | 'delivered' | 'read';
}

export default function ChatPage() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(1);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const users: ChatUser[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      lastMessage: "Looking forward to the coffee meetup! ☕️",
      lastMessageTime: "2m ago",
      isOnline: true,
      matchDate: "Matched 3 days ago",
      interests: ["Coffee", "Art", "Hiking"]
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 31,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      lastMessage: "That's great! Which museum do you recommend?",
      lastMessageTime: "1h ago",
      isOnline: true,
      unreadCount: 3,
      matchDate: "Matched 1 week ago",
      interests: ["Museums", "Photography", "Travel"]
    },
    {
      id: 3,
      name: "Emma Wilson",
      age: 26,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      lastMessage: "Had such a great time at the event!",
      lastMessageTime: "2h ago",
      isOnline: false,
      matchDate: "Matched 2 weeks ago",
      interests: ["Music", "Dancing", "Food"]
    },
  ];

  const messages: Message[] = [
    {
      id: 1,
      senderId: 1,
      text: "Hi! I noticed we both love coffee and art. Have you been to the new gallery downtown?",
      time: "10:30 AM",
      status: 'read'
    },
    {
      id: 2,
      senderId: 0, // current user
      text: "Hey Sarah! Yes, I was there last weekend. The modern art exhibition was amazing! Would you like to check it out together?",
      time: "10:32 AM",
      status: 'read'
    },
    {
      id: 3,
      senderId: 1,
      text: "That sounds perfect! I'm free this Saturday afternoon. Maybe we could grab coffee after?",
      time: "10:35 AM",
      status: 'read'
    },
    {
      id: 4,
      senderId: 0,
      text: "Looking forward to the coffee meetup! ☕️",
      time: "10:36 AM",
      status: 'delivered'
    },
  ];

  const selectedUser = users.find(user => user.id === selectedUserId);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // TODO: Implement message sending
      setMessage('');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-50 to-white relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="flex h-[calc(100vh-4rem)] max-w-7xl mx-auto relative">
        {/* Users List */}
        <div className="w-96 bg-white/80 backdrop-blur-sm border-r border-gray-200/50 shadow-lg">
          {/* Search */}
          <div className="p-6 border-b border-gray-200/50">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search matches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-200/50 transition-all"
              />
            </div>
          </div>

          {/* Users */}
          <div className="overflow-y-auto h-full pb-4">
            {users.map(user => (
              <button
                key={user.id}
                onClick={() => setSelectedUserId(user.id)}
                className={`w-full p-6 flex items-start gap-4 hover:bg-white/50 transition-all ${
                  selectedUserId === user.id ? 'bg-gradient-to-r from-blue-50 to-indigo-50/50 border-l-4 border-blue-500' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white shadow-md"
                  />
                  {user.isOnline && (
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm" />
                  )}
                </div>
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{user.name}, {user.age}</h3>
                      <p className="text-xs text-blue-600 font-medium">{user.matchDate}</p>
                    </div>
                    <span className="text-xs text-gray-500">{user.lastMessageTime}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-1">{user.lastMessage}</p>
                  {user.unreadCount && (
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-full mt-2 shadow-md">
                      {user.unreadCount}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        {selectedUser ? (
          <div className="flex-1 flex flex-col bg-white/80 backdrop-blur-sm">
            {/* Chat Header */}
            <div className="p-6 border-b border-gray-200/50 flex items-center justify-between bg-white/50">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white shadow-md"
                  />
                  {selectedUser.isOnline && (
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm" />
                  )}
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">
                    {selectedUser.name}, {selectedUser.age}
                  </h2>
                  <div className="flex gap-2 mt-2">
                    {selectedUser.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-xl text-xs font-medium shadow-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-3 hover:bg-white rounded-xl transition-all hover:shadow-md active:scale-95">
                  <Heart className="w-6 h-6 text-gray-500" />
                </button>
                <button className="p-3 hover:bg-white rounded-xl transition-all hover:shadow-md active:scale-95">
                  <MoreHorizontal className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.senderId === 0 ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] ${msg.senderId === 0 ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`rounded-3xl px-6 py-3 shadow-md ${
                        msg.senderId === 0
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none'
                          : 'bg-white text-gray-900 rounded-bl-none'
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                    <div className={`flex items-center gap-1 mt-2 text-xs text-gray-500 ${
                      msg.senderId === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      {msg.time}
                      {msg.senderId === 0 && (
                        <span className="ml-1">
                          {msg.status === 'read' ? (
                            <Check className="w-4 h-4 text-blue-500" />
                          ) : (
                            <Clock className="w-4 h-4" />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-6 border-t border-gray-200/50 bg-white/50">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="p-3 hover:bg-gray-100 rounded-xl transition-all"
                >
                  <ImageIcon className="w-6 h-6 text-gray-500" />
                </button>
                <button
                  type="button"
                  className="p-3 hover:bg-gray-100 rounded-xl transition-all"
                >
                  <Smile className="w-6 h-6 text-gray-500" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-6 py-3 bg-white rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-200/50"
                />
                <button
                  type="submit"
                  className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!message.trim()}
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Select a Match</h2>
              <p className="text-gray-500">Choose someone to start chatting with</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 