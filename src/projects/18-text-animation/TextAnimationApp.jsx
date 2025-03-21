import React, { useEffect, useRef, useState } from 'react'
import Button from "../components/Button"
import FormGroup from '../components/FormGroup'
import AnimatedText from 'react-animated-text-content'

const TextAnimationApp = () => {
  const [inputValue, setInputValue] = useState("")
  const [animationText, setAnimationText] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClear = () => {
    setAnimationText(inputValue)
    setInputValue("")
  }

  let inputText = useRef(null);
  useEffect(() => {
    inputText.current.focus()
  })

  return (
    <div className='container text-center'>
      <form action="" className="container d-flex mt-4" onSubmit={(e) => e.preventDefault()}>
        <FormGroup 
          labelText={"Type in your text to be Animated"} 
          inputType="text" 
          placeholder={"Enter Text"} 
          values={inputValue}
          onChange={handleInputChange}
          reference={inputText}
        />
        <Button text="Clear" btnClass={"btn-large btn-danger"} onClick={handleClear}/>
      </form>
      {animationText && 
        <AnimatedText 
          type='char' 
          className='title'
          interval={0.04}
          duration={1.1}
          animation={{ y: "-250px", ease: "linear",}}
          
        >
        {animationText}
      </AnimatedText>}
    </div>
  )
}

export default TextAnimationApp