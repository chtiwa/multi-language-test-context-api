import React from 'react'
import LanguageProvider from './contexts/languageContext'
import LanguageSelector from './LanguageSelector'
import Explore from './Explore'

const App = () => {
  return (
    <LanguageProvider>
      <header>
        <LanguageSelector />
      </header>

      <Explore />
    </LanguageProvider>
  )
}

export default App