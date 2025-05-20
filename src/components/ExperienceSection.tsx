'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function ExperienceSection() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          {language === 'en' ? 'Experience' : 'الخبرة'}
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
                  {language === 'en' ? 'Freelance Developer' : 'مطور مستقل'}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {language === 'en' ? '2023 - Present' : '2023 - حتى الآن'}
                </time>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p className="mb-4">
                {language === 'en' 
                  ? 'Working on various projects including web applications, e-commerce platforms, and custom software solutions.'
                  : 'العمل على مشاريع متنوعة تشمل تطبيقات الويب ومنصات التجارة الإلكترونية وحلول البرمجيات المخصصة.'}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  {language === 'en'
                    ? 'Developed responsive web applications using React, Next.js, and TypeScript'
                    : 'تطوير تطبيقات ويب متجاوبة باستخدام React و Next.js و TypeScript'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Implemented modern UI/UX designs with Tailwind CSS'
                    : 'تنفيذ تصاميم واجهة المستخدم الحديثة باستخدام Tailwind CSS'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Collaborated with clients to deliver custom solutions'
                    : 'التعاون مع العملاء لتقديم حلول مخصصة'}
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
                  {language === 'en' ? 'Personal Projects' : 'المشاريع الشخصية'}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {language === 'en' ? '2022 - Present' : '2022 - حتى الآن'}
                </time>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p className="mb-4">
                {language === 'en'
                  ? 'Developed and maintained various personal projects to enhance skills and build a portfolio.'
                  : 'تطوير وصيانة مشاريع شخصية متنوعة لتعزيز المهارات وبناء محفظة أعمال.'}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  {language === 'en'
                    ? 'Created full-stack applications using modern technologies'
                    : 'إنشاء تطبيقات كاملة باستخدام التقنيات الحديثة'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Implemented responsive designs and animations'
                    : 'تنفيذ تصاميم متجاوبة وحركات تفاعلية'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Integrated various APIs and third-party services'
                    : 'دمج واجهات برمجة التطبيقات والخدمات الخارجية'}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 