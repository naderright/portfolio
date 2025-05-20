'use client'

import { motion } from 'framer-motion'
import { HeroTitle } from '@/data/index'
import { useLanguage } from '@/context/LanguageContext'

export default function HeroSection() {
  const { language } = useLanguage()

  return (
    <section className="container py-20 bg-white dark:bg-dark transition-colors duration-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-200">
          {language === 'en' ? HeroTitle.title.en : HeroTitle.title.ar}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-200">
          {language === 'en' ? HeroTitle.description.en : HeroTitle.description.ar}
        </p>
        <div className="flex justify-center gap-4">
          <a href="/cv.pdf" className="btn btn-primary bg-primary text-white hover:bg-primary/90 transition-colors duration-200">
            {language === 'en' ? HeroTitle.buttons.CV.en : HeroTitle.buttons.CV.ar}
          </a>
          <a href="#contact" className="btn border border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white transition-colors duration-200">
            {language === 'en' ? HeroTitle.buttons.contact.en : HeroTitle.buttons.contact.ar}
          </a>
        </div>
      </motion.div>
    </section>
  )
} 