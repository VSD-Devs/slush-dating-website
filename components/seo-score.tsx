"use client";

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface SeoScore {
  title: boolean;
  excerpt: boolean;
  content: boolean;
  headings: boolean;
  links: boolean;
  image: boolean;
}

interface SeoScoreProps {
  score: SeoScore;
}

export function SeoScore({ score }: SeoScoreProps) {
  const calculateSeoPercentage = () => {
    const scores = Object.values(score);
    const achieved = scores.filter(Boolean).length;
    return Math.round((achieved / scores.length) * 100);
  };

  return (
    <div className="fixed right-8 top-32 w-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">SEO Score</h3>
          <span className="text-2xl font-bold text-blue-600">{calculateSeoPercentage()}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${calculateSeoPercentage()}%` }}
          />
        </div>
      </div>
      <div className="p-4 space-y-3">
        {Object.entries(score).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between text-sm">
            <span className="capitalize text-gray-600">{key}</span>
            {value ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 