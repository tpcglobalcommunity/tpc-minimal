import { useNavigate, useLocation } from 'react-router-dom'
import { type Language } from '../i18n'

interface LanguageSwitcherProps {
  currentLang: Language
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const switchLanguage = (newLang: Language) => {
    if (newLang === currentLang) return
    
    // Extract current path and replace language
    const pathParts = location.pathname.split('/')
    pathParts[1] = newLang
    const newPath = pathParts.join('/')
    
    navigate(newPath, { replace: true })
  }

  return (
    <div className="flex items-center space-x-1 bg-gray-700 rounded-lg p-1">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          currentLang === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white hover:bg-gray-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('id')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          currentLang === 'id'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white hover:bg-gray-600'
        }`}
      >
        ID
      </button>
    </div>
  )
}
