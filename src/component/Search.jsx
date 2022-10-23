import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search({handleSearchText}) {

  return (
    <div className='Search'>
       <MdSearch size='1.3em' className='search-icons'/>
       <input onChange={(event)=>handleSearchText(event.target.value)} type="text" placeholder='Type to search...' />
    </div>
  )
}
