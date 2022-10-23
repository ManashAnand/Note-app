import {nanoid} from 'nanoid'
import { useState } from 'react';
// import {useEffect} from 'react'
import './App.css';
import Notelist from './component/Note-list';
import Search from './component/Search';
import Header from './component/Header'

function App() {
  
  const [Note,setNote] = useState([
    // {
    // id:nanoid(),
    // text: "This is my first dummy data",
    // date: "15/04/2022"
    // },
    // {
    // id:nanoid(),
    // text: "This is my Second dummy data",
    // date: "15/04/2022"
    // },
    // {
    // id:nanoid(),
    // text: "This is my third dummy data",
    // date: "15/04/2022"
    // }
])

      //  useEffect(()=>{
      //   const savedNote = 
      //   JSON.parse(
      //     localStorage.getItem('react-note-app-data-by-manash')
      //   );
      //   if(savedNote) setNote(savedNote); 
      //  },[])

      //   useEffect(()=>{
      //       localStorage.setItem(
      //         'react-note-app-data-by-manash',JSON.stringify(Note)
      //       )
      //   },[Note]);
        
        const [searchText,setSearchText] = useState("");
        const [mode,setMode] = useState(false);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      id:nanoid(),
      date: date.toLocaleDateString()
    }
    const newNotes = [...Note,newNote];
    setNote(newNotes);
  }

  const deleteNote = (id) =>{
    const newnote = Note.filter((note)=>note.id!==id);
    setNote(newnote);
  }

 

  return (
    <>
    <div className={`${mode && "dark-mode"} `}>
        <div className="container">
          <Header handleToggle={setMode}/>
          <Search handleSearchText={setSearchText}/>
          <Notelist notes={Note.filter((note)=> note.text.toLowerCase().includes(searchText.toLowerCase()))} handleAdd={addNote} deleteNote={deleteNote}/>
        </div>
    </div>
    </>
  );
}

export default App;
