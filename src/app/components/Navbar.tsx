'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  User,
  Cpu,
  BarChart3,
  Briefcase,
  Award,
  Send,
  Menu,
  X
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling past intro height roughly
      if (window.scrollY > window.innerHeight * 0.8) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: Sparkles, href: '#hero' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Skills', icon: Cpu, href: '#tools-skills' },
    { name: 'Projects', icon: BarChart3, href: '#projects' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Achievements', icon: Award, href: '#achievements' },
    { name: 'Contact', icon: Send, href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-[200] px-3 sm:px-6 pt-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl sm:rounded-full bg-slate-950/40 backdrop-blur-xl border border-white/20 p-2 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)]">
              
              {/* Glow Effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-blue-500/20 blur-3xl pointer-events-none" />
              
              {/* Top highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-full pointer-events-none" />

              <div className="flex items-center justify-between px-2">
                
                {/* Logo & Status */}
                <div className="flex items-center gap-3">
                  <a href="#home" className="text-xl font-extrabold tracking-widest text-white flex items-baseline">
                    DEDE<span className="w-1.5 h-1.5 bg-[#3182CE] rounded-full animate-pulse ml-0.5" />
                  </a>
                  <div className="hidden sm:flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full border border-white/10">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-white/70">Available</span>
                  </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = active === link.name;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setActive(link.name)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                          isActive 
                            ? 'bg-white/10 text-white shadow-inner' 
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{link.name}</span>
                      </a>
                    );
                  })}
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                  className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

              {/* Mobile Menu Panel */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden lg:hidden"
                  >
                    <div className="flex flex-col gap-1 mt-4 p-2 border-t border-white/10">
                      {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = active === link.name;
                        return (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={() => {
                              setActive(link.name);
                              setMobileMenuOpen(false);
                            }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                              isActive 
                                ? 'bg-white/10 text-white' 
                                : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{link.name}</span>
                          </a>
                        );
                      })}
                      
                      {/* Mobile Status */}
                      <div className="flex items-center gap-2 px-4 py-3 mt-2 bg-white/5 rounded-xl border border-white/10 w-fit">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-xs uppercase font-mono tracking-wider text-white/70">Available for work</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
