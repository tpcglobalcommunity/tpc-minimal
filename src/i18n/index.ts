import { en, type EnTranslations } from './en'
import { id, type IdTranslations } from './id'

export type Language = 'en' | 'id'
export type Translations = EnTranslations | IdTranslations

const dictionaries = {
  en,
  id
} as const

export function getDictionary(lang: Language): Translations {
  return dictionaries[lang]
}

export function useI18n(lang: Language) {
  const dictionary = getDictionary(lang)
  
  const t = (key: keyof Translations): string => {
    return dictionary[key] || key
  }
  
  return { t }
}
