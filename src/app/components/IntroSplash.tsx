'use client';

import { motion } from 'framer-motion';
import {
  BarChart,
  Activity,
  BrainCircuit,
  Cpu,
  Camera,
  Video,
  GitBranch,
  MousePointer2
} from 'lucide-react';

export default function IntroSplash() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden z-[100] bg-gradient-to-b from-[#F5F8FC] to-[#EDF2F8]">
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1B365D 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Floating Blurred Gradient Blobs */}
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-blue-300/30 blur-[120px] rounded-full mix-blend-multiply pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-sky-300/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none"
      />

      {/* Glowing Dots */}
      <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_20px_4px_rgba(37,99,235,0.5)] animate-pulse" />
      <div className="absolute bottom-[25%] left-[20%] w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_15px_3px_rgba(99,102,241,0.5)] animate-pulse delay-75" />
      <div className="absolute top-[30%] right-[25%] w-2.5 h-2.5 bg-sky-500 rounded-full shadow-[0_0_15px_3px_rgba(14,165,233,0.5)] animate-pulse delay-150" />
      <div className="absolute bottom-[15%] right-[15%] w-3.5 h-3.5 bg-emerald-500 rounded-full shadow-[0_0_20px_4px_rgba(16,185,129,0.5)] animate-pulse delay-300" />

      {/* Header fade in from top */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-12 left-0 right-0 text-center z-10"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#3182CE] font-semibold">
          Welcome to my digital space
        </span>
      </motion.div>

      {/* Main Center Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative border-2 border-white/90 bg-white/40 backdrop-blur-xl rounded-2xl p-12 md:p-24 shadow-[0_15px_30px_rgba(100,116,139,0.12)] max-w-[90vw]"
      >
        {/* Corner Squares */}
        <div className="absolute -top-[9px] -left-[9px] w-3.5 h-3.5 bg-white border border-blue-400" />
        <div className="absolute -top-[9px] -right-[9px] w-3.5 h-3.5 bg-white border border-blue-400" />
        <div className="absolute -bottom-[9px] -left-[9px] w-3.5 h-3.5 bg-white border border-blue-400" />
        <div className="absolute -bottom-[9px] -right-[9px] w-3.5 h-3.5 bg-white border border-blue-400" />

        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter"
        >
          MY PORTFOLIO
        </motion.h1>

        {/* Cursor SVG icon */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -bottom-10 -left-6 text-blue-600 drop-shadow-md"
        >
          <MousePointer2 className="w-12 h-12 fill-blue-600" />
        </motion.div>

        {/* Floating roles card at bottom right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
          className="absolute -bottom-12 -right-8 bg-white border border-slate-200 rounded-xl p-4 shadow-lg"
        >
          <ul className="text-sm font-medium text-slate-700 space-y-1 text-right">
            <li>Full Stack Developer</li>
            <li>Photographer & Videographer</li>
            <li>BSI Scholar</li>
            <li>Biology Education Student</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Floating Info Cards (Hidden on mobile) */}
      <div className="hidden md:flex absolute inset-0 pointer-events-none">
        {/* Top Right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
          className="absolute top-[15%] right-[10%] bg-white/60 backdrop-blur-md border border-white/80 p-4 rounded-xl shadow-sm flex items-center gap-3"
        >
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><BarChart className="w-5 h-5" /></div>
          <div>
            <p className="text-sm font-bold text-slate-800">Web Development</p>
            <p className="text-xs text-slate-500">Full Stack</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
          className="absolute top-[28%] right-[15%] bg-white/60 backdrop-blur-md border border-white/80 px-4 py-2 rounded-full shadow-sm flex items-center gap-2"
        >
          <Activity className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-bold text-slate-700">IPK: 3.68/4.00</span>
        </motion.div>

        {/* Middle Right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
          className="absolute top-[50%] right-[8%] bg-white/60 backdrop-blur-md border border-white/80 p-4 rounded-xl shadow-sm flex items-center gap-3"
        >
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Video className="w-5 h-5" /></div>
          <div>
            <p className="text-sm font-bold text-slate-800">Video Production</p>
            <p className="text-xs text-slate-500">Adobe & CapCut</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}
          className="absolute bottom-[20%] right-[12%] bg-white/60 backdrop-blur-md border border-white/80 px-4 py-2 rounded-full shadow-sm flex items-center gap-2"
        >
          <GitBranch className="w-4 h-4 text-[#3182CE]" />
          <span className="text-xs font-bold text-slate-700">PostgreSQL & Prisma</span>
        </motion.div>

        {/* Bottom Left */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
          className="absolute bottom-[25%] left-[10%] bg-white/60 backdrop-blur-md border border-white/80 p-4 rounded-xl shadow-sm flex items-center gap-3"
        >
          <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><BrainCircuit className="w-5 h-5" /></div>
          <div>
            <p className="text-sm font-bold text-slate-800">Biology Education</p>
            <p className="text-xs text-slate-500">EdTech & Innovation</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
          className="absolute bottom-[40%] left-[15%] bg-white/60 backdrop-blur-md border border-white/80 px-4 py-2 rounded-full shadow-sm flex items-center gap-2"
        >
          <Cpu className="w-4 h-4 text-[#3182CE]" />
          <span className="text-xs font-bold text-slate-700">Next.js & React</span>
        </motion.div>

        {/* Middle Left */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
          className="absolute top-[45%] left-[8%] bg-white/60 backdrop-blur-md border border-white/80 p-4 rounded-xl shadow-sm flex items-center gap-3"
        >
          <div className="p-2 bg-sky-100 rounded-lg text-sky-600"><Camera className="w-5 h-5" /></div>
          <div>
            <p className="text-sm font-bold text-slate-800">Photography</p>
            <p className="text-xs text-slate-500">Digital & Event</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Pill */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 bg-white border border-slate-200 px-6 py-3 rounded-full shadow-md z-10"
      >
        <p className="text-sm text-slate-600">
          Presented by <span className="font-bold text-slate-900">Dede Ahmad Fauzy</span>
        </p>
      </motion.div>
    </div>
  );
}
