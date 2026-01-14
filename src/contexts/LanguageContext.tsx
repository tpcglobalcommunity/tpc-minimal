import { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    'welcome.title': 'Welcome to TPC Minimal',
    'welcome.subtitle': 'This is a minimal React TypeScript project with Vite and Tailwind CSS.',
    'features.title': 'Features',
    'features.react': 'React 19 with TypeScript',
    'features.vite': 'Vite for fast development',
    'features.tailwind': 'Tailwind CSS for styling',
    'features.router': 'React Router for navigation',
    'features.eslint': 'ESLint for code quality',
    'language.switch': 'Language',
    'navigation.home': 'Home',
    'navigation.about': 'About',
    'navigation.contact': 'Contact'
  },
  id: {
    'welcome.title': 'Selamat Datang di TPC Minimal',
    'welcome.subtitle': 'Ini adalah project React TypeScript minimal dengan Vite dan Tailwind CSS.',
    'features.title': 'Fitur',
    'features.react': 'React 19 dengan TypeScript',
    'features.vite': 'Vite untuk development cepat',
    'features.tailwind': 'Tailwind CSS untuk styling',
    'features.router': 'React Router untuk navigasi',
    'features.eslint': 'ESLint untuk kualitas kode',
    'language.switch': 'Bahasa',
    'navigation.home': 'Beranda',
    'navigation.about': 'Tentang',
    'navigation.contact': 'Kontak'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
