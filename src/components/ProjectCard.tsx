'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

interface ProjectCardProps {
  title: string
  title_ar: string
  description: string
  description_ar: string
  image: string
  technologies: string[]
  technologies_ar: string[]
  liveUrl: string
  githubUrl: string
}

export default function ProjectCard({
  title,
  title_ar,
  description,
  description_ar,
  image,
  technologies,
  technologies_ar,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isRTL ? 50 : -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: isRTL ? 20 : -20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const techVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: isRTL ? 20 : -20 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white dark:bg-dark rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <motion.div 
        className="relative h-48 w-full overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={image}
          alt={language === 'en' ? title : title_ar}
          fill
          className="object-cover transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
        />
      </motion.div>
      <div className="p-4">
        <motion.h3 
          variants={contentVariants}
          className="text-lg font-bold mb-2 text-gray-900 dark:text-white"
        >
          {language === 'en' ? title : title_ar}
        </motion.h3>
        <motion.p 
          variants={contentVariants}
          className="text-sm text-gray-600 dark:text-gray-300 mb-3"
        >
          {language === 'en' ? description : description_ar}
        </motion.p>
        <motion.div 
          variants={contentVariants}
          className="flex flex-wrap gap-1.5 mb-3"
        >
          {(language === 'en' ? technologies : technologies_ar).map((tech, index) => (
            <motion.span
              key={index}
              variants={techVariants}
              custom={index}
              transition={{ delay: index * 0.1 }}
              className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <motion.div 
          variants={contentVariants}
          className="flex gap-2 mt-4"
        >
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: isRTL ? -5 : 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-3 py-1.5 bg-primary text-white rounded-md text-center text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {language === 'en' ? 'Live Demo' : 'عرض الموقع'}
          </motion.a>
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: isRTL ? -5 : 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-3 py-1.5 border border-primary text-primary rounded-md text-center text-sm font-medium hover:bg-primary hover:text-white transition-all duration-200"
          >
            {language === 'en' ? 'Source Code' : 'الكود المصدري'}
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
} 