import React, { useEffect, useState } from 'react'
import "./ship.css"
import Button from "../components/Button"
import SpaceShipObj from './objects/SpaceShipObj'
import PlanetObj from './objects/PlanetObj'
import MoonObj from './objects/MoonObj'
import Ship from "./svg/space-ship-svgrepo-com.svg"
import Planet from "./svg/planet-earth-svgrepo-com.svg"
import Moon from "./svg/moon-svgrepo-com.svg"
import Penguin from "./svg/penguin-svgrepo-com.svg"

const SpacePenguinApp = () => {

    const [shipProps, setShipProps] = useState({
        action: "",
        scale: 200,
    })
     

    const startShip = () => {
        setShipProps({
            action: "fly",
            scale: 50,
        })
    }

    const landShip = () => {
        setShipProps({
            action: "land",
            scale: 200,
        })
    }

    const [shipType, setShipType] = useState(Ship)
    useEffect(() => {
        if(shipProps.action === "land") {
            setShipType(Penguin)
            setTimeout( () => {
                setShipType(Ship)
            },5500)
        }
    }, [shipProps.action])

  return ( 
    <div className='space'>
        <Button text='Launch' btnClass={"btn-danger"} onClick={startShip}/>

        <section className="env">
            <SpaceShipObj changeShip={shipType} scale={shipProps.scale} start={shipProps.action} />
            <MoonObj Moon={Moon}/>
            <PlanetObj Planet={Planet}/>
        </section>

        <Button text='Land' btnClass={"btn-info"} onClick={landShip}/>
    </div>
  )  
}

export default SpacePenguinApp
