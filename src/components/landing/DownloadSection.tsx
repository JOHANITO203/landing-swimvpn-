import React from 'react';
import { motion } from 'motion/react';
import { Download, Smartphone } from 'lucide-react';

export const DownloadSection = () => {
  return (
    <section id="download-apk" className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-blue-600/10 blur-[160px] rounded-full" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-slate-900/60 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-3xl overflow-hidden relative">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #00E5FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-center"
          >
            <div className="bg-cyan-500/20 p-6 rounded-full inline-block">
              <Download className="text-cyan-400" size={48} />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic">
            Download SwimVPN+ APK
          </h2>
          
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 font-medium">
            Install the Android app and connect in seconds. Built for speed, privacy, and absolute freedom on any network.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-black text-xl rounded-2xl flex items-center gap-3 shadow-[0_0_40px_rgba(37,99,255,0.4)]"
            >
              <Download size={24} />
              DOWNLOAD APK
            </motion.button>
            
            <div className="flex items-center gap-4 text-slate-500 text-sm font-bold tracking-widest uppercase">
              <span className="flex items-center gap-1.5"><Smartphone size={16} /> Android APK</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full" />
              <span>Instant Install</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full" />
              <span>Version 2.4.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
