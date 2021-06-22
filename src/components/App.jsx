import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import { createNotEmittedStatement, isConstructSignatureDeclaration } from "typescript";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(Notes) {
    setNotes((prevNotes) => {
      return [...prevNotes,Notes ];
    });
    
  }

  function deleteNote(id){
    setNotes((prevNotes)=> {
      return prevNotes.filter((note,index) =>{ 
          return index !== id;
      });
      });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      { notes.map((noteItem,index) => {
          return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
        })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
