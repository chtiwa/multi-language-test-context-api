import React, { useContext } from 'react'
import { LanguageContext } from './contexts/languageContext'

const Text = ({ tid }) => {
  const { dictionary } = useContext(LanguageContext)
  // default language or selected language 
  // console.log(dictionary)
  console.log(tid)
  return dictionary[tid] || tid
}

export default Text