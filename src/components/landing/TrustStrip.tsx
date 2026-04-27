import React from 'react';

export const TrustStrip = () => {
  const BADGES = [
    "One-tap connection",
    "Instant activation",
    "Smart network adaptation",
    "Encrypted traffic"
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-slate-900/20 backdrop-blur-sm px-6">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {BADGES.map((badge, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-400 font-bold tracking-tight uppercase text-sm">{badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
