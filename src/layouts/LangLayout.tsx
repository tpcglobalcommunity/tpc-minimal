import { Outlet } from 'react-router-dom'
import { LanguageProvider } from '../contexts/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'

interface LangLayoutProps {
  children?: React.ReactNode
}

export default function LangLayout({ children }: LangLayoutProps) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-400">
                TPC
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </header>
        <main>
          {children || <Outlet />}
        </main>
      </div>
    </LanguageProvider>
  )
}
