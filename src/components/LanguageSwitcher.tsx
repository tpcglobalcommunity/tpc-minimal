import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-600">
        {language === 'en' ? 'Language' : 'Bahasa'}:
      </span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'id')}
        className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="en">English</option>
        <option value="id">Indonesia</option>
      </select>
    </div>
  )
}
