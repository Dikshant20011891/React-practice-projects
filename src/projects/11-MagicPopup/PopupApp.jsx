import React, { useState, useEffect } from 'react'
import Popup from '../components/Popup.component'
import Button from '../components/Button'
import Title from '../components/Title'

const PopupApp = () => {
    const [trigger, setTrigger] = useState(false)
    const [timeTrigger, setTimeTrigger] = useState(false)

    const triggerPopup = () => {
        setTrigger(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setTimeTrigger(true)
        }, 3000)
    },[])

  return (
    <div className='text-center'>
        <Title text={"Click For popup or weight 3 seconds"} />
        <Button btnClass={"btn-primary"} onClick={triggerPopup} />
        <Popup 
            type={"alert-info"} 
            title={"Triggered Popup"} 
            text={"This Popup was triggered by a Button"} 
            handleClose={setTrigger}
            trigger={trigger}    
        />{" "}
        <Popup 
            type={"alert-danger"} 
            title={"Triggered Popup"} 
            text={"This Popup was triggered by a Delay"} 
            handleClose={setTimeTrigger}
            trigger={timeTrigger}    
        />    
    </div>
  )
}

export default PopupApp
