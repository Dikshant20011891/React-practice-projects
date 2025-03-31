import React from 'react'

const ContactList = () => {

    const generateRandomImage = () => {
        const types = [
            "male",
            "female",
            "human",
            "identicon",
            "initials",
            "bottts",
            "avataars",
            "jdenticon",
            "gridy",
            "micah",
        ]
        return types[Math.floor(Math.random() * types.length())]
    }
    
  return (
    <div>
      <Contact 
        icon={`https://api.dicebear.com/9.x/${generateRandomImage}/svg`}    
      />
    </div>
  )
}

export default ContactList
