'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function ContactSection() {
  const { language } = useLanguage()

  return (
    <section id="contact" className="container py-20 bg-gray-50 dark:bg-dark-lighter transition-colors duration-200">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-200">
        {language === 'en' ? 'Get In Touch' : 'تواصل معنا'}
      </h2>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white transition-colors duration-200">
              {language === 'en' ? 'Name' : 'الاسم'}
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white transition-colors duration-200">
              {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white transition-colors duration-200">
              {language === 'en' ? 'Message' : 'الرسالة'}
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            ></textarea>
          </div>
          <button type="submit" className="w-full btn btn-primary bg-primary text-white hover:bg-primary/90 transition-colors duration-200">
            {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
          </button>
        </form>
      </div>
    </section>
  )
} 