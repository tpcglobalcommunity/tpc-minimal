import { LanguageProvider } from '../contexts/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'

interface LangLayoutProps {
  children: React.ReactNode
}

export default function LangLayout({ children }: LangLayoutProps) {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-blue-600">
                TPC Minimal
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </header>
        {children}
      </div>
    </LanguageProvider>
  )
}
