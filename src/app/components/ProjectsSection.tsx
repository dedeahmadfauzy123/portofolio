'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const techPills = ['Next.js', 'React', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS', 'shadcn/ui']

const features = [
  'Sistem autentikasi pengguna',
  'Kuis interaktif & flashcard',
  'Forum diskusi real-time',
  'Leaderboard & progress tracking',
]

const smallProjects = [
  {
    title: 'Video Production',
    badge: 'Media · Editorial',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    description: 'Mengedit lebih dari 100 video berita untuk Harian Umum Harapan Rakyat menggunakan Adobe Premiere Pro dan CapCut.',
    tech: ['Adobe Premiere Pro', 'CapCut', 'Color Correction'],
  },
  {
    title: 'Event Photography',
    badge: 'Photography · Freelance',
    image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=800&auto=format&fit=crop',
    description: 'Fotografi freelance untuk dokumentasi wisuda, event kampus, dan berbagai kegiatan. Juara 1 Lomba Fotografi GENETIK IKAHIMBI.',
    tech: ['Adobe Photoshop', 'Lightroom', 'Event Coverage'],
  },
]

export default function ProjectsSection() {
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
            PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B365D]">
            Featured Work
          </h2>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl shadow-[0_15px_30px_rgba(100,116,139,0.12)] overflow-hidden mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto min-h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Website Interaktif Materi Virus"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B365D]/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-[#1B365D] text-white px-3 py-1 rounded-full">
                  Full Stack · R&amp;D
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1B365D] mb-3">
                Website Interaktif Materi Virus
              </h3>
              <p className="text-[#1B365D]/80 mb-6 leading-relaxed">
                Website pembelajaran interaktif pada materi Virus untuk siswa kelas X SMA/MA
                sebagai bagian dari penelitian Research and Development (R&amp;D).
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm text-[#1B365D]/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-3 py-1.5 rounded-full bg-[#EDF2F8] text-[#1B365D] font-semibold border border-[#1B365D]/10 uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {smallProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl shadow-[0_15px_30px_rgba(100,116,139,0.12)] overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-[#1B365D] text-white px-3 py-1 rounded-full">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1B365D] mb-2">{project.title}</h3>
                <p className="text-sm text-[#1B365D]/70 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-2.5 py-1 rounded-full bg-[#EDF2F8] text-[#1B365D] font-semibold border border-[#1B365D]/10 uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
