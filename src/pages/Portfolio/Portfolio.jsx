import Box from "../../components/Box/Box";
import Experience from "../../components/Experience/Experience";
import Timeline from "../../components/Timeline/Timeline";
import Port from "../../components/Port/Port";

import "../../assests/styles/Portfolio.scss";
import Address from "../../components/Address/Address";
import Feedback from "../../components/Feedback/Feedback";

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

import Avatar from "../../components/Avatar/Avatar";
import Skills from "../../components/Skills/Skills";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <aside>
        {" "}
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
      </aside>

      <main className="port">
        <Box
          title="About Me"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
        />
        <Timeline title="Education" />
        <Experience title="Experience" />
        <Port title="Portfolio" />
        <Skills title="Skills" />
        <Address title="Contacts" />
        <Feedback title="Feedback" />
      </main>
    </>
  );
}
