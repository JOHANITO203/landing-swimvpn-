import React from 'react';
import { motion } from 'motion/react';
import { HeroSection } from './HeroSection';
import { TrustStrip } from './TrustStrip';
import { FeatureGrid } from './FeatureGrid';
import { HowItWorks } from './HowItWorks';
import { WhySwimVPN } from './WhySwimVPN';
import { DownloadSection } from './DownloadSection';
import { Footer } from './Footer';

const LandingPage = () => {
  return (
    <div className="bg-[#05070A] min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-6 md:py-6 flex justify-center pointer-events-none">
        <div className="w-full max-w-7xl px-4 py-3 md:px-6 md:py-3 bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl flex justify-between items-center pointer-events-auto shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2">
             <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-black italic text-base md:text-lg">S</span>
             </div>
             <span className="text-white font-black tracking-tighter text-xl md:text-2xl italic hidden xs:block">SWIMVPN+</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
              <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
              <a href="#download-apk" className="hover:text-cyan-400 transition-colors">Protocol</a>
              <a href="#download-apk" className="hover:text-cyan-400 transition-colors">Download</a>
            </div>
            <a 
              href="#download-apk" 
              className="px-4 py-2 md:px-6 md:py-2.5 bg-white text-black text-[10px] md:text-xs font-black rounded-lg md:rounded-xl hover:bg-cyan-50 transition-all uppercase tracking-tighter shadow-xl shadow-white/5"
            >
              GET APK
            </a>
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <TrustStrip />
        <FeatureGrid />
        <HowItWorks />
        <WhySwimVPN />
        <DownloadSection />
        
        {/* Final CTA */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">READY TO CONNECT?</h2>
          <p className="text-slate-400 mb-10 text-lg">Start with one tap. No setup required.</p>
          <motion.a
            href="#download-apk"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-black font-black text-xl rounded-2xl inline-block hover:bg-cyan-50 transition-all uppercase tracking-tight shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            DOWNLOAD APK
          </motion.a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
