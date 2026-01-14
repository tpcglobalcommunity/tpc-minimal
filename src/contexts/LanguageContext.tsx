import { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    'public.home.title': 'Trader Professional Community',
    'public.home.subtitle': 'A global hub where professional traders connect, learn, and grow—built on transparency and real results.',
    'public.home.disclaimer': 'Educational community. Not financial advice. Trading involves risk.',
    'public.home.ctaPrimary': 'Join Community',
    'public.home.ctaSecondary': 'Explore Ecosystem',

    // Cards
    'public.home.cards.0.title': 'Education & Playbooks',
    'public.home.cards.0.desc': 'Step-by-step learning, market insights, and practical trading frameworks.',
    'public.home.cards.1.title': 'Community & Networking',
    'public.home.cards.1.desc': 'Connect with professional traders worldwide and collaborate.',
    'public.home.cards.2.title': 'Trust & Transparency',
    'public.home.cards.2.desc': 'Open activity logs, verified updates, and accountability.',

    // Steps
    'public.home.steps.0.title': 'Join',
    'public.home.steps.0.desc': 'Enter the community and choose your path.',
    'public.home.steps.1.title': 'Verify',
    'public.home.steps.1.desc': 'Unlock access based on verification rules.',
    'public.home.steps.2.title': 'Participate',
    'public.home.steps.2.desc': 'Learn, contribute, and grow with the network.',

    // Footer
    'public.footer.rights': '© 2025 TPC - Trader Professional Community. All rights reserved.'
  },
  id: {
    // Navigation
    'public.home.title': 'Trader Professional Community',
    'public.home.subtitle': 'Wadah global tempat trader profesional berkumpul, belajar, dan berkembang—berbasis transparansi dan hasil nyata.',
    'public.home.disclaimer': 'Komunitas edukasi. Bukan saran investasi. Trading memiliki risiko.',
    'public.home.ctaPrimary': 'Gabung Komunitas',
    'public.home.ctaSecondary': 'Jelajahi Ekosistem',

    // Cards
    'public.home.cards.0.title': 'Edukasi & Playbook',
    'public.home.cards.0.desc': 'Belajar bertahap, insight market, dan framework trading praktis.',
    'public.home.cards.1.title': 'Komunitas & Networking',
    'public.home.cards.1.desc': 'Terhubung dengan trader profesional dunia dan berkolaborasi.',
    'public.home.cards.2.title': 'Trust & Transparansi',
    'public.home.cards.2.desc': 'Log aktivitas terbuka, update terverifikasi, dan akuntabilitas.',

    // Steps
    'public.home.steps.0.title': 'Gabung',
    'public.home.steps.0.desc': 'Masuk komunitas dan pilih jalurmu.',
    'public.home.steps.1.title': 'Verifikasi',
    'public.home.steps.1.desc': 'Buka akses sesuai aturan verifikasi.',
    'public.home.steps.2.title': 'Berpartisipasi',
    'public.home.steps.2.desc': 'Belajar, berkontribusi, dan tumbuh bersama.',

    // Footer
    'public.footer.rights': '© 2025 TPC - Trader Professional Community. Semua hak dilindungi.'
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
