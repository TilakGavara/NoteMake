import { MdDeleteForever } from 'react-icons/md';
function Note({id,text,date,deletenote}){
    return(
        <div className="note">
            <header>{text}</header>
            <footer>
                <small>{date}</small>
                <MdDeleteForever onClick={()=>deletenote(id)}/>
            </footer>
        </div>
    )
}
export default Note;