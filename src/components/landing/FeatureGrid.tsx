import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Globe, Lock, Signal, Gauge } from 'lucide-react';

const FEATURES = [
  {
    title: "Always Connected",
    text: "Automatically keeps your connection stable when networks become unreliable.",
    icon: Signal,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    title: "Access Anywhere",
    text: "Reach the content you need, even when access is restricted.",
    icon: Globe,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Fast Performance",
    text: "Optimized routes help keep browsing and streaming smooth.",
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  },
  {
    title: "Secure Traffic",
    text: "Your traffic is encrypted and protected while you stay connected.",
    icon: Lock,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    title: "Advanced Obfuscation",
    text: "Your connection blends into normal traffic to reduce blocking.",
    icon: Shield,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10"
  },
  {
    title: "Smart Connection",
    text: "SwimVPN+ adapts automatically without manual configuration.",
    icon: Gauge,
    color: "text-rose-400",
    bg: "bg-rose-400/10"
  }
];

export const FeatureGrid = () => {
  return (
    <section id="features" className="py-24 px-6 bg-[#070B10]">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            BUILT FOR THE FUTURE
          </h2>
          <p className="text-slate-400 text-lg">
            Experience security and performance without compromise. Designed for the most demanding network environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, borderColor: 'rgba(0, 229, 255, 0.3)' }}
              className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className={feature.color} size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
