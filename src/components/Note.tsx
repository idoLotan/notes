import React from "react";

type NoteProps = {
  text: string;
  title: string;
  creationDate: string;
  lastUpdatedDate?: string;
  id: number;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const Note = ({
  onDelete,
  onEdit,
  text,
  creationDate,
  lastUpdatedDate,
  id,
  title,
}:NoteProps) => {
  return (
    <div className="note" onClick={() => onEdit(id)}>
      <h3 className="note-title">{title}</h3>
      <div className="note-text">{text}</div>
      <div className="note-date">Created: {creationDate}</div>
      {lastUpdatedDate && (
        <div className="note-date">Last Updated: {lastUpdatedDate}</div>
      )}
      <button className="note-delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Note;
