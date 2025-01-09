import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import Link from "next/link";

interface DownloadCTAProps {
  className?: string;
  size?: "default" | "sm" | "lg";
  showText?: boolean;
  centered?: boolean;
  variant?: "default" | "white";
}

export function DownloadCTA({ className = "", size = "default", showText = true, centered = false, variant = "default" }: DownloadCTAProps) {
  return (
    <div className={`flex ${centered ? 'justify-center' : ''} items-center gap-2 ${className}`}>
      <Link href="https://apps.apple.com/gb/app/slush-video-date/id1590373700?itscg=30200&itsct=apps_box_link&mttnsubad=1590373700" target="_blank" rel="noopener noreferrer">
        <Button size={size} className={`flex items-center gap-1 ${variant === "white" ? "bg-white text-blue-600 hover:bg-white/90" : "bg-blue-500 hover:bg-blue-600"}`}>
          <Apple className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
          {showText && <span className="hidden lg:inline">Download for</span>} iOS
        </Button>
      </Link>
      <Link href="https://play.google.com/store/apps/details?id=com.slushdating.slush&pli=1" target="_blank" rel="noopener noreferrer">
        <Button size={size} className="flex items-center gap-1">
          <Play className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
          {showText && <span className="hidden lg:inline">Download for</span>} Android
        </Button>
      </Link>
    </div>
  );
} 