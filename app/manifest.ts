import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Slush Dating',
    short_name: 'Slush',
    description: 'Video Dating App for Meaningful Connections',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3B82F6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    screenshots: [
      {
        src: '/screenshots/video-dating.jpg',
        sizes: '1280x720',
        type: 'image/jpeg'
      },
      {
        src: '/screenshots/events.jpg',
        sizes: '1280x720',
        type: 'image/jpeg'
      }
    ],
    categories: ['dating', 'social', 'lifestyle'],
    prefer_related_applications: true,
    related_applications: [
      {
        platform: 'play',
        url: 'https://play.google.com/store/apps/details?id=com.slushdating.app',
        id: 'com.slushdating.app'
      },
      {
        platform: 'itunes',
        url: 'https://apps.apple.com/app/slush-dating/id123456789'
      }
    ]
  }
} 