import React from 'react'

export default function Header({handleToggle}) {
  return (
    <div className='header'>
      <h1>Notes</h1>
      <button className='btn' onClick={()=>handleToggle((prev)=>!prev)}> Toogle Mode </button>
    </div>
  )
}
