import React from "react";
import "../profile/ProfilePage.css";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineCursorClick } from "react-icons/hi";

export default function ProfilePage({ image, alt }) {
  return (
    <div className="profile-div">
      <article className="card-article">
        <h2>Front-end development</h2>
        <img src={image} alt={alt} className="card-img" />
        <div className="card-content">
          <h2>Coding is fun</h2>
          <p>When using React JS</p>
          <div className="card-footer">
            <a
              href="https://github.com/Ghibrasoft?tab=repositories"
              target="_blank"
              className="card-attr"
            >
              <AiFillGithub size={25} />
              See my projects here
              <HiOutlineCursorClick size={20} />
            </a>
          </div>
        </div>
      </article>
      <div class="circles">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
    </div>
  );
}
