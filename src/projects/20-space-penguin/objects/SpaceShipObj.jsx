import React from 'react'
import { SiCalendly } from 'react-icons/si'

const SpaceShipObj = ({ changeShip, scale, start }) => {
    let animation = start;
  return (
    <>
        <img
            src={changeShip}
            alt="Space-Ship"
            style={{ 
                position: 'absolute',
                bottom: 50,
                zIndex: 1,
                width: scale,
            }}
            className={animation}
        />
    </>
  )
}

export default SpaceShipObj
