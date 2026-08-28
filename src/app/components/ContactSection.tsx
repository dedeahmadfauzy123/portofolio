'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, ExternalLink, MapPin } from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dedeahmadfauzy2@gmail.com',
    href: 'mailto:dedeahmadfauzy2@gmail.com',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '085861199094',
    href: 'tel:085861199094',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'Dede Ahmad Fauzy',
    href: 'https://www.linkedin.com/in/dede-ahmad-fauzy/',
    gradient: 'from-indigo-500 to-blue-600',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Yogyakarta, Indonesia',
    href: undefined,
    gradient: 'from-sky-500 to-blue-500',
  },
]

export default function ContactSection() {
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
          className="text-center mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#3182CE] font-semibold mb-3 block">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B365D] mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-[#1B365D]/70 max-w-xl mx-auto">
            Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactItems.map((item, i) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 shadow-[0_10px_25px_rgba(100,116,139,0.1)] hover:shadow-xl transition-all hover:scale-105 text-center group"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#3182CE] font-semibold mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-[#1B365D] break-all">{item.value}</p>
              </motion.div>
            )

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {CardContent}
                </a>
              )
            }

            return <div key={item.label}>{CardContent}</div>
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-8 sm:p-12 shadow-[0_15px_30px_rgba(100,116,139,0.12)] text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#1B365D] mb-3">
            Open for Collaboration &amp; Opportunities
          </h3>
          <p className="text-[#1B365D]/70 max-w-lg mx-auto mb-6">
            Saya selalu terbuka untuk diskusi mengenai proyek baru, peluang kolaborasi,
            atau kesempatan untuk berkontribusi dalam bidang pendidikan dan teknologi.
          </p>
          <a
            href="mailto:dedeahmadfauzy2@gmail.com"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#1B365D] px-8 font-semibold text-white transition-all hover:bg-[#2C5282] shadow-lg hover:shadow-xl"
          >
            <Mail className="w-4 h-4 mr-2" />
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </div>
  )
}
