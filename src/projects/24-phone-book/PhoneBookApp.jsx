import React, { useState } from 'react'
import Title from '../components/Title'
import ContactList from './ContactList'; 

const PhoneBookApp = () => {

    const [showContacts, setShowContacts] = useState(false);
  return (
    <>
        <Title text="Phone Book App" />
         <main className="bg-dark text-light p-1">
            {/* <SearchFilter /> */}
            <div style={{ height:650, overflow: "auto" }}>
                <h2 className="subtitle text-center">Display Contacts</h2>
                {showContacts && <ContactList/>}
            </div>
         </main>
    </>
  )
}

export default PhoneBookApp
