import React from "react";
import Sidenav from "./component/SideNav";
import Quill from "./component/Quill";
import AllNotes from "./component/AllNotes";
import "./app.css";

export default function App1() {
  return (
    <div>
      <div className="app">
        <div className="sidenav-app">
          <Sidenav />
        </div>
        <div className="all-notes">
          <AllNotes />
        </div>
        <div className="quill-app">
          <Quill />
        </div>
      </div>
    </div>
  );
}
