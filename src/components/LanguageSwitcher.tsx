import { useLanguage } from '../contexts/LanguageContext'
import { useNavigate, useLocation } from 'react-router-dom'

export default function LanguageSwitcher() {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  const switchLanguage = (newLang: 'en' | 'id') => {
    if (newLang === language) return
    
    // Extract current path and replace language
    const pathParts = location.pathname.split('/')
    pathParts[1] = newLang
    const newPath = pathParts.join('/')
    
    navigate(newPath, { replace: true })
  }

  return (
    <div className="flex items-center space-x-1 bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white hover:bg-gray-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('id')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          language === 'id'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white hover:bg-gray-700'
        }`}
      >
        ID
      </button>
    </div>
  )
}
