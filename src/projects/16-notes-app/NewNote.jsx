import React, { useEffect, useState } from 'react'
import { NoteStyle, Icons, DeleteIcon } from './NoteStyle'
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md' 

const NewNote = ({ note, onClick, text, cardBg}) => {
    const [newCardBg, setNewCardBg] = useState(cardBg)

    useEffect(() => {
        setNewCardBg(cardBg)
    }, [])

    // useEffect(() => {
    //     !newCardBg && setNewCardBg(cardBg)
    // }, [newCardBg])

  return (
    <NoteStyle className={`card ${newCardBg}`}>
        <div className="card-header text-right">
            <Icons>
                <MdOutlineNoteAlt />
                <DeleteIcon>
                    <MdDeleteForever onClick={() => onClick(note.id)}/>
                </DeleteIcon>
            </Icons>
        </div>
        <div className="card-body">
            <textarea style={{ border: "none", outline: "none" }}>{text}</textarea>
        </div>
    </NoteStyle>
  )
}

export default NewNote
