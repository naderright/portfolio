'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import EducationSection from '@/components/EducationSection'
import ExperienceSection from '@/components/ExperienceSection'
import ServicesSection from '@/components/ServicesSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const { language } = useLanguage()
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-dark transition-colors duration-200">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
} 