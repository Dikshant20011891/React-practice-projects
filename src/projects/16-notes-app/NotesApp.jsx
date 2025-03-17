import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NewNote from './NewNote'
import Button from '../components/Button'

const NotesApp = () => {
    const [notes, setNotes] = useState([])
    const addNewNote = (newNote) => {
        const newNotes = [...notes, newNote]
        newNotes.filter((note) => !note.id && (note.id = uuidv4()))
        setNotes(newNotes)
    }
    const deleteNode = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    }

    const cards = [
        "card-info",
        "card-primary",
        "card-danger",
        "card-success",
        "card-warning",
        "card-dark",
        "card-light",
    ]

    const randomizeBg = () => {
        const random = Math.floor(Math.random() * cards.length)
        return cards[random]
    }

  return (
    <div className='container'>
        <Button btnClass={"btn-info"} text={"+ New note"} onClick={addNewNote} />
        <div 
            className="container container-sm d-flex" 
            style={{ gap: 25, flexWrap: 'wrap' }}
        >
            {notes.map((note) =>  (
                <NewNote key={note.id} note={note} onClick={deleteNode} cardBg={randomizeBg}/>
            ))}
        </div>
    </div>
  )
}

export default NotesApp
