'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function EducationSection() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          {language === 'en' ? 'Education' : 'التعليم'}
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 sm:pl-32 py-6 group"
          >
            <div className="flex flex-col sm:flex-row items-start mb-8 sm:mb-4">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full ring-0 ring-white dark:ring-dark sm:ring-8 shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className={`sm:ml-4 xl:ml-12 ${isRTL ? 'sm:mr-4 xl:mr-12 sm:ml-0 xl:ml-0' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {language === 'en' ? 'Bachelor of Computer Science' : 'بكالوريوس علوم الحاسب'}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {language === 'en' ? '2019 - 2023' : '2019 - 2023'}
                </time>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p className="mb-4">
                {language === 'en'
                  ? 'Studied core computer science concepts including algorithms, data structures, and software engineering.'
                  : 'دراسة المفاهيم الأساسية لعلوم الحاسب بما في ذلك الخوارزميات وهياكل البيانات وهندسة البرمجيات.'}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  {language === 'en'
                    ? 'GPA: 3.8/4.0'
                    : 'المعدل التراكمي: 3.8/4.0'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Dean\'s List for Academic Excellence'
                    : 'قائمة العميد للتميز الأكاديمي'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Participated in various programming competitions'
                    : 'المشاركة في مسابقات البرمجة المختلفة'}
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative pl-8 sm:pl-32 py-6 group"
          >
            <div className="flex flex-col sm:flex-row items-start mb-8 sm:mb-4">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full ring-0 ring-white dark:ring-dark sm:ring-8 shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className={`sm:ml-4 xl:ml-12 ${isRTL ? 'sm:mr-4 xl:mr-12 sm:ml-0 xl:ml-0' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {language === 'en' ? 'Full Stack Web Development Diploma' : 'دبلوم تطوير الويب المتكامل'}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {language === 'en' ? '2023' : '2023'}
                </time>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p className="mb-4">
                {language === 'en'
                  ? 'Comprehensive training in modern web development technologies and best practices.'
                  : 'تدريب شامل في تقنيات تطوير الويب الحديثة وأفضل الممارسات.'}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  {language === 'en'
                    ? 'Frontend: React, Next.js, TypeScript'
                    : 'الواجهة الأمامية: React, Next.js, TypeScript'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Backend: Node.js, Express, MongoDB'
                    : 'الخلفية: Node.js, Express, MongoDB'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Tools: Git, Docker, AWS'
                    : 'الأدوات: Git, Docker, AWS'}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 