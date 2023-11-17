import "./Panel.scss";
import "../../pages/Portfolio/Portfolio.scss";
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
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

function Panel({ Open }) {
  const [isOpen, setIsOpen] = useState(false);
  const educationSectionRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.style.width = Open ? "85%" : "100%";
    }
  }, [Open]);

  const scrollToEducation = () => {
    if (educationSectionRef.current) {
      educationSectionRef.current.scrollTo({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToEducation();
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <aside ref={panelRef}>
      {" "}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? (
            <FontAwesomeIcon className="toggle-icon" icon={faX} />
          ) : (
            <FontAwesomeIcon className="toggle-icon" icon={faBars} />
          )}
        </button>

        <Avatar className="avatar" />

        <ul>
          <li>
            <FontAwesomeIcon className="icon" icon={faUser} />{" "}
            <a className="route-list" href="/about">
              About Me
            </a>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faUserGraduate} />
            <a className="route-list" href="#">
              Education
            </a>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faPencil} />{" "}
            <a className="route-list" href="/experience">
              Experience
            </a>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faGem} />{" "}
            <a className="route-list" href="/skills">
              Skills
            </a>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faBriefcase} />{" "}
            <a className="route-list" href="portfolio">
              Portfolio
            </a>
          </li>
          <li onClick={scrollToEducation}>
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <a className="route-list">Contacts</a>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faComment} />{" "}
            <a className="route-list" href="feedbacks">
              Feedbacks
            </a>
          </li>
        </ul>

        <button className={"goback"} onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faArrowLeft} />{" "}
          <span className="text-goback">Go back</span>
        </button>
      </div>
    </aside>
  );
}

export default Panel;
