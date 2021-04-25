import React, { useEffect, useState } from "react";
import { db } from "../firebse";
import "./allnotes.css";
import Note from "./Note";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import NotesIcon from "@material-ui/icons/Notes";

const AllNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    db.collection("notes").onSnapshot((snapshot) => {
      setNotes(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          note: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="notes">
      <div className="note-heading">
        <h3>
          <NotesIcon /> <span>Notes</span>
        </h3>
      </div>
      <div className="notelist">
        {notes.map((note) => {
          console.log(note);
          return (
            <Note
              id={note.id}
              title={note.note.title}
              body={note.note.body}
              timestamp={note.note.timestamp}
            />
          );
        })}
      </div>
    </div>
  );
};
export default AllNotes;
