import React from 'react'
import Button from '../components/Button'

const Popup = ({ type, title, text, handleClose, trigger}) => {
    const popupContainer = {
        position:'absolute',
        top:'0',
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.1)",
        zIndex: "-1 ",
    }

    const popupStyle = {
        position: 'absolute', 
        margin: '40vh 37vw',
        zIndex: '1',
    }

  return trigger && (
    <div style={popupContainer}>
        <div className={`${type}`} style={popupStyle}>
            <div className="alert-close">
                <div className="d-flex flex-column">
                    {/* if we have title use title else blank */}
                    <h4 className="mb-1">{title && title}</h4>
                    <p>{text && text}</p>
                </div>
                <Button onClick={() => handleClose(false)} text={"X"} btnClass={"btn-close"} />
            </div>
        </div>
    </div>
  )
}

export default Popup
