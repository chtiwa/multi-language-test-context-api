import React, { useContext, useState } from 'react'
import { LanguageContext } from './contexts/languageContext'
import Text from './Text'

const Explore = () => {
  const [clickText, setClickText] = useState()
  const { dictionary } = useContext(LanguageContext)
  console.log(dictionary)

  const handleClick = () => {
    setClickText(<Text tid='buttonClicked' />)
  }

  return (
    <div>
      <h1><Text tid={"exploreHeader"} /></h1>
      <p><Text tid={"welcomeDescription"} /></p>

      <div>
        <input type="text" placeholder={dictionary.en} />

        <button onClick={handleClick} >
          <Text tid={"clickMe"} />
        </button>

        <p>{dictionary.clickMe} </p>

        <Text tid="aboutMe" />
      </div>
    </div>
  )
}

export default Explore