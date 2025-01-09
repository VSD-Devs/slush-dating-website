'use client';

import { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, Share2, Music2, Volume2, VolumeX } from 'lucide-react';

interface Video {
  id: number;
  creator: string;
  creatorAvatar: string;
  videoUrl: string;
  description: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  songName?: string;
}

export default function VideoFeedPage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});
  
  const [videos, setVideos] = useState<Video[]>([
    {
      id: 1,
      creator: "Sarah Johnson",
      creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      videoUrl: "https://example.com/video1.mp4", // Replace with actual video URLs
      description: "Hey everyone! Here's my quick intro 👋 Looking forward to meeting new people! #SingleLife #Dating",
      likes: 156,
      comments: 23,
      isLiked: false,
      songName: "Perfect - Ed Sheeran"
    },
    {
      id: 2,
      creator: "Dating Coach Mike",
      creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      videoUrl: "https://example.com/video2.mp4",
      description: "Top 3 first date tips that actually work! 💫 #DatingTips #Relationships",
      likes: 245,
      comments: 42,
      isLiked: false,
      songName: "Can't Help Falling in Love - Elvis Presley"
    },
    {
      id: 3,
      creator: "Amy & David",
      creatorAvatar: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      videoUrl: "https://example.com/video3.mp4",
      description: "Our success story! From matching online to getting married 💑 #LoveStory #Success",
      likes: 489,
      comments: 67,
      isLiked: false,
      songName: "All of Me - John Legend"
    },
  ]);

  // Preload videos
  useEffect(() => {
    const preloadVideo = (index: number) => {
      if (index >= 0 && index < videos.length && !videoRefs.current[index]) {
        const video = document.createElement('video');
        video.src = videos[index].videoUrl;
        video.preload = 'auto';
        videoRefs.current[index] = video;
      }
    };

    // Preload current, next, and previous videos
    preloadVideo(currentVideoIndex - 1);
    preloadVideo(currentVideoIndex);
    preloadVideo(currentVideoIndex + 1);

    // Cleanup old video references
    Object.keys(videoRefs.current).forEach(key => {
      const index = parseInt(key);
      if (index < currentVideoIndex - 1 || index > currentVideoIndex + 1) {
        delete videoRefs.current[index];
      }
    });
  }, [currentVideoIndex, videos]);

  // Handle video transitions
  useEffect(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      currentVideo.play().catch(console.error);
      setIsLoading(false);
    }
  }, [currentVideoIndex]);

  const handleLike = (videoId: number) => {
    setVideos(videos.map(video => {
      if (video.id === videoId) {
        return {
          ...video,
          likes: video.isLiked ? video.likes - 1 : video.likes + 1,
          isLiked: !video.isLiked
        };
      }
      return video;
    }));
  };

  const handleVideoChange = (direction: 'up' | 'down') => {
    setIsLoading(true);
    setCurrentVideoIndex(prev => {
      if (direction === 'up' && prev > 0) return prev - 1;
      if (direction === 'down' && prev < videos.length - 1) return prev + 1;
      return prev;
    });
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      handleVideoChange(diff > 0 ? 'down' : 'up');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-900 to-black relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Video Container */}
      <div 
        className="relative h-full w-full max-w-3xl mx-auto"
        onWheel={(e) => handleVideoChange(e.deltaY > 0 ? 'down' : 'up')}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Video Player */}
          <div className="relative w-full h-full bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
            <video
              key={videos[currentVideoIndex].id}
              ref={el => el && (videoRefs.current[currentVideoIndex] = el)}
              src={videos[currentVideoIndex].videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />

            {/* Loading Indicator */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-ping" />
                  <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                </div>
              </div>
            )}

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

            {/* Video Controls */}
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-6 left-6 p-3 rounded-2xl bg-black/30 backdrop-blur-sm text-white transition-all hover:bg-black/50 hover:scale-105 active:scale-95"
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-start justify-between">
                {/* Creator Info and Description */}
                <div className="flex-1 mr-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity blur"></div>
                      <img
                        src={videos[currentVideoIndex].creatorAvatar}
                        alt={videos[currentVideoIndex].creator}
                        className="relative w-14 h-14 rounded-full border-2 border-white hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg hover:text-blue-400 cursor-pointer transition-colors">
                        {videos[currentVideoIndex].creator}
                      </h3>
                      {videos[currentVideoIndex].songName && (
                        <div className="flex items-center text-sm text-white/90 mt-1">
                          <Music2 className="w-4 h-4 mr-2" />
                          <span className="truncate">{videos[currentVideoIndex].songName}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-white/90 ml-[4.5rem]">
                    {videos[currentVideoIndex].description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col items-center space-y-8">
                  <button
                    onClick={() => handleLike(videos[currentVideoIndex].id)}
                    className="group flex flex-col items-center"
                  >
                    <div 
                      className={`p-4 rounded-2xl backdrop-blur-sm transform transition-all ${
                        videos[currentVideoIndex].isLiked 
                          ? 'bg-gradient-to-r from-pink-500 to-rose-500 scale-110 shadow-lg shadow-pink-500/25' 
                          : 'bg-black/30 group-hover:bg-black/50'
                      }`}
                    >
                      <Heart
                        className={`w-8 h-8 transform transition-transform group-hover:scale-110 ${
                          videos[currentVideoIndex].isLiked ? 'fill-white' : ''
                        }`}
                      />
                    </div>
                    <span className="text-sm mt-2 font-medium">
                      {videos[currentVideoIndex].likes.toLocaleString()}
                    </span>
                  </button>

                  <button className="group flex flex-col items-center">
                    <div className="p-4 rounded-2xl bg-black/30 backdrop-blur-sm group-hover:bg-black/50 transition-all">
                      <MessageCircle className="w-8 h-8 transform transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-sm mt-2 font-medium">
                      {videos[currentVideoIndex].comments.toLocaleString()}
                    </span>
                  </button>

                  <button className="group flex flex-col items-center">
                    <div className="p-4 rounded-2xl bg-black/30 backdrop-blur-sm group-hover:bg-black/50 transition-all">
                      <Share2 className="w-8 h-8 transform transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-sm mt-2 font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Button */}
      <button className="absolute top-6 right-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all font-medium shadow-lg flex items-center gap-2 backdrop-blur-sm">
        <span className="relative flex h-3 w-3 mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        Upload Video
      </button>

      {/* Navigation Hints */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none text-white/50 text-sm font-medium space-y-40">
        <div className="animate-bounce">Swipe up for next video</div>
        <div className="animate-bounce">Swipe down for previous video</div>
      </div>
    </div>
  );
} 