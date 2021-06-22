import React,{ useState } from "react";

function CreateArea(props) {
  const[Notes,setNotes]=useState(
    {
      title: "",
      content: ""
    });

  function handleChange(event){
    const {name,value}= event.target;
     setNotes(prevNote => {
        return {...prevNote,
            [name]: value
        };
        });
      }

    function submitNote(event){
      props.onAdd(Notes);
      setNotes({
        title: "",
        content: ""
      });
      event.preventDefault();
    }
  
  return (
    <div>
      <form>
        <input name="title" value={Notes.title} placeholder="Title" onChange={handleChange} />
        <textarea name="content" value={Notes.content} placeholder="Take a note..." rows="3" onChange={handleChange} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
