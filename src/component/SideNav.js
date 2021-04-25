import "./sidenav.css";
import React, { useState } from "react";
import { useAuth } from "../context/auth";
import { useHistory } from "react-router";

const Sidenav = () => {
  const [error, setError] = useState("");
  const { currentUser, logout, profile } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("./login");
    } catch {
      setError("failed to logout");
    }
  }

  return (
    <>
      <div className="sidenav">
        <div className="profile-image"></div>
        <div className="sidenavHeading">
          <h3>Akash Patel</h3>
        </div>
        <div className="search">
          <input placeholder="search" className="search-input"></input>
        </div>
        <div>
          <button className="logout-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
