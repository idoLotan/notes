import Note from "./Note";


  interface NoteData {
    text: string;
    title: string;
    creationDate: string;
    lastUpdatedDate?: string;
    id: number;
  }

  type NotesProps  = {
    notes: NoteData[];
    onDelete: (id: number) => void;
    onEdit:(id: number) => void;
  }

  const Notes = ({
    notes, onEdit, onDelete
  }: NotesProps)  => {
    return (
      <div className="notes">
        {notes.map((note) => (
          <Note
            onEdit={onEdit}
            onDelete={onDelete}
            text={note.text}
            title={note.title}
            creationDate={note.creationDate}
            lastUpdatedDate={note.lastUpdatedDate}
            id={note.id}
          />
        ))}
      </div>
    );
  };
  
  export default Notes;
  