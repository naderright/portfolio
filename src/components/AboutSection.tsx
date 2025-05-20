'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutSection() {
  const { language } = useLanguage()

  return (
    <section id="about" className="container py-20 bg-gray-50 dark:bg-dark-lighter transition-colors duration-200">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-200">
        {language === "en" ? "About Me" : "نبذة عني"}
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {/* Profile Image with Animation */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="relative w-56 h-56 mx-auto mb-8"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-[spin_8s_linear_infinite]"></div>
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-[spin_8s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 rounded-full border-4 border-primary/10 animate-[spin_12s_linear_infinite]"></div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl hover:shadow-primary/20 transition-all duration-300">
                <Image
                  src="/profile.png"
                  alt="Nader Mohamed"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {language === "en" ? "Frontend Developer" : "مطور واجهات أمامية"}
              </motion.div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-200 text-center">
              {language === "en" ? "Contact Information" : "معلومات الاتصال"}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <span className="font-semibold min-w-[100px]">{language === "en" ? "Name:" : "الاسم:"}</span>
                <span>Nader Mohamed Abusrea</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <span className="font-semibold min-w-[100px]">{language === "en" ? "Location:" : "الموقع:"}</span>
                <span>Shubra Al Khaimah, Cairo, Egypt</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <span className="font-semibold min-w-[100px]">{language === "en" ? "Phone:" : "الهاتف:"}</span>
                <span>(+20) 01099135352</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <span className="font-semibold min-w-[100px]">{language === "en" ? "Age:" : "العمر:"}</span>
                <span>25</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <span className="font-semibold min-w-[100px]">{language === "en" ? "Email:" : "البريد:"}</span>
                <span>nadercs2018@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <span className="font-semibold min-w-[100px]">{language === "en" ? "LinkedIn:" : "لينكد إن:"}</span>
                <a href="https://linkedin.com/in/nader-mohamed" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  Nader Mohamed
                </a>
              </div>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <span className="font-semibold min-w-[100px]">{language === "en" ? "GitHub:" : "جيت هب:"}</span>
                <a href="https://github.com/naderright" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  naderright
                </a>
              </div>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-200">
              {language === "en" ? "Professional Summary" : "ملخص مهني"}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                {language === "en" 
                  ? "I am a passionate Frontend Developer with a Bachelor's Degree in Computer Science from Tiba Academy and a Full Stack Web Development Diploma from Route ITI Training Center."
                  : "أنا مطور واجهات أمامية شغوف حاصل على درجة البكالوريوس في علوم الحاسب من أكاديمية طيبة ودبلومة تطوير الويب الكامل من مركز Route ITI للتدريب."}
              </p>
              <p>
                {language === "en"
                  ? "I have hands-on experience in building modern, responsive web applications using technologies like React.js, Next.js, Tailwind CSS, and Redux-Toolkit."
                  : "لدي خبرة عملية في بناء تطبيقات الويب الحديثة والمتجاوبة باستخدام تقنيات مثل React.js و Next.js و Tailwind CSS و Redux-Toolkit."}
              </p>
              <p>
                {language === "en"
                  ? "I am seeking an opportunity to join a dynamic team where I can apply my development skills to create innovative solutions and contribute to the company's goals."
                  : "أبحث عن فرصة للانضمام إلى فريق ديناميكي حيث يمكنني تطبيق مهاراتي في التطوير لإنشاء حلول مبتكرة والمساهمة في أهداف الشركة."}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 