import React from 'react';
import { motion } from 'motion/react';

const STEPS = [
  { id: "01", title: "Download the APK", text: "Secure the latest version directly." },
  { id: "02", title: "Open SwimVPN+", text: "Instant installation on Android." },
  { id: "03", title: "Tap Connect", text: "One click to bypass restrictions." },
  { id: "04", title: "Stay Connected", text: "Automatic smart reconnection." }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-[#05070A]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 tracking-tighter">
          CONNECT IN SECONDS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-8xl font-black text-white/5 absolute -top-10 -left-4 group-hover:text-cyan-500/10 transition-colors pointer-events-none">
                {step.id}
              </div>
              <div className="relative z-10 pt-10">
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-slate-500">{step.text}</p>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-[60%] -right-4 w-8 h-px bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
