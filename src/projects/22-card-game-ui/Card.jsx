import React from 'react'
import Shield from "./svg/shield.svg"
import Sword from "./svg/swords.svg"
import Horn from "./svg/horn.svg"

const Card = ({ player, defenceValue, attackValue, unitTypeName, unitTypeImg, moralvalue, uniValue}) => {
    const iconStyle = {
        marginRight: 10,
        width: 20,
        background: "transparent",
    }
 
    function mirrorImg(player) {
        return player === "player_1" ? "scaleX(1)" : "scaleX(-1)"
    }
    
    let mirror = mirrorImg(player)

  return (
    <div 
        className={`card text-center m-1 shadow-lg ${player === "player_1" ? "card-info" : "card-danger"}`} 
        style={{ width:180 }}
    >
        <section className="card-header d-flex" style={{justifyContent: "space-between"}}>
            <div className="defence">
                <img src={Shield} alt="defence-img" style={iconStyle}/>
                <span>{!defenceValue && "00"}</span>
            </div>
            <div className="attack">
                <img src={Sword} alt="attack-img" style={iconStyle}/>
                <span>{!attackValue && "00"}</span>
            </div>
        </section>

        <div className="card-body">
            <h4 className="mb-1">
                {!unitTypeName ? "Unit type Name" : unitTypeName}
                <img src={unitTypeImg} alt="unit-type-img" style={{background:"#fff" , transform:`${mirror}`}}/>
            </h4>
        </div>
      
        <section className="card-footer d-flex" style={{justifyContent: "space-between"}}>
            <div className="defence">
                <img src={Horn} alt="defence-img" style={iconStyle}/>
                <span>{!moralvalue && "00"}</span>
            </div>
            <div className="attack">
                <img src={unitTypeImg} alt="attack-img" style={iconStyle}/>
                <span>{!uniValue && "00"}</span>
            </div>
        </section>
    </div>
  )
}

export default Card
