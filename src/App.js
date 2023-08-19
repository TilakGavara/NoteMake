import NoteList from "./components/NoteList";
import { useState,useEffect } from "react";
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from "./components/Header";
function App(){
  const[notes,setNote]=useState([
    {
      id: nanoid(),
      text: "",
      date: "",
    },
  ])
  const [dark,setDark]=useState(false);
  const [searchtext,setsearch] = useState('');

  useEffect(() => {
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  }, [notes]);


  useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
      if (savedNotes) {
        setNote(savedNotes);}
      }, []);

      
  function addNote(text){
    const date=new Date();
    const newNote ={
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes=[...notes,newNote];
    setNote(newNotes);
  }
  function deletenote(id){
    const newNotes=notes.filter((note)=> note.id!==id);
    setNote(newNotes);
  }
  return(
    <div className={`${ dark && 'darkmode'}`}>
      <div className="container">
      <Header handleDark={setDark}/>
      <Search handleSearch={setsearch}></Search>
      <NoteList 
        notes={notes.filter((note)=>note.text.toLowerCase().includes(searchtext))} 
        handelNote={addNote} 
        deletenote={deletenote}/>
    </div>
    </div>
    
    
  )
}
export default App;