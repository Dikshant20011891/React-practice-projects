import React, { useEffect, useRef, useState } from 'react'
import Title from '../components/Title'
import ContactsData from './Data.json'
import Contact from './Contact'

const FilterContactsApp = () => {
    let inputSearch = useRef(null)
    const [searchContact,setSearchContact] = useState("")
    
    useEffect(() => {
        inputSearch.current.focus()
    }, [])

  return (
    <div className='text-center'>
      <Title text={"Filter Contacts App"}/>
      <input 
        type="text" 
        placeholder='Search by First Name'
        className='mb-2' 
        style={{padding: "0.3rem 0.5rem"}} 
        ref={inputSearch}
        onChange = {(e) => setSearchContact(e.target.value)}
    />
      <section className="d-flex" style={{gap:15, maxWidth:1600, margin:"auto", flexWrap:"wrap"}}>
        {ContactsData.filter( (contact) => {
            if(searchContact === ""){
                return contact
            }else if(contact.first_name.toLowerCase().includes(searchContact.toLowerCase())){
                return contact
            }
        }).map(contact => (
            <Contact key={contact.id} contact={contact} />
        ))}
      </section> 
    </div>
  )
}

export default FilterContactsApp
