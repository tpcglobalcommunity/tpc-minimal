import { Outlet } from 'react-router-dom'
import { type Language } from '../i18n'
import LanguageSwitcher from '../components/LanguageSwitcher'

interface PublicLayoutProps {
  lang: Language
  t: (key: keyof import('../i18n').Translations) => string
  children?: React.ReactNode
}

export default function PublicLayout({ lang, children }: PublicLayoutProps) {
  return (
    <>
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-400">
              TPC
            </div>
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      </header>
      <main>
        {children || <Outlet />}
      </main>
    </>
  )
}
