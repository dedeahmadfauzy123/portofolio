'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, FolderOpen, GraduationCap, Trophy, BookOpen, Globe } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: Users, label: 'Organizations', value: '6+', color: 'from-blue-600 to-cyan-500' },
    { icon: FolderOpen, label: 'Programs', value: '50+', color: 'from-emerald-500 to-teal-500' },
    { icon: GraduationCap, label: 'Students Guided', value: '112', color: 'from-sky-500 to-blue-500' },
    { icon: Trophy, label: 'Competitions Won', value: '3', color: 'from-amber-500 to-orange-500' },
  ]

  const education = [
    {
      school: 'UIN Sunan Kalijaga Yogyakarta',
      degree: 'S1 Pendidikan Biologi',
      year: '2023 – 2027',
      gpa: '3.68/4.00',
      gpaPercent: 92,
    },
    {
      school: 'SMA Plus Informatika Ciamis',
      degree: 'Ilmu Pengetahuan Alam (IPA)',
      year: '2020 – 2023',
    },
    {
      school: 'MTsN 5 Ciamis',
      degree: '',
      year: '2017 – 2020',
    },
  ]

  return (
    <div className="py-24 bg-[#EDF2F8]">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#3182CE] font-semibold mb-3 block">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B365D]">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-8 shadow-[0_15px_30px_rgba(100,116,139,0.12)]">
              <p className="text-[#1B365D] leading-relaxed mb-4">
                Mahasiswa S1 Pendidikan Biologi Universitas Islam Negeri Sunan Kalijaga Yogyakarta
                dengan pengalaman dalam kepemimpinan organisasi, teknologi pendidikan,
                pengembangan website, media digital, multimedia, dan public speaking.
              </p>
              <p className="text-[#1B365D]/80 leading-relaxed">
                Penerima BSI Scholarship Inspirasi Batch 4 dengan pengalaman memimpin lebih
                dari 40 pengurus organisasi, mengoordinasikan 50+ program kerja, dan membimbing
                112 mahasiswa dalam praktikum.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-5 shadow-[0_10px_25px_rgba(100,116,139,0.1)] hover:scale-105 transition-transform"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${stat.color} flex items-center justify-center mb-3`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-[#1B365D]">{stat.value}</p>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4A7FB5] font-semibold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-8 shadow-[0_15px_30px_rgba(100,116,139,0.12)]">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-cyan-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1B365D]">Education</h3>
              </div>

              {/* Education Entries */}
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className={i < education.length - 1 ? 'pb-6 border-b border-[#1B365D]/10' : ''}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-[#1B365D] text-sm">{edu.school}</h4>
                        {edu.degree && (
                          <p className="text-xs text-[#4A7FB5] font-medium mt-0.5">{edu.degree}</p>
                        )}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#3182CE] font-semibold whitespace-nowrap bg-blue-50 px-2 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    {edu.gpa && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono text-[#1B365D] font-semibold">
                            IPK: {edu.gpa}
                          </span>
                          <span className="text-xs font-mono text-[#3182CE] font-bold">{edu.gpaPercent}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#EDF2F8] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${edu.gpaPercent}%` } : {}}
                            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-[#1B365D] to-[#3182CE]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-8 pt-6 border-t border-[#1B365D]/10">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-4 h-4 text-[#3182CE]" />
                  <span className="text-sm font-semibold text-[#1B365D]">Languages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1.5 bg-[#1B365D] text-white rounded-full font-medium flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3" /> Bahasa Indonesia
                    <span className="text-white/60">— Natif</span>
                  </span>
                  <span className="text-xs px-3 py-1.5 bg-white border border-[#1B365D]/20 text-[#1B365D] rounded-full font-medium flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3" /> English
                    <span className="text-[#4A7FB5]">— Menengah</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
