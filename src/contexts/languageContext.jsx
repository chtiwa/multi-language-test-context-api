import { createContext, useEffect, useState } from "react"
import { dictionaryList } from "../languages"

// export const LanguageContext = createContext({ userLanguage: 'en', dictionary: dictionaryList.en })
export const LanguageContext = createContext()

// console.log(LanguageContext)
const LaguageProvider = ({ children }) => {
  const defaultLanguage = window.localStorage.getItem('rcml-lang')
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en')

  useEffect(() => {
    window.localStorage.setItem('rcml-lang', userLanguage)
  }, [userLanguage])

  const provider = {
    userLanguage,
    dictionary: userLanguage === "en" ? dictionaryList.en : dictionaryList.fr,
    setUserLanguage
  }
  // console.log(provider)


  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LaguageProvider