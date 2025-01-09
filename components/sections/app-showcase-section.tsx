import Image from "next/image";
import { Sparkles, Star, Phone, Video } from "lucide-react";

export function AppShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 py-20 md:py-32 hidden md:block">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
      <div className="absolute left-0 top-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      
      {/* Floating decorative elements */}
      <div className="absolute left-10 top-20 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform -rotate-6 animate-float hidden md:block">
        <Video className="w-6 h-6 text-white" />
      </div>
      <div className="absolute right-20 top-40 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform rotate-12 animate-float-slow hidden md:block">
        <Star className="w-6 h-6 text-yellow-300" />
      </div>
      <div className="absolute left-1/4 bottom-20 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform -rotate-12 animate-float hidden md:block">
        <Phone className="w-6 h-6 text-white" />
      </div>
      <div className="absolute right-1/4 bottom-40 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform rotate-6 animate-float-slow hidden md:block">
        <Sparkles className="w-6 h-6 text-yellow-300" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-blue-100 font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
            Connect Through Video
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Video Date with Like-Minded Singles
          </h2>
          <p className="text-xl text-blue-50/90 max-w-3xl mx-auto">
            Experience meaningful connections through our innovative video dating platform
          </p>
        </div>
        
        <div className="max-w-[1600px] mx-auto">
          <div className="relative w-full" style={{ paddingTop: '42%' }}>
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-sm">
              {/* Glass effect border */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 z-20" />
              {/* Inner shadow */}
              <div className="absolute inset-0 rounded-3xl shadow-inner-xl z-10" />
              <Image
                src="/images/Video Date with Like-Minded Singles.png"
                alt="App Screenshots Showcase"
                fill
                className="object-contain scale-[1.35] hover:scale-[1.37] transition-transform duration-500"
                priority
                quality={100}
                sizes="(max-width: 1600px) 100vw, 1600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 