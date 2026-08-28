'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Layers, ImageIcon, Film, Video, Crown, Users, Mic, Clock, Lightbulb, MessageSquare } from 'lucide-react'
import Image from 'next/image'

const categories = [
  {
    title: 'Web Development',
    gradient: 'from-blue-700 to-cyan-600',
    skills: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    title: 'Database & DevTools',
    gradient: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  },
]

const designSkills = [
  { name: 'Canva', icon: Palette },
  { name: 'CorelDRAW', icon: Layers },
  { name: 'Photoshop', icon: ImageIcon },
  { name: 'Premiere Pro', icon: Film },
  { name: 'CapCut', icon: Video },
]

const softSkills = [
  { name: 'Leadership', icon: Crown },
  { name: 'Team Work', icon: Users },
  { name: 'Public Speaking', icon: Mic },
  { name: 'Time Management', icon: Clock },
  { name: 'Creativity', icon: Lightbulb },
  { name: 'Communication', icon: MessageSquare },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="py-24 bg-[#F5F8FC]">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#3182CE] font-semibold mb-3 block">
            TOOLS & SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B365D]">
            My Tech Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Web Dev & Database Cards (with devicon images) */}
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * catIdx }}
              className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 shadow-[0_15px_30px_rgba(100,116,139,0.12)] hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.gradient} flex items-center justify-center shadow-md`}>
                  <span className="text-white text-lg font-bold">{cat.title[0]}</span>
                </div>
                <h3 className="text-base font-bold text-[#1B365D]">{cat.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/50 hover:bg-white/80 transition-colors hover:scale-105 transform duration-200">
                    <div className="w-10 h-10 relative">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-[#1B365D] text-center uppercase tracking-wider">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Design & Multimedia */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 shadow-[0_15px_30px_rgba(100,116,139,0.12)] hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center shadow-md">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-[#1B365D]">Design & Multimedia</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {designSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/50 hover:bg-white/80 transition-colors hover:scale-105 transform duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-sky-100 to-blue-100 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-[#3182CE]" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-[#1B365D] text-center uppercase tracking-wider">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 shadow-[0_15px_30px_rgba(100,116,139,0.12)] hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-md">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-[#1B365D]">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {softSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/50 hover:bg-white/80 transition-colors hover:scale-105 transform duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-50 to-orange-50 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-[#1B365D] text-center uppercase tracking-wider">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
