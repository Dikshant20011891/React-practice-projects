import React,{ useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const HiddenSearchBarApp = () => {
  let body = (document.body.style.background = "purple")
  
  let inputStyle = {
    margin: "10vh 25vw",
    width: "20vh",
    height: "30px",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: "1px solid #333",
    fontSize: "1.3rem",
    color: "#eee",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,0.75)",
    opacity: 0.9,
    transitions: "all 0.3s ease",
  }

  let bsSearchStyle = {
    color: "#fff",
    fontSize: 50,
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,

  }
  return (
    <div className='container'>
      <input type="text" placeholder='Search' style={inputStyle}/>
      <BsSearch style={bsSearchStyle}/>
    </div>
  )
}

export default HiddenSearchBarApp
