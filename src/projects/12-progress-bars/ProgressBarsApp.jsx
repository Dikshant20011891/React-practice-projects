import React,{ useRef, useEffect } from 'react'
import Title from '../components/Title'

const ProgressBarsApp = () => {
    const inputStyle = {
        width: 50,
        border: "none",
        outline: "none",
        textAlign: "center",
        borderBottom: "1px solid lightgray"
    }

    const uiInput = useRef(null)
    useEffect(() => {
        uiInput.current.focus()
    })
  return (
    <div className='container container-sm mx-auto text-center'>
      <Title text={"Progress Bars"}/>
      <h2>Project status</h2>
      <ul>
        <li>
            UI status : <input ref={uiInput} type="number" style={inputStyle} value={""}/>
        </li>
        <li>
            UX status : <input type="number" style={inputStyle} value={""}/>
        </li>
        <li>
            DATA status : <input type="number" style={inputStyle} value={""}/>
        </li>
      </ul>
    </div>
  )
}

export default ProgressBarsApp
