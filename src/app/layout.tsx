import type { Metadata } from 'next'
import { Poppins, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Dede Ahmad Fauzy — Full Stack Developer & Biology Education',
  description:
    'Mahasiswa Pendidikan Biologi UIN Sunan Kalijaga Yogyakarta. Full Stack Developer, Photographer, Video Editor, dan BSI Scholar.',
  keywords:
    'Full Stack Developer, Biology Education, Next.js, React, TypeScript, Photography, Videography, Yogyakarta',
  openGraph: {
    title: 'Dede Ahmad Fauzy — Full Stack Developer & Biology Education',
    description:
      'Building digital experiences through code, education, and creative media.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Dede Ahmad Fauzy — Full Stack Developer & Biology Education',
    description:
      'Building digital experiences through code, education, and creative media.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
