'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Download } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const marqueeKeywords = [
    'Full Stack Dev', 'Biology Education', 'Photography', 'Videography',
    'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Public Speaking',
    'Leadership', 'BSI Scholar', 'EdTech', 'Digital Media', 'Adobe Premiere',
  ]

  const MarqueeBar = () => (
    <div className="w-full overflow-hidden bg-transparent py-4">
      <div
        className="relative overflow-hidden border-y border-[#1B365D]/10 py-3 bg-transparent"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="marquee-track flex w-max items-center gap-8">
          {[...marqueeKeywords, ...marqueeKeywords].map((keyword, i) => (
            <span
              key={i}
              className="flex items-center gap-8 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.12em] text-[#1B365D] font-semibold"
            >
              {keyword}
              <span className="text-[#4A7FB5]" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden z-20 bg-[#EDF2F8]">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-100">
        <div className="w-full h-full min-h-screen opacity-70" />
      </div>

      {/* Top Marquee */}
      <div className="absolute top-0 left-0 w-full z-20">
        <MarqueeBar />
      </div>

      {/* Main Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pt-36 pb-24 lg:grid-cols-12 w-full my-auto overflow-visible pointer-events-none"
      >
        {/* Left Column */}
        <div className="relative flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left justify-center overflow-visible pointer-events-auto p-2 sm:p-4 rounded-3xl">
          {/* Backdrop blur for readability */}
          <div
            className="absolute -inset-6 sm:-inset-10 rounded-[4rem] pointer-events-none -z-10 backdrop-blur-[8px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(237,242,248,0.92) 20%, rgba(237,242,248,0.65) 60%, rgba(237,242,248,0) 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 100%)',
            }}
          />

          <div className="flex flex-col items-center lg:items-start space-y-6 w-full">
            {/* Badge */}
            <div
              className="inline-flex items-center rounded-full border border-[#1B365D]/20 px-4 py-1.5 text-xs font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.9)] bg-[#1B365D] text-white"
            >
              Available for Projects &amp; Collaboration
            </div>

            {/* Name */}
            <h1
              className="font-display italic font-medium text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.1] text-[#1B365D]"
              style={{
                textShadow: '0 0 20px rgba(255,255,255,0.95), 0 0 35px rgba(255,255,255,0.8), 0 2px 10px rgba(255,255,255,1)',
              }}
            >
              Hi, I&apos;m Dede <br />Ahmad Fauzy
            </h1>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Pendidikan Biologi', 'Full Stack Developer', 'BSI Scholar'].map((role) => (
                <span
                  key={role}
                  className="text-xs px-3.5 py-1.5 bg-[#1B365D] text-white font-medium rounded-full shadow-[0_2px_12px_rgba(255,255,255,0.8)]"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className="max-w-2xl text-base text-[#1B365D] md:text-lg font-medium leading-relaxed"
              style={{
                textShadow: '0 0 14px rgba(255,255,255,0.95), 0 0 28px rgba(255,255,255,0.7)',
              }}
            >
              Mahasiswa S1 Pendidikan Biologi UIN Sunan Kalijaga Yogyakarta.
              Passionate about educational technology, web development, and creative digital media.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 lg:justify-start relative z-30">
              <a
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1B365D] px-6 font-semibold text-white transition-all hover:bg-[#2C5282] pointer-events-auto shadow-[0_4px_20px_rgba(255,255,255,0.85)] hover:shadow-xl"
                href="#projects"
              >
                View Work
                <ArrowRight className="ml-2 h-4 w-4 text-white" aria-hidden="true" />
              </a>
              <a
                href="/Dede_Ahmad_Fauzy_CV.pdf"
                download="Dede_Ahmad_Fauzy_CV.pdf"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[#1B365D] bg-white px-6 font-semibold text-[#1B365D] transition-all hover:bg-gray-100 cursor-pointer pointer-events-auto shadow-[0_4px_20px_rgba(255,255,255,0.85)] hover:shadow-xl"
              >
                Download CV
                <Download className="ml-2 h-4 w-4 text-[#1B365D]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Photo */}
        <div className="relative lg:col-span-5 w-full flex items-center justify-center pointer-events-auto">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl p-1 bg-gradient-to-tr from-[#1B365D]/30 via-[#4A7FB5]/30 to-[#5B9BD5]/30 shadow-xl backdrop-blur-md border border-[#1B365D]/10">
            <div className="w-full h-full rounded-xl overflow-hidden bg-white relative">
              {/* Placeholder - replace with actual photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-sky-100 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#1B365D]/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#1B365D]/30">D</span>
                  </div>
                  <p className="text-sm text-[#1B365D]/40 font-medium">Photo Placeholder</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#5B9BD5] to-[#4A7FB5] opacity-15 blur-xl -z-10" />
          </div>
        </div>
      </motion.div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <MarqueeBar />
      </div>
    </section>
  )
}
