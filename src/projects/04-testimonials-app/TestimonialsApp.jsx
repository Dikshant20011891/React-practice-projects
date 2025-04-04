import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { BiCommentDetail } from 'react-icons/bi'

const TestimonialsApp = () => {

    const [testimonials, setTestimonials] = useState("")
    const [items, setItems] = useState([])

    // This will run when the page loads and when the testimonials state changes
    useEffect(() => {
        
            fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
          .then(response => response.json())
          .then(json => setItems(json))
        
    },[testimonials]);

  return (
    <div className="container m-auto">
        <Title text={"Testimonials App"}></Title>
        <Button 
            text={"Posts"} 
            btnClass="btn-info " 
            icon={<BsFillFileEarmarkPostFill className='mr-1'/>}
            onClick={() => setTestimonials("Posts")} 
        />
        <Button 
            text={"Users"} 
            btnClass="btn-info " 
            icon={<FaUserAlt />}
            onClick={() => setTestimonials("Users")}
        />
        <Button 
            text={"Comments"} 
            btnClass="btn-info " 
            icon={<BiCommentDetail />}
            onClick={() => setTestimonials("Comments")}
        />
        <Title classes={"subtitle text-primary"} text={!testimonials ? "Select from Above!" : testimonials}/>
        {!items ? null : items.map((item) => (
            <div className="card card-primary mb-2" key={item.id}>
                {item.name && <h2 className='card-header'>{item.name}</h2>}
                <div className="card-body">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                </div>
                {item.email && <small className='card-footer'>{item.email}</small>}
            </div>
        ))}
          
    </div>
  )
}

export default TestimonialsApp
