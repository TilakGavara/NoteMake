import { useState } from "react";

function AddNote({handelNote}){
    const[newtext,setNew]=useState('');
    const charlimit = 200;
    function change(event){
        if(charlimit-event.target.value.length>=0){
        setNew(event.target.value);
        }
    }
    function save(){
        if(newtext.trim().length>0){
            handelNote(newtext);
            setNew('');
        }
        
    }
    return(
        <div className="note new">
            <textarea rows='8' cols='10' placeholder="type the note..." value={newtext} onChange={change}></textarea>
            <footer>
                <small>{charlimit - newtext.length}remain...</small>
                <button className="save" onClick={save}>save</button>
            </footer>
        </div>
    )
}
export default AddNote; 