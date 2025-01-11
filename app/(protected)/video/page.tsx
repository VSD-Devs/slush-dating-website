'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Heart, MessageCircle, Share2, Music2, Volume2, VolumeX, Sparkles, ChevronUp, ChevronDown, Zap } from 'lucide-react';
import Image from 'next/image';

const TEST_VIDEOS = [
  {
    id: 1,
    creator: "Sarah Johnson",
    creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    videoUrl: "",
    thumbnailUrl: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=800&auto=format&fit=crop&q=60",
    description: "Hey everyone! Here's my quick intro 👋 Looking forward to meeting new people! #SingleLife #Dating",
    likes: 156,
    comments: 23,
    isLiked: false,
    songName: "Perfect - Ed Sheeran",
    tags: ["#SingleLife", "#Dating", "#NewYork"],
    location: "New York, NY"
  },
  {
    id: 2,
    creator: "Dating Coach Mike",
    creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    videoUrl: "",
    thumbnailUrl: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=60",
    description: "Top 3 first date tips that actually work! 💫 #DatingTips #Relationships",
    likes: 245,
    comments: 42,
    isLiked: false,
    songName: "Can't Help Falling in Love - Elvis Presley",
    tags: ["#DatingTips", "#Relationships", "#Dating101"],
    location: "Los Angeles, CA"
  },
  {
    id: 3,
    creator: "Amy & David",
    creatorAvatar: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    videoUrl: "",
    thumbnailUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60",
    description: "Our success story! From matching online to getting married 💑 #LoveStory #Success",
    likes: 489,
    comments: 67,
    isLiked: false,
    songName: "All of Me - John Legend",
    tags: ["#LoveStory", "#Success", "#Relationship"],
    location: "Chicago, IL"
  },
];

interface Video {
  id: number;
  creator: string;
  creatorAvatar: string;
  videoUrl: string;
  thumbnailUrl: string;
  description: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  songName?: string;
  tags?: string[];
  location?: string;
}

export default function VideoFeedPage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoError, setIsVideoError] = useState(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});
  const [videos, setVideos] = useState<Video[]>(TEST_VIDEOS);
  const [bufferedVideos, setBufferedVideos] = useState<Set<number>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const preloadedUrls = useRef<Set<string>>(new Set());
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [slideDirection, setSlideDirection] = useState<'up' | 'down' | null>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Optimize preloading strategy - only preload adjacent videos
  const preloadVideo = useCallback(async (index: number) => {
    if (
      index >= 0 && 
      index < videos.length && 
      !preloadedUrls.current.has(videos[index].videoUrl) &&
      Math.abs(index - currentVideoIndex) <= 1
    ) {
      try {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.playsInline = true;
        video.muted = true;

        preloadedUrls.current.add(videos[index].videoUrl);

        const loadPromise = new Promise((resolve, reject) => {
          video.onloadedmetadata = () => {
            setBufferedVideos(prev => new Set(prev).add(index));
            resolve(video);
          };
          video.onerror = () => {
            preloadedUrls.current.delete(videos[index].videoUrl);
            reject(new Error(`Failed to load video ${index}`));
          };
        });

        video.src = videos[index].videoUrl;
        
        await loadPromise;
        videoRefs.current[index] = video;
      } catch (error) {
        console.error(`Error preloading video ${index}:`, error);
        setIsVideoError(true);
      }
    }
  }, [currentVideoIndex, videos]);

  // Optimize preloading effect - reduce range and cleanup aggressively
  useEffect(() => {
    // Only preload one video before and after
    const preloadPromises = [];
    
    // Preload current video
    preloadPromises.push(preloadVideo(currentVideoIndex));
    
    // Preload next video only
    if (currentVideoIndex + 1 < videos.length) {
      preloadPromises.push(preloadVideo(currentVideoIndex + 1));
    }
    
    // Preload previous video only
    if (currentVideoIndex - 1 >= 0) {
      preloadPromises.push(preloadVideo(currentVideoIndex - 1));
    }

    Promise.all(preloadPromises).catch(console.error);

    // Aggressive cleanup of old videos
    return () => {
      Object.keys(videoRefs.current).forEach(key => {
        const index = parseInt(key);
        if (Math.abs(index - currentVideoIndex) > 1) {
          const video = videoRefs.current[index];
          if (video) {
            video.src = ''; // Clear source
            video.load(); // Force browser to release resources
          }
          delete videoRefs.current[index];
          preloadedUrls.current.delete(videos[index].videoUrl);
          setBufferedVideos(prev => {
            const next = new Set(prev);
            next.delete(index);
            return next;
          });
        }
      });
    };
  }, [currentVideoIndex, preloadVideo, videos]);

  // Update handleVideoChange to include slide direction
  const handleVideoChange = useCallback((direction: 'up' | 'down') => {
    const nextIndex = direction === 'up' 
      ? Math.max(0, currentVideoIndex - 1)
      : Math.min(videos.length - 1, currentVideoIndex + 1);

    if (nextIndex !== currentVideoIndex) {
      setSlideDirection(direction);
      setIsTransitioning(true);
      setIsLoading(true);

      // Ensure next video is ready
      const nextVideo = videoRefs.current[nextIndex];
      if (nextVideo) {
        // Prepare next video
        nextVideo.currentTime = 0;
        nextVideo.muted = isMuted;
        
        // Start playing next video before transition
        const playPromise = nextVideo.play();
        if (playPromise) {
          playPromise
            .then(() => {
              setCurrentVideoIndex(nextIndex);
              setIsLoading(false);
            })
            .catch(error => {
              console.error('Error playing next video:', error);
              setIsVideoError(true);
              setIsLoading(false);
            })
            .finally(() => {
              setTimeout(() => {
                setIsTransitioning(false);
                setSlideDirection(null);
              }, 300);
            });
        }
      } else {
        // Fallback if video isn't preloaded
        setCurrentVideoIndex(nextIndex);
        setIsLoading(false);
        setTimeout(() => {
          setIsTransitioning(false);
          setSlideDirection(null);
        }, 300);
      }
    }
  }, [currentVideoIndex, isMuted, videos.length]);

  // Optimize video playback
  useEffect(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo && !isTransitioning) {
      setIsLoading(true);
      setIsVideoError(false);

      // Optimize video settings
      currentVideo.preload = 'auto';
      currentVideo.playbackRate = 1.0;
      currentVideo.volume = 0;

      const playPromise = currentVideo.play();
      if (playPromise) {
        playPromise
          .then(() => {
            setIsLoading(false);
            // Pause other videos to save resources
            Object.entries(videoRefs.current).forEach(([index, video]) => {
              if (parseInt(index) !== currentVideoIndex && !video.paused) {
                video.pause();
              }
            });
          })
          .catch(error => {
            console.error('Error playing video:', error);
            setIsVideoError(true);
            setIsLoading(false);
          });
      }
    }

    // Cleanup function
    return () => {
      if (currentVideo) {
        currentVideo.pause();
      }
    };
  }, [currentVideoIndex, isTransitioning]);

  const handleLike = (videoId: number) => {
    setVideos((prevVideos: Video[]) => prevVideos.map((video: Video) => {
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

  // Debounced scroll handler
  const handleScroll = useCallback((e: WheelEvent | TouchEvent) => {
    e.preventDefault();
    
    if (isScrollLocked || isTransitioning) return;

    // Clear any existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Determine direction and check threshold
    if (e instanceof WheelEvent) {
      const scrollThreshold = 50; // Increased threshold for more intentional scrolls
      if (Math.abs(e.deltaY) < scrollThreshold) return;
      
      // Lock scrolling temporarily
      setIsScrollLocked(true);

      // Slight delay before transition
      setTimeout(() => {
        const direction: 'up' | 'down' = e.deltaY > 0 ? 'down' : 'up';
        handleVideoChange(direction);
      }, 100);

      // Unlock scrolling after animation completes
      scrollTimeout.current = setTimeout(() => {
        setIsScrollLocked(false);
      }, 500);
    }
  }, [isScrollLocked, isTransitioning, handleVideoChange]);

  // Enhanced touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isScrollLocked || isTransitioning) return;
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isScrollLocked || isTransitioning) return;
    
    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart - touchEnd;
    const minSwipeDistance = 100; // Increased from 50 to 100 for more intentional swipes

    if (Math.abs(diff) > minSwipeDistance) {
      // Lock scrolling temporarily
      setIsScrollLocked(true);

      // Slight delay before transition
      setTimeout(() => {
        handleVideoChange(diff > 0 ? 'down' : 'up');
      }, 100);

      // Unlock scrolling after animation completes
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrollLocked(false);
      }, 400);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Add debug logging
  useEffect(() => {
    console.log('Current video URL:', videos[currentVideoIndex].videoUrl);
    console.log('Video refs:', videoRefs.current);
  }, [currentVideoIndex, videos]);

  return (
    <div className="h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse animation-delay-4000" />
      </div>

      {/* Video Container */}
      <div 
        ref={videoContainerRef}
        className="h-full w-full max-w-3xl mx-auto relative"
        onWheel={(e) => {
          e.preventDefault();
          handleScroll(e.nativeEvent);
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {/* Video Player with optimized attributes */}
            <div 
              className={`relative w-full h-full transition-all duration-300 ease-in-out transform
                ${isTransitioning && slideDirection === 'up' ? 'translate-y-full opacity-0 scale-95' : ''}
                ${isTransitioning && slideDirection === 'down' ? '-translate-y-full opacity-0 scale-95' : ''}
                ${!isTransitioning ? 'translate-y-0 opacity-100 scale-100' : ''}
              `}
            >
              <video
                key={videos[currentVideoIndex].id}
                ref={el => {
                  if (el) {
                    videoRefs.current[currentVideoIndex] = el;
                  }
                }}
                src={videos[currentVideoIndex].videoUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                controls={false}
                preload="metadata"
                onError={(e) => {
                  console.error('Video error:', e);
                  setIsVideoError(true);
                }}
                onLoadedData={() => {
                  console.log('Video loaded');
                  setIsLoading(false);
                }}
                style={{ minHeight: '100%' }}
              />

              {/* Content Overlay with Transition Effects */}
              <div 
                className={`absolute inset-0 transition-all duration-300 ease-in-out transform
                  ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                `}
              >
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

                {/* Video Controls */}
                <div className={`absolute top-0 left-0 right-0 p-6 flex items-center justify-between transition-all duration-300 transform
                  ${isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}
                `}>
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-3 rounded-2xl bg-black/30 backdrop-blur-sm text-white transition-all hover:bg-black/50 hover:scale-105 active:scale-95 group"
                  >
                    {isMuted ? 
                      <VolumeX className="w-6 h-6 group-hover:text-blue-400 transition-colors" /> : 
                      <Volume2 className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                    }
                  </button>

                  {videos[currentVideoIndex].location && (
                    <div className="px-4 py-2 rounded-xl bg-black/30 backdrop-blur-sm text-white/90 text-sm flex items-center">
                      <span className="mr-2">📍</span>
                      {videos[currentVideoIndex].location}
                    </div>
                  )}
                </div>

                {/* Video Info Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 transform
                  ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
                `}>
                  <div className="flex items-start justify-between">
                    {/* Creator Info and Description */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="relative group cursor-pointer">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity blur animate-pulse"></div>
                          <div className="relative w-14 h-14">
                            <Image
                              src={videos[currentVideoIndex].creatorAvatar}
                              alt={videos[currentVideoIndex].creator}
                              fill
                              className="rounded-full border-2 border-white hover:scale-105 transition-transform object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg hover:text-blue-400 cursor-pointer transition-colors group">
                            {videos[currentVideoIndex].creator}
                            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
                          </h3>
                          {videos[currentVideoIndex].songName && (
                            <div className="flex items-center text-sm text-white/90 mt-1">
                              <span className="truncate">{videos[currentVideoIndex].songName}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="ml-[4.5rem] space-y-2">
                        <p className="text-sm text-white/90">
                          {videos[currentVideoIndex].description}
                        </p>
                        {videos[currentVideoIndex].tags && (
                          <div className="flex flex-wrap gap-2">
                            {videos[currentVideoIndex].tags.map((tag, index) => (
                              <span 
                                key={index}
                                className="text-sm text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Slush Dating Action Buttons */}
                    <div className="flex flex-col items-center space-y-4">
                      {/* Super Like (Spark) Button */}
                      <button
                        onClick={() => handleLike(videos[currentVideoIndex].id)}
                        className="group relative"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition-opacity"></div>
                        <div className="relative p-4 rounded-2xl bg-black/30 backdrop-blur-sm group-hover:bg-black/50 transition-all border border-white/10">
                          <Zap className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transform transition-all group-hover:scale-110 group-hover:rotate-12" />
                        </div>
                      </button>

                      {/* Like Button */}
                      <button
                        onClick={() => handleLike(videos[currentVideoIndex].id)}
                        className="group"
                      >
                        <div 
                          className={`p-4 rounded-2xl backdrop-blur-sm transform transition-all ${
                            videos[currentVideoIndex].isLiked 
                              ? 'bg-gradient-to-r from-pink-500 to-rose-500 scale-110' 
                              : 'bg-black/30 group-hover:bg-black/50'
                          }`}
                        >
                          <Heart
                            className={`w-8 h-8 transform transition-transform group-hover:scale-110 ${
                              videos[currentVideoIndex].isLiked ? 'fill-white' : ''
                            }`}
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loading indicator */}
            {(isLoading || isTransitioning) && !isVideoError && !bufferedVideos.has(currentVideoIndex) && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-500/30 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Hints with Transition Effects */}
      <div className={`absolute inset-y-0 right-8 flex flex-col items-center justify-center space-y-4 text-white/70 transition-all duration-300 transform
        ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}
      `}>
        <button 
          onClick={() => handleVideoChange('up')}
          className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all group"
          disabled={currentVideoIndex === 0}
        >
          <ChevronUp className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
        </button>
        <div className="text-center space-y-1">
          <span className="block text-sm font-medium">{currentVideoIndex + 1}</span>
          <div className="w-px h-8 bg-white/20 mx-auto"></div>
          <span className="block text-sm font-medium">{videos.length}</span>
        </div>
        <button 
          onClick={() => handleVideoChange('down')}
          className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all group"
          disabled={currentVideoIndex === videos.length - 1}
        >
          <ChevronDown className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
        </button>
      </div>
    </div>
  );
} 