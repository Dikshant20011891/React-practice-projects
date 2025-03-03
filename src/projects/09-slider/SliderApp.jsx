import React, { useState } from 'react'
import SliderComp from './SliderComp'
import Title from '../components/Title'

const SliderApp = () => {
    const [slideValue, setSlideValue] = useState(0)

    const handleSliderValueChange = (e) => {
        setSlideValue(e.target.value)
    }

    let bgColor,textColor;

    if(slideValue < 20){
        bgColor = 'red'
        textColor = 'red'
    }
    if(slideValue > 20 && slideValue <= 50){
        bgColor = 'blue'
    }
    if(slideValue >= 51 && slideValue <= 75){
        bgColor = 'green'
        textColor= 'white'
    }
    if(slideValue > 75){
        bgColor = 'orange'
        textColor = 'white'
    }

  return (
    <div className='container text-center'>
        <Title text={"Slide to Grow"} />
        <SliderComp setValue={slideValue} handleInput={handleSliderValueChange} bgColor={bgColor} textColor={textColor}/>
    </div>
  )
}

export default SliderApp
