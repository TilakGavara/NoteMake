import React from 'react';
import { MdSearch } from 'react-icons/md';

function Search({handleSearch}){
    return(
        <div className='search'>
            <MdSearch className='search-icon'/>
            <input type='text'onChange={(event)=>handleSearch(event.target.value)} placeholder='search your notes....'/>
        </div>
    )
}
export default Search;