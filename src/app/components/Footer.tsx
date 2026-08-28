export default function Footer() {
  return (
    <footer className="relative z-20">
      {/* Gradient Top Border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400" />

      <div className="bg-[#1B365D] py-8">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center text-center">
          <p className="text-sm text-white/80">
            © 2026 Dede Ahmad Fauzy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
