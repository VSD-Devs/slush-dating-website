"use client";

import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white font-medium text-sm">
      {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  );
} 