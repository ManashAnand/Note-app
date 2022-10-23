import React from 'react'
import Note from './Note'
import AddNote from './AddNote';
export default function Notelist({notes,handleAdd,deleteNote}) {
  return (
    <>
    <div className="note-list">
      {
        notes.map((note)=>{
        return  <Note key={note.id} id={note.id} date={note.date} text={note.text} deleteNote={deleteNote}/>
        })
      }
        <AddNote handleAdd={handleAdd}/>
    </div>
    </>
  )
}
