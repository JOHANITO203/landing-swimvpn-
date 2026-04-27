import React from 'react';
import { PhoneMockup } from './PhoneMockup';

export const WhySwimVPN = () => {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-gradient-to-b from-transparent to-blue-900/10 overflow-hidden text-center lg:text-left">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase italic">
            Built for real <br /> 
            <span className="text-cyan-400">Network Conditions</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mb-12 leading-relaxed">
            Traditional VPNs often fail when networks become restricted or unstable. 
            SwimVPN+ is designed to adapt automatically and keep the experience simple.
          </p>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 font-bold tracking-widest text-[10px] uppercase">
               <div className="flex flex-col items-center gap-2">
                 <span className="text-slate-500">Origin</span>
                 <span className="text-white px-6 py-3 bg-white/5 rounded-2xl border border-white/10 w-40 text-center">Your Device</span>
               </div>
               <div className="h-px w-12 bg-cyan-500/30 hidden sm:block mt-4" />
               <div className="flex flex-col items-center gap-2">
                 <span className="text-cyan-400">Protocol</span>
                 <span className="text-cyan-400 px-6 py-3 border border-cyan-400/20 bg-cyan-400/5 rounded-2xl w-40 text-center animate-pulse">Smart Tunnel</span>
               </div>
               <div className="h-px w-12 bg-cyan-500/30 hidden sm:block mt-4" />
               <div className="flex flex-col items-center gap-2">
                 <span className="text-slate-500">Result</span>
                 <span className="text-white px-6 py-3 bg-white/5 rounded-2xl border border-white/10 w-40 text-center">Clean Access</span>
               </div>
            </div>
            <p className="text-slate-500 text-sm italic mt-4">
              * SwimVPN+ uses advanced obfuscation to make your traffic look like standard encrypted data.
            </p>
          </div>
        </div>
        
        <div className="relative">
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/20 blur-[100px] rounded-full pointer-events-none" />
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};
