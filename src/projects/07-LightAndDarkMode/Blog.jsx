import React,{ useContext} from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { ThemeContext } from './context/theme-context'
 
const Blog = () => {

  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className='container p-1'>
      <Title text={`My Blog ${theme} Theme`}/>
      <span style={{ position: "absolute", top:10, right: 10 }}>
        <Button 
          text = {theme === "dark" ? "Light" : "Dark"}
          btnClass={ `${theme === "dark" && "btn-light"} btn-sm` }
          onClick={changeTheme}
        />
      </span>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus auctor, ultricies orci nec, ultrices odio. Nullam euismod
            scelerisque nunc.
        </p>
    </div>
  )
}

export default Blog
