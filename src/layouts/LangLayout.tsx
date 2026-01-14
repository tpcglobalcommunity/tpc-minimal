import { Outlet, useParams, Navigate } from 'react-router-dom'
import { type Lang, I18nProvider, useI18n } from '../i18n'
import PublicLayout from './PublicLayout'
import HomePage from '../pages/public/HomePage'

interface LangLayoutProps {
  children?: React.ReactNode
}

function LangLayoutContent({ children }: LangLayoutProps) {
  const { lang } = useParams<{ lang: Lang }>()
  
  // Validate language parameter
  if (!lang || (lang !== 'en' && lang !== 'id')) {
    return <Navigate to="/en/public" replace />
  }
  
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <PublicLayout lang={lang} t={t}>
        {children || <Outlet /> || <HomePage t={t} />}
      </PublicLayout>
    </div>
  )
}

export default function LangLayout({ children }: LangLayoutProps) {
  const { lang } = useParams<{ lang: Lang }>()
  
  // Validate language parameter
  if (!lang || (lang !== 'en' && lang !== 'id')) {
    return <Navigate to="/en/public" replace />
  }

  return (
    <I18nProvider lang={lang}>
      <LangLayoutContent>{children}</LangLayoutContent>
    </I18nProvider>
  )
}
