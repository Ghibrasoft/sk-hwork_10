import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../navigation/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="title" onClick={() => navigate("/")}>
          Simple
          <span className="title-span">Portfoglio</span>
        </h1>
        <div className="nav-btns">
          <Link to={"/"}>
            <button className="nav-btn">Home</button>
          </Link>
          <Link to={"/profile"}>
            <button className="nav-btn">Profile</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
