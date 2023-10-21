// import "./Panel.css";
import "../../assests/styles/Panel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faUser,
  faUserGraduate,
  faPencil,
  faGem,
  faBriefcase,
  faAddressBook,
  faComment,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "../Avatar/Avatar";

function Panel() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? (
          <FontAwesomeIcon className="toggle-icon" icon={faX} />
        ) : (
          <FontAwesomeIcon className="toggle-icon" icon={faBars} />
        )}
      </button>

      {!isOpen ? (
        <Avatar className="avatar" />
      ) : (
        <Avatar className="avatar-closed" />
      )}

      <ul>
        <li>
          <FontAwesomeIcon className="icon" icon={faUser} />{" "}
          <a href="#">About Me</a>
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faUserGraduate} />
          <a href="#">Education</a>
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faPencil} />{" "}
          <a href="#">Experience</a>
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faGem} />{" "}
          <a href="#">Skills</a>
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faBriefcase} />{" "}
          <a href="#">Portfolio</a>
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faAddressBook} />
          <a href="#">Contacts</a>
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faComment} />{" "}
          <a href="#">Feedbacks</a>
        </li>
      </ul>

      <button className="goback" onClick={handleButtonClick}>
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} /> Go back
      </button>
    </div>
  );
}

export default Panel;
