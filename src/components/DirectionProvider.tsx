'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useEffect } from 'react'

export default function DirectionProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language, isRTL])

  return <>{children}</>
} 