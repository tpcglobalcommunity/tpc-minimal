import { useLanguage } from '../contexts/LanguageContext'

interface PublicLayoutProps {
  children: React.ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">
          {t('welcome.title')}
        </h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
