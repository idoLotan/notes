import React from "react";
import { useState } from "react";
import { formatDate } from "../utils";

type AddNoteProps = {onAdd: Function}

function AddNote({ onAdd }: AddNoteProps) {
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
     e.preventDefault();
    console.log("creationDate")

    if (text === "" || title === "") {
      alert("please add a text and title");
      return;
    }
    let creationDate = formatDate(new Date());
    
    onAdd({ text, creationDate, title });
  };

  return (
    <div className="add-form">
      <div className="form-control">
        <input
          className="add-title"
          placeholder="Your title..."
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      <textarea
       placeholder="Add your note here..."
       value={text}
       onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
    />

        <button  className="btn black" color={"black"} onClick={onSubmit}>Add</button>
      </div>
    </div>
  );
}

export default AddNote;
