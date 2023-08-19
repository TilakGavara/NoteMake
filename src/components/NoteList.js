import Note from './Note';
import AddNote from './AddNote';
import React from 'react';
function NoteList({notes,handelNote,deletenote}){
    return(
        <div className="notelist">
            {
            notes.map((note)=> 
            (<Note key={note.id}
                 text={note.text} 
                 date={note.date} 
                 deletenote={deletenote} />)
            )
            }
            <AddNote handelNote={handelNote}/>
        </div>
    );
}
export default NoteList;