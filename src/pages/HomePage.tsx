
import { useLanguage } from '../contexts/LanguageContext'

export default function HomePage() {
  const { t, language } = useLanguage()

  return (
    <div className="text-center">
      <p className="text-gray-600 mb-6">
        {t('welcome.subtitle')}
      </p>
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-medium mb-4">{t('features.title')}</h3>
        <ul className="text-left max-w-md mx-auto space-y-2">
          <li>✅ {t('features.react')}</li>
          <li>✅ {t('features.vite')}</li>
          <li>✅ {t('features.tailwind')}</li>
          <li>✅ {t('features.router')}</li>
          <li>✅ {t('features.eslint')}</li>
        </ul>
      </div>
      
      <div className="mt-8 p-6 bg-green-50 rounded-lg">
        <h3 className="text-xl font-medium mb-4">
          {t('navigation.home')} & {t('navigation.about')}
        </h3>
        <p className="text-gray-600">
          {language === 'en' 
            ? 'This website supports both English and Indonesian languages. Use the language switcher in the header to change language.'
            : 'Website ini mendukung bahasa Inggris dan Indonesia. Gunakan pemilih bahasa di header untuk mengganti bahasa.'
          }
        </p>
      </div>
    </div>
  )
}
