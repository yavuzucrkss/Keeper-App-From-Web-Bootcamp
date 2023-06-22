import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    console.log(note);
    setNotes(prevNotes => {
      return [...prevNotes, note]
    })
    console.log(notes);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea _addNote={addNote} />
      {notes.map((item, index) => {
        return <Note key={index} id={index} title={item.title} content={item.content} _deleteNote={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
