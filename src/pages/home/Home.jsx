import React from "react";
import "../home/Home.css";

export default function Home() {
  return (
    <div className="home-div">
      <div className="welcome-div">
        <h1>Welcome</h1>
        <h3>
          I'm <span className="name">David Ghibradze</span>
        </h3>
        <p>Front-end developer</p>
      </div>
    </div>
  );
}
