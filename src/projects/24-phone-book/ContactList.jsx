import React from 'react'
import Contact from './Contact'

const ContactList = ({ contacts }) => {

    const generateRandomImage = () => {
        const types = [
            "pixel-art",
            "identicon",
            "bottts",
            "micah",
            "big-ears",
            "lorelei",
            "miniavs",
        ]
        return types[Math.floor(Math.random() * types.length)]
    }
    
  return (
    <ul>
      {contacts.map((contact,id) => {
      
      return (
        <Contact
          key={id}
          icon={`https://api.dicebear.com/9.x/${generateRandomImage()}/svg`} 
          firstName={contact.first_name}
          lastName={contact.last_name}
          phoneNr={contact.phone}
        />
      )
    })}
    </ul>
  )
}

export default ContactList
