import React from 'react'

const ProgressBar = ({ bgColor, completed }) => {
    const containerStyle = {
        height: 25,
        width: "100%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50,
    }

    const fillerStyle = {
        backgroundColor: bgColor,
        height: "100%",
        width: `${completed}%`,
        borderRadius: "inherit",
        textAlign: "right",
        // ease-in-out start quickly but ends slowly
        transition: "width ls ease-in-out"
    }

    const labelStyle = {
        padding: 15,
        margin: 10,
        color: "#fff",
        fontWeight: "bold",
    }

  return (
    <div style={containerStyle} >
      <div style={fillerStyle} >
        <span style={labelStyle} >{`${completed}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar
