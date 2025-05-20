'use client'

import { motion } from 'framer-motion'
import { AllSkills } from '@/data/index'
import { useLanguage } from '@/context/LanguageContext'

export default function SkillsSection() {
  const { language } = useLanguage()

  return (
    <section id="skills" className="container py-20 bg-gray-50 dark:bg-dark-lighter transition-colors duration-200">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-200">
        {language === "en" ? "Skills" : "المهارات"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AllSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-900 dark:text-white transition-colors duration-200">{skill.name}</span>
              <span className="text-primary">{skill.percent}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 transition-colors duration-200 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.percent }}
                transition={{ 
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="h-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-gradient"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 