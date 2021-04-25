import React, { useState } from "react";
import { db } from "../firebse";
import firebase from "firebase";

import ReactQuill from "react-quill"; // ES6
import "./quill.css";

const Quill = () => {
  const [body, setBody] = useState("");

  const [title, setTitle] = useState("");

  const updateDB = () => {
    db.collection("notes").add({
      body: body,
      title: title,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const updateBody = (e) => {
    setBody(e.replace(/<[^>]*>?/gm, ""));
  };
  console.log(body);

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      {/* <div className="q">
        <div className="title">
          title :{" "}
          <input className="title-input" placeholder="Add a Note Title"></input>
        </div>
        <div className="Quill">
          <div className="React-quill">
            <ReactQuill onChange={updateBody} />
          </div>
        </div>
        <div className="create-note">
          <button className="create-note-btn">
            <div onClick={updateDB}>+ Create a Note</div>
          </button>
        </div>
      </div> */}
      <div className="quillm">
        <div className="title">
          <input
            className="input-title"
            placeholder="Add a Note Title ..."
            onChange={updateTitle}
          ></input>
        </div>
        <div className="react-quill">
          <ReactQuill onChange={updateBody} />
        </div>
        <div className="create-note">
          <button className="create-note-btn" onClick={updateDB}>
            + Create a Note
          </button>
        </div>
      </div>
    </>
  );
};

export default Quill;
