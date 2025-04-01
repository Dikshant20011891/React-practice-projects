import React from 'react'
import Button from "../components/Button"
import { FaAddressBook,FaArrowsAltV } from 'react-icons/fa'

const SearchFilter = ({ handleToggleContacts, handleToggleSortAZ, handleSearchContact }) => {
  return (
    <section className='text-center'>
      <Button 
        btnClass={""} 
        text="" 
        icon={<FaAddressBook />} 
        onClick={handleToggleContacts}
      />
      <input 
        input="text"
        placeholder='Search By first Name'
        className='mb-2 mx-1'
        style={{ padding: "0.3rem 0.5rem" }}
        onChange={(e) => handleSearchContact(e.target.value)}
      />

      <Button btnClass={""} text="" icon={<FaArrowsAltV />} onClick={handleToggleSortAZ}/>
    </section>
  )
}

export default SearchFilter
