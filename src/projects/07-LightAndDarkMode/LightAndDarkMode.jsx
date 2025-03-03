import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import { ThemeContext, themes } from './context/theme-context'

const LightAndDarkMode = () => {
    const [theme, setTheme] = useState(themes.light)

    function changeTheme() {
        setTheme(theme === themes.light ? themes.dark : themes.light)
    }

    useEffect(() =>{
      let docBody = document.body
      switch(theme){
        case themes.light:
          docBody.classList.remove("bg-dark")
          docBody.classList.remove("text-light")
          docBody.classList.add("bg-light")
          docBody.classList.add("text-dark")
          break
        case themes.dark:
          docBody.classList.remove("bg-light")
          docBody.classList.remove("text-dark")
          docBody.classList.add("bg-dark")
          docBody.classList.add("text-light")
          break
        default:
          break
      }
    },[theme])
       
  
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} >
      <Blog />
    </ThemeContext.Provider>
  )
}

export default LightAndDarkMode
