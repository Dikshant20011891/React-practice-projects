import React from 'react'
import Title from '../components/Title';

const RandomizeColor = () => {
    function handleClick(e) {
        console.log(e);
    }

    function handleSecClick(e) {
        console.log(getRandomColor());
        let body = document.querySelector('body');
        body.style.backgroundColor = getRandomColor();
        e.target.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color
    }

  return (
    <div className='container m-auto text-center'>
        <Title text={"Randomize Color"} classes={"text-center mb-4"}/>
        <button className='btn btn-danger ' onClick={handleClick}>Click Me</button>
        <button className='btn btn-success ' onClick={handleSecClick}>Click Me</button>
        <button className='btn btn-primary ' onClick={handleSecClick}>Click Me</button>
        <button className='btn btn-warning ' onClick={handleSecClick}>Click Me</button>
    </div>
  )
}

export default RandomizeColor
