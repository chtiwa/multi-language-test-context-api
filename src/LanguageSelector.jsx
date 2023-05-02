import React, { useContext } from 'react'
import { languageOptions } from './languages'
import { LanguageContext } from './contexts/languageContext'

const LanguageSelector = () => {
  const { userLanguage, setUserLanguage } = useContext(LanguageContext)

  const handleLanguageChange = (e) => {
    setUserLanguage(e.target.value)
  }

  return (
    <select value={userLanguage} onChange={handleLanguageChange}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option value={id} key={id} >{name}</option>
      ))}

    </select>
  )
}

export default LanguageSelector