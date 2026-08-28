import IntroSplash from './components/IntroSplash'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MarqueeStrip from './components/MarqueeStrip'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import AchievementsSection from './components/AchievementsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#EDF2F8] overflow-x-hidden">
      <IntroSplash />

      <section id="hero" className="relative z-20">
        <HeroSection />
      </section>

      <div className="relative z-20 -mt-12 pb-6 bg-[#EDF2F8]">
        <MarqueeStrip />
      </div>

      <section id="about" className="relative z-20">
        <AboutSection />
      </section>

      <section id="tools-skills" className="relative z-20">
        <SkillsSection />
      </section>

      <section id="projects" className="relative z-20">
        <ProjectsSection />
      </section>

      <section id="experience" className="relative z-20">
        <ExperienceSection />
      </section>

      <section id="achievements" className="relative z-20">
        <AchievementsSection />
      </section>

      <section id="contact" className="relative z-20">
        <ContactSection />
      </section>

      <Footer />

      <Navbar />
    </main>
  )
}
