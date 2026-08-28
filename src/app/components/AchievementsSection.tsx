'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Trophy, Medal, BookOpen, Mic, BookMarked } from 'lucide-react'

const achievements = [
  {
    title: 'Juara 1 Lomba Fotografi',
    org: 'GENETIK IKAHIMBI',
    year: '2023',
    icon: Trophy,
    accent: 'border-t-amber-400',
    iconBg: 'from-amber-400 to-yellow-500',
    badge: '🥇 Gold',
  },
  {
    title: 'Juara 2 Lomba Fotografi',
    org: 'Guardinest IKAHIMBI',
    year: '2025',
    icon: Medal,
    accent: 'border-t-slate-400',
    iconBg: 'from-slate-400 to-gray-500',
    badge: '🥈 Silver',
  },
  {
    title: 'Juara 3 Lomba Videografi',
    org: 'GenBI Universitas Galuh',
    year: '2022',
    icon: Award,
    accent: 'border-t-amber-700',
    iconBg: 'from-amber-700 to-orange-700',
    badge: '🥉 Bronze',
  },
  {
    title: 'HKI: Buku Panduan Tanaman Lokal',
    org: 'EC002026133240',
    year: '2026',
    description: 'Buku Panduan Pengenalan Tanaman Lokal Konsumsi untuk Mendukung Ketahanan Pangan Masyarakat',
    icon: BookOpen,
    accent: 'border-t-blue-400',
    iconBg: 'from-blue-500 to-cyan-500',
    badge: '📖 HKI',
  },
  {
    title: 'Narasumber BSI Scholarship',
    org: 'BSI Scholarship Inspirasi',
    year: '2026',
    description: 'Tema: "Mengenal Mimpi, Menghadapi Ketakutan, dan Menemukan Kekuatan Diri"',
    icon: Mic,
    accent: 'border-t-emerald-400',
    iconBg: 'from-emerald-500 to-teal-500',
    badge: '🎤 Speaker',
  },
  {
    title: 'Tim Editor Buku',
    org: 'Buku "Pemikiran Islam"',
    year: '2025',
    icon: BookMarked,
    accent: 'border-t-indigo-400',
    iconBg: 'from-indigo-500 to-purple-500',
    badge: '📚 Editorial',
  },
]

export default function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            ACHIEVEMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B365D]">
            Awards &amp; Recognition
          </h2>
        </motion.div>

        {/* Featured - BSI Scholarship */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 relative overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#1B365D] to-[#3182CE] rounded-2xl p-8 sm:p-10 text-white relative">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-200 mb-2 block">
                  Scholarship · 2024 – Sekarang
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Awardee BSI Scholarship Inspirasi Batch 4
                </h3>
                <p className="text-white/80 leading-relaxed max-w-2xl">
                  Penerima beasiswa BSI Scholarship Inspirasi Batch 4 atas prestasi dan kontribusi
                  dalam bidang pendidikan, kepemimpinan organisasi, dan pengembangan diri.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 shadow-[0_10px_25px_rgba(100,116,139,0.1)] border-t-4 ${ach.accent} hover:shadow-xl transition-all hover:scale-[1.02]`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${ach.iconBg} flex items-center justify-center shadow-md`}>
                  <ach.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#EDF2F8] text-[#1B365D] font-semibold">
                  {ach.badge}
                </span>
              </div>

              <h3 className="text-sm font-bold text-[#1B365D] mb-1">{ach.title}</h3>
              <p className="text-xs text-[#4A7FB5] font-medium mb-1">{ach.org}</p>
              <span className="text-[10px] font-mono text-[#3182CE] font-semibold">{ach.year}</span>

              {ach.description && (
                <p className="text-xs text-[#1B365D]/60 mt-3 leading-relaxed">{ach.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
