import React from "react";
import "../footer/Footer.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-footer">
        <a href="https://gmail.com/" target="_blank">
          Gmail <MdOutlineEmail size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/david-ghibradze-929023247/"
          target="_blank"
        >
          LinkedIn <BsLinkedin size={30} />
        </a>
      </div>
      <p>&copy; Created by Ghibrasoft.</p>
    </footer>
  );
}
