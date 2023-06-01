
import { useState } from "react";
import Notes from "../components/Notes";
import AddNote from "../components/AddNote";
import Heading from "../components/Heading";
import Modal from "../components/Modal";
import EditNote from "../components/EditNote";

interface Note {
    text: string;
    title: string;
    creationDate: string;
    lastUpdatedDate?: string;
    id: number;
  }

const Home = () => {
    const [notes, setNotes] = useState<Note[]>([]);;
  const [currentEditedNoteId, setCurrentEditedNoteId] = useState<number>();
  

  const currentEditedNote  = notes.find(
    (note:{id :number} ) => note.id === currentEditedNoteId
  );
  const closeModal = () => setCurrentEditedNoteId(undefined);

  const addNote = (note: Note) => {
    const id = Math.floor(Math.random() * 1000);
    const { id: _, ...restNote } = note; // Destructure 'id' from note object
    const newNote = { id, ...restNote }; // Spread rest of note object without 'id' into newNote
    setNotes([...notes, newNote]);
  };
  const deleteNote = (id : number) => {
    if (window.confirm("are you sure you want to delete this note?") == true) {
    } else {
      return;
    }
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (updatedNote :Note) => {
    setNotes(
      notes.map((note) => {
        if (note.id === updatedNote.id) {
          return updatedNote;
        }
        return note;
      })
    );
    closeModal();
  };

  return (
    <div className="home">
      <Heading title="notes app"></Heading> 
      <AddNote onAdd={addNote} />
      <Notes
        notes={notes}
        onDelete={deleteNote}
        onEdit={setCurrentEditedNoteId}
      />
      <Modal isShowing={Boolean(currentEditedNote)} onClose={closeModal}>
        <EditNote note={currentEditedNote} onSubmit={editNote} />
      </Modal>
    </div>
  );
};

export default Home;
