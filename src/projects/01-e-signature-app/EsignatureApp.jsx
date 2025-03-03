import React, { useState } from 'react'
import Title from '../components/Title'

const EsignatureApp = () => {
  
  const [name, setName] = useState("YOUR NAME");
  const [date, setDate] = useState(""); 

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outLine: "none",
    padding: "0.35rem 0",
  };

  document.body.style.background = "#eee";

  return (
    <div className="container text-center">
        {/* <Title classes={"title"} text={"Name"}/> */}
        <Title classes={"title"} text={name}/> 
        <Title classes={"main-title mb-4"} text={!date ? "DD/MM/YYYY" : date}/>
        <p>Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Temporibus recusandae quibusdam
          reprehenderit provident tempore? Consequatur eius nam possimus
          corporis numquam exercitationem deserunt cumque iste modi,
          maiores libero id veniam sed!
        </p>

        <footer className="d-flex" 
          style={{justifyContent: "space-around", position: "relative",top: "40vh"}}
        >
        
          <input type="date" value={date} style={inputStyle} onChange={handleDateChange}/>
          <input type="text" value={name} style={inputStyle} onChange={handleNameChange}/>
        </footer>
    </div>
  )
}
 
export default EsignatureApp
