import React from 'react'
import Alert from '../components/Alert'

const AlertApp = () => {
  return (
    <div className='container mx-auto'>
      <Alert type={"success"} message={"Successful login"} />
      <Alert type={"info"} message={"Time Triggered"} delay={true}/>
    </div>
  )
}

export default AlertApp
