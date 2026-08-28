'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code, Video, Camera, FlaskConical, Monitor, Crown, FileText, Radio, ImageIcon } from 'lucide-react'

const professionalExp = [
  {
    title: 'Full Stack Developer',
    org: 'Website Interaktif Materi Virus',
    year: '2026 – Sekarang',
    desc: 'Mengembangkan website pembelajaran interaktif pada materi Virus untuk siswa kelas X SMA/MA.',
    tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    icon: Code,
    color: 'from-blue-700 to-cyan-600',
  },
  {
    title: 'Video Editor',
    org: 'Harian Umum Harapan Rakyat',
    year: '2021 – 2023',
    desc: 'Mengedit lebih dari 100 video berita menggunakan Adobe Premiere Pro dan CapCut.',
    tech: ['Premiere Pro', 'CapCut'],
    icon: Video,
    color: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Fotografer Freelance',
    org: 'Freelance Photography',
    year: '2023 – Sekarang',
    desc: 'Fotografi freelance untuk dokumentasi wisuda, event, dan berbagai kegiatan.',
    tech: ['Photoshop', 'Lightroom'],
    icon: Camera,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Asisten Praktikum Mikrobiologi',
    org: 'UIN Sunan Kalijaga',
    year: '2026',
    desc: 'Membimbing 112 mahasiswa selama pelaksanaan praktikum mikrobiologi.',
    tech: [],
    icon: FlaskConical,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'IT Support',
    org: 'ICRSE Conference',
    year: '2023 – 2025',
    desc: 'Mendukung kebutuhan teknis dan teknologi informasi konferensi internasional.',
    tech: [],
    icon: Monitor,
    color: 'from-indigo-500 to-purple-600',
  },
]

const orgExp = [
  {
    title: 'Ketua',
    org: 'HMPS Pendidikan Biologi',
    year: '2024 – 2025',
    desc: 'Memimpin 40 pengurus, mengoordinasikan 50+ program kerja, menyelenggarakan BIOTIK IX.',
    tech: [],
    icon: Crown,
    color: 'from-blue-700 to-cyan-600',
  },
  {
    title: 'Sekretaris',
    org: 'HMPS Pendidikan Biologi',
    year: '2023 – 2024',
    desc: 'Mengelola administrasi organisasi, surat-menyurat, dan dokumentasi kegiatan.',
    tech: [],
    icon: FileText,
    color: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Ketua Divisi Kominfo',
    org: 'FOREST',
    year: '2025 – 2026',
    desc: 'Memimpin 4 anggota divisi dalam komunikasi dan publikasi organisasi.',
    tech: [],
    icon: Radio,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Tim Media',
    org: 'BOM MKV',
    year: '2023 – 2025',
    desc: 'Produksi konten media, fotografi, videografi, desain, dan publikasi digital.',
    tech: [],
    icon: ImageIcon,
    color: 'from-amber-500 to-orange-600',
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'professional' | 'organization'>('professional')

  const experiences = activeTab === 'professional' ? professionalExp : orgExp

  return (
    <div className="py-24 bg-[#F5F8FC]">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#3182CE] font-semibold mb-3 block">
            EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B365D] mb-8">
            My Journey
          </h2>

          {/* Tabs */}
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === 'professional'
                  ? 'bg-[#1B365D] text-white shadow-lg'
                  : 'bg-white/60 text-[#1B365D] border border-[#1B365D]/20 hover:bg-white/80'
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setActiveTab('organization')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === 'organization'
                  ? 'bg-[#1B365D] text-white shadow-lg'
                  : 'bg-white/60 text-[#1B365D] border border-[#1B365D]/20 hover:bg-white/80'
              }`}
            >
              Organization
            </button>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-12">
          {/* Timeline Line */}
          <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3182CE] via-[#63B3ED] to-[#90CDF4]" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-8 sm:-left-12 top-6 w-6 h-6 sm:w-10 sm:h-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-tr ${exp.color} flex items-center justify-center shadow-md`}>
                    <exp.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 shadow-[0_10px_25px_rgba(100,116,139,0.1)] hover:shadow-xl transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base font-bold text-[#1B365D]">{exp.title}</h3>
                      <p className="text-sm text-[#4A7FB5] font-medium">{exp.org}</p>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#3182CE] font-semibold bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#1B365D]/70 leading-relaxed">{exp.desc}</p>
                  {exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono px-2.5 py-1 rounded-full bg-[#EDF2F8] text-[#1B365D] font-semibold border border-[#1B365D]/10 uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
