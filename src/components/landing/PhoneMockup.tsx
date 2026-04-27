import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Lock } from 'lucide-react';

export const PhoneMockup = () => {
  return (
    <div className="relative w-64 h-[520px] mx-auto bg-slate-950 border-[6px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden shadow-cyan-500/10">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
      
      {/* Inner Screen */}
      <div className="relative h-full w-full bg-[#05070A] p-6 flex flex-col items-center justify-between pt-12">
        <div className="w-full flex justify-between items-center bg-white/5 p-3 rounded-2xl border border-white/5">
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-md" />
             <span className="text-[10px] font-black italic text-white">SWIMVPN+</span>
           </div>
           <div className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">v2.4.0</div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-8">
           <motion.div 
             animate={{ scale: [1, 1.05, 1] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="w-32 h-32 rounded-full border-4 border-cyan-500/20 flex items-center justify-center relative"
           >
             <div className="absolute inset-0 bg-cyan-400/5 rounded-full animate-pulse" />
             <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/40">
                <Shield className="text-white" size={32} />
             </div>
           </motion.div>
           
           <div className="text-center">
             <h4 className="text-white font-bold text-lg mb-1">PROTECTED</h4>
             <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Encryption Active</p>
           </div>
        </div>

        <div className="w-full space-y-3">
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-yellow-400" />
              <span className="text-[10px] text-slate-400 font-medium">Latency: 24ms</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-emerald-400" />
              <span className="text-[10px] text-slate-400 font-medium">Secure</span>
            </div>
          </div>
          <button className="w-full py-4 bg-white text-black font-black text-xs rounded-2xl uppercase tracking-widest">
            DISCONNECT
          </button>
        </div>
      </div>
    </div>
  );
};
