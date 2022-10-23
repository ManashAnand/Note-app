import React,{useState} from 'react'

export default function AddNote({handleAdd}) {
  const [inputText,setInputText] = useState('');
  const handleChange = (E) => {
    if(characterLimit - E.target.value.length >=0) 
    setInputText(E.target.value);
  }
  const handleSaveBtn = () => {
    if(inputText.trim().length>0)
    {
      handleAdd(inputText);
      setInputText('');
    }
  }
  const characterLimit = 200;
  return (
    <>
      <div className="note new">
        <textarea cols="8" rows="10" placeholder='Type to add a note...' onChange={handleChange} value={inputText}/>
        <div className="note-footer">
            <small>{characterLimit-inputText.length} remaining</small>
            <button className="save" onClick={handleSaveBtn}>Save</button>
        </div>
      </div>
    </>
  )
}
