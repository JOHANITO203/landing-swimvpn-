import React from 'react';
import { motion } from 'motion/react';
import { Download, ChevronRight } from 'lucide-react';
import InteractivePixelGlobe from './InteractivePixelGlobe';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-40 pb-20 px-6 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 border border-cyan-500/20 bg-cyan-500/5 rounded-full overflow-hidden"
          >
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Next-Gen VPN Technology
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
            ACCESS BLOCKED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">CONTENT.</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            SwimVPN+ keeps you connected automatically, even on restricted or unstable networks. No drops. No setup.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.a
              href="#download-apk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              <Download size={20} />
              Download APK
            </motion.a>
            
            <a
              href="#features"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              See how it works
              <ChevronRight size={18} />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative order-first lg:order-last h-[400px] md:h-[600px] lg:h-[800px] flex items-center justify-center lg:translate-x-0 lg:translate-y-20"
        >
          <InteractivePixelGlobe />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1"
      >
        <div className="w-1.5 h-3 bg-cyan-400 rounded-full" />
      </motion.div>
    </section>
  );
};
