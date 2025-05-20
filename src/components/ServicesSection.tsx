'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { services } from '@/data/index'
import { useLanguage } from '@/context/LanguageContext'

export default function ServicesSection() {
  const { language } = useLanguage()

  return (
    <section id="services" className="container py-20 bg-gray-50 dark:bg-dark-lighter transition-colors duration-200">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-200">
        {language === 'en' ? 'Services' : 'الخدمات'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={service.icon}
                alt={language === 'en' ? service.name_en : service.name_ar}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-200">
              {language === 'en' ? service.name_en : service.name_ar}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
              {language === 'en' ? service.description_en : service.description_ar}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 