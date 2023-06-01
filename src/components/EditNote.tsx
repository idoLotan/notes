import React, { useState } from "react";
import { formatDate } from "../utils";
import Button from "../styles/Button/Button";

type Note = {
  text: string;
  title: string;
  creationDate: string;
  lastUpdatedDate?: string;
  id: number;
};

type EditNoteProps = {
  note: Note | undefined;
  onSubmit: Function;
};

function EditNote({ note, onSubmit }: EditNoteProps) {
  const [draftNote, setDraftNote] = useState<Note | null>(note || null);

  const handleSubmit = () => {
    onSubmit({ ...draftNote!, lastUpdatedDate: formatDate(new Date()) });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTitle = e.currentTarget.value;
    setDraftNote({ ...draftNote!, title: updatedTitle });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedText = e.currentTarget.value;
    setDraftNote({ ...draftNote!, text: updatedText });
  };

  return (
    <div className="add-form">
      <div className="form-control">
        <input
          type="text"
          className="add-title"
          value={draftNote?.title || ""}
          onChange={handleTitleChange}
        />
        <textarea value={draftNote?.text || ""} onChange={handleTextChange} />
        <Button className="btn black" onClick={handleSubmit} text={"edit"} icon={"user"}></Button>
      </div>
    </div>
  );
}

export default EditNote;