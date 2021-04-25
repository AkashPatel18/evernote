import React, { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { db } from "../firebse";
import "./note.css";

const Note = (props) => {
  console.log("props", props);
  const deleteNote = () => {
    db.collection("notes")
      .doc(props.id)
      .delete()
      .then(() => {
        console.log("note deleted");
      });
  };

  return (
    <div
      className="note"
      style={{
        background: "white",
        padding: "1rem",
        // border: "1px solid black",
        margin: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <div style={{ marginLeft: "80%", cursor: "pointer" }}>
        <DeleteIcon className="d-icon" onClick={deleteNote} />
      </div>
      <h3>{props.title}</h3>
      {/* <p>{props.timestamp.nanoseconds}</p> */}
      <p
        style={{
          color: "#4d4d4d",
        }}
      >
        {props.body}
      </p>
    </div>
  );
};

export default Note;
