import React, { useState } from "react";

  function CreateArea(props) {
    const [note, setNote] = useState({ title: '', content: '' });

    function handleChange(event) {
      const { name, value } = event.target;
      setNote(prevVal => {
        return {...prevVal,
        [name] : value}
    })
  }

  function submitNote(event){
    props._addNote(note);
    event.preventDefault();
    setNote({title:'',content:''})
  }


return (
  <div>
    <form>
      <input onChange={handleChange} name="title" type="text" placeholder="Title" value={note.title} />
      <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
      <button type="submit" onClick={submitNote}>Add</button>
    </form>
  </div>
);
}

export default CreateArea;
